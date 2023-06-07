{
    //Task three
    const unsortedarray = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

    function sortArray(array) {
        let uniqueArray = Array.from(new Set(array))
        console.log(uniqueArray)
    }

    console.log(sortArray(unsortedarray))
}