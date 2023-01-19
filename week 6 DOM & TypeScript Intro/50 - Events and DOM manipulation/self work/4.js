(() => {
    function genRGB() {
        const a = Math.floor(Math.random() * 255)
        const b = Math.floor(Math.random() * 255)
        const c = Math.floor(Math.random() * 255)
        return `${a}, ${b}, ${c}`;
    }
    let originalColor = "grey";
    let secondColor = "yellow";
    let thirdColor = "green";
    let fourthColor = "red";

    let square = document.getElementById("square4")
    square.style.height = "20vh"
    square.style.width = "20vh"
    square.style.backgroundColor = originalColor;

    square.addEventListener("click", changeColor)
    function changeColor() {
        if (square.style.backgroundColor === originalColor) {
            square.style.backgroundColor = secondColor
        } else if (square.style.backgroundColor === secondColor) {
            square.style.backgroundColor = thirdColor
        } else if (square.style.backgroundColor === thirdColor) {
            square.style.backgroundColor = fourthColor
        } else {
            square.style.backgroundColor = originalColor
        }
    }
})()