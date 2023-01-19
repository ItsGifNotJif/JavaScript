(() => {

    let select = document.getElementById("js-select-8");
    let square = document.getElementById("square8");
    square.style.width = "20vh";
    square.style.height = "20vh";

    select.addEventListener("change", function () {
        let selectedValue = select.value;
        if (selectedValue === "bg-red") {
            square.style.backgroundColor = "red";
        } else if (selectedValue === "bg-green") {
            square.style.backgroundColor = "green";
        } else if (selectedValue === "bg-blue") {
            square.style.backgroundColor = "blue";
        }
    });

})();
