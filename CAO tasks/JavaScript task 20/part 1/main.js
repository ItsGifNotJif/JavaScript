{
    let p = new Promise((resolve, reject) => {                  //create a promise, resolve in case of success, reject in case of failure
        let a = 1 + 1;                  //declaring a variable or function
        if (a == 2) {                      //condition
            resolve("success")          //code executes in case of success
        } else {
            reject("failed")            //code executes in case of failure
        }
    })


    p.then((message) => {                               //code executes IF promise hass resolved/succeeded
        console.log("this is in the then " + message)
    }).catch((message) => {                             //this code executes IF promise has failed/been rejected    
        console.log("this is in the catch " + message)
    })
}

{
    //Task one

    let taskOnePromise = new Promise((resolve, reject) => {
        setTimeout(resolve, 5000)
    })
    taskOnePromise
        .then(() => {
            console.log("this was a success")
        }).catch(() => {
            console.log("this was a failure")
        })
}

{
    //Task two

    let taskTwoPromise = new Promise((resolve, reject) => {
        let a = Math.floor(Math.random() * 5);
        if (a === 0) {
            setTimeout(() => {
                resolve("success");
            }, 5000)
        } else {
            setTimeout(() => {
                reject("failure")
            }, 5000)
        }
    })

    taskTwoPromise
        .then(() => {
            console.log("This is a successful resolve after 5 seconds, with 1/5 chance")
        }).catch(() => {
            console.log("This is a failure, after 5 seconds, with 4/5 chance")
        })
}

{
    //Task three
    let taskThreePromise = new Promise((resolve, reject) => {
        let x = Math.floor(Math.random() * 5);
        setTimeout(() => {
            if (x === 1) {
                resolve();
            } else {
                reject();
            }
        }, 2000)
    })

    taskThreePromise
        .then(() => {
            return "This is a message in case of success"
        }).then((message) => {
            window.alert(message)
        }).catch(() => {
            console.log("this is a failure")
        })


}