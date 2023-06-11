{
    document.getElementById("infoSubmissionForm").addEventListener("submit", sendInfo);

    function sendInfo(event) {
        event.preventDefault();

        let imgUrlField = document.querySelector("input[name=imgURL]");
        let priceField = document.querySelector("input[name=priceInput]");
        let describeField = document.querySelector("input[name=description]");

        let property = {
            image: imgUrlField.value,
            price: priceField.value,
            description: describeField.value
        };

        console.log("Property object:", property);

        fetch("https://radial-reinvented-shoe.glitch.me/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(property)
        })
            .then((response) => {
                if (response.ok) {
                    console.log("Property info sent successfully");
                    window.location.href = "add.html"; // Redirect to another page after successful submission
                } else {
                    console.error("Property info failed to send");
                }
            })
            .catch((error) => {
                console.error("Error occurred", error);
            });
    }

}


