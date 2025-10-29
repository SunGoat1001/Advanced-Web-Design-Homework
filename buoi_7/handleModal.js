// Sự kiện nút thêm sản phẩm
document.getElementById('addProductBtn').onclick = function () {
    showProductForm();
};

// Sự kiện submit form
window.onload = function () {
    const $form = document.getElementById("productFormModal");

    let image = null;

    handleImageChange(imageInfo => {
        image = {
            ...imageInfo,
            content: imageInfo.content.split('base64,')[1]
        };
    });

    $form.addEventListener("submit", (event) => {
        event.preventDefault();
        const id = document.getElementById('productId').value;
        const name = document.getElementById('productName').value;
        const price = document.getElementById('productPrice').value;
        const data = { name, price }

        // if (!image) {
        //     alert('Image is empty, please select or paste');
        //     return;
        // }
        alert("Đang xử lý, xin vui lòng chờ đợi....");

        if (id) {
            if (image) {
                uploadImage(image).then(res => {
                    console.log('res', res);
                    const img = res.content.html_url + "?raw=true";
                    data.img = img;

                    if (res.message) {
                        return alert(res.message);
                    }

                    updateDataInAPI(apiURL, id, data, function (err) {
                        if (err) {
                            alert('Lỗi khi cập nhật!');
                        } else {
                            alert('Cập nhật sản phẩm thành công!');
                        }
                        hideProductForm();
                        refreshTable();
                    });
                });
            } else {
                console.log("concac gif day?")
                data.img = document.querySelector(".img img").src
                updateDataInAPI(apiURL, id, data, function (err) {
                    if (err) {
                        alert('Lỗi khi cập nhật!');
                    } else {
                        alert('Cập nhật sản phẩm thành công!');
                    }
                    hideProductForm();
                    refreshTable();
                });
            }
        } else {
            // 获取图片信息
            uploadImage(image).then(res => {
                const img = res.content.html_url + "?raw=true";
                data.img = img;
                if (res.message) {
                    return alert(res.message);
                }

                addDataToAPI(apiURL, data, function (err) {
                    if (err) {
                        alert('Lỗi khi thêm!');
                    } else {
                        alert('Thêm sản phẩm thành công!');
                    }
                    hideProductForm();
                    refreshTable();
                });

                console.log('res', res);
            })
        }
    });
};

// Sự kiện click vào dòng table để mở form và điền dữ liệu
document.getElementById('productTable').onclick = function (e) {
    const tr = e.target.closest('tr');
    if (!tr || tr.querySelector('th')) return;
    const id = tr.children[0].innerText;
    const product = products.find(p => p.id == id);
    if (product) showProductForm(product);
};

// Sự kiện click vào nút xoá
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('deleteBtn')) {
        const id = e.target.getAttribute('data-id');
        showDeleteModal(id);
    }
});

// Sự kiện xác nhận xoá
document.getElementById('confirmDeleteBtn').onclick = function () {
    if (deleteId) {
        deleteDataFromAPI(apiURL, deleteId, function (err) {
            if (err) {
                alert('Lỗi khi xoá!');
            } else {
                alert('Xoá sản phẩm thành công!');
            }
            hideDeleteModal();
            refreshTable();
        });
    }
};
document.getElementById('cancelDeleteBtn').onclick = hideDeleteModal;

// Sự kiện huỷ form
document.getElementById('cancelProductBtn').onclick = hideProductForm;

// Hiển thị form thêm/sửa
function showProductForm(product) {
    document.getElementById('productFormModal').style.display = 'flex';
    if (product) {
        document.getElementById('formTitle').innerText = 'Sửa sản phẩm';
        document.getElementById('productId').value = product.id;
        insertImage(product.img);
        document.getElementById('productName').value = product.name || '';
        document.getElementById('productPrice').value = product.price || '';
    } else {
        document.getElementById('formTitle').innerText = 'Thêm sản phẩm';
        document.getElementById('productId').value = '';
        document.getElementById('productName').value = '';
        document.getElementById('productPrice').value = '';
    }
}

function hideProductForm() {
    document.getElementById('productFormModal').style.display = 'none';
}

function showDeleteModal(id) {
    hideProductForm();

    deleteId = id;
    document.getElementById('confirmDeleteModal').style.display = 'flex';
}
function hideDeleteModal() {
    deleteId = null;
    document.getElementById('confirmDeleteModal').style.display = 'none';
}