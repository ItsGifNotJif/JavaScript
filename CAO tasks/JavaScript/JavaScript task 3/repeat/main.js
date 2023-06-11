{
    let i = 1;
    while (i < 4) {
        console.log("Dorian")
        i++
    }
}

{
    //While
    let combo = "";
    let times = 6;
    let i = 0;
    while (i < times) {
        console.log(i + ". " + combo);
        i++
        combo += "Dorian"
    }
}


{
    //do While
    let combo = "";
    let i = 0;
    let times = 6;
    do {
        combo += "Ashgray"
        console.log(i + ". " + combo)
        i++
    } while (i < 5)
}

{
    //cos
    let cosine = Math.cos(0)
    console.log(cosine)

}

{
    //random 1 to 5

    let randomNum = Math.floor(Math.random() * 5) + 1
    console.log(randomNum)

    //random 5 to 12 
    let randomNum2 = Math.round(Math.random() * (12 - 5 +1) + 5)
    console.log(randomNum2)
}

{
    //console page alert on random number with switch operator
    let luckyNumber = Math.round(Math.random() * 5);
    switch (luckyNumber) {
        case 1:
            console.log(luckyNumber + "." + "You've won!");
            break;
        case 2:
        case 3:
        case 4:
        case 5:
            console.log(luckyNumber + "." + "You've lost!");
            break;
        default:
            console.log(luckyNumber);
    }

}

{
    //console random number generator with if..else operator
    let luckyNumber = Math.round(Math.random() * 5);
    let winnerNumber = 3;
    if (winnerNumber === luckyNumber) {
        console.log(luckyNumber + ". " + "You've won!")
    } else {
        console.log(luckyNumber + "." + "You've lost!")
    }
}

{
    let h2element = document.createElement("h2");
    h2element.textContent = "Dorian Ashgray";
    let body = document.querySelector("body");
    body.appendChild(h2element)
}

{
    let changedText = document.getElementById("unknownh1");
    changedText.textContent = "Now its known"
}

{
    let changedListElement = document.querySelector("ul");
    changedListElement.lastElementChild.textContent = "Cheese"
}

{
    let selectSpan = document.querySelector(".test_task .bluetext span")
    selectSpan.textContent = "blue";
}

{
    let selectListElement = document.querySelector(".test_task_2 ol")
    let listElements = selectListElement.querySelectorAll('li')

    selectListElement.appendChild(listElements[2]);
    selectListElement.appendChild(listElements[0]);

}