/*
1. Sukurti klasę Automobilis
  - sukurti konstruktorių, su 3 argumentais:
    - marke, modelis, kaina
  - konstruktoriuje aprašyti, jog perduotus argumentus išsaugotume formuojame objekte savybėmis:
    - this.brand
    - this.model
    - this.price
2. Sukurkite 3 skirtingus objektus pagal klasę Automobilis kintamuosiuose:
  - const car1 = new Automobilis(..., ..., ...);
  - const car2 = new Automobilis(..., ..., ...);
  - const car3 = new Automobilis(..., ..., ...);
3. Atsispausdinkite car1, car2 ir car3 kintamuosius. Peržiūrėkite juos konsolėje, panagrinėkite kas yra tie objektai
4. Atspausdinkite visų kintamųjų (kurie rodo į klasės objektus):
  modelius:
    - console.log(car1.model);
    - console.log(car2.model);
    - console.log(car3.model);
  markes:
    - console.log(car1.brand);
    - console.log(car2.???);
    - console.log(???);
  kainas:
    - console.log(???);
    - console.log(???);
    - console.log(???);
5. Padidinkite Automobilis objektų kainas šimtu.
  car1.price = car1.price + 100;
  car2.price = ??? + 100;
  ???
6. Po padidinimo, vėl atsispausdinkite objektus ir pažiūrėkite pakitusias Automobilis objektų savybes.
*/

class Automobilis{
    constructor(brand, model, price){
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
}
const Automobilis1 = new Automobilis("kia", "rio", 2000);
const Automobilis2 = new Automobilis("bmw", "m3", 22000);
const Automobilis3 = new Automobilis("toyota", "supra", 5000);

const allCars = [Automobilis1, Automobilis2, Automobilis3];

console.table(allCars);

console.log(Automobilis1.model)
console.log(Automobilis2.model)
console.log(Automobilis3.model)

console.log(Automobilis1.brand)
console.log(Automobilis2.brand)
console.log(Automobilis3.brand)

console.log(Automobilis1.price)
console.log(Automobilis2.price)
console.log(Automobilis3.price)


Automobilis1.price = Automobilis1.price + 100
Automobilis2.price = Automobilis2.price + 100
Automobilis3.price = Automobilis3.price + 100

console.table(allCars);