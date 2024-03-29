{
    //Part 1
    let taskOneForm = document.getElementById("LShape")
    taskOneForm.addEventListener("submit", paintShapeL)

    let shapeSize = document.querySelector("input[name=sizeInputL]")
    let shapeContent = "L"
    let resultDiv = document.getElementById("resultDiv")


    function paintShapeL(event) {
        event.preventDefault();
        resultDiv.innerHTML = "";
        let lastLine = "";
        let sizeIndicator = shapeSize.value;
        for (let i = 1; i < sizeIndicator; i++) {
            resultDiv.innerHTML += shapeContent + "<br>"
            lastLine += shapeContent;
        }
        resultDiv.innerHTML += lastLine + shapeContent;

    }
}

{
    //Part 2
    let taskTwoForm = document.getElementById("CShape")
    taskTwoForm.addEventListener("submit", paintShapeC)

    let shapeSizeC = document.querySelector("input[name=sizeInputC")
    let shapeContentC = "C";
    let resultDiv2 = document.getElementById("resultDiv2")


    function paintShapeC(event) {
        event.preventDefault();
        resultDiv2.innerHTML = "";
        let firstLastLine = " ";
        let shapeLines = " ";
        let sizeIndicator1 = shapeSizeC.value;
        for (let i = 2; i < sizeIndicator1; i++) {
            shapeLines += shapeContentC + "<br>";
            firstLastLine += shapeContentC;
        }

        resultDiv2.innerHTML = firstLastLine + shapeContentC + "<br>" + shapeLines + firstLastLine + shapeContentC;
    }
}