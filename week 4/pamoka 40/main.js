function Car(brand, model){
    this.brand = brand;
    this.model = model;
}

Car.prototype.VrumVrum = function(){
    console.log(`${this.brand} ${this.model} darom vrum vrum`)
    
}

punchPunch(){
    console.log(`${this.brand} ${this.model} darom punch punch`)
}

const cars = [
    new Car('Opel', 'Zafyra'),
    new Car('Mazda', 'RX-7'),
    new Car('Subaru', 'Impreza')
]
cars.forEach(c => c.punchPunch());
cars.forEach(c => c.VrumVrum());