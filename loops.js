//While loop.
//Generates random number until the number is 10.
let num = Math.floor(Math.random() * 10);
while (num !== 10) {
    console.log(++num);
}

//Carousel
let i = 1
while (i<=10) {
    console.log("Turn number: " + i);
    i++;
}

//Printing exactly 10 odd numbers
let n = 1;
let check = false;
for (let i = 1; check === false; i++) {
  if (i % 2 === 1) {
    console.log(`${i} is odd`);
    if(n === 10)
      check = true;
    n++;
  }
}

//Write a program that continues to ask the user for a number until the entered number is less than or equal to 50.

let number = Math.floor(Math.random() * 100);
while (number >= 50) {
    console.log(`${number}, Try again`);
    number = Math.floor(Math.random() * 100);
}
console.log(`It is ${number} yay you got it`);


//Write the program that asks the user until the terminating number is between 1 and 10.
let a = Math.floor(Math.random() * 100);
while (a < 1 || a > 10) {
    console.log(`${a}, try again`);
    a = Math.floor(Math.random() * 100);
}
console.log(`${a}, Yay you've got it`);

//Printing table
// let x = Number(prompt("Enter the number:"));
let x = 5;
for (let i=1; i<=10; i++) {
    console.log(`${x} x ${i} = ${x*i}`);
}

//FizzBuzz
//divisible by 3 --> Fizz, divisible by 4 -->Buzz

for (let i=1; i<=100; i++) {
    if (i%3 === 0 && i%5 === 0){
        console.log("FizzBuzz");
    } else if (i%3 === 0) {
        console.log("Fizz");
    } else if (i%5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}