
{
    const person = {
        name: "Dorian",
        surname: "Ashgray",
        bio: "some text here I guess",
        image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    }


    localStorage.setItem("person", JSON.stringify(person));

    const renderProfileCard = (profile) => {
        const img = document.createElement("img");
        img.width = "200";
        img.src = profile.image;

        const name = document.createElement("h1")
        name.innerText = `${profile.name} ${profile.surname}`

        const bio = document.createElement("p");
        bio.innerText = `${profile.bio}`;

        const card = document.createElement("div");
        card.append(img, name, bio)
        document.body.append(card);
    }


    const infoFromLocalStorage = JSON.parse(localStorage.getItem("person"));
    renderProfileCard(infoFromLocalStorage)
}