{

    // Task one

    let searchInputForm = document.getElementById("searchByNameField");
    searchInputForm.addEventListener("submit", filterByName);

    let searchInputField = document.getElementById("nameFilter");
    let taskOneDiv = document.createElement("div");
    taskOneDiv.name = "taskOneDivContainer";

    let vipCheckboxField = document.getElementById("vipCheck");
    vipCheckboxField.addEventListener("change", showFilteredUsers);

    let usersData = [];
    let filteredUsers = [];

    function filterByName(event) {
        event.preventDefault();

        const searchInputValue = searchInputField.value.toLowerCase();

        filteredUsers = usersData.filter(user => {
            const fullName = user.name.toLowerCase();
            return fullName.includes(searchInputValue);
        });

        showFilteredUsers();
    }

    function showFilteredUsers() {
        const checked = vipCheckboxField.checked;
        const filteredByVip = checked ? filteredUsers.filter(user => user.vip === true) : filteredUsers;
        renderUserTable(filteredByVip);
    }

    const renderUserTable = (users) => {
        let taskTable = document.createElement("table");
        taskTable.name = "taskTable";
        taskTable.classList.add("table");

        let headerNameRow = document.createElement("tr");
        let idHeader = document.createElement("th");
        let firstNameHeader = document.createElement("th");
        let cityHeader = document.createElement("th");
        let colorHeader = document.createElement("th");
        let imageHeader = document.createElement("th");
        let lastNameHeader = document.createElement("th");

        idHeader.textContent = "ID";
        firstNameHeader.textContent = "First Name";
        cityHeader.textContent = "City";
        colorHeader.textContent = "Favorite Color";
        imageHeader.textContent = "Image";
        lastNameHeader.textContent = "Last Name";

        headerNameRow.append(idHeader);
        headerNameRow.append(firstNameHeader);
        headerNameRow.append(cityHeader);
        headerNameRow.append(colorHeader);
        headerNameRow.insertBefore(imageHeader, firstNameHeader);
        headerNameRow.insertBefore(lastNameHeader, cityHeader);
        taskTable.append(headerNameRow);

        users.forEach((user) => {
            const id = document.createElement("td");
            id.innerText = user.id;

            const fullName = user.name;
            const fullNameArray = fullName.split(" ");

            const firstNameCell = document.createElement("td");
            firstNameCell.innerText = fullNameArray[0];

            const lastNameCell = document.createElement("td");
            lastNameCell.innerText = fullNameArray[1];

            const city = document.createElement("td");
            city.innerText = user.city;

            const color = document.createElement("td");
            color.innerText = user.fav_color;

            const img = document.createElement("img");
            img.src = user.image;

            const dataRow = document.createElement("tr");
            dataRow.append(id, img, firstNameCell, lastNameCell, city, color);
            taskTable.append(dataRow);
        });

        document.getElementById("tableContainer").innerHTML = ""; // Clear existing table
        document.getElementById("tableContainer").appendChild(taskTable);
    };

    const fetchUsers = async () => {
        try {
            const response = await fetch("https://magnetic-melon-yam.glitch.me/");
            if (response.ok) {
                const data = await response.json();
                usersData = data; // Store the fetched users data
                filteredUsers = [...usersData]; // Initialize filtered users with all users
                showFilteredUsers(); // Initial rendering based on checkbox state
            }
        } catch (error) {
            console.error(error);
        }
    };

    fetchUsers();
}