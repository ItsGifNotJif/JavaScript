{
    //Task one

    let formSubmitFields = document.getElementById("taskOneFormSubmit");
    formSubmitFields.addEventListener("submit", addData)
    let formSubmitInput = document.querySelector("input[name=fullname]");

    let tableFirstLine = document.getElementById("firstLine")
    let tableSecondLine = document.getElementById("secondLine")

    class Person {
        constructor(name, surname) {
            this.name = name;
            this.surname = surname;
        }
        addInfo = function () {
            tableFirstLine.textContent = this.name;
            tableSecondLine.textContent = this.surname

        }
    }

    function addData(event) {
        event.preventDefault();
        let fullnameArray = formSubmitInput.value.split(" ");
        let firstName = fullnameArray[0];
        let firstNameTrimmed = firstName.trim();
        let firstNameFormatted = firstNameTrimmed.charAt(0).toUpperCase() + firstNameTrimmed.slice(1).toLowerCase();
        let surname = fullnameArray[1];
        let surnameTrimmed = surname.trim();
        let surnameFormatted = surnameTrimmed.charAt(0).toUpperCase() + surnameTrimmed.slice(1).toLowerCase();

        const person = new Person(`${firstNameFormatted}, ${surnameFormatted}`)
        person.addInfo();
    }


}