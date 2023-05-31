{
    //task one 

    let isLegalAge = false;
    console.log(isLegalAge)

    let isLegalAgeString = isLegalAge.toString()
    console.log(isLegalAgeString)
}

{
    //Task two

    let milkPrice = 3.021

    if (Number.isInteger(milkPrice)) {
        console.log("You wont need cents")
    } else {
        console.log("You'll need cents")
    }

    //Task three

    let sugarPrice = 2.42;

    if (Number.isInteger(sugarPrice)) {
        console.log(`You won't need cents, price is ${sugarPrice.toFixed(2)}`)
    } else {
        console.log(`You'll need cents, price is ${sugarPrice.toFixed(2)}`)
    }

    let submitEvent = document.getElementById("fuelPriceCalc")
    submitEvent.addEventListener("submit", calcFuel)

    let h1Result = document.createElement("h1");
    h1Result.textContent = "";


    function calcFuel(event) {
        event.preventDefault();
        let fuelPrice = document.querySelector("input[name=fuelPrice]").value;
        let fuelAmount = document.querySelector("input[name=fuelAmount").value;

        let priceCalculation = (fuelPrice * fuelAmount).toFixed(2)

        h1Result.textContent = priceCalculation + " €";
        h1Result.style.fontSize = "30px"
        h1Result.style.color = "black"

        submitEvent.appendChild(h1Result)

    }
}