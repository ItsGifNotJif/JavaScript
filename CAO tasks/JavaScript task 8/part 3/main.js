{
    //Part 5

    let randomNumberGenerated = Math.floor(Math.random() * (6 - 1) + 1)

    let numberInputForm = document.getElementById('guessInputForm')
    numberInputForm.addEventListener("submit", alertNumber)

    let timesClicked = 0;   //Part 6

    let inputValueField = document.querySelector("input[name=numberGuessInput]")

    function alertNumber(event) {
        event.preventDefault();
        timesClicked++;   //Part 6
        let guessedNumber = inputValueField.value;
        if (guessedNumber == randomNumberGenerated) {
            window.alert(`You've guessed in ${timesClicked} attempts`)
        } else {
            window.alert("You didn't guess")
        }

    }

}

