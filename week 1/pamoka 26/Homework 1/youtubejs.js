// Datatypes: String, Number, Boolean, null, undefined

// const  name='John';
// const age  = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof rating);
// console.log(typeof isCool);
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);


// const name = 'John';
// const age = 30;




// Concatenation

// console.log('My name is ' + name + ' and I am ' + age);

// Template String

// console.log(`My Name is ${name} and I am ${age}`);

// const hello = `My Name is ${name} and I am ${age}`;
// console.log(hello);

// const s = 'Hello World';

// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.substring(0, 5));
// console.log(s.substring(0, 5).toUpperCase());
// console.log(s.split(''));

// const s = 'technology, computers, it, code';

// console.log(s.split(', '));




// Arrays - variables that hold multiple values


// const numbers = new Array(1, 2, 3, 4, 5);
// console.log(numbers);

// const fruits = ['apples', 'oranges', 'pears', 10, true];
// console.log(fruits);

// fruits[3]  = 'grapes';

// fruits.push('mangos');

// fruits.unshift('strawberries');

// fruits.pop();

// console.log(Array.isArray(fruits));

// console.log(Array.isArray('hello'));

// console.log(fruits.indexOf('oranges'));

// console.log(fruits);

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address:{
//         street: '50 main st',
//         city: 'Boston',
//         state: 'MA'
//     }
// }

// const { firstName, lastName, address: {city}} = person;
// console.log(firstName);

// console.log(person);
// console.log(person.firstName, person.lastName);
// console.log(person.hobbies[1]);
// console.log(person.address.city);

// person.email = 'john@gmail.com';
// console.log(person);

// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'dentist appt',
//         isCompleted: false
//     }
// ];

// console.log(todos);

// console.log(todos[1].text);

// const todoJSON = JSON.stringify(todos);

// console.log(todoJSON);




// For Loop

// for(let i =0; i <= 10; i++){  
//     console.log('For Loop Number: ${i}');
// }




// While Loop

// let i = 0;
// while(i < 10){
//     console.log('While Loop Number: ${i}');
//     i++;
// }

// for(let i =0; i <= todos.length; i++){  
//     console.log(todos[i].text);
// }

// for(let todo of todos){
//     console.log(todo.text);
// }
// for(let todo of todos){
//     console.log(todo.id);
// }





// forEach, map, filter

// todos.forEach(function(todo){
//     console.log(todo.text);
// });

// const todoText = todos.map(function(todo){
//     return todo.text;
// })
// console.log(todoText);

// const todoCompleted = todos.filter(function(todo){
//     return todo.isCompleted === true;
// });
// console.log(todoCompleted);

// const todoCompleted = todos.filter(function(todo){
//     return todo.isCompleted === true;
// }).map(function(todo){
//     return todo.text;
// })
// console.log(todoCompleted);


// Conditionals

// const x = 20;
// const y = 10;

// if(x == 10){
//     console.log('x is 10');
// }else if(x > 10){
//     console.log('x is greater than 10');
// }
// else{
//     console.log('x is less than 10')
// }

// const x = 41;
// const y = 101;

// if(x > 5 && y > 10){
//     console.log('x is more than 5 or y is more than 10');
// }


// const x = 11;

// const color = x > 10 ? 'red' : 'blue'

// console.log(color);


// const x = 2;

// const color = 'green';

// switch(color){
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue': 
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is NOT red or blue');
//         break;
// }



// Functions

// function addNums(num1, num2){
//     console.log(num1+num2)
// }

// addNums(5,4);


// function addNums(num1 = 1, num2 = 1){
//     console.log(num1+num2)
// }

// addNums(5,5);

// function addNums(num1 = 1, num2 = 1){
//     return num1 + num2;
// }

// console.log(addNums(5,5));

// const addNums = (num1 = 1, num2 = 1) => {
//     console.log (num1  + num2);
// }

// addNums(5, 5);

// const addNums = (num1 = 1, num2 = 1) => console.log(num1  +num2);

// addNums(5, 5);

// const addNums = (num1 = 1, num2 = 1) => num1 + num2;

// console.log(addNums(5, 5));

// const addNums = num1 => num1 + 5;

// console.log(addNums(5));


// Object oriented Programming

// Constructor Function
// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//     this.getBirthYear = function (){
//         return this.dob.getFullYear();
//     }
//     this.getFullname = function(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// Person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullname = function(){
//     return `${this.firstName} ${this.lastName}`;
// }

// Class
// class Person3 {
//     constructor (firstName, lastName, dob){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }
    
//     getBirthYear(){
//         return this.dob.getFullYear()
//     }
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

//Instantiate object

// const person1 = new Person('John', 'Doe', '4-3-1980');
// const person2 = new Person('Mary', 'Smith', '2-1-1982');

// console.log(person1);
// console.log(person2.firstName);
// console.log(person2.dob.getFullYear());

// console.log(person1.getBirthYear());
// console.log(person1.getFullname());

// console.log(person1);
// console.log(person2.getFullname());

