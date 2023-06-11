{
    //Task One
    let getCinemaPrice = document.getElementById("cinemaPrice")
    getCinemaPrice.addEventListener("submit", priceCalc)
    let cinemaPriceResult = document.getElementById("cinemaTicketPrice")
    let regular = "6"
    let minorDisount = 0.5;
    let majorDiscount = 0.33;

    function priceCalc(event) {
        event.preventDefault();
        let cinemaAgeField = document.querySelector("input[name=personAge]").value;
        let cinemaAge = parseInt(cinemaAgeField)
        let regularPriceAmount = parseInt(regular)
        let ticketPrice;

        if (cinemaAge < 16) {
            ticketPrice = regular - (regular * minorDisount);
        } else if (cinemaAge > 60) {
            ticketPrice = regular - (regular * majorDiscount);
        } else {
            ticketPrice = regular;
        }

        cinemaPriceResult.textContent = ticketPrice + "e"

    }
}

{
    //Task two
    let recruitmentStatus = document.getElementById("militaryRecruit");
    recruitmentStatus.addEventListener("submit", determineStatus);

    let recruitAge = document.querySelector("input[name=recruitAge]");
    let recruitAgeNumber = recruitAge.value;

    let h1status = document.getElementById("recruitStatus");

    let radioButton = document.querySelector('input[type="radio"]')

    function determineStatus(event) {
        event.preventDefault();
        if (recruitAge.value < 30 && recruitAge.value > 18 && radioButton.checked === false) {
            h1status.textContent = "You may be recruited into military"
        } else {
            h1status.textContent = "You can't be recruited into military"
        }
    }

}   