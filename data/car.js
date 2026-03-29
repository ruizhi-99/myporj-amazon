class Car {
    #brand;
    #model;
    speed = 0;
    isTrunkOpen = false;
    constructor(carDetails) {
        this.#brand = carDetails.brand;
        this.#model = carDetails.model;
    }

    displayInfo() {
        console.log(`${this.#brand} ${this.#model} Speed: ${this.speed} km/h Trunk: ${this.isTrunkOpen}`)
    }

    go() {
        this.speed += 5;
        if (!this.isTrunkOpen) {
            this.speed += 5
        }
        if (this.speed > 200) {
            this.speed = 200;
        }

    }

    brake() {
        this.speed -= 5;
        if (this.speed < 0) {
            this.speed = 0;
        }
    }

    OpenTrunk() {
        if (this.speed === 0) {
            this.isTrunkOpen = true;
        }
    }
    CloseTrunk() {
        this.isTrunkOpen = false;

    }

};

class RaceCar extends Car {
    acceleration;
    constructor(carDetails) {
        super(carDetails);
        this.acceleration = carDetails.acceleration
    }
    go() {
        this.speed += this.acceleration;
        if (this.speed > 300) {
            this.speed = 300;
        }
    }
    OpenTrunk() {
        console.log("No trunk")
    }
    CloseTrunkTrunk() {
        console.log("No trunk")
    }
}
const car1 = new Car({
    brand: 'Toyota',
    model: 'Vios'
})

const car2 = new Car({
    brand: 'Proton',
    model: 'Saga'
})

const r_car = new RaceCar({
    brand: 'Mclaren',
    model: 'F1',
    acceleration: 20
})

car1.go();
car1.go();
car1.brake();
car2.OpenTrunk();


car2.go();
car2.brake();
car2.OpenTrunk();

r_car.go();
r_car.displayInfo();


car1.displayInfo();
car2.displayInfo();
