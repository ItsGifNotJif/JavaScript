let newText = document.createTextNode("Dorian Ashgray")
document.body.prepend(newText)

let htmlText = document.getElementById("textArea")
htmlText.textContent = "Fiddlesticks"

let changedList = document.getElementsByTagName("li")
let selectedItem = changedList[2];
selectedItem.textContent = "Sūris"


document.querySelectorAll("p")[0].style.color = "red"
document.querySelectorAll("p")[1].style.color = "blue"
document.querySelector(".bluetext span").textContent = "blue"
document.querySelectorAll("p")[2].style.color = "yellow"


let list = document.getElementsByTagName("ol")[0];
let firstItem = list.firstElementChild;
let secondItem = firstItem.nextElementSibling;
list.insertBefore(secondItem, firstItem);