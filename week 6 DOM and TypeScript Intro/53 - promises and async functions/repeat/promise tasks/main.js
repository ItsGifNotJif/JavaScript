/*
    Create UI that has a user selection, and displays text only from that selected user

    A. Design tasks
    1. Create UI with a selection for the data we downlaod
    2. A selection of users

    B. Download tasks
    1. Download users
    2. Sort selection based on downloaded users
    3. Create and test an error in case of failure


*/

const userSelect = document.querySelector("#user-select");;
const alertContainer = document.querySelector(".js-alert-container")


const renderUserOptions = (users) => {
    const optionsStr = users.map(({ name, username }) => `<option>${username} - ${name}</option>`)
        .join('');
    userSelect.innerHTML += optionsStr;
}

//B.3
const displayError = (error) => {
    alertContainer.innerHTML = `
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
   <div>${error.message}</div>
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    </div>`;
    setTimeout(() => {
        alertContainer.innerHTML = null;
    }, 3500)
}


//B.1
fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then(renderUserOptions)
    //B.3
    .catch(displayError)