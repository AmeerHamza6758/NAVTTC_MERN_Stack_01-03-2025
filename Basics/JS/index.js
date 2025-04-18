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
        console.log('Tuesday');
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

console.log('------------------------------');

// addingValues()

console.log("Top part")
console.log('Bottom Part')


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

console.log(unNamedFunc());

// Parameterized functions
function ageYearCalculator(age) {
    // STatements
    const currentYear = 2025
    let calculatedAge = currentYear - age;
    console.log(`You are ${calculatedAge} years OLD.`);
    return calculatedAge;
}
let userAge = 2003;
ageYearCalculator(userAge)
let calculatedUserAge = ageYearCalculator(2000)
console.log(calculatedUserAge, "The calculated Age...");


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
console.log('Document', documentData.textContent)

// document.title ='Hello'
documentData.innerText="Ameer Hamza"

// https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/