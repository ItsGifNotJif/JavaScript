console.groupCollapsed('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{ let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  function returnFirstElement(array){
    return array[0];
  }
  console.log(returnFirstElement(numbers))
}
console.groupEnd();

console.groupCollapsed('2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina.');
{ let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  function shiftFirst(array){
    return array.shift();
  }
  console.log(shiftFirst(numbers))
  console.log(numbers)
}
console.groupEnd();

console.groupCollapsed('3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{ let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    function returnLast(array){
      let last = array.length-1;
      return array[last]
    }
    console.log(returnLast(numbers));
    console.log(numbers)
}
console.groupEnd();

console.groupCollapsed('4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina.');
{ let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  function deleteLastAndReturn(array){
    return array.pop();
  }
  console.log(deleteLastAndReturn(numbers));
  console.log(numbers)
}
console.groupEnd();

console.groupCollapsed('5. Parašykite funkciją, kuri grąžina elementų kiekį masyve');
{  let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  function returnCount(array){
    return array.length
  }
  console.log(returnCount(numbers));
  console.log(numbers)
}
console.groupEnd();

console.groupCollapsed('6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{ let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  function printLastIndex(array){
    let lastIndex = array.length-1;
    return lastIndex;
  }
  console.log(printLastIndex(numbers));
  console.log(numbers)
}
console.groupEnd();

console.groupCollapsed('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{ let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  function printIndexes(array){
    for(let i = 0; i < array.length-1; i++){
      console.log(i); 
    }
  }
  printIndexes(numbers);
}
console.groupEnd();

console.groupCollapsed('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{ let values = ["first", "second", "third", "fourth", "fifth"];
  function printValues(array){
    for(let i = 0; i < array.length; i++){
      console.log(array[i]);
    }
  }
  printValues(values)
}
console.groupEnd();

console.groupCollapsed('9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{ let values = ["first", "second", "third", "fourth", "fifth"];
   function printIndexAndValue(array){
    for(let i = 0; i < array.length; i++){
      console.log(i + " => " + array[i]);
    }
   }
   printIndexAndValue(values)
}
console.groupEnd();

console.groupCollapsed('10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{ let values = ["first", "second", "third", "fourth", "fifth"];
  function reverseArrayValues(array){
    console.log(array.reverse());
  }
  reverseArrayValues(values);
}
console.groupEnd();

console.groupCollapsed('11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{ let values = ["first", "second", "third", "fourth", "fifth"];
  function printInline(array){
    let indexes = "";
    for(let i = 0 ; i < array.length; i++){
      indexes += i + " "; 
    }
    console.log(indexes)
  }
  printInline(values);
} 
console.groupEnd();

console.groupCollapsed('12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48');
{ let values = ["first", "second", "third", "fourth", "fifth"];
  function printInlineValues(array){
    let arrayOfValues = "";
    for(let i = 0; i < array.length; i++){
      arrayOfValues += array[i] + " "
    }
    console.log(arrayOfValues);
  }
  printInlineValues(values);
}
console.groupEnd();

console.groupCollapsed('13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17 [1]=>8 [2]=>88 ..
{ let values = ["first", "second", "third", "fourth", "fifth"];
  function printInlineIndexAndValue(array){
     let inlineArray = '';
     for(let i = 0; i < array.length; i++){
      inlineArray += i + "=>" + array[i] + " "
     }
     console.log(inlineArray)
  }
  printInlineIndexAndValue(values);
}
console.groupEnd();