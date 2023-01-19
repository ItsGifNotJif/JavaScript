(() => {
    let square = document.getElementById('square10');

    let submitColor = document.getElementById('colorSelectOne');

    let submitSize = document.getElementById('sizeSelectOne');

    let submitButton = document.getElementById('submitParameters');
    submitButton.addEventListener('click', function () {
        selectColor();
        selectSize();
    });


    function selectColor() {
        let color = submitColor.value;
        if (color === 'red') {
            square.style.backgroundColor = 'red';
        } else if (color === 'green') {
            square.style.backgroundColor = 'green';
        } else if (color === 'blue') {
            square.style.backgroundColor = 'blue';
        }
    }

    function selectSize() {
        let size = submitSize.value;
        if (size === 'small') {
            square.style.width = '5vh';
            square.style.height = '5vh';
        } else if (size === 'medium') {
            square.style.width = '10vh';
            square.style.height = '10vh';
        } else if (size === 'large') {
            square.style.width = '15vh';
            square.style.height = '15vh';
        }
    }
})();