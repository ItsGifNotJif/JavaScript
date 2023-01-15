///DOM --- Document Object Model

//Locating elements within HTML file
const buttonPrank = document.querySelector(".js_prank_button");
const jsResult = document.querySelector(".js_prank_result");

//Adding functionality 
const prankFunction = () => {
    //Specific actions to be executed
    jsResult.innerHTML += "You got pranked"
}

//Event register and re-direct
buttonPrank.addEventListener("click", prankFunction);




//Creating a square in HTML

function getRGB() {
    const a = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    const c = Math.floor(Math.random() * 255)
    return a + ", " + b + ", " + c
}

let squareCount = 0;
const addSquareButton = document.querySelector(".square_button");
const containerDiv = document.querySelector(".container_for_squares");
const addSquareWithRandomColor = () => {
    squareCount++;
    const square = document.createElement("SPAN");
    square.style.width = "100px";
    square.style.height = "100px";
    const color = getRGB();
    square.style.background = `rgb(${color})`;
    square.style.margin = "5px";
    square.style.display = "inline-block";
    square.innerHTML = squareCount;
    containerDiv.appendChild(square);
    square.classList.add("generated_square")
}

addSquareButton.addEventListener("click", addSquareWithRandomColor)





/*
Užduotis:
  * Sukurkite mygtuką kurį paspaudus atsirastų naujas kvadračiukas
    Jums reikės:
      1. HTML faile sukurti mygtuką ir jį priskirtį į kintamajį main.js faile
      2. HTML faile sukurti rezultatų konteinerį ir jį priskirtį į kintamajį main.js faile
      3. Uždėti įšvykio klausiklį ant surasto mygtuko, kad jį paspaudus vykdytūsi funkcija <addSquare>
      4. Funkcijoje <addSquare> sukurkite span elementą su jūsų pasirinkta spalva ir kitomis css savybėmis:
        aukštis: 100px;
        plotis: 100px;
        display: inline-block

  Naudojamos funkcijos:
    A)
    document.querySelector(<pagalKąIeškote>) - suranda esantį elementą
    B)
    document.createElement(<kąKuriate>) - sukuria elementą
    C)
    target.style.<cssSavybėPavadinimas> = <cssSavybėsReikšmė>; - nustato <target> CSS savybę
    D)
    target.addEventListener(<įKokįĮvykįReaguoti>, <kokiąFunkcijąVykdyti>) - uždeda klausiklį
    E)
    target.appendChild(<KąPridėti>) - Prideda  elementą <KąPridėti>) į <target> elemento galą.
*/