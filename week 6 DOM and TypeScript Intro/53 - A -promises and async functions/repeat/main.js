//
//const  example1 = fetch("https://jsonplaceholder.typicode.com/posts")
//       .then("success")
//       .catch("failure")


// someAction
// .ifSuccessful(doActionNumber1)
// .ifSuccessful(doActionNumber2)
// .ifNotSuccessful(doOtherAction)

{
    const res = fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())     //in case of success, do this
        .then((todos) => console.table(todos))  //in case of success, do this
        //TODO
        .catch(() => {          //in case of provime failure, do this
            console.log("failed")
        })

}
{
    const res = fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            if (response.status !== 200) {
                throw new Error("bad answer")  //throw an error if response status is incorrect
            }

            //Assuming the request is in JSON format, convert it to Javascript Object
            return response.json()
        })
}