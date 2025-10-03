const container = document.getElementById('container');

for (let i = 0; i <= 5; i++) {
    for (let j = 0; j < 10; j++) {
        if (i % 2 == 0) {
            container.innerHTML += '<div class="square1"></div>';
        } else {
            container.innerHTML += '<div class="square2"></div>';
        }
    }
    container.innerHTML += '<div style="clear:both;"></div>';
}