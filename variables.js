/*A variable can have characters like $ and _
A name with uppercase and lowercase letters.
 A type => let, var, const.
 */

let a = 3.14;
console.log(a);

const b = 12;
// b = 14 is not possible.
console.log(b);

/*Scope of variables
let and const are blocked-scope
 */

/* Operator Priority high to low
/
*
-
+
 */

/*   ` -> backticks
used for an expression in a string
"Template Literal"
 */

let x = 5, y = 6;
console.log(`${x} + ${y}`); // 5 + 6
console.log(`${x}` + `${y}`); //56
console.log(`${x+y}`); //11


//Conversions
const g = "five" * 2;
console.log(g); //NaN - Not a number

let h = Number("6");
let i = 5
console.log(h + i);

let num = 54;
let boolNum = Boolean(num);
console.log(boolNum); //true