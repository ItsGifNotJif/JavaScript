{
    //Part 3 
    let blurEventFocusField = document.querySelector("input[name=personNameInput]");
    blurEventFocusField.addEventListener("blur", enterNames);

    let resultOutput = document.querySelector("h1.nameOutput");

    function enterNames(event) {
        event.preventDefault();
        resultOutput.textContent = "";
        let inputNamesArray = blurEventFocusField.value.split(" ");
        resultOutput.textContent = inputNamesArray.join(", ");
    }

}

{
    //Part 4 
    let numberEventField = document.getElementById("numberForm")
    numberEventField.addEventListener("submit", comparisonEvent)

    let resultField = document.querySelector(".resultField")
    let targetNumber = 100;


    function comparisonEvent(event) {
        event.preventDefault();
        let numberOneField = document.querySelector("input[name=numberOne]");
        let numberOne = parseFloat(numberOneField.value);
        let numberTwoField = document.querySelector("input[name=numberTwo]");
        let numberTwo = parseFloat(numberTwoField.value);

        let closestNumber = findClosest(numberOne, numberTwo);
        resultField.textContent = closestNumber;
    }



    function findClosest(numberOne, numberTwo) {
        let test1 = Math.abs(targetNumber - numberOne);
        let test2 = Math.abs(targetNumber - numberTwo);

        if (test1 < test2) {
            return numberOne;
        } else {
            return numberTwo;
        }
    }
}
