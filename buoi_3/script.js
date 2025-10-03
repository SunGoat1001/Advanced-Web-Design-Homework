
const grid = document.getElementById('productsGrid');
const navLinks = document.querySelectorAll('nav ul li a');
const title = document.getElementById('title');

function renderProducts(products) {
    grid.innerHTML = products.map(product => `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <h3 class="product-name">${product.name} - ${product.id}</h3>
                <p class="product-price">
                    <span class="new-price">${product.newPrice.toLocaleString()}đ</span>
                    <span class="old-price">${product.oldPrice.toLocaleString()}đ</span>
                </p>
                <button class="buy-btn">Mua ngay</button>
            </div>
        `).join('');
}

// Tự động chọn Trang Chủ khi load
navLinks.forEach(link => link.classList.remove('active'));
navLinks[0].classList.add('active');
renderProducts([...womenClothes, ...menClothes]);

// Sự kiện click cho menu
navLinks[1].addEventListener('click', function (e) {
    e.preventDefault();
    navLinks.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
    renderProducts(menClothes);
    title.textContent = 'Thời Trang Nam';
});
navLinks[0].addEventListener('click', function (e) {
    e.preventDefault();
    navLinks.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
    renderProducts([...womenClothes, ...menClothes]);
    title.textContent = 'Trang Chủ';
});
navLinks[2].addEventListener('click', function (e) {
    e.preventDefault();
    navLinks.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
    renderProducts(womenClothes);
    title.textContent = 'Thời Trang Nữ';
});