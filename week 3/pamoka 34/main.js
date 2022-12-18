{

function double(x){
    return x * 2;
}

const a = double(2);
const b = double(3);

console.table({
    a,
    b
})
}

{
    var double = function (x){
        return x * 2
    }


    
    const a = double(2);
    const b = double(3);
    
    console.table({
        a,
        b
    })
}

{
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    const doubledNumbers = numbers.map((x) => x * 2);
    
    console.table({ doubledNumbers});
}