{
    let mainBody = document.querySelector("body")
    mainBody.style.backgroundColor = "rgb(160, 180, 200)"
    mainBody.style.display = "flex"
    mainBody.style.justifyContent = "center"
    mainBody.style.padding = "30px"

    let pictureElement = document.createElement("img")
    pictureElement.setAttribute("id", 'profilePicture')
    pictureElement.setAttribute("src", "https://yt3.ggpht.com/4h5vrDjx0JVBu-Oxo6XrnpaGb0T_Mcc_ug6f2z7gAidHkuolZLRCzRVc2-jQFL6i8SJHWX5JzQ=s88-c-k-c0x00ffffff-no-rj-mo")
    pictureElement.style.border = "4px solid white"
    pictureElement.style.borderRadius = "60px"
    pictureElement.style.boxShadow = "1px 0 4px black"
    pictureElement.style.maxWidth = "100px"
    pictureElement.style.objectFit = "cover"
    pictureElement.style.marginTop = "0.5rem"


    let firstLine = document.createElement("h1")
    firstLine.textContent = "Noob Developer"
    firstLine.style.color = "rgb(94, 93, 93)"

    let secondLine = document.createElement("h2")
    secondLine.textContent = "some text here"
    secondLine.style.color = "rgb(152, 152, 152)"
    secondLine.style.fontSize = "30px"

    let thirdLine = document.createElement("h3")
    thirdLine.textContent = "last line of text"
    thirdLine.style.color = "rgb(152, 152, 152)"

    let mainDiv = document.createElement("div")
    mainDiv.setAttribute("id", "mainDiv")
    mainDiv.style.backgroundColor = "white"
    mainDiv.style.borderRadius = "30px"
    mainDiv.style.display = "flex"
    mainDiv.style.flexDirection = "column"
    mainDiv.style.padding = "30px"
    mainDiv.style.width = "80%"
    mainDiv.style.justifyContent = "center"
    mainDiv.style.alignItems = "center"

    mainDiv.appendChild(pictureElement)
    mainDiv.appendChild(firstLine)
    mainDiv.appendChild(secondLine)
    mainDiv.appendChild(thirdLine)

    mainBody.appendChild(mainDiv)
}