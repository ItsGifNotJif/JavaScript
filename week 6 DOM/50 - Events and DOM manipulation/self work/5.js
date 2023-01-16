(() => {

    let originalColor = "grey"
    let square = document.getElementById("square5")
    square.style.width = "20vh"
    square.style.height = "20vh"
    square.style.backgroundColor = originalColor
    square.addEventListener("click", changeToColor)
    function changeToColor() {
        let textarea = document.getElementById("square_color_input")
        let colorFromText = textarea.value
        square.style.backgroundColor = colorFromText
    }
})()