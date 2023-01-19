
(() => {
    let originalColor = "grey";
    function genRGB() {
        const a = Math.floor(Math.random() * 255)
        const b = Math.floor(Math.random() * 255)
        const c = Math.floor(Math.random() * 255)
        return `${a}, ${b}, ${c}`;
    }

    function changeColor() {
        if (square.style.backgroundColor === originalColor) {
            const color = genRGB()
            square.style.backgroundColor = `rgb(${color})`
        } else {
            square.style.backgroundColor = originalColor;
        }
    }

    let square = document.getElementById("square3")
    square.style.height = "20vh"
    square.style.width = "20vh"
    square.style.backgroundColor = originalColor;
    square.addEventListener("click", changeColor)

})()