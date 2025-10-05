// Hàm tính diện tích và chu vi sử dụng Promise
function calculateRectangle(length, width) {
    return new Promise((resolve, reject) => {
        // Mô phỏng thời gian xử lý
        setTimeout(() => {
            // Kiểm tra input hợp lệ
            if (length <= 0 || width <= 0) {
                reject(new Error('Chiều dài và chiều rộng phải lớn hơn 0'));
                return;
            }

            if (isNaN(length) || isNaN(width)) {
                reject(new Error('Vui lòng nhập số hợp lệ'));
                return;
            }

            // Tính toán
            const area = length * width;
            const perimeter = 2 * (length + width);

            // Trả về kết quả
            resolve({
                area: area,
                perimeter: perimeter,
            });
        }, 1000); // Delay 1 giây để hiển thị loading
    });
}

// Hàm hiển thị kết quả
function displayResult(data) {
    const resultDiv = document.getElementById('result');
    const resultContent = document.getElementById('resultContent');

    resultContent.innerHTML = `
        <h3>Kết quả:</h3>
        <p><strong>Diện tích:</strong> ${data.area.toFixed(2)} m²</p>
        <p><strong>Chu vi:</strong> ${data.perimeter.toFixed(2)} m</p>
    `;

    resultDiv.className = 'result show';
}

// Hàm hiển thị lỗi
function displayError(error) {
    const resultDiv = document.getElementById('result');
    const resultContent = document.getElementById('resultContent');

    resultContent.innerHTML = `
        <h3>Lỗi:</h3>
        <p>${error.message}</p>
    `;

    resultDiv.className = 'result show error';
}

// Hàm hiển thị loading
function showLoading() {
    const resultDiv = document.getElementById('result');
    const resultContent = document.getElementById('resultContent');

    resultContent.innerHTML = `
        <div class="loading">
            <h3>Đang tính toán...</h3>
            <p>Vui lòng đợi trong giây lát...</p>
        </div>
    `;

    resultDiv.className = 'result show';
}

// Hàm ẩn kết quả
function hideResult() {
    const resultDiv = document.getElementById('result');
    resultDiv.className = 'result';
}

// Xử lý sự kiện submit form
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('rectangleForm');
    const calculateBtn = document.getElementById('calculateBtn');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const length = parseFloat(document.getElementById('length').value);
        const width = parseFloat(document.getElementById('width').value);

        // Disable button và hiển thị loading
        calculateBtn.disabled = true;
        calculateBtn.textContent = 'Đang tính...';
        showLoading();

        // Sử dụng Promise để tính toán
        calculateRectangle(length, width)
            .then(result => {
                // Xử lý khi Promise resolve thành công
                displayResult(result);
                console.log('Tính toán thành công:', result);
            })
            .catch(error => {
                // Xử lý khi Promise reject (có lỗi)
                displayError(error);
                console.error('Lỗi tính toán:', error);
            })
            .finally(() => {
                // Code này luôn chạy dù Promise resolve hay reject
                calculateBtn.disabled = false;
                calculateBtn.textContent = 'Tính toán';
            });
    });

    // Reset kết quả khi người dùng thay đổi input
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
        input.addEventListener('input', hideResult);
    });
});

// Thêm Promise chain để xử lý nhiều tính toán liên tiếp (demo)
function calculateMultipleRectangles(rectangles) {
    return new Promise((resolve) => {
        let results = [];
        let promises = rectangles.map(rect =>
            calculateRectangle(rect.length, rect.width)
        );

        Promise.all(promises)
            .then(allResults => {
                resolve(allResults);
            })
            .catch(error => {
                console.error('Lỗi trong tính toán hàng loạt:', error);
            });
    });
}

// Ví dụ sử dụng async/await với Promise
async function calculateWithAsyncAwait(length, width) {
    try {
        showLoading();
        const result = await calculateRectangle(length, width);
        displayResult(result);
        return result;
    } catch (error) {
        displayError(error);
        throw error;
    }
}