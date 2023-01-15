//Polymorphism. 
class Rectangle {
    width;
    height;

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    //2.1   -   figure.string
    get string() {
        return `Rectangle ${this.width} ${this.height}`
    }
    //2.2   - figure.area

    get area() {
        return this.width * this.height
    }
    //2.3   - figure.perimeter
    get perimeter() {
        return 2 * (this.width + this.height)
    }

}



class circle {
    radius;

    constructor(radius) {
        this.radius = radius;
    }
    //2.1   -   figure.string
    get string() {
        return `Circle Radius R-${this.radius}`
    }
    //2.2   - figure.area
    get area() {
        return Math.PI * this.radius ** 2;
    }
    //2.3   - figure.perimeter
    get perimeter() {
        return 2 * Math.PI * this.radius;
    }

}

const rectangles = [
    new Rectangle(10, 10),
    new Rectangle(20, 20),
    new Rectangle(10, 15),
]

const circles = [
    new circle(10),
    new circle(20),
    new circle(15),
]

const figures = [
    ...rectangles,
    ...circles
]

console.log(figures)

//Polymorphysm - Using the same functions/methods to proccess multiple types of input, or to achieve different results.
//Polymorphic functions/methods can do different functions/methods/getters depending on use case.

console.log("%cAreas:", "font-size: 20px")
                                            //[1.1]            //[1.2]
figures.forEach((figure) => console.log(`${figure.string}:  ${figure.area}`))
console.log("%cPerimeter:", "font-size: 20px")
                                            //[1.1]            //[1.3]
figures.forEach((figure) => console.log(`${figure.string}:  ${figure.perimeter}`))
