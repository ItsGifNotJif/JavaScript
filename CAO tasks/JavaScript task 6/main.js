const nameField = document.querySelector("form").addEventListener("submit", alertName)
document.querySelector("h1").style.color = "white"

function alertName(event) {
    event.preventDefault();
    const result = document.querySelector("input[name=name]").value;
    const age = document.querySelector("input[name=age]").value;
    const nameAge = result + ": " + age

    if (age < 18) {
        document.querySelector("h1").textContent = nameAge + "- You can't drive" 
    }else{
        document.querySelector("h1").textContent = nameAge + "- You can drive"
    }


}