{
    //Task one 
    let mainBody = document.querySelector("body")

    let newh1Element = document.createElement("h1")

    newh1Element.setAttribute("id", "createdElement")
    newh1Element.textContent = "Dorian Ashgray"
    newh1Element.style.color = "red"
    newh1Element.style.backgroundColor = "black"

    mainBody.appendChild(newh1Element);

    let brandList = document.createElement("ul")
    let newListElement = document.createElement("li")
    newListElement.textContent = "BMW"
    newListElement.style.color = "red"
    let newListElement1 = document.createElement("li")
    newListElement1.textContent = "Mercedes"
    newListElement1.style.color = "cyan"
    let newListElement2 = document.createElement("li")
    newListElement2.textContent = "Volvo"
    newListElement2.style.color = "green"

    brandList.appendChild(newListElement)
    brandList.appendChild(newListElement1)
    brandList.appendChild(newListElement2)
    mainBody.appendChild(brandList)
}