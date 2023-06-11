{
    //Input of results

    document.getElementById("submitButton").addEventListener("click", sendInfo);

    function sendInfo(event) {
        event.preventDefault();

        let itemImageField = document.getElementById("imageURL");
        let itemTitleField = document.getElementById("itemTitle");
        let itemPriceField = document.getElementById("itemPrice");

        let item = {
            image: itemImageField.value,
            price: itemPriceField.value,
            title: itemTitleField.value
        }

        console.log("Item object:", item);

        fetch("https://golden-whispering-show.glitch.me/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        })
            .then((response) => {
                if (response.ok) {
                    console.log("Item sent successfully");
                    window.location.href = "index.html"
                } else {
                    console.error("Item failed to send")
                }
            })
            .catch((error) => {
                console.error("Error occured", error)
            })
    }
}