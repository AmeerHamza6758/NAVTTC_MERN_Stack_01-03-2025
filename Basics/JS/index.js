//scopes //variable scope
// Primitive
// Number 23454321
// String "" '' `984jcjbb j#$56`
// Boolean true/false
// undefined
// null
// Symbol
// BigInt

// Non-primitive
// Arrays
// Object
let xyz = undefined
const myName = "Ameer Hamza"
const contact = 9385757
const checkBool = true

// console.log('The Type is', typeof (contact));

// Non-primitive
const array = [23, 45, 678, "xyz", true]

const teacher = {
    name: "Ameer",
    contact: 834654,
    email: 'ameer@gmail.co'
}
// console.log(teacher)


//Arithmetic Operators
// + - / * % ++ -- **
const price1 = 30
const price2 = "30"
// console.log(price1 * price2)


// Assignment Operators.
// = == === += -=
var x = undefined;
var y = undefined;
x = 12

y ??= 10
// x += 10
// console.log('Assignment OPE', x, typeof (x));
// console.log(y);

// comparison Operators
// > < <= >= ??

let a = 12
let b = 12

// console.log(a >= b)

// logical OPE
// && || !

// Conditional Statements
// if else switch

if (a < b) {
    // console.log('So the value of A is greater than B', a);
}
else if (b > a) {
    // console.log('The value of B is greater than A.', b);
}
else {
    // console.log('Both are Equals');
}

const day = 2
switch (day) {
    case 1:
        console.log('Modnay');
        break;
    case 2:
        // console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thrusday');
        break;
    case 5:
        console.log('Frinday');
        break;
    case 6:
        console.log('Satur');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log("Invalid Input");
        break;
}


// Funtions

// function functionName (){

// }
// addingValues()


// addingValues()

// console.log("Top part")
// console.log('Bottom Part')


// Hoisting
// console.log('Hoisting a variable',devCastle);

var devCastle = 24;


function addingValues() {
    let priceOne = 10;
    let priceTwo = 30;
    const sum = priceOne + priceTwo
    console.log(`The total price is: ${sum}`)
}
// const abc = addingValues()
// console.log('This is ABC', abc.priceOne);

const unNamedFunc = () => {
    let priceOne = 10;
    let priceTwo = 30;
    const sum = priceOne + priceTwo
    console.log(`The total price is: ${sum}`)
    return sum
}

// console.log(unNamedFunc());

// Parameterized functions
function ageYearCalculator(age) {
    // STatements
    const currentYear = 2025
    let calculatedAge = currentYear - age;
    // console.log(`You are ${calculatedAge} years OLD.`);
    return calculatedAge;
}
let userAge = 2003;
// ageYearCalculator(userAge)
let calculatedUserAge = ageYearCalculator(2000)
// console.log(calculatedUserAge, "The calculated Age...");


// Loops
// while
// do-while
// for
// for-in (Object)
// for-of (Array)
//Break
//Continue

// while (conditon) {
//statements
//increment
//decrement
// }
let i = 1;
let num = 5;
let itteration = 10;

// while (i <= itteration) {
//     console.log(`${num} * ${i} =${num * i}`);
//     i++
// }

// do-while

// do {
//     console.log(`${num} * ${i} =${num * i}`);
//     i++
// } while (i <= itteration);


// for (let i = 1; i <= itteration; i++) {
//     console.log(`${num} * ${i} =${num * i}`);
// }

// For-in-Loop (Object)

const student = {
    // key:value
    name: "Ameer",
    email: "student@yopmail.com",
    phone: 9847466454,
    rollNo: 323,
    age: 20,
    gender: "Male"
}

for (const key in student) {
    // console.log(key,'These are keys');
    // console.log(`These are keys ${key} and values are ${student[key]}`);
}


// For-Of-Loop

const dressPrices = [2000, 1500, 3000, 4000, 5000, 4500, 3500]
let afterDiscount = []
for (const item of dressPrices) {
    const dis = 0.25 * item
    const afterDisc = item - dis
    afterDiscount.push(afterDisc)
}
// console.log('Hey discounts are here: ', afterDiscount);


// Break and Continue Statements
let start = 1;
let end = 10;

// while (start <= end) {
//     start++
//     if (start === 5) {
//         continue;
//     }
//     console.log('Continue statement', start);
// }

// for (let start = 1; start <= 10; start++) {
//     if (start === 5) {
//         continue;
//     }
//     console.log('Break', start);
// }



// DOM Manipulation
const documentData = document.getElementById("heading")
// console.log('Document', documentData.textContent)

// document.title ='Hello'
documentData.innerText = "Ameer Hamza"

// https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/

const todayDate = new Date()
const month = todayDate.getMinutes()
// console.log('Today date is: ', todayDate);
// console.log('Here is month', month);


//String And Number Methods

let string = 'hello World';
// object.method()
console.log(string.toLowerCase());
console.log(string.toUpperCase());

let username = 'user@gmail.com'
if (!username.includes('@')) {
    console.log('You are not registered..!');
}
console.log(username.length);

console.log(string);

let triString = string.trim()
console.log(triString)

console.log(string.charAt(2));
console.log(string.lastIndexOf('l'))
console.log(string.split(' '));
console.log(string.slice(1, 9));

let first_name = "Ameer";
let last_name = "Hamza"
let full_name = first_name.concat(last_name)

