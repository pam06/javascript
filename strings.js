//String conversion to lower and upper cases
aString = "New World";
uppercase = aString.toUpperCase();
lowercase = aString.toLowerCase();
console.log(uppercase);
console.log(lowercase);

//We can compare two strings
console.log(aString === "New World"); //true

//string character starts with address 0
console.log(aString[2]);

for (let i=0; i<aString.length; i++) {
    console.log(aString[i]);
}

//convert string to array
let array = Array.from(aString);
console.log(array);

//split()
const alphabets = "A,B,C,D";
const result = alphabets.split("B");
console.log(result[1]);
//indexOf()
//endsWith()
//startsWith()

function length(word){
    console.log(word.length);
}

function lowerCase(word){
    console.log(word.toLowerCase());
}

function upperCase(word){
    console.log(word.toUpperCase());
}

length("hello");
lowerCase("BrEak");
upperCase("LiVe");

//Check number of vowels in a word
function vowels (word){
    // Write - Your - Code
    let a = 0;
    for (let i=0; i<=word.length; i++) {
        if (word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u') {
            a += 1;
        }
    }
    console.log(a);
}

vowels("Loid Forger");
vowels("Anya Forger");
vowels("Yor Forger");

//reverse a string
let word = "Miyamura";
function reverse(word){
    let reverseWord ="";
    for(let i = word.length - 1; i >= 0; i--){
        reverseWord += word[i];
    }
    return reverseWord;
}
console.log(reverse(word));

//String Palindrome
let string1 = "racecar";
let string2 = "radar";
let string3 = "beautiful";
let string4 = "cook";

function palindrome(word){
    let backwardWord = "";
    for (const letter of word){
        // Adding letter at the beginning of the backward string
        backwardWord = letter + backwardWord;
    }
    if (word.toLowerCase() === backwardWord.toLowerCase())
        console.log(true);
    else
        console.log(false);

}
palindrome(string1);
palindrome(string2);
palindrome(string3);
palindrome(string4);

