{
    //Task 1
    let submitEvent = document.getElementById("repeatEvent")
    submitEvent.addEventListener("submit", checkOrRepeat)

    let resultText = document.createElement("h1");

    function checkOrRepeat(event) {
        event.preventDefault();
        resultText.innerHTML = "";

        let wordInput = document.querySelector("input[name=personName]").value;
        let numberInput = parseFloat(document.querySelector("input[name=repeatNumber]").value);
        if (Number.isInteger(numberInput)) {
            for (let i = 0; i < numberInput; i++) {
                resultText.innerHTML += i + ". " + wordInput + '<br>';
            }
        } else {
            window.alert("Not a whole number")
        }

        submitEvent.append(resultText)
    }
}

{
    //Task 2

    let nameSubmit = document.getElementById('alertName')
    nameSubmit.addEventListener("submit", calcLong)

    let nameInputValue = document.querySelector("input[name=inputName]");

    function calcLong(event) {
        event.preventDefault();
        let nameArray = [nameInputValue.value];
        let arrayLength = nameArray[0].length
        window.alert(`Your name is ${arrayLength} characters long`)
    }
}

{
    //Task 3

    let splitNameForm = document.getElementById("splitName")
    splitNameForm.addEventListener("submit", addnames)

    let inputField = document.querySelector("input[name=personInput]")

    let parentDiv = document.getElementById("finalContainer")

    function addnames(event) {
        event.preventDefault();
        let personArray = [inputField.value]
        let splitArray = personArray[0].split(" ")
        let personName = splitArray[0]
        let personSurname = splitArray.slice(1).join(" ")

        let nameElement = document.createElement("h1")
        nameElement.style.color = "black";
        nameElement.style.fontSize = "25px"
        nameElement.textContent = personName;
        let surnameElement = document.createElement("h1")
        surnameElement.style.color = "black";
        surnameElement.style.fontSize = "25px"
        surnameElement.textContent = personSurname;

        parentDiv.appendChild(nameElement)
        parentDiv.appendChild(surnameElement)
    }
}