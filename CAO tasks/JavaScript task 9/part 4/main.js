{
    //Task five

    let bodyStyle = document.querySelector("body")
    let changeButton = document.querySelector("button[name='changeColor']")
    changeButton.addEventListener("click", (event) => {
        event.preventDefault();
        let randomNum = Math.floor(Math.random() * 4)
        let colorsArray = ["red", "green", "yellow", "blue"]
        bodyStyle.style.backgroundColor = colorsArray[randomNum];
    })
}