(() => {
    let square = document.getElementById("square6")
    square.style.width = "20vh"
    square.style.height = "20vh"
    square.classList.add('grey-square');
    square.addEventListener('click', switchClass);
    function switchClass() {
        if (square.classList.contains('grey-square')) {
            square.classList.remove('grey-square');
            square.classList.add('red-square');
        } else {
            square.classList.remove('red-square');
            square.classList.add('grey-square');
        }
    }
})();
