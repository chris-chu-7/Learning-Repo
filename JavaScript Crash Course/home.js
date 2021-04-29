//console.log('hello');

//alert('yo');
//how to write a comment

//variables
//var b = 'smoothie';
//console.log(b);

//var someNumber = 45;
//console.log(someNumber);


//var age = prompt('What is your age');

//document.getElementById('someText').innerHTML = age;

var num1 = 10;

num1 = num1++; 

//decrement num1 by 1
console.log(num1);

num1--; 

//Divide /, multiply *, remainder %
console.log(num1 % 5);

//Increment/decrement by any number you want 
num1+= 10; 

console.log(num1);
//prompt(num1);

function fun() {
    console.log("function is finally running...");
} 

fun();

//let's get an example of a function that takes in a string as an input
/*
For example
name: Chris
return Hello Chris
 */

/*function greeting() {
    var name = prompt("What is your name?");
    var result = 'Hello ' + name;
    console.log(result);
}*/

//greeting();

//var name = prompt('What is your name?');

function greeting(yourName) {
    var result = 'Hello ' + yourName;
    console.log(result);
}

//var namez = prompt('What is your name?');
//greeting(namez);


function sumNumbers(num1, num2) {

    var result = num1 + num2;
    console.log(num1 + num2);

}

sumNumbers(10, 'Qazi');

/*
var num = 0;
while(num < 100) {
    num += 1;
    console.log(num);
}*/

/*
for(let num = 0; num < 100; num++) {
    console.log(num + " for loop");
}*/

//Data Types 
let yourAge = 18; //number
let yourName = 'Bob'; //string
let name = {first: 'Jane', last: 'Doe'}; //object 
let truth = false; //boolean 
let groceries = ['apple', 'banana', 'oranges']; //array 
let random; //undefined
let nothing = null; //null

//Strings
let fruit = 'banana'; 
let moreFruits = 'bannana\napple';

console.log(fruit.length); //length of string
console.log(fruit.indexOf('an')) //1
console.log(fruit.indexOf('q')); //-1
console.log(fruit.slice(2, 4)); //na

console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(',')); //split by a comma
console.log(fruit.split('')); //split by a character.


let fruits = ['banana', 'apple', 'orange', 'pineapple'];
fruits = new Array('banana', 'apple', 'orange', 'pineapple');
alert(fruits[1]);
fruits[0] = 'pear';
console.log(fruits);

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log('to string ', fruits.toString());
console.log(fruits.join(' * '));
console.log(fruits.pop(), fruits);
console.log(fruits.push('blackberries'), fruits);
console.log(fruits[3]); 
fruits[fruits.length] = 'new fruit'; //same as push
console.log(fruits);
fruits.shift(); //remove first element to array
fruits.unshift('kiwi'); //add first element to array
console.log(fruits);

let vegetables = ['asparagus', 'tomato', 'broccoli'];
let allGroceries = fruits.concat(vegetables); //combine array
console.log(allGroceries);
console.log(allGroceries.slice(1,4));
console.log(allGroceries.reverse());

let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2];
console.log(someNumbers.sort(function(a, b){return a-b})); //sorted in ascending order
console.log(someNumbers.sort(function(a, b){return b-a})); //sorted in descending order

let emptyArray = [];

for(let num = 0; num < 10; num++) {
    emptyArray.push(num);
} 

console.log(emptyArray);

//objects

let student = {
        first: 'Chris', 
        last: 'Chu',
        age: 22,
        height: 175,
        studentInfo: function () {
            return  'name: ' +  this.first + ' ' + this.last + '(' + this.age + ')';
        },
};
console.log(student.first);
student.first = 'notChris';
console.log(student.first);
student.age++;
console.log(student.age);
console.log(student.studentInfo());

var age = prompt('what is your age?');

if((age >= 18) && (age <= 35)) {
    status = 'target demo';
    console.log(status);
} else {
    status = 'not my audience';
    console.log(status);
}

//switch statements differentiate between weekday and weekend.
switch(6) {
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend'
        break;
    default: 
        text = 'weekday';
}

console.log(text);