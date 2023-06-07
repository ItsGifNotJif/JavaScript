{
    //Task three

    let infoSubmitForm = document.getElementById("taskThree");
    infoSubmitForm.addEventListener("submit", saveToLocal);

    let inputField = document.getElementById("fullname")



    function saveToLocal(event) {
        event.preventDefault();

        let originalString = inputField.value.trim().split(" ");
        let name = originalString[0];
        let surname = originalString[1];
        event.preventDefault();

        let person = {
            name: name,
            surname: surname
        };


        localStorage.setItem("person", JSON.stringify(person));

        renderInfo(person);

    }
    function renderInfo(profile) {
        const table = document.createElement("table");
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = profile.name;

        const surnameCell = document.createElement("td");
        surnameCell.textContent = profile.surname;

        row.appendChild(nameCell);
        row.appendChild(surnameCell);

        table.appendChild(row);

        let resultDiv = document.getElementById("results")
        resultDiv.appendChild(table)
    }

}