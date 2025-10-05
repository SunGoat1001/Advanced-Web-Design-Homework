class Vehicle {
    start() {
        throw new Error("Phải override phương thức start()");
    }
}

class GasCar extends Vehicle {
    constructor(brand) {
        super();
        this.brand = brand;
    }

    start() {
        console.log(`${this.brand}: Khởi động bằng chìa khóa và nổ máy xăng`);
    }
}

class ElectricCar extends Vehicle {
    constructor(brand) {
        super();
        this.brand = brand;
    }

    start() {
        console.log(`${this.brand}: Bấm nút khởi động, xe chạy êm không tiếng động`);
    }
}

class HybridCar extends Vehicle {
    constructor(brand) {
        super();
        this.brand = brand;
    }

    start() {
        console.log(`${this.brand}: Khởi động bằng mô-tơ điện, sau đó chuyển qua động cơ xăng khi cần`);
    }
}

const vehicles = [
    new GasCar("Toyota"),
    new ElectricCar("Tesla"),
    new HybridCar("Prius"),
];

vehicles.forEach(v => {
    v.start();
});
