
{
    //Task one
    let formEvent = document.getElementById("inputForm")
    formEvent.addEventListener("submit", textFunction)

    function textFunction(event) {
        event.preventDefault();
        let inputFieldData = document.querySelector("input[name=infoInput]").value;

        document.querySelector("h1").textContent = inputFieldData
    }

}

{
    //Task two
    let personInfo = document.getElementById("personInput")
    personInfo.addEventListener("submit", alertName)

    function alertName(event) {
        event.preventDefault();
        let getNameData = document.querySelector("input[name=personInput]").value;
        alert(getNameData)

    }
}

{
    //Task three
    let ageListener = document.querySelector("#ageForm");
    ageListener.addEventListener("submit", displayAge);

    function displayAge(event) {
        event.preventDefault();
        let getAgeData = document.querySelector("input[name=ageInput]").value;
        let ageFormSpan = document.querySelector("#ageForm span[name=ageSpan]");
        ageFormSpan.textContent = getAgeData;
    }
}

{
    //Task four
    let driveListener = document.querySelector("#driveTest")
    driveListener.addEventListener("submit", driveTestFunction)


    function driveTestFunction(event) {
        event.preventDefault();
        let getDriveName = document.querySelector("input[name=nameInput]").value;
        let getDriveAge = document.querySelector('input[name=driveAgeInput]').value;
        let driveTesth1 = document.getElementById("driveTestResult")
        let driverAge = parseInt(getDriveAge)
        if (driverAge > 18) {
            driveTesth1.textContent = "You can drive, " + getDriveName
        } else {
            driveTesth1.textContent = "You're yet to learn to drive,  " + getDriveName
        }
    }
}