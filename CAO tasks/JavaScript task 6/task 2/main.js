const form = document.querySelector("form")
form.addEventListener("submit", recruitmentCalc)
document.querySelector("h1").style.color = "white";

const checkbox = document.querySelector("input[name='convictionRadio']")

function recruitmentCalc(event) {
    event.preventDefault();
    const age = document.querySelector("input[name=age]").value;
    if (age > 18 && age < 30 && !checkbox.checked) {
        document.querySelector("h1").textContent = "You may be recruited into army"
    } else {
        document.querySelector("h1").textContent = "You may not be recruited into army"
    }
}