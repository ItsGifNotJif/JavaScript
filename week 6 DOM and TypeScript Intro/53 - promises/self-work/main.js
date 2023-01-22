{   //Example 1
    const res = fetch("https://jsonplaceholder.typicode.com/posts")
        .then(() => {
            console.log("success")              //This code fuctions exactly the same as successFunction in example 2
        })
        .catch(() => {
            console.log("failure")              //This code fuctions exactly the same as failureFunction in example 2
        })
    console.log("typed after promise in code", res);

}



{   //Example 1
    const res = fetch("https://jsonplaceholder.typicode.com/posts")
        .then((responseToRequest) => responseToRequest.json())
        .then((todos) => console.table(todos))
        //TODO: what is that?
        .catch(() => {
            console.log("failure")
        })
    console.log("typed after promise in code", res);



}

{ //Example 2 structure broken down
    function successFunction() {        //This code fuctions exactly the same as .then definition in example 1
        console.log("success")
    }
    function failureFunction() {        //This code fuctions exactly the same as .catch definition in example 1
        console.log("success")
    }

    const result = fetch("https://jsonplaceholder.typicode.com/posts")
        .then(successFunction)
        .catch(failureFunction)

    console.log("fuction is typed depending on whether promise is kept or no")
}

{
    invitedForADate
        .ifSheAccepts(washTheCar)
        .ifSheAccepts(doSomethingElse)
        .ifSheRefuses(hangOutWithTheBoys)
}