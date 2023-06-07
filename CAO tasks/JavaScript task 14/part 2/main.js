{
    //Task One
    let divOne = document.getElementById("taskOne")

    const numbers = [10, 20, 30, 40, 50];

    const sum = numbers.reduce((a, b) => a + b)

    divOne.textContent = sum;

}

{
    //Task Two
    let divTwo = document.getElementById("taskTwo")

    const brands = ["BMW", "MCB", "VWG", "Toyota", "AUDI"]

    const filteredReduce = brands.reduce((acc, cur) => {
        if (cur.length === 3) {
            acc++
        }
        return acc;
    }, 0)

    divTwo.textContent = filteredReduce;
}


{
    //Task three
    let divThree = document.getElementById("taskThree")

    const numbers = [];
    for (let i = 0; i < 200; i++) {
        const randomNum = Math.floor(Math.random() * 1000);
        numbers.push(randomNum);
    }
    console.log(numbers)

    const largestNumber = numbers.reduce((max, curr) => {
        if (curr > max) {
            return curr
        } else {
            return max;
        }
    })

    divThree.textContent = largestNumber;
    
}