{
    //Part 1

    let bonusFormField = document.getElementById("bonusForm")
    bonusFormField.addEventListener("submit", bonusCalculator)
    let personAgeField = document.querySelector("input[name=age]")
    let h1TextField = document.getElementById("resultsField")
    let regularbonus = 50;
    let tenYearBonus = 50;
    let twentyYearBonus = 100;


    function bonusCalculator(event) {
        event.preventDefault();
        let personAge = personAgeField.value;
        if (personAge <= 10) {
            h1TextField.textContent = "You get a bonus of: " + regularbonus + "e"
        } else if (personAge >= 10 && personAge < 20) {
            h1TextField.textContent = "You get a bonus of: " + (regularbonus + tenYearBonus) + "e"
        } else if (personAge >= 20) {
            h1TextField.textContent = "You get a bonus of: " + (regularbonus + tenYearBonus + twentyYearBonus) + "e"
        } else {
            h1TextField.textContent = "You don't get anything"
        }
    }

}

{
    //Part 2
    let yearsFormField = document.getElementById("yearsForm")
    yearsFormField.addEventListener("submit", leapCalculation)

    let currentYearField = document.querySelector("input[name=years]");

    let h1YearField = document.getElementById("currentYearDays")

    let regularYear = 365;
    let leapYear = 366;

    function leapCalculation(event) {
        event.preventDefault();
        let currentYear = currentYearField.value;
        if (currentYear % 4 === 0 && currentYear % 100 !== 0 || currentYear % 400 === 0) {
            h1YearField.textContent = "Current year has " + leapYear + " days"
        } else {
            h1YearField.textContent = "Current year has " + regularYear + " days"
        }
    }
}

{
    //Part 3
    let temperatureField = document.getElementById("temperatureForm")
    temperatureField.addEventListener("submit", celsiusConverter)

    let h1tempResultField = document.getElementById("tempFahnrenheit")
    let tempInCelsius = document.querySelector("input[name=temp]")

    function celsiusConverter(event) {
        event.preventDefault();
        let celsius = tempInCelsius.value;
        let fahrenheit = (celsius * 9 / 5) + 32;
        h1tempResultField.textContent = fahrenheit + "°F"
    }

}

{
    //Part 4
    let registrationForm = document.getElementById("registrationForm")
    registrationForm.addEventListener("submit", failsafeEmail)

    let h1RegistrationStatusField = document.getElementById("registrationStatus")
    let emailInputField = document.querySelector("input[name=yourEmail]")

    let newsRadioButton = document.getElementById("newsletter")

    function failsafeEmail(event) {
        event.preventDefault();
        if (newsRadioButton.checked) {
            h1RegistrationStatusField.textContent = `Your email has ${emailInputField.value} been registered`
        } else {
            h1RegistrationStatusField.textContent = "Your registration failed"
        }
        let emailInputValue = emailInputField.value;
        console.log(emailInputValue)
    }
}

{
    //Part 5
    let listItemForm = document.getElementById("listItemForm")
    listItemForm.addEventListener("submit", listItems)

    let listItemNumber = document.querySelector("input[name=listItemAmount]")
    let personName = document.querySelector("input[name=personName]")
    let listElement = document.getElementById("listOfElements")

    function listItems(event) {
        event.preventDefault();
        let x = listItemNumber.value;
        listElement.innerHTML = '';

        for (i = 0; i < x; i++) {
            let li = document.createElement("li")
            li.textContent = `${(i + 1) + "."}  ${personName.value}`
            listElement.appendChild(li)
        }
    }
}

{
    //Part 6
    let triangleInput = document.getElementById("triangleInput")
    triangleInput.addEventListener("submit", paintShape)

    let shapeSize = document.querySelector("input[name=sizeInput]")
    let triangleFillerShape = "*"
    let triangleResultDiv = document.getElementById("resultingTriangle")


    function paintShape(event) {
        event.preventDefault();
        triangleResultDiv.innerHTML = ""; 
        let shape = "";
        for (let i = 0; i < shapeSize.value; i++) {
          shape += triangleFillerShape.repeat(i + 1); // Repeat the asterisk based on the current iteration
          shape += "<br>"; // Add a line break using the <br> tag
        }
        triangleResultDiv.innerHTML += shape + "<br>";
    }
}