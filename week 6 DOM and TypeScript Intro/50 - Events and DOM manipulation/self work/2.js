(() => {
    function genRGB() {
        const a = Math.floor(Math.random() * 255)
        const b = Math.floor(Math.random() * 255)
        const c = Math.floor(Math.random() * 255)
        return `${a}, ${b}, ${c}`;
    }

    function changeColor() {
        const color = genRGB()
        square.style.backgroundColor = `rgb(${color})`
    }

    let square = document.getElementById("square2")
    square.style.height = "20vh"
    square.style.width = "20vh"
    square.style.backgroundColor = "grey"


    square.addEventListener("mouseover", changeColor)

})()