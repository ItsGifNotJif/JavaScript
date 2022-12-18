
// Exercise 1 
console.group('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{  function returnFirstElement(numbers){
    return numbers[0];
}
    const result = returnFirstElement([1, 2, 3, 22, 41]);
    const result2 = returnFirstElement(['one', 'two', 'three']);
    const result3 = returnFirstElement(['asdasd', 54, 'sdd']);
    const result4 = returnFirstElement([20, -490, 4402, 2020, 760]);

    console.log(result);
    console.log(result2);
    console.log(result3);
    console.log(result4);
} 
console.groupEnd();



//Exercise 2 
console.group('2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina.');
{ function deleteFirstElement(array){
    const firstElement = array[0];
    for(let x = 0; x < array.length-1; x++){
        array[x] = array[x+1];
    }
    return firstElement;
}
    const firstArray = deleteFirstElement([1, 2, 3, 4, 5, 6, 7, 8]);
    console.log(firstArray);
}
console.groupEnd();



// Exercise 3 
console.group('3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{   const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 21124, 255555, 5181295712985715, 'asadsd'];
    const x = array[array.length-1]; 
    function returnLastElement(){ 
    return x;
    }
    console.log(returnLastElement([x]));
}
console.groupEnd();



// Exercise 4
console.group('4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina.');
{    function deleteLastElement(array){
        let y = array[array.length-1];
        array.length = array.length-1;
        return y;
    }
    
    const lastRetun = deleteLastElement([1, 24, 90, 42, 124, 21, 512, 52212, 245]);
    console.log(lastRetun);
 }

console.groupEnd();


// Exercise 5 

console.group('5. Parašykite funkciją, kuri grąžina elementų kiekį masyve');
{   function arrayLength(){
    
}
    const totalLength = arrayLength([42, 1245, 5995, 129051590, 522, 121, 512, 125532, 23509]);
    console.log();
}
console.groupEnd();