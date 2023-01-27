//Async functions are functions that return a promise. THey allow the use of ".await" keyword. 

const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const todos = await response.json();
        console.table(todos)
    } catch (error) {
        console.error(error.message)
    }

}

const fetchData1 = async () => {
    return ("correct answer");
    throw ("incorrect answer")
}