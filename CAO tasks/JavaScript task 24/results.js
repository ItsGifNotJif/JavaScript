{
    //Results page


    document.addEventListener("DOMContentLoaded", fetchProperty);

    function renderResultsCard(properties) {
        const cardContainer = document.getElementById("resultsDiv");

        properties.forEach(property => {
            let resultsCard = document.createElement("div");
            resultsCard.classList.add("card");

            const cardHeader = document.createElement("img")
            cardHeader.classList.add('card-header');
            cardHeader.src = property.image;

            const cardPrice = document.createElement("h2")
            cardPrice.classList.add("cardPrice")
            cardPrice.textContent = property.price;

            const cardCity = document.createElement("h5")
            cardCity.classList.add("cardCity")
            cardCity.textContent = property.city;

            const cardDescribe = document.createElement("h5")
            cardDescribe.classList.add("cardDescribe")
            cardDescribe.textContent = property.description;


            resultsCard.appendChild(cardHeader)
            resultsCard.appendChild(cardPrice)
            resultsCard.appendChild(cardCity)
            resultsCard.appendChild(cardDescribe)

            cardContainer.appendChild(resultsCard);
        })

    }

    function fetchProperty() {
        fetch("https://radial-reinvented-shoe.glitch.me/")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("failed to fetch properties")
                }
            })
            .then((property) => {
                renderResultsCard(property)
            })
            .catch((error) => {
                console.error("Error occured", error)
            })
    }
}