let legalAge = 20;
let randomAge = 18;

if(legalAge < randomAge){
    console.log('You can enter');
}else{
    console.log('Too young to enter');
}

let vardas="Antanas"
if(vardas.length > 6){
    console.log("Ilgas Vardas")
}else{
    console.log("Trumpas Vardas")
}

let age=25
if(age > 100 || age < 0){
    console.log("Invalid Age");
}else{
    if(age >= 1 && age <= 18){
        console.log("Child");
    }else{
        console.log("Adult");
    }
}

let car="Audi";

if(car === "BMW" || car === "Mini" || car === "Rolls-Royce"){
    console.log("BMW Group");
}else if(car === "VW" || car === "Audi" || car ==="Bentley" || car ==="Bugatti" || car ==="Lamborghini" || car ==="Porsche"){
    console.log("VW Group");
}else(
    console.log("No Manufacturer Found")
)