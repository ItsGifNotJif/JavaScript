///DOM --- Document Object Model
const buttonPrank = document.querySelector(".js_prank_button");
const jsResult = document.querySelector(".js_prank_result");


const prankFunction = () => {
    jsResult.innerHTML = "You got pranked"
}

buttonPrank.addEventListener("click", prankFunction);