const userSelect = document.querySelector("#user-select");


const renderUserOptions = (users) => {
    const optionsString = users.map(({ username, name }) => `<option>${username} - ${name}</option>`).join("")
    userSelect.innerHTML += optionsString;
}


fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then(renderUserOptions)