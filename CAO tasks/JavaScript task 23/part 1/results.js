// Page 2 - resultspage.html

document.addEventListener("DOMContentLoaded", fetchCars);

function renderResultsTable(cars) {
    let resultsTable = document.createElement("table");
    resultsTable.name = "resultsTableCar";
    resultsTable.classList.add("table");

    let headerNameRow = document.createElement("tr");
    let brandHeader = document.createElement("th");
    let modelHeader = document.createElement("th");

    brandHeader.textContent = "Brand";
    modelHeader.textContent = "Model";

    headerNameRow.append(brandHeader);
    headerNameRow.append(modelHeader);
    resultsTable.append(headerNameRow);

    cars.forEach((car) => {
        const brand = document.createElement("td");
        const model = document.createElement("td");

        brand.innerText = car.brand;
        model.innerText = car.model;

        const dataRow = document.createElement("tr");
        dataRow.append(brand, model);
        resultsTable.append(dataRow);
    });

    document.getElementById("resultsDiv").innerHTML = "";
    document.getElementById("resultsDiv").appendChild(resultsTable);
}

function fetchCars() {
    fetch("https://olive-bead-glazer.glitch.me/")
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Failed to fetch cars");
            }
        })
        .then((data) => {
            renderResultsTable(data);
        })
        .catch((error) => {
            console.error("Error occurred", error);
        });
}

