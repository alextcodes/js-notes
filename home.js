
console.log('hello');
// alert('yooo');
// How to write a comment inline





// Variables 
var b = 'smoothie';
console.log(b);

var someNumber = 45;
/* console.log(someNumber);

var age = prompt('What is your age?');
document.getElementById('someText').innerHTML = age;
*/





// Numbers in JavaScript

var num1 = 10;

// Increment num1 by 1
num1++;

// Decrement num1 by 1
num1--;
console.log(num1);

// Divide, multiply, remainder
console.log(num1 % 6);

// Increment/decrement by any number you want
num1 += 10;
console.log(num1);





/* Functions 
1. Create a function
2. Call the function
*/

// Create
function fun() {
    console.log('this is a function');
}

// Call
fun();

/* Let's create a function that takes in the name and 
says hello followed by your name

For example 

Name: "Alex"
Return: "Hello Alex"
*/

function greeting(yourName) {
    var result = 'Hello' + ' ' + yourName; // String Concatenation
    console.log(result);
}

// var name = prompt('What is your name?');
// greeting(name);


// How do arguments work in functions
// How do we add two numbers together in a function?

function sumNumbers(num1, num2) {
    var result = num1 + num2;
    console.log(result);
}

sumNumbers(10, 10);





/* While loops

var num = 0;

while (num < 100) {
    num += 1;
    console.log(num);
}

*/

// For loop
for (let num = 0; num <= 100; num++) {
    console.log(num);
}





// Data types 
let yourAge = 18; // number
let yourName = 'Bob'; // string
let firstLastName = {first: 'Alex', last: 'Thomas'}; // object
let truth = false; // boolean
let groceries = ['apple', 'banana', 'oranges']; // array
let random; // undefined
let nothing = null; // value null





// Strings in JavaScript (common methods)
let fruit = 'banana,apple,orange,blackberry';
let moreFruit = 'banana\napple';            // new line

console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2, 6));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(',')); // split by a comma
console.log(fruit.split('')); // split by a character





// Array 
let fruits = ['banana', 'apple', 'orange', 'pineapples'];
fruits = new Array('banana', 'apple', 'orange', 'pineapples');

console.log(fruits[2]); // access value at index 2nd

fruits[0] = 'pear';
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// array common methods
console.log('to string', fruits.toString());
console.log(fruits.join(' * '));
console.log(fruits.pop(), fruits); // removes last item
console.log(fruits.push('blackberries'), fruits); // appends
console.log(fruits[4]);
fruits[fruits.length] = 'new fruit'; // same as push
console.log(fruits);
fruits.shift(); // remove first element from a array
console.log(fruits);
fruits.unshift('kiwi'); // add first element to an array
console.log(fruits);

let vegetables = ['asparagus', 'tomato', 'broccoli'];
let allGroceries = fruits.concat(vegetables);  // combine arrays
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());

let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2];
console.log(someNumbers.sort(function(a, b) {return a-b}));  // sorted in asending order
console.log(someNumbers.sort(function(a, b) {return b-a}));  // sorted in desending order

let emptyArray = new Array();
for (let num = 0; num <= 10; num++) {
    emptyArray.push(num);
}
console.log(emptyArray);





// Objects in JavaScript
// dictionaries in Python

let student = {
    first: 'Bob', 
    last: 'Marley', 
    age:25, 
    height:170,
    studentInfo: function (){
        return this.first + '\n' + this.last + '\n' + this.age;
    }
};

// console.log(student.first);
// console.log(student.last);
// student.first = 'notBob';  // change value
// console.log(student.first);
student.age++;
console.log(student.age);
console.log(student.studentInfo());





// Conditionals, Control flows (if else)
// 18-35 is my target demographic
// && AND
// || OR

var age = 45;

if ((age >= 18) && (age <= 35) ) {
    status = 'target demo';
    console.log((status));
} else {
    status = 'not my audience'
    console.log(student.first);
}

// Switch statements
// differentiate between weekday vs. weekend
// day 0 --> Sunday --> weekend
// day 1 --> Monday --> weekday
// day 2 --> Tuesday
// day 3 --> Wednesday
// day 4 --> Thursday --> weekday
// day 5 --> Friday --> weekend
// day 6 --> Saturday --> weekend

switch (6) {
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;  
    default:
        text = 'weekday';
}

console.log(text);