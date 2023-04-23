/*
    Create UI that has a user selection, and displays text only from that selected user

    A. Design tasks
    1. Create UI with a selection for the data we downlaod
    2. A selection of users

    B. Downlaod tasks
    1. Download users
    2. Sort selection based on downloaded users 
    3. Create and test an error in case of failure


*/

const userSelect = document.querySelector("#user-select");

console.log(userSelect)

const renderUserOptions = (users) => {
    const optionsStr = users.map(({ name, username }) => `<option>${username} - ${name}</option>`).join('');
    userSelect.innerHTML += optionsStr;
}




//B.1
fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then(renderUserOptions)
