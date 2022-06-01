//Better to name arrays in plural form
const animes = ["Naruto", "One piece", {sliceOfLife: "Wotakoi", sliceOfLife1: "Horimiya"}, "FullMetalAlchemistBrotherhood"];
const emptyArray = [];
console.log(emptyArray.length); //0
console.log(animes.length);
console.log(animes[2]);
console.log(animes[3]);
console.log(animes[4]); //undefined

//printing every value
for (let i=0; i<animes.length; i++) {
    console.log(animes[i]);
}

//using forEach loop
function forEachFunc() {
    animes.forEach(anime => {
        console.log(anime);
    });
    console.log("\n");
}

//using for-of loop
function forOf() {
    for (const anime of animes) {
        console.log(anime);
    }
    console.log("\n");
}



//Adding an element to an array
animes.push("Haikyuu");
forOf();

//Add elements in the beginning of array
animes.unshift("Demon Slayer");
forEachFunc();

//Deleting an element from an array
//pop and splice
animes.pop();
console.log(animes.length);
forOf();

animes.splice(0, 3); //Removes first 3 elements starting at index 0
console.log(animes.length);
forEachFunc();

//Sum of arrays

function sumArray(values) {
    values.forEach(s => {
       sum += s;
    });
    return sum;
}
values = [1, 2, 3, 4, 5];
let sum = 0;
console.log(sumArray(values));

//Maximum of numbers
function maxElement(values){
    let max = values[0];
    for (const value of values) {
        if (value > max) {
            max = value;
        }
    }
    return max;
}

console.log(maxElement(values));

//Finding second minimum in an array
let input1 = [11,3,7,2,9,10];
let input2 = [-2,-11,-100,3];

function secondMinimum(values){
    min = Number.MAX_SAFE_INTEGER;
    sndMin = Number.MAX_SAFE_INTEGER;
    for (const value of values) {
        if (value !== min) {
            if(value < min) {
                sndMin = min;
                min = value;
            }
            else if (value < sndMin){
                sndMin = value;
            }
        }
    }
    console.log(sndMin);
}
secondMinimum(input1);
secondMinimum(input2);

//function to add given word in list array except the words ending with ing
var inputs = ['NewYork', 'Sleeping', 'Paris', 'Working'];
var words = {
    list : [],
    addWord(word){
        if(!word.endsWith("ing"))
            this.list.push(word);
        console.log(this.list);
    }
};
for(const input of inputs){
    words.addWord(input);
}

//function to add given word in list array except the words starting with Coc
var inputs = ['Cookies', 'Cool', 'Coconut', 'Cook'];
var words = {
    list : [],
    addWord(word){
        if(!word.startsWith("Coc"))
            this.list.push(word);
        console.log(this.list);
    }
};
for(const input of inputs){
    words.addWord(input);
}