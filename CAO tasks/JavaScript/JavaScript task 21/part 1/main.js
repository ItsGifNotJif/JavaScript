{
    //Task one
    /*
    fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(e => console.log(e.message)) 
  */


    const renderUserCard = (user) => {
        const userImage = document.createElement("img");
        userImage.src = user.picture.large;

        const intro = document.createElement("h4");
        intro.innerText = `${user.name.first} ${user.name.last}`


        const contacts = document.createElement("h5");
        contacts.innerText = user.email;

        const card = document.createElement("div");
        card.append(userImage, intro, contacts);
        document.body.append(card);

    };

    const fetchRandomUser = async () => {
        try {
            const response = await fetch("https://randomuser.me/api/");
            if (response.ok) {
                const data = await response.json();
                renderUserCard(data.results[0]);
            }
        } catch (error) {
            console.error(error);
        }
    }
    fetchRandomUser()

}

{
    //Task two

    const fetchGuests = async () => {
        try {
            const response = await fetch("https://boiling-reaches-93648.herokuapp.com/week-3/party");
            if (response.ok) {
                const guests = await response.json();
                checkIfPersonVIP(guests, 'Kristupas Lapeika');
            }
        } catch (error) {
            console.error(error)
        }
    }

    const checkIfPersonVIP = (guests, guestName) => {
        const guest = guest.find(guest => guest.name === guestName);
        document.body.innerText = guest ? `${guestName} ${guest.vip ? 'is' : 'isn\'t'} a VIP` : `${guestName} isn't found in the guest list`;
    }

    fetchGuests();
}

{
    //Task three
    //Copy paste, incomplete, doesn't work with fetch

    const getPeoplesList = () => {
        return fetch('https://boiling-reaches-93648.herokuapp.com/week-3/wedding')
            .then(res => res.json())
            .then(data => data)
            .catch(err => {
                console.log(err)
            })
    }


    const generateTableRowWithData = (data) => {
        const tableBody = document.getElementById('table-body')
        const tr = document.createElement('tr')
        const nameTd = document.createElement('td')
        const plusOneTd = document.createElement('td')
        const isArrivingTd = document.createElement('td')
        nameTd.textContent = data.name
        const isAttending = data.attending
        const hasPlusOne = data.plusOne
        plusOneTd.textContent = hasPlusOne ? '+' : '-'
        isArrivingTd.textContent = isAttending ? '+' : '-'
        tr.append(nameTd, plusOneTd, isArrivingTd)
        tableBody.append(tr)
    }

    getPeoplesList().then(data => {
        data.forEach(item => generateTableRowWithData(item))
    })

}