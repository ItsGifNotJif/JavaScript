/*
  TODO: IŠVERSKITE ŠĮ TEKSTĄ - ANGLIŠKAI
  Inkapsuliacija - tai objekto (arba klasės) savybių (arba metodų) prieinamumo valdymas;
  public - savybės ar metodai yra pasiekiami, ir gali būti keičiami bei naudojami iš bet kur
  private (#) - savybės ar metodai yra pasiekiami ir gali būti keičiami bei naudojami tik klasės metoduose, bei get'eriuose ir set'eriuose.

  Get'eteris (getter) - tai metodas kuris iškviečiamas tarsi savybė ir yra naudojamas reikšmei gauti. 
    // Get'erio metu yra pasirūpinama, jog nebūtų atiduota tiesioginė reikšmės nuoroda.

  Set'eteris (setter) - tai metodas kuris iškviečiamas tarsi savybė ir yra naudojamas reikšmei nustatyti. 
    Set'erio funkcijos metu yra atliekami naujos reikšmės patikrinimai
*/
class Celebration {
  #title;
  #data;
  #description;

  constructor(title, data, description) {
    this.#title = title;
    this.#data = data;
    this.#description = description;
  }

  checkTitle(newTitle) {
    if (typeof newTitle !== "string") throw new Error("Title isn't a string");
    if (newTitle.length < 4) throw new Error("Title of celebration is too short")
    if (newTitle.length > 32) throw new Error("Title of celebration is too long")
    this.#title = newTitle
  }

  daysLeft() {
    const currentDate = new Date();
    let leftMillSecs = this.#data.getTime() - currentDate.getTime();
    const days = leftMillSecs / 1000 / 60 / 60 / 24;
    const roundedDays = Math.floor(days)
    console.log(`Time to ${this.#title} is: `, roundedDays)
  }



}

const celebrations = [
  new Celebration("Today", new Date(2023, 01, 12)),
  new Celebration("Tr", new Date(2023, 05, 12)),
  new Celebration("Ys", new Date(2021, 01, 12))
]

celebrations.forEach(celebration => celebration.daysLeft())


// ------------------------------------- Bendri kintamieji------------------------------------------

// ----------------------------------------- Užduotys-----------------------------------------------
console.group('1. Inkapsuliuokite Celebration.title reikšmę, jog ji simbolių darinys nuo 4 iki 32 ismbolių');
{


}
console.groupEnd();

console.group('2. Inkapsuliuokite Celebration.date reikšmę.');
{
}
console.groupEnd();

console.group('3. Sukurkite savybę Celebration.description ir ją inkapsuliuokite');
{
}
console.groupEnd();

console.group('4. Sukurkite metodą Celebration.daysLeft kuris atspausdintų likusių dienų skaičių');
{
}
console.groupEnd();