{
    //Part six

    let bodyStyle = document.querySelector("body")
    let changeButton = document.querySelector("button[name='changeColor']")
    changeButton.addEventListener("click", (event) => {
        event.preventDefault();
        let r = Math.floor(Math.random() * 256)
        let g = Math.floor(Math.random() * 256)
        let b = Math.floor(Math.random() * 256)
        bodyStyle.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    })
}