console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{   function byPrice(drink1, drink2){
    if(drink1.price < drink2.price) return -1;
    if(drink1.price > drink2.price) return 1;
    return 0;
}
    function sortDrinkByPrice(drinks){
        return drinks.sort(byPrice);
    }

    const drinks = [
        {name: "lemonade", price: 50},
        {name: "lime", price: 10}
    ]      
    const sortedDrinks = sortDrinkByPrice(drinks);
    console.table(sortedDrinks);
}
console.groupEnd()

console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{   function addName(obj, name, value){
    obj[name] = value;
    return obj;
}

    console.log({ 
        'addName: ({}, "Brutus", 300)' : addName({}, "Brutus", 300),
        'addName: ({ piano: 500 }, "Brutus", 400)' : addName({ piano: 500 }, "Brutus", 400),
        'addName: ({ piano: 500, stereo: 300 }, "Caligula", 440)' : addName({ piano: 500, stereo: 300 }, "Caligula", 440),
    })
}   
console.groupEnd();

console.groupCollapsed('3 - https://edabit.com/challenge/48EJWLhF224na8po3');
{ function generation(a, b){
    if(b === "m"){
        switch(a){
           case 3: return 'great grandson';
           case 2: return 'grandson';
           case 1: return 'son';
           case 0: return 'me!';
           case -1: return 'father';
           case -2: return 'grandfather';
           case -3: return 'great grandfather';
        }    
        }
        else{
            switch(a){
            case 3: return 'great granddaughter';
            case 2: return 'granddaughter';
            case 1: return 'daughter';
            case 0: return 'me!';
            case -1: return 'mother';
            case -2: return 'grandmother';
            case -3: return 'great grandmother';
        }
        }
}

}
console.groupEnd();

console.groupCollapsed('4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX');
{   function maximumScore(tiles) {
    let sum = 0;
    for (let i = 0; i < tiles.length; i++){       
        sum += tiles[i].score;
    }
    return sum;   
}
	const tiles1 = [
        {tile: 'N', score: 1},
        {tile: 'K', score: 5},
        {tile: 'Z', score: 10},
        {tile: 'X', score: 8},
        {tile: 'D', score: 2},
        {tile: 'A', score: 1},
        {tile: 'E', score: 1},
    ];

    const tiles2 = [
        {tile: 'B', score: 2},
        {tile: 'V', score: 4},
        {tile: 'F', score: 4},
        {tile: 'U', score: 1},
        {tile: 'D', score: 2},
        {tile: 'O', score: 1},
        {tile: 'U', score: 1},
    ];

    console.table(maximumScore(tiles1));
    console.table(maximumScore(tiles2));
}
console.groupEnd();

console.groupCollapsed('5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD');
{ function calculateDifference(obj, limit){
    const valueArr = Object.values(obj);
    console.log(valueArr);
    let sum = 0;

    for(let i = 0; i < valueArr.length; i += 1){
        sum += valueArr[i];
    }
    return sum - limit;
}
    console.table(calculateDifference);
    console.log({ 
        'calculateDifference({ "baseball bat": 20 }, 5)' : calculateDifference({ "baseball bat": 20 }, 5),
        'calculateDifference({ skate: 10, painting: 20 }, 19)' : calculateDifference({ skate: 10, painting: 20 }, 19),
        'calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400)' : calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400)
    })
}
console.groupEnd();

console.groupCollapsed('6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM');
{ function toArray(obj){
    return Object.entries(obj);
}
    console.log({
        'toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]' : toArray({ a: 1, b: 2 }),
        'toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]' : toArray({ shrimp: 15, tots: 12 }),
        'toArray({}) ➞ []' : toArray({})
    })
}
console.groupEnd();

console.groupCollapsed('7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip');
{       function inkLevels(inks){
        const valueArr = Object.values(inks);
        let min = valueArr[0];

        for (let i = 0; i < valueArr.length; i++){
            if(valueArr[i] < min){
                min = (valueArr[i]);
            }
        }
        
        return min;
    }
}   console.table({
    'inkLevels({"cyan": 23, "magenta": 12, "yellow": 10}) ➞ 10' : inkLevels({"cyan": 23, "magenta": 12, "yellow": 10}),
    'inkLevels({"cyan": 432, "magenta": 543, "yellow": 777}) ➞ 432' : inkLevels({"cyan": 432, "magenta": 543, "yellow": 777}),
    'inkLevels({"cyan": 700, "magenta": 700, "yellow": 0}) ➞ 10' : inkLevels({"cyan": 700, "magenta": 700, "yellow": 0}),
})
console.groupEnd();

console.groupCollapsed('8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak');
{ function calculateLosses(obj) {
    let sum = 0;
    for(let key in obj){
        sum += obj[key];
    }
    return sum > 0 ? sum : 'lucky you';
    
}   console.table({
    'calculateLosses({tv: 30, skate: 20, stereo: 50})': calculateLosses({tv: 30, skate: 20, stereo: 50}),
    'calculateLosses({painting: 20000)': calculateLosses({painting: 20000}),
    'calculateLosses({})': calculateLosses({}),
})

}
console.groupEnd();

