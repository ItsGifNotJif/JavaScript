{
    //Showing results


    document.addEventListener("DOMContentLoaded", fetchItems)


    function renderResults(items) {
        const itemContainer = document.getElementById("taskDiv");

        items.forEach(item => {
            let itemCard = document.createElement("div");
            itemCard.classList.add("card");

            const itemHeader = document.createElement("img");
            itemHeader.classList.add("cardImage");
            itemHeader.src = item.image;

            const itemName = document.createElement("h3");
            itemName.classList.add("cardName");
            itemName.textContent = item.title;

            const itemPrice = document.createElement("h2");
            itemPrice.classList.add("cardPrice");
            itemPrice.textContent = item.price;

            const itemDelete = document.createElement("button");
            itemDelete.classList.add("cardDelete");
            itemDelete.textContent = "Delete";
            itemDelete.id = "deleteButton-" + item.id;

            itemCard.append(itemHeader);
            itemCard.append(itemName);
            itemCard.append(itemPrice);
            itemCard.append(itemDelete);

            itemContainer.appendChild(itemCard);

        })
        items.forEach(item => {
            const deleteButton = document.getElementById("deleteButton-" + item.id);
            deleteButton.addEventListener("click", () => deleteItem(item.id));
        });
    }

    function fetchItems() {
        fetch("https://golden-whispering-show.glitch.me/")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("failed to fetch items")
                }
            })
            .then((item) => {
                renderResults(item)
            })
            .catch((error) => {
                console.error("Error occured", error)
            })
    }

    function deleteItem(itemId) {
        fetch("https://golden-whispering-show.glitch.me/" + itemId, {
            method: "DELETE"
        })
            .then(response => {
                if (response.ok) {
                    console.log("item deleted");
                    window.location.href = "index.html"
                } else {
                    console.error("item failed to delete")
                }
            })
            .catch(error => {
                console.error("error occured", error)
            })
    }

}

