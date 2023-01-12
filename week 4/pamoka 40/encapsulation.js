
{   //Properties with "#" in front are encapsulated. These properties can't be access from outside the class.
    class Celebration {
        #pavadinimas;
        #data;
        #aprasymas;

        constructor(pavadinimas, data) {
            this.#pavadinimas = pavadinimas;
            this.#data = data;
        }


        //To access encapsulated properties, new method has to be used

        getPavadinimas() {
            return this.#pavadinimas
        }

        nustatytiPavadinimas(naujasPavadinimas) {
            if (typeof naujasPavadinimas !== "string") throw new Error("Sventes pavadinimas privalo buti simboliu darinys")
            if (naujasPavadinimas.length < 2) throw new Error(`Per trumpas pavadinimas: ${naujasPavadinimas}`)
            if (naujasPavadinimas.length > 32) throw new Error(`Per ilgas pavadinimas: ${naujasPavadinimas}`)
            this.#pavadinimas = naujasPavadinimas
        }

        kiekLikoIkiSventes() {
            const currentDate = new Date();
            const leftMillSecs = this.#data - currentDate
            const days = Math.floor(leftMillSecs / 1000 / 60 / 60 / 24)
            const roundedDays = days > 0 ? Math.floor(days) : Math.ceil(days)
            console.log(`Iki ${this.#pavadinimas} liko: `, roundedDays)
        }

    }



    const megstamiausiaSvente = [
        new Celebration("Today", new Date(2023, 11, 13)),
        new Celebration("Kucios", new Date(2023, 11, 24)),
        new Celebration("Kaledos", new Date(2023, 11, 25)),
        new Celebration("Kaledos 2", new Date(2023, 11, 26)),
    ]



    megstamiausiaSvente.forEach(svente => svente.kiekLikoIkiSventes());

    megstamiausiaSvente[0].data = 5;
    megstamiausiaSvente[1].data = [5, 5, 5];
    megstamiausiaSvente[2].data = null;


    megstamiausiaSvente[0].nustatytiPavadinimas({ a: 9 })           //throws error since name isn't a string
    megstamiausiaSvente[1].nustatytiPavadinimas("2")            //throws error as name is too short
    megstamiausiaSvente[2].nustatytiPavadinimas("21264451245415245124464126446154516254")            //throws error as name is too long
    megstamiausiaSvente[3].nustatytiPavadinimas("Some Celebration");



}