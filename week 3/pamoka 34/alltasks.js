const flats = [{
    address: 'Vilnakiemio g. 7',
    rooms: [
      { title: 'virtuvė', area: 12 },
      { title: 'svetainė', area: 20 },
      { title: 'tualetas', area: 8 },
      { title: 'miegamasis', area: 16 },
    ],
    city: 'Vilnius',
    price: 120000
  }, {
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
  }, {
    address: 'Valatkų pr. 17',
    rooms: [
      { title: 'virtuvė', area: 18 },
      { title: 'miegamasis', area: 12 },
      { title: 'miegamasis2', area: 16 },
      { title: 'miegamasis2', area: 19 },
    ],
    city: 'Kaunas',
    price: 120000
  }, {
    address: 'Vareikų pr. 17',
    rooms: [
      { title: 'virtuvė', area: 18 },
      { title: 'svetainė', area: 18 },
      { title: 'miegamasis2', area: 16 },
    ],
    city: 'Kaunas',
    price: 90000
  }, {
    address: 'Majonezo pr. 17',
    rooms: [
      { title: 'tualetas', area: 8 },
      { title: 'miegamasis', area: 12 },
      { title: 'miegamasis2', area: 16 },
    ],
    city: 'Kaunas',
    price: 50000
  }, {
    address: 'Saulės g. 7',
    rooms: [
      { title: 'virtuvė', area: 12 },
      { title: 'svetainė', area: 20 },
      { title: 'tualetas', area: 8 },
    ],
    city: 'Klaipėda',
    price: 80000
  }];
  
  console.group('1. Atspausdinkite kiekvieno buto adresą su miestu');
// '<address>, <city>'
{
    console.log(`${flats.address}` + `${flats.city}`)
}
console.groupEnd();
