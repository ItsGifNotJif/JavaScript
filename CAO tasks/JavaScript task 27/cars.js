export function carsArray(app) {
    const carBrands = ['Toyota', 'Ford', 'Honda', 'BMW', 'Mercedes-Benz'];

    let generateList = document.createElement("ul")

    carBrands.map(car => {
        let listElement = document.createElement("li");
        listElement.innerHTML = car;
        generateList.appendChild(listElement);
    });

    app.appendChild(generateList)
}