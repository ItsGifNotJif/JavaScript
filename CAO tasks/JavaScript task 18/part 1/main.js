{
    //Task one
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        compareAge(other) {
            if (this.age > 18) {
                console.log("Legal age")
            } else {
                console.log("not legal age")
            }
        }
    }

    let dorian = new Person("Dorian", 20)

    console.log(dorian.compareAge())

}

{
    // Task two
    const array = [1, 'a', 2, 'b', 3, 'c', 4, 'd', 5, 'e'];

    let numbersArray = [];

    for (let i = 0; i < array.length; i++) {
        if (Number.isInteger(array[i])) {
            numbersArray.push(array[i]);
        }
    }

    console.log(numbersArray);

}

{
    //Task three
    let string = "Dor424ian 1245125 ashg124ray";

    function doubleCharactersAndLeaveNumbersUnchanged(str) {
        let array = Array.from(str);
        let doubledArray = [];
        for (let i = 0; i < array.length; i++) {
            if (isNaN(array[i])) {
                doubledArray.push(array[i]);
                doubledArray.push(array[i]);
            } else {
                doubledArray.push(array[i]);
            }
        }
        return doubledArray.join("");
    }

    console.log(doubleCharactersAndLeaveNumbersUnchanged(string));

}
{
    //Task four

    function checkPostcode(code) {
        if (/^[a-zA-Z]{5}$/.test(code)) {
            return true;
        } else if (/^\d{3}[a-zA-Z]{2}$/.test(code)) {
            return true;
        } else {
            return false
        }
    }

    console.log(checkPostcode("ABSCD"))
    console.log(checkPostcode("142AS"))
    console.log(checkPostcode("2AS2a"))
    console.log(checkPostcode("12345"))
    console.log(checkPostcode("124as"))

}

{
    //Task five

    function addSeven(array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] !== 7) {
                array[i] += "7"
            } else {
                array[i]
            }
        }
        console.log(array)
    }


    const array1 = [3, 'a', 6, 'b', 'c', 2, 'd'];
    const array2 = ['x', 8, 4, 'y', 1, 'z', 7];
    const array3 = ['m', 9, 'n', 'o', 5, 2];
    console.log(addSeven(array1))
    console.log(addSeven(array2))
    console.log(addSeven(array3))
}