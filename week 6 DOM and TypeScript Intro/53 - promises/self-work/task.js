const userSelect = document.querySelector("#user-select");
const alertContainer = document.querySelector(".js-alertContainer");
console.log(alertContainer)

const renderUserOptions = (users) => {
    const optionsString = users.map(({ username, name }) => `<option>${username} - ${name}</option>`).join("")
    userSelect.innerHTML += optionsString;
}


const displayError = (error) => {
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