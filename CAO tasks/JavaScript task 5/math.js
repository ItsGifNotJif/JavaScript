// Task 1. Ne visos funkcijos turi return statement (nors dažniausiai taip yra). Sukurkite funkciją, į kurią paduosite vardą ir jį pa'alert'ins jį :)
{function alertName(name){
    return name;
}
alert(alertName('I wrote something here'));
}

//Ir ne visos funkcijos turi parametrus - sukurkite funkciją, kuri sugeneruos ir grąžins random skaičių tarp 1 ir 5.
{function returnRandom(min, max){
    return Math.floor( Math.random() * (min - max)) + max;
}
    console.log(returnRandom(1, 6));
}

// Sukurkite funkciją, kuri paims du parametrus - vardą ir pavardę - ir grąžins sumą šių žodžių ilgių (t.y. "Petras", "Slekys" => 12).
{function wordLength(one, two){
    return one.length + two.length;
}
    console.log('=>' + " " + wordLength('azimuth', 'orange'));
}

// Sukurkite funkciją, kuri pagal paduotą skaičių grąžins abecelės raidę (pvz. 0 => A; 1 => B; 2 => C ir t.t.)
{ const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    function returnAlphabetLetter(n){
        return alphabet[n];
    }
    console.log(returnAlphabetLetter([22]));
}

//Sukurkite funkciją, kuri paims tris parametrus (n1, n2, operator). Operator gali būti "sum", "sub", "div", "multi" (matematinės reikšmės - sudėti, atimti, padalinti, padauginti). n1 ir n2 bus skaičiai. Turite grąžinti atsakymą, kur n1 ir n2 atlikta matematinė operacija (pvz.: 5, 1, "sub" => 4; 6, 3, "sum" => 9...)
{ function mathOperation(n1, n2, operator){
    switch(operator){
        case 'sum': return n1 + n2;
        case 'minus': return n1 - n2;
        case 'div': return n1 / n2;;
        case 'multi': return n1 * n2;;
    }
}
    console.log(mathOperation(42, 1254, 'minus'));
}

//Sukurkite dvi funkcijas: viena grąžina random skaičių nuo 1 iki 10 (įskaitant), kita - gautą skaičių pakelia kvadratu. Iškviesk abi funkcijas vienoje eilutėje (pvz. squareNum(generateRandomNumber()) => 1...100).
{ function randomNumberGeneration(min, max){
    return Math.floor( Math.random() * (min - max) + max);
}
    function squareRandomValue(x){
        return x * x;
    }
    function cubedRandomValue(x){
        return x * x * x; 
    }
    const x = randomNumberGeneration(1, 50);
    const y = squareRandomValue(x);
    const q = cubedRandomValue(x);
    console.log('base number:' + " " + x + ' ' + 'squared number:' + ' ' + y + ' ' + 'cubed numer: ' + q);
}