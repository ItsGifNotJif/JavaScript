{
    //Task Two


    class Car {
        constructor(brand, model, mileage, price, image) {
            this.brand = brand;
            this.model = model;
            this.mileage = mileage;
            this.price = price;
            this.image = image;
        }
        addInfo() {
            const card = document.createElement("div");
            card.className = "card";
            card.addEventListener("click", () => alert(`Price: ${this.price}`))

            const img = document.createElement("img");
            img.src = this.image;

            const text = document.createElement("h3");
            text.innerText = `${this.brand} ${this.model}`

            card.append(img, text);
            document.getElementById("taskTwoResult").append(card);

        }
    }

    document.querySelector("form").addEventListener("submit", (evemt) => {
        event.preventDefault();
        let brand = document.getElementById("brand").value;
        let model = document.getElementById("model").value;
        let mileage = document.getElementById("mileage").value;
        let price = document.getElementById("price").value;
        let image = document.getElementById("imageLink").value;
        let taskTwoResultField = document.getElementById("taskTwoResult");

        const car = new Car(brand, model, mileage, price, image);
        car.addInfo()
    })


}