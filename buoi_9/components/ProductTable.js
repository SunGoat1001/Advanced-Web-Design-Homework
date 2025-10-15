function renderProductTable(products, onEdit, onDelete) {
    const tbody = document.querySelector('#productTable tbody');
    tbody.innerHTML = '';
    products.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${item.id}</td>
            <td><img src="${item.img}" alt="" style="width: 50px; height: 50px; object-fit: cover;"></td>
            <td>${item.name}</td>
            <td>$${item.price}</td>
            <td>
                <button class="editBtn" data-id="${item.id}">Sửa</button>
                <button class="deleteBtn" data-id="${item.id}">Xoá</button>
            </td>`;
        tbody.appendChild(row);
    });
    // Sự kiện edit/delete
    tbody.querySelectorAll('.editBtn').forEach(btn => {
        btn.onclick = () => onEdit(btn.getAttribute('data-id'));
    });
    tbody.querySelectorAll('.deleteBtn').forEach(btn => {
        btn.onclick = () => onDelete(btn.getAttribute('data-id'));
    });
}
