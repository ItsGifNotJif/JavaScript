{
    //Task one
    let inputForm = document.getElementById("taskOneInput")
    inputForm.addEventListener("submit", showTime)
    let answerh1 = document.getElementById("taskOneAnswer")

    function showTime(event) {
        event.preventDefault();
        let inputField = document.querySelector("input[name=enterMinutes]").value;
        let result = inputField * 60
        answerh1.textContent = result + " seconds"
    }
}

{
    //Task two
    let ageInput = document.getElementById("taskTwoInput")
    ageInput.addEventListener("submit", showAge)
    let answerh1Age = document.getElementById("taskTwoAnswer")


    function showAge(event) {
        event.preventDefault();
        let ageInputField = document.querySelector("input[name=enterAge]");
        let resultAge = ageInputField.value * 365;
        answerh1Age.textContent = resultAge + " days"
    }

}

{
    //Task three 
    let numberInput = document.getElementById("taskThreeInput")
    let answerNumberh1 = document.getElementById("taskThreeAnswer")
    numberInput.addEventListener("submit", (event) => {
        event.preventDefault();
        let numberInputField = document.querySelector("input[name=enterNumber]");
        let resultNumber = numberInputField.value ** 2;
        answerNumberh1.textContent = resultNumber;
    })

    /*Alternative function(value){
        return value **2
    }
    */

}

{
    //Task four
    let triangleFormInput = document.getElementById("taskFourInput")
    triangleFormInput.addEventListener("submit", calculate)

    let heightInput = document.querySelector('input[name=enterHeight]');
    let WidthInput = document.querySelector('input[name=enterWidth]');
    let triangleAnswerh1 = document.getElementById("taskFourAnswer");

    function calculate(event) {
        event.preventDefault();
        let height = heightInput.value;
        let width = WidthInput.value;
        let result = (height * width) / 2;
        triangleAnswerh1.textContent = result;
    }
}

{
    //Task five
    let stringInputForm = document.getElementById("taskFive");
    stringInputForm.addEventListener("submit", displayString);

    let stringInput = document.querySelector("input[name=enterString]")
    let stringAnswerh1 = document.getElementById("taskFiveAnswer")


    function displayString(event) {
        event.preventDefault();
        let string = [];
        for (let i = 0; i < (stringInput.value).length; i++) {
            string.push((stringInput.value)[i])
        }
        stringAnswerh1.textContent = string[string.length - 1]

    }
}
{
    //Task six
    let reverseStringForm = document.getElementById("taskSixInput");
    reverseStringForm.addEventListener("submit", displayReverse);

    let reverseString = document.querySelector("input[name=enterStringReverse]");
    let reverseStringAnswerh1 = document.getElementById("taskSixAnswer");

    function displayReverse(event) {
        event.preventDefault();
        let string = []
        for (let i = 0; i < (reverseString.value).length; i++) {
            string.push(reverseString.value[i])
        }
        reverseStringAnswerh1.textContent = string.reverse().join("").toLowerCase();
    }
}

{
    //Task seven
    let numbers = [-5, 10, -3, 8, -2, 6, -1, 4, -7, 2]

    let largestNegative = numbers.reduce((largest, current) => {
        if (current < 0 && (largest === undefined || current > largest)) {
            return current
        }
        return largest;
    }, undefined)

    console.log(largestNegative)
}

{
    //Task eight
    function generateArray(x) {
        let array = [];
        for (let i = 0; i < x; i++) {
            let randomNum = Math.floor(Math.random() * (10 - 1) + 1);
            array.push(randomNum);
        }
        return array;
    }

    console.log(generateArray(3))
}
{
    //Task nine

    let booleanValue = (a, b) => {
        if (a + b === 100) {
            return "equal " + false;
        } else if (a + b < 100) {
            return "less " + true;
        } else {
            return "more " + false;
        }
    }
    console.log(booleanValue(90, 1))
}

{
    //Task ten
    const arrayOfObjects = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 32 },
        { name: "Charlie", age: 27 },
        { name: "David", age: 41 },
        { name: "Eve", age: 23 },
        { name: "Frank", age: 35 },
        { name: "Dave", age: 35 }
    ];

    let sortedByAge = arrayOfObjects.sort((a, b) => {
        if (a.age < b.age) return -1;
        if (b.age < a.age) return 1;
        return 0;
    })

    let sortedByAgeAndName = arrayOfObjects.sort((a, b) => {
        if (a.age < b.age) return -1;
        if (b.age < a.age) return 1;

        if (a.name < b.name) return -1;
        if (b.name < a.name) return 1;

        return 0;

    })
    console.log(arrayOfObjects)
    console.log(sortedByAge)
    console.log(sortedByAgeAndName)

}

{
    //Task eleven

    const nationalHolidays = [
        "2023-01-01", // New Year's Day
        "2023-07-04", // Independence Day
        "2023-12-25"  // Christmas Day
    ];

    function determineHolidays(date) {
        for (let i = 0; i < nationalHolidays.length; i++) {
            if (date == nationalHolidays[i]) {
                return "it's an off day"
            }
        }
        return "not a holiday"
    }
    console.log(nationalHolidays);
    console.log(determineHolidays("2023-01-01"))
}

{
    //Task twelve
    let numbers = [2, 3, 4, 5, 9, 14, 5, 23, 18, 7, 31, 11, 16, 29, 8, 19, 13, 26, 4, 17, 22, 10, 28];

    function returnMissing(array) {
        numbers.sort((a, b) => a - b)

        let missingValue = [];

        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i + 1] - numbers[i] > 1) {
                missingValue = numbers[i] + 1;
                break;
            }
        }
        return missingValue;
    }

    let missingValue = returnMissing(numbers);

    console.log(numbers)
    console.log(missingValue)
}