{
    let car = "Mini";

    switch (car) {
        case "VW":
        case "Audi":
        case "Bentley":
        case "Bugatti":
        case "Lamborghini":
        case "Porsche":
            console.log("VW Group");
            break;
        case "BMW":
        case "Mini":
        case "Roll-Royce":
            console.log("BWM Group");
            break;
        default:
            console.log("No manufacturer group found");
    }
}

{
    const userInput = "Potatoe"
    switch (userInput) {
        case "Orange":
        case "Apple":
        case "Banana":
        case "Mango":
        case "Pear":
            console.log("Fruit");
            break;
        case "Potatoe":
        case "Carrot":
        case "Celery":
        case "Beetroot":
        case "Onion":
            console.log("Vegetable");
            break;
        default:
            console.log("input some kind of plant product")
    }
}

{
    let weekday = 5;
    switch (weekday) {
        case 1:
            weekday = "Monday";
            console.log(weekday);
            break;
        case 2:
            weekday = "Tuesday";
            console.log(weekday);
            break;
        case 3:
            weekday = "Wednesday";
            console.log(weekday);
            break;
        case 4:
            weekday = "Thusrday";
            console.log(weekday);
            break;
        case 5:
            weekday = "Friday";
            console.log(weekday);
            break;
        case 6:
            weekday = "Saturday";
            console.log(weekday);
            break;
        case 7:
            weekday = "Sunday";
            console.log(weekday);
            break;
        default:
            console.log("Enter weekday number")
    }
}

{
    let name = "Dorian"
    let length = name.length <= 5 ? "Short Name" : "Long name";
    console.log(length)

    let someWord = "somelongwordorphrasehere"
    let wordLength = someWord.length <= 10 ? "Short word" : "Long word";
    console.log(wordLength)
}

{
    let clientAge = 1;
    let legalAge = 19;
    let canDrive = clientAge >= legalAge ? "Can drive" : "Can't drive";
    console.log(canDrive)
}
{
    let clientAge = 20;
    let legalAge = 19;
    let result = clientAge < 0 || clientAge > 120 ? "Invalid age" : clientAge >= legalAge ? "Can drive" : "Cannot drive";
    console.log(result)

}

{
    let someValue = 19;
    let threshold = 20;
    let result = someValue < 0 || someValue > 120 ? "Out of range" : someValue >= threshold ? "Higher or equal to" : "Lower";
    console.log(result)
}

{
    let phone = "iPhone"
    let isPhoneUser = phone === "Android";
    console.log(isPhoneUser)
}

{

    //a
    {
        for (let i = 0; i < 10; i++) {
            console.log("Dorian")
        }

    }
    //b
    {
        let name = "Dorian"
        let y = 10;
        for (let i = 0; i < y; i++) {
            console.log(name)
        }
    }

    //c
    {
        let name = "Dorian"
        let y = 10;
        for (let i = 0; i < y; i++) {
            console.log(i + ". " + name)
        }
    }

    //d
    {
        for (let i = 10; i >= 0; i--) {
            console.log(i)
        }
    }
}