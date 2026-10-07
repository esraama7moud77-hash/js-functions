//1- function that takes number, determine whether it is even or odd.

function checkEvenOdd(number = 0) {
    if (number % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}
checkEvenOdd(1);
checkEvenOdd(2);

// 2- function that takes num1 and num2, print the larger number.

function printLarger(num1 = 0, num2 = 0) {
    if (num1 > num2) {
        console.log(num1);
    } else if (num2 > num1) {
        console.log(num2);
    } else {
        console.log("الرقمين متساويين");
    }
}
printLarger(5, 10)
printLarger(10, 5)
printLarger(10, 10)

// 3- function that takes birth year, calculate age.

function calculateAge(birthYear = 0) {
    var currentYear = 2026;
    var age = currentYear - birthYear;
    
    console.log(age);
}
calculateAge (2004)
 
// 4- function that takes number, print the odd number from 1 to the given number.

function printOddNumbers(start = 1, end = 0) {
    if (start > end) {
        console.log("Start Must be smaller than end");
        return; 
    }

    for (var i = start; i <= end; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
printOddNumbers(1, 10);

// 5- function that number, calculate the sumption from 1 to the given number.

function calculateSummation(start = 1, end = 0) {
    if (start > end) {
         console.log("Start Must be smaller than end");
        return;
    }
     var sum = 0;
    for (var i = start; i <= end; i++) {
        sum = sum + i;
    }
    console.log(sum);
}
calculateSummation(1, 5)