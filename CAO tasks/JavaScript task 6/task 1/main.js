const ageField = document.querySelector("form").addEventListener("submit", priceCalc);
const regularPrice = 6;
const discount = 60;
document.querySelector("h1").style.color = "white"


function priceCalc(event) {
    event.preventDefault();
    const age = document.querySelector("input[name=age").value;
    if (age < 16) {
        document.querySelector("h1").textContent = regularPrice / 2
    } else if (age > 60) {
        document.querySelector("h1").textContent = regularPrice * (discount / 100).toFixed(2)
    } else {
        document.querySelector("h1").textContent = regularPrice
    }
}