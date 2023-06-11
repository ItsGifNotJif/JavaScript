{
    //Task 4

    let textInputField = document.querySelector("input[name=textInput]")
    textInputField.addEventListener("input", changeStyle)

    let styleOfBody = document.querySelector("body")
    styleOfBody.style.backgroundColor = "red"

    function changeStyle(event) {
        event.preventDefault();
        let inputArray = textInputField.value.split("")
        console.log(inputArray)
        if (inputArray.length <= 2) {
            styleOfBody.style.backgroundColor = "red"
        } else {
            styleOfBody.style.backgroundColor = "green"
        }
    }
}