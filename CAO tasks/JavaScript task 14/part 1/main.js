{
    //Task One
    let divOne = document.getElementById("taskOne");

    const randomNames = [
        "Liam",
        "Olivia",
        "Noah",
        "Emma",
        "Sophia",
        "Oliver",
        "Ava",
        "Isabella",
        "Mia",
        "Charlotte",
        "Amelia",
        "Harper",
        "Elijah",
        "Evelyn",
        "Michael"
    ];

    const defaultSort = randomNames.sort();
    divOne.textContent = defaultSort.join(", ");
}

{
    //Task Two
    let divTwo = document.getElementById("taskTwo");

    const randomNames = [
        "Liam",
        "Olivia",
        "Noah",
        "Emma",
        "Sophia",
        "Oliver",
        "Ava",
        "Isabella",
        "Mia",
        "Charlotte",
        "Amelia",
        "Harper",
        "Elijah",
        "Evelyn",
        "Michael"
    ];

    let sortFromBack = randomNames.sort((a, b) => {
        if (a < b) return 1;
        if (b < a) return -1;
        return 0;
    })
    divTwo.textContent = sortFromBack.join(", ")
}
{
    //Task three
    let divThree = document.getElementById("taskThree")

    const numbers = [5, 10, 20, 11, 12, 1, 0, 14, 25]
    let sortedValues = numbers.sort((a, b) => {
        if (a < b) return 1;
        if (b < a) return -1;
        return 0;
    })

    divThree.textContent = sortedValues.join(", ")
}

{
    //Task four
    let divFour = document.getElementById("taskFour")
    let divFive = document.getElementById("taskFive")

    const findBiggest = [10, 5, 20, 4]
    let findLargest = findBiggest.sort((a, b) => a - b)
    let largestValue = findBiggest[findBiggest.length - 1]

    //Another way 
    const sortBySize = findBiggest.sort((a, b) => b - a)        
    const topValue = sortBySize[0]

    divFour.textContent = largestValue
    divFive.textContent = topValue
}