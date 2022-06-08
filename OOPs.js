//Multiplayer RPG Game with two players Aurora and Glacius
const aurora = { //object literal aurora with properties name, health, strength, xp and describe()
    name: "Aurora",
    health: 150,
    strength: 25,
    xp: 0,
    describe() {
        return `${this.name} has ${this.health} health points, ${this
            .strength} as strength and ${this.xp} XP points`;
    }
};

// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora gains a strength necklace
aurora.strength += 10;

// Aurora learns a new skill
aurora.xp += 15;

console.log(aurora.describe());

const glacius = {
    name: "Glacius",
    health: 130,
    strength: 30,
    xp: 0,

    // Return the character description
    describe() {
        return `${this.name} has ${this.health} health points, ${this
            .strength} as strength and ${this.xp} XP points`;
    }
};
console.log(glacius.describe());

/* CLASS
A class can only contain methods and not data properties
Class name: Character
methods: constructor(), describe()
 */

class Character {
    constructor(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.xp = 0; // XP is always zero for new characters
    }
    // Return the character description
    describe() {
        return `${this.name} has ${this.health} health points, ${this
            .strength} as strength and ${this.xp} XP points`;
    }
}

//Creating objects once class is created
const Aurora = new Character("Aurora", 150, 25);
const Glacius = new Character("Glacius", 130, 30);

// Aurora is harmed by an arrow
Aurora.health -= 20;

// Aurora gains a strength necklace
Aurora.strength += 10;

// Aurora learns a new skill
Aurora.xp += 15;

console.log(Aurora.describe());
console.log(Glacius.describe());



const anObject = {
    myProp: 2
};

// Create anotherObject using anObject as a prototype
const anotherObject = Object.create(anObject);

console.log(anotherObject.myProp); // 2

/*
// Create an object linked to myPrototypeObject
const myObject = Object.create(myPrototypeObject);
 */

const AnObject = {
    myProp: 2
};

// Create anotherObject using anObject as a prototype
const anotherObject1 = Object.create(anObject);

// Create yetAnotherObject using anotherObject as a prototype
const yetAnotherObject = Object.create(anotherObject1);

// myProp is found in yetAnotherObject's prototype chain (in anObject)
console.log(yetAnotherObject.myProp); // 2

// myOtherProp can't be found in yetAnotherObject's prototype chain
console.log(yetAnotherObject.myOtherProp); // undefined

class Dog{
    // Write - Your - Code
    constructor(name, species, size) {
        this.name = name;
        this.species = species;
        this.size = size;
    }
    bark() {
        if (this.size > 60) {
            console.log(this.name + " is a " + this.species +" dog measuring "+ this.size + "\n" + this.name + " barks: Grrr! Grrr!");
        } else {
            console.log(this.name + " is a " + this.species +" dog measuring "+ this.size + "\n" + this.name + " barks: Woof! Woof!");
        }
    }
}

const object1 = new Dog("Fang", "boarhound", 75);
object1.bark();
const object2 = new Dog("Snowy", "terrier", 22);
object2.bark();