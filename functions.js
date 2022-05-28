const hello = function(name) {
    const message = `Hello, ${name}!`;
    return message;
};

console.log(hello("Pam"));

//Can be written as
const hel = (name) => {
    const message = `Hello, ${name}!`;
    return message;
};

console.log(hel("Nyx"));


//Can also be written as
const hell = name => `Hello, ${name}!`;

console.log(hell("PamChan"));

//Passing 2 arguments.
let sum = (x, y) => {
    let result = x + y;
    return result;
}

let result1 = sum(12,3);
console.log(result1);

// Square the given number x
function square(x) {
    return x**2;
}
// Call the above function repeatedly to print square of every number
// between 0 and 10
for (let i=1; i<10; i++) {
    console.log(square(i));
}

// Square the given number x
function square1(x) { // using normal function
    return (x*x);
}

const square2 = x => (x*x); // minimalist function

console.log(square1(10));
console.log(square2(10));

//Minimum of two numbers without using the minimum function
function min(x, y){

    if (x>y) {
        return y;
    } else if (x<y) {
        return x;
    } else if (x===y) {
        return x || y;
    }

}

console.log(min(4.5, 5));
console.log(min(19, 9));
console.log(min(1, 1));


//
function calculate(x, op, y){
    if (op === "+") {
        return x+y;
    } else if (op === "-") {
        return x-y;
    } else if (op === "*") {
        return x*y;
    } else if (op === "/") {
        return x/y;
    }
}

console.log(calculate(1, "+", 2));
console.log(calculate(2, "-", 4));
console.log(calculate(3, "+", 6));
console.log(calculate(1, "/", 0));

//Area and circumference of circle
const area = r => (2 * Math.PI * r);
const circum = r => (Math.PI * r * r);
console.log(area(4));
console.log(circum(4));