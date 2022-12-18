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
  
  const numbers = [1, 15, 9, -9, -8, -7, 2, 8, 51, 6, 5];
  
  
  // Kiekvienai užduočiai padeklaruokite funkciją, kurią panaudosite kviesdami metodą Array.prototype.reduce
  console.group('1. Sudėkite visus skaičius naudojant Array.prototype.reduce');
  {
  
  }
  console.groupEnd();
  
  console.group('2. Sudėkite visus teigiamus skaičius naudojant Array.prototype.reduce');
  {
  
  }
  console.groupEnd();
  
  console.group('3. Sudėkite visus neigiamus skaičius naudojant Array.prototype.reduce');
  {
  
  }
  console.groupEnd();
  
  console.group('4. Suskaičiuokite visų butų kainų sumą');
  {
  
  }
  console.groupEnd();
  
  console.group('5. Suskaičiuokite vieno buto plotą');
  {
  
  }
  console.groupEnd();
  
  console.group('6. Suskaičiuokite visų butų bendrą plotą');
  {
  
  }
  console.groupEnd();



function drinkPriceReducer(prevTotal, drink){
  console.log({prevTotal, drink});
  return prevTotal + drink.price;
}

const drinks = [
  {name: "lemonade", price: 50},
  {name: "lime", price: 5},
  {name: "fanta", price: 40},
  {name: "cola", price: 20},
  {name: "pepsi", price: 30},
];


const avgDrinkPrice = drinks.reduce(drinkPriceReducer) / drinks.length;
console.log(avgDrinkPrice);