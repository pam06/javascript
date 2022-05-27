//Calculation of vat price.

// let amount = Number(prompt("Enter the raw price:"));
let amount = 1200;
const vatRate = 20.6/100;
const finalPrice = amount * (1 + vatRate);
console.log(`The final price: ${finalPrice}`);

//Conversion of celsius to fahrenheit.
// [F] = ([C] * 9/5) + 32
// let celsius = Number(prompt("Enter the degree in celsius:"));
let celsius = 40;
const fahrenheit = (celsius * 9/5) + 32;
console.log(fahrenheit);

//Swapping of two numbers
let number1 = 1;
let number2 = 2;
let temp;

temp = number1;
number1 = number2;
number2 = temp;

console.log(`Swapped numbers are num1 = ${number1} , num2 = ${number2}`);

//what is the output of the code.
const y = 7;
console.log(String(y) + 1);

