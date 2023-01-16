{function alertName(name) {
    alert(name)
}



function returnRanNum() {
    return Math.floor((Math.random() * 5))
}

console.log(returnRanNum());

function returnLength(name, surname) {
    return `${name}, ${surname} => ` + (name.length + surname.length)

}

console.log(returnLength("Dorian", "Ashgray"))
console.log(returnLength("Albus", "Dumbledore"))


let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function returnAlphabet(num) {
    return alphabet[num]
}

console.log(returnAlphabet(2))
console.log(returnAlphabet(4))
console.log(returnAlphabet(12))


function returnResult(num1, num2, operator) {
    switch (operator) {
        case "sum":
            return num1 + num2
            break;
        case "sub":
            return num1 - num2
            break;
        case "div":
            return num1 / num2
            break;
        case "mult":
            return num1 * num2
            break;
    }
}
console.log(returnResult(1, 2, "sum"))
console.log(returnResult(1, 2, "sub"))
console.log(returnResult(1, 2, "div"))
console.log(returnResult(1, 2, "mult"))


function genRandomNum() {
    return Math.floor(Math.random() * (10 - 1) + 1)

}

function squareRand(num) {
    return num ** 2
}

console.log(squareRand(genRandomNum()))}