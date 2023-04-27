/*
    Create UI that has a user selection, and displays text only from that selected user

    A. Design tasks
    1. Create UI with a selection for the data we downlaod
    2. A selection of users

    B. Download tasks
    1. Download users
    2. Sort selection based on downloaded users
    3. Create and test an error in case of failure
    4. Download table data
    5. Display data in HTML based on user selected

    C. Sorting tasks
    1. Sort downloaded data by users selected
*/

const userSelect = document.querySelector("#user-select");
const alertContainer = document.querySelector(".js-alert-container");
const todosTable = document.querySelector(".js-todos-table");
const todosTableBody = todosTable.querySelector("tbody");

const renderUserOptions = (users) => {
    const optionsStr = users.map(({ name, username, id }) => `<option value="${id}">${username} - ${name}</option>`)
        .join('');
    userSelect.innerHTML += optionsStr;
}

//B.5
const renderTodosTable = (todos) => {
    if (todosTable.classList.contains("d-none"))
        todosTable.classList.remove("d-none");
    todosTableBody.innerHTML = '';
    const todosRowsStr = todos.map(({ id, title, completed }) => `
    <tr>
        <th scope="row">${id}</th>
                <td>${title}</td>
        <td>${completed ? "Yes" : "No"}</td>
        </tr>`)
        .join('');

    todosTableBody.innerHTML += todosRowsStr;
}

//B.3
const displayError = (error) => {
    console.dir(error);
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
    .catch(displayError);



userSelect.addEventListener('change', (e) => {
    const userId = e.target.value;
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
        .then((res) => res.json())
        .then(renderTodosTable)
        .catch(displayError)
})