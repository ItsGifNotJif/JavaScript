const legalAge = 20;
const clientAge = 5;
if (legalAge <= clientAge) {
    console.log("You can enter")
} else {
    console.log("You can't enter")
}

const name = "Antanas"
if (name.length > 6) {
    console.log("Long name")
} else {
}

const age = 28;
if (age > 100 || age < 0) {
    console.log("Invalid Age")
} else if (age <= 18) {
    console.log("Child")
} else if (19 < age < 99) {
    console.log("Adult")
}

{
    let car = "Ferrari"
    if (car === "VW" || car === "Audi" || car === "Bentley" || car === "Bugatti" || car === "Lamborghini" || car === "Porsche") {
        console.log("VW Group")
    } else if (car === "BMW" || car === "Mini" || car === "Rolls-Royce") {
        console.log("BMW Group")
    } else {
        console.log("No manufacturer found")
    }
}
