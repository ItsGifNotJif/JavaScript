(() => {
    let square = document.getElementById('square9');
    square.style.backgroundColor = 'grey';
    square.style.display = 'none';

    let submit = document.getElementById('sizeSelect');

    let submitButton = document.getElementById('submitSize');
    submitButton.addEventListener('click', generateSize);

    function generateSize() {
        let determineSize = submit.value;
        square.style.display = 'block';
        if (determineSize === 'sm') {
            square.style.width = '5vh';
            square.style.height = '5vh';
        } else if (determineSize === 'md') {
            square.style.width = '10vh';
            square.style.height = '10vh';
        } else if (determineSize === 'lg') {
            square.style.width = '15vh';
            square.style.height = '15vh';
        }
    }
})();