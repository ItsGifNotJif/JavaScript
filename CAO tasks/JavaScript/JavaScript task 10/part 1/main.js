{

    //Task 1
    let car = {
        doors: 4,
        colors: "white",
        brand: "BWM"
    }
}

{
    //Task 2
    let formSubmit = document.getElementById("createPerson");
    formSubmit.addEventListener("submit", createObject);

    function createObject(event) {
        event.preventDefault();

        let nameValue = document.querySelector("input[name=name").value;
        let surnameValue = document.querySelector("input[name=surname").value;
        let person = {
            name: `${nameValue}`,
            surname: `${surnameValue}`
        }
        console.log(person)
    }
}

{
    //Task 3

    let personSubmit = document.getElementById("createLegalPerson")
    personSubmit.addEventListener("submit", createPerson)


    function createPerson(event) {
        event.preventDefault();

        let personName = document.querySelector('input[name=personName]').value
        let personAge = document.querySelector("input[name=ageInput]").value

        let islegalAge = personAge >= 18;

        let personLegal = {
            name: `${personName}`,
            age: `${personAge}`,
            isLegal: islegalAge
        };
        console.log(personLegal)
    }
}