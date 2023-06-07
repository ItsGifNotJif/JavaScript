{
    class Car {
        constructor(brand, model, engine, price) {
            this.brand = brand;
            this.model = model
            this.engine = engine;
            this.basePrice = price;
        }
        turnOn = function () {
            alert("Vroom")
        }
        getPrice = function () {
            if (this.engine === "electric") {
                return this.basePrice + 10000;
            } else if (this.engine === "diesel") {
                return this.basePrice + 5000
            } else {
                return this.basePrice
            }

        }
    }

    const car1 = new Car("BMW", "M3", "diesel", 10000)
    const car2 = new Car("Mercedes", "Cube", "electric", 10000)

    console.log(car1.basePrice)
    console.log(car2.getPrice())
}