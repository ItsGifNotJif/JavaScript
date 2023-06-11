// Page 1 - index.html

document.getElementById("submitInfoForm").addEventListener("submit", sendInfo);

function sendInfo(event) {
  event.preventDefault();
  let brandInfo = document.getElementById("brand").value;
  let modelInfo = document.getElementById("model").value;
  console.log(brandInfo, modelInfo);

  let car = {
    brand: brandInfo,
    model: modelInfo
  };

  fetch("https://olive-bead-glazer.glitch.me/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(car)
  })
    .then((response) => {
      if (response.ok) {
        console.log("Car info sent successfully");
        // Redirect to results page
        window.location.href = "resultspage.html";
      } else {
        console.error("Car info failed to be sent");
      }
    })
    .catch((error) => {
      console.error("Error occurred", error);
    });
}
