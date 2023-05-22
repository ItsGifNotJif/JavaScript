{
    function alertName(name) {
        console.log(name)
    }
    alertName("Dorian Ashgray")
}
{
    function randomNumGen() {
        return Math.floor(Math.random() * 5) + 1;
    }
    console.log(randomNumGen())
}
{
    function getLength(firstName, lastName) {
        return firstName.length + lastName.length

    }
    console.log(getLength("Dorian", "Ashgray"))
}

{
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    function returnLetter(x) {
        return alphabet[x]
    }
    console.log(returnLetter(4))
}

{
    function calculation(n1, n2, operator) {
        if (operator == "sum") {
            return operator + "=> " + (n1 + n2)
        } else if (operator == "div") {
            return operator + "=> " + (n1 / n2)
        } else if (operator == "sub") {
            return operator + "=> " + (n1 - n2)
        } else if (operator == "multi") {
            return operator + "=> " + (n1 * n2)
        } else {
            return "not a valid operation"
        }
    }
    console.log(calculation(10, 20, "sum"))
}

{
    function randomNumGen() {
        return Math.floor(Math.random() * 10 + 1)
    }

    function squareNum(x) {
        return x * x;
    }

    const randomNumber = randomNumGen();

    console.log(randomNumber, squareNum(randomNumber))
}

{
    function eventFunction() {
        window.alert("Dorian Ashgray")
    }

}
{
    const button = document.getElementById("addEventListener");
    button.addEventListener("click", function (event) {
        alert("This pop-up happened via event listener function")
    })
}
{
    const buttonParagraph = document.getElementById("addParagraph");
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, accusantium iure fugit, alias nisi velit modi dolore est magnam repudiandae repellendus nihil id illum. Quisquam, officia maxime? Ea labore, quasi reprehenderit suscipit perferendis, expedita accusantium facilis excepturi placeat rem officiis cumque numquam quisquam, porro repudiandae natus ex repellendus illum distinctio veritatis totam non explicabo? Autem, quisquam tempore necessitatibus deleniti, debitis inventore laudantium omnis velit nihil dolorem mollitia dolore magni totam perspiciatis earum explicabo incidunt! Voluptatum incidunt natus ex? Repellat obcaecati ab aliquid! Error repellat dolores officia nihil voluptate pariatur, esse ut totam atque sequi eveniet. Sint incidunt qui eveniet deleniti?"

    buttonParagraph.addEventListener("click", function (event) {
        const paraDiv = document.getElementById("paragraphDiv");
        paraDiv.textContent = text;
    })
}

{
    const increaseButton = document.getElementById("incrementButton");
    increaseButton.addEventListener("click", function (event) {
        let h1Element = document.querySelector("#h1_text_div h1")
        let currentNumber = parseInt(h1Element.textContent);
        h1Element.textContent = currentNumber + 1;
    });
}

{
    const noCopyText = document.getElementById("noCopy");
    noCopyText.addEventListener("copy", function (event) {
        alert("This text can't be copied")
    })
}

{
    const randomNum = document.getElementById("h1_random_button");
    randomNum.addEventListener("click", function (event) {
        let h1Element = document.querySelector("#h1random h1")
        let randomNum = Math.floor(Math.random() * 100 + 1)
        h1Element.textContent = randomNum;
    })
}

{
    const fullAgeButton = document.getElementById("fullAge")
    fullAgeButton.addEventListener("click", function (event) {
        let h1Element = document.querySelector("#ageRestriction h1")
        h1Element.textContent = "You can legally drink alcohol"
    })

    const minorAgeButton = document.getElementById("minorAge")
    minorAgeButton.addEventListener("click", function (event) {
        let h1Element = document.querySelector("#ageRestriction h1")
        h1Element.textContent = "You can't legally drink alcohol"
    })

}

{
    let x;

    function randomNumberGen() {
        let randomValue = Math.floor(Math.random() * 3 + 1);
        x = randomValue;
        return x;
    }

    randomNumberGen();

    const firstButton = document.getElementById("number1");
    const secondButton = document.getElementById("number2");
    const thirdButton = document.getElementById("number3");

    firstButton.addEventListener("click", function (event) {
        let value = parseInt(firstButton.textContent);
        if (value == x) {
            alert("Yay!");
        } else {
            alert("Nay!");
        }
    });

    secondButton.addEventListener("click", function (event) {
        let value = parseInt(secondButton.textContent);
        if (value == x) {
            alert("Yay!");
        } else {
            alert("Nay!");
        }
    });

    thirdButton.addEventListener("click", function (event) {
        let value = parseInt(thirdButton.textContent);
        if (value == x) {
            alert("Yay!");
        } else {
            alert("Nay!");
        }
    });

    console.log(x);

}

{
    let dontClickButton = document.querySelectorAll("#dontClick button")
    dontClickButton.forEach(function (button) {
        button.addEventListener("click", function (event) {
            alert("You can't click these buttons!")
        })
    })
}

{
    let fieldListener = document.querySelector("#dontMoveMouse");
    let text = document.querySelector("#dontMoveMouse h1")
    fieldListener.addEventListener("mousemove", function (event) {
        text.innerHTML = "You can't move mouse now!"
    });
}