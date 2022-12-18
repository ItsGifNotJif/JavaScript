const flats = [
  {
    address: 'Vilnakiemio g. 7',
    rooms: [
      { title: 'virtuvė', area: 12 },
      { title: 'svetainė', area: 20 },
      { title: 'tualetas', area: 8 },
      { title: 'miegamasis', area: 16 },
    ],
    city: 'Vilnius',
    price: 120000
  },

  {
    address: 'Ruginių pr. 17',
    rooms: [
      { title: 'virtuvė', area: 18 },
      { title: 'svetainė', area: 18 },
      { title: 'tualetas', area: 8 },
      { title: 'miegamasis', area: 12 },
      { title: 'miegamasis2', area: 16 },
    ],
    city: 'Kaunas',
    price: 120000
  },

  {
    address: 'Saulės g. 7',
    rooms: [
      { title: 'virtuvė', area: 12 },
      { title: 'svetainė', area: 20 },
      { title: 'tualetas', area: 8 },
    ],
    city: 'Klaipėda',
    price: 80000
  },
];

// Kiekvienai užduočiai padeklaruokite funkciją, kurią panaudosite kviestami metodą Array.prototype.forEach

// Jeigu reikia kaupti/formuoti reikšmę su kiekvienu masyvo elementu, naudojama metodologija:
// 1. padeklaruojamas pradinis elementas
// 2. Pradedamas ciklas
//  2.1 Kiekviena iteracija papildo/keičia padeklaruotą kintamajį [1.]
// 3. atliekamas galutinis formavimas
// 4. grąžinama/spausdinama reikšmė 

console.group('1. Atspausdinkite kiekvieno buto adresą su miestu');
{
  function printFlatAdress(flats) {
    console.log(`Address:" ${flats.address}, "City" : ${flats.city}`);
  }
  flats.forEach(printFlatAdress);
}
console.groupEnd();

console.group('2. Atspausdinkite kiekvieno buto kambarių skaičių');
{
  function printRoomCount(flats) {
    console.log(flats.rooms.length)
  }
  flats.forEach(printRoomCount);
}
console.groupEnd();

console.group('3. Atspausdinkite kiekvieno buto bendrą plotą');
{
  function printFlatArea(flat) {
    let totalArea = 0;
    for (let i = 0; i < flat.rooms.length; i++) {
      totalArea += flat.rooms[i].area;
    }
    console.log(totalArea);
  }
  flats.forEach(printFlatArea);
}
console.groupEnd();