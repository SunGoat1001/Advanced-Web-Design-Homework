function calculatePerimeter(length, width, callback) {
    const perimeter = 2 * (length + width);
    callback(perimeter);
}

function calculateArea(length, width, callback) {
    const area = length * width;
    callback(area);
}

function handlePerimeterResult(result) {
    document.getElementById("perimeterResult").innerText =
        `Chu vi hình chữ nhật là: ${result}`;
}

function handleAreaResult(result) {
    document.getElementById("areaResult").innerText =
        `Diện tích hình chữ nhật là: ${result}`;
}

function displayResault() {
    document.getElementById("result").style.display = "block";
}

function runCalculation() {
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);

    calculatePerimeter(length, width, handlePerimeterResult);
    calculateArea(length, width, handleAreaResult);
    displayResault();
}