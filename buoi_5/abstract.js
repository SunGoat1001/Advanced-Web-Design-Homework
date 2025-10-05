class Car {
    #engineOn;
    #speed;

    constructor(brand) {
        this.brand = brand;
        this.#engineOn = false;
        this.#speed = 0;
    }

    start() {
        if (!this.#engineOn) {
            this.#engineOn = true;
            console.log(`${this.brand} đã khởi động động cơ.`);
        } else {
            console.log(`${this.brand} đã bật sẵn động cơ.`);
        }
    }

    accelerate(amount) {
        if (this.#engineOn) {
            if (amount > 0) {
                this.#speed += amount;
                console.log(`${this.brand} tăng tốc thêm ${amount} km/h. Tốc độ hiện tại: ${this.#speed} km/h`);
            }
        } else {
            console.log("Không thể tăng tốc vì xe chưa khởi động!");
        }
    }

    stop() {
        if (this.#engineOn) {
            this.#speed = 0;
            this.#engineOn = false;
            console.log(`${this.brand} đã tắt máy.`);
        } else {
            console.log(`${this.brand} đã tắt máy từ trước.`);
        }
    }

    getCurrentSpeed() {
        return "Tốc độ hiện tại: " + this.#speed + " km/h";
    }
}


const myCar = new Car("Lamborghini");
myCar.accelerate(20);          // Lỗi logic → xe chưa khởi động
myCar.start();
myCar.accelerate(80);
myCar.accelerate(40);
console.log(myCar.getCurrentSpeed());
myCar.stop();

// console.log(myCar.#speed);   // Lỗi: không thể truy cập trường private