console.log(full_name);

// Number Methods
let marks = "abc"
let result = parseFloat(marks) + 100
console.log(result.toFixed(2));

// console.log(Number(marks));

// Math Methods
// floor, ceil, round, max, min, trunc
let numbers = 11.034
// let resp = Math.ceil(numbers) //upper
// let resp = Math.floor(numbers) //lower
// let resp = Math.round(numbers)
// let resp = Math.trunc(numbers)

// console.log(resp);



// Events in JS

// onclick :Triggered when an element is clicked.
// onmouseover:Fired when the mouse pointer moves over an element.
// onmouseout:Occurs when the mouse pointer leaves an element.
// onchange:Triggered when the value of an input element changes.
// onmousemove:



// let btn = document.getElementById("xyz")
// // console.log(btn.textContent)
// btn.addEventListener("mousemove", function () { alert("This button is Clicked...1") })

// let count = 0
// let countValues = document.getElementById("count")
// function addToCart() {
//     alert('Add')
// }
// function removeToCart() {
//     alert("Remove")
// }

// Array Methods
let basketPrices = [10, 20, 30, 40, 50]

// forEach

// basketPrices.forEach((item) => (
//     // console.log('For',item * 2)
// ))

// Push()
console.log(basketPrices);
basketPrices.push(60, 70)
console.log(basketPrices);

// unShift()
basketPrices.unshift(5)
console.log(basketPrices);

// POP()
basketPrices.pop()
console.log(basketPrices);
// shift
basketPrices.shift()
console.log(basketPrices);

// Slice
// let studentsName = ["Ahmed", "Ali", "Meer", "Fahad", "Zorain", "Waleed", "Aalyan"]
// let newArray = studentsName.slice(2, 5)
// console.log(newArray);

//Splice
// studentsName.splice(5,3)
// console.log(studentsName);

//concat
let array1 = [1, 2, 3, [4, [5, 6]]]
let array2 = [4, 5, 6]

// let array3 = array1.concat(array2)
// console.log(array3);

// Flat
// console.log(array1.flat(2));

// Includes

let studentsName = ["Ahmed", "Waleed", "Ali", "Meer", "Fahad", "Zorain", "Waleed", "Aalyan"]

console.log(studentsName.includes("Meer"));

// IndexOf()
console.log(studentsName.indexOf("Waleed"));

//lastIndexOf
console.log(studentsName.lastIndexOf("Waleed"));

//sort()
let sortArray = [1, 2, 3, 6, 5, 4]
// let newSortArray = sortArray.sort()
// console.log(newSortArray);

// Reverse

console.log(sortArray.reverse());

// Join
// console.log(studentsName.join("---"));

let unitPrices = [5, 30, 40, 50, 20, 60]
// every()
let resulttt = unitPrices.every((items) => items > 10)

console.log('Every Output', resulttt);

let resultt = unitPrices.some((items) => items > 60)
console.log('Some Output', resultt);

// Find()

// map()
let mapArray = unitPrices.map((items) => items * 2)
console.log("Mapped Array", mapArray);


// forEach()
let forEachArray = unitPrices.forEach((items) => items * 2)
console.log('For Each Array', forEachArray);

// filter
let filteredArray = unitPrices.filter((items) => items > 30)
console.log(filteredArray);


// Object Methods.
// keys
// Values
// Entries
// add
// delete
// assign
// freeze

let studentObj = {
    name: "John",
    age: 20,
    email: 'john@yopmail.co'
}

// studentObj.contact = 907654567
// studentObj["contact"] = 907654567

console.log(studentObj, 'New Object');

// Find out Keys
console.log('Key of an OBJ', Object.keys(studentObj));

// Find Values
console.log('Values of an OBJ', Object.values(studentObj));

// Key-value pairs
console.log('Key-value pairs', Object.entries(studentObj))

// Freeze
const Obj1 = {
    name: "Obj-hun"
}
Object.freeze(Obj1)
Obj1.name = 'Updated-hun'

// Seal method
Object.seal(Obj1)

console.log(Obj1, 'Changed')

let xyzz = function () {

}

const nn = 'hamza';

console.log("Hey ${nn}")

const { age, name, xyzzz } = studentObj;
console.log(age, name, xyz)


// Rest Parameter
function myFunc(...a) {
    console.log(a, 'Function console');
}
myFunc(1, 2, 3, 4, 5);

const n = [1, 2, 3, 4, 5];
const ne = [...n, 4, 5];
console.log(ne);

// Set Default parameters of function
function defaulValueFunc(a = 10, b = 20) {
    try {
        console.log(aa, 'Try-Catch')
    } catch (error) {
        console.log(error, ' is error')
    }
}
defaulValueFunc(50)

// Try-catch
// try {

// } catch (error) {
// }


// promises
//async await
// fetch and axios CRUD

// Api Integration

//handle json data
//support promises
//crud methods
//

// function getAllProducts() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then((res) => res.json()).then((data) => console.log(data)).catch((error) => console.log(error))
// }

// async function getAllProducts() {
//     try {
//         const result = await fetch('https://jsonplaceholder.typicode.com/users')
//         const resp =await result.json()
//         // console.log(resp);
//         return {status:true, resp}
//     } catch (error) {
//         console.log(error.message, 'Getting Error');
//     }
// }

console.log('Hello');


