// 1-Write a function named greet that takes a name and prints:
// "Hello, <name>!" (Replace <name> with the actual name passed in)

function greet(name) {
    console.log(`Hello ${name}`);
}

greet('Hamza')


// 2-Write a function that checks if a number is divisible by both 2 and 3. If it is, return "Yes", otherwise return "No".
function checkNum(num) {
    if (num % 2 == 0 && num % 3 == 0) {
        return 'Yes'
    } else {
        return 'No'
    }
}
console.log(checkNum(6));
console.log(checkNum(3));

// 3-You are given three numbers: a, b, and c. Write a function to find and return the largest number among them.
function findLargest(a, b, c) {
    if (a > b && a > c) {
        return a
    } else if (b > a && b > c) {
        return b
    }
    else if (c > a && c > b) {
        return c
    }
    else {
        console.log('Invalid Input');

    }
}

// 4-Write a loop that adds all numbers from 1 to 10 and returns the total sum.
function sumOfNumbers() {
    let sum = 0;
    for (let item = 1; item < 10; item++) {
        sum += item
    }
    return sum
}
console.log(sumOfNumbers());

// 5-A student management system stores marks. You need to write a function that takes marks as input and returns:
// •	"Pass" if marks are 35 or more
// •	"Fail" if marks are below 35
// Write the function.

function studentMarks(marks) {
    if (marks >= 35) {
        return 'pass'
    } else if (marks < 35) {
        return "Fail"
    }
}

console.log(studentMarks(35));

// 6-A login system checks if both username and password are entered. If either one is missing, it should show "Please fill all fields."
// Write the condition to validate this.

function loginSystem(username, password) {
    if (!username || !password) {
        console.log('Please fill all fields');
    }
}
loginSystem()

// 7-You are creating a traffic light system. If the signal is "red", print "Stop", if "yellow" print "Wait", and if "green" print "Go".
// Write a function that accepts a color and prints the correct message.

function trafficLight(signal) {
    if (signal === "red") {
        console.log("Stop");
    } else if (signal === "yellow") {
        console.log("Wait");
    } else if (signal === "green") {
        console.log("Go");
    } else {
        console.log("Invalid signal");
    }
}

trafficLight('red')

// 8-In a shopping cart, you want to apply a discount if the total price is more than RS1000.
// Write the logic to apply a 10% discount if the total is more than RS1000.

function applyDiscount(totalPrice) {
    if (price > 1000) {
        let discountedPrice = totalPrice * 0.10
        totalPrice -= discountedPrice
    }
    return totalPrice
}

console.log(applyDiscount(1200));
