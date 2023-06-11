{
    //Task 1 

    let someText = document.getElementById("taskOne")
    someText.addEventListener("click", () => {
        someText.style.color = "red";
        someText.style.fontSize = "50px";
        someText.style.marginLeft = "auto";
        someText.style.marginRight = "auto"
        someText.style.width = "300px"
    })
}

{
    //Task 2 

    let taskButton = document.getElementById("taskButton")
    taskButton.style.position = "absolute";
    taskButton.style.marginTop = '0'
    taskButton.style.marginLeft = '0'

    let isButtonMoved = false;

    taskButton.addEventListener("click", (event) => {
        event.preventDefault();
        if (isButtonMoved) {
            taskButton.style.position = "absolute";
            taskButton.style.marginTop = '0'
            taskButton.style.marginLeft = '0'
        } else {
            taskButton.style.position = "absolute";
            taskButton.style.marginTop = '100%'
            taskButton.style.marginLeft = '100%'
            taskButton.style.marginBottom = '0'
            taskButton.style.marginRight = '0'
        }

        isButtonMoved = !isButtonMoved;

    })
}