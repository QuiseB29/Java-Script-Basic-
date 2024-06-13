let x = 10;
let y = 25;
let sum = x + y;

let a = 48
let b = 23
let total = a - b;


let isGreaterThan = y > x
console.log("quotient", isGreaterThan)

//Assignment operators
let num1= 10;
let num2= 20;


num1 += 5;
num2 -= 3;
num1 *= 2;
num2 /= 2;
num1 %= 7;
num2 **= 2;

//Comparison operators

let isEqual = num1 == num2
console.log("Is num1 equal to num2?", isEqual)

let GreaterThan = num1 > num2
console.log("is num1 Greater than num2?", GreaterThan)

// Task 6: Apply logical operators

// Initial values
 num1 = 10;
  num2 = -5;

// Conditions
let isNum1Positive = num1 > 0;
let isNum2Positive = num2 > 0;
let isNum1Even = num1 % 2 === 0;
let isNum2Even = num2 % 2 === 0;

// Combining conditions using logical operators
let areBothPositive = isNum1Positive && isNum2Positive;
let isAtLeastOneEven = isNum1Even || isNum2Even;







//values

console.log("Sum",sum)
console.log("Difference",total)
console.log("Updated num1:", num1)
console.log("Updated num2:", num2)
console.log("Are both numbers positive?", areBothPositive);
console.log("Is at least one number even?", isAtLeastOneEven);


