function showProductForm(product, onSave, onCancel) {
    const modal = document.getElementById('productFormModal');
    modal.style.display = 'flex';
    document.getElementById('formTitle').innerText = product ? 'Sửa sản phẩm' : 'Thêm sản phẩm';
    document.getElementById('productId').value = product?.id || '';
    document.getElementById('productImg').value = product?.img || '';
    document.getElementById('productName').value = product?.name || '';
    document.getElementById('productPrice').value = product?.price || '';
    document.getElementById('productForm').onsubmit = function (e) {
        e.preventDefault();
        const id = document.getElementById('productId').value;
        const img = document.getElementById('productImg').value;
        const name = document.getElementById('productName').value;
        const price = document.getElementById('productPrice').value;
        onSave({ id, img, name, price });
        modal.style.display = 'none';
    };
    document.getElementById('cancelProductBtn').onclick = function () {
        modal.style.display = 'none';
        if (onCancel) onCancel();
    };
}
