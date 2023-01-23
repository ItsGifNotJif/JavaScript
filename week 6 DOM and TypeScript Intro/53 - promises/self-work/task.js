const userSelect = document.querySelector("#user-select");
const alertContainer = document.querySelector(".js-alertContainer");
const todosTable = document.querySelector(".js_todos_table")
const todosTableBody = document.querySelector("tbody")


const renderUserOptions = (users) => {
    const optionsString = users.map(({ username, name, id }) => `<option value="${id}">${username} - ${name}</option>`).join("")
    userSelect.innerHTML += optionsString;
}


const displayError = (error) => {
    alertContainer.style.display = "block";
    alertContainer.innerHTML = `
    <div class="alert alert-warning" role="alert">
                <div>
                    ${error.message}
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>`
    setTimeout(() => {
        alertContainer.innerHTML = null
    }, 5000)
}



fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then(renderUserOptions)
    .catch(displayError)


const renderTodosTable = (todos) => {
    if (todosTable.classList.contains("d-none"))
        todosTable.classList.remove("d-none")
    const todosRows = todos.map(({ id, title, completed }) =>
        `<tr>
        <th scope="row">${id}</th>
        <td>${title}</td>
        <td>${completed ? "Completed" : "Not Completed"}</td>
    </tr>`
    )
        .join("");

    todosTableBody.innerHTML = todosRows
}


userSelect.addEventListener("change", (e) => {
    const userId = e.target.value;
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
        .then((response) => response.json())
        .then(renderTodosTable)
        .catch(displayError)
})