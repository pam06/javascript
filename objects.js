//Modelling a circle
var circle = {
    radius: 10,
// Write code here
    circumference() {
        var Circum = 2 * this.radius* Math.PI;
        console.log(Circum.toFixed(2));
    },
    area() {
        var area = Math.PI * (this.radius ** 2);
        console.log(area.toFixed(2));
    }
};
circle.circumference();
circle.area();

//Modelling a bank
var account = {
    name: 'Alex',
    balance: 0,
    credit(value){
        this.balance += value;
        console.log(this.balance);
    },
    describe(){
        console.log(`Your name is ${this.name} and balance is ${this.balance}`);
    }
};

account.credit(1000);
account.describe();

//
var pen = {
    price: 5,
    color: 'blue',
    type: 'ball'
};
pen.price = 10;
pen.company = 'Linc';
console.log(`The pen costs ${pen.price} rupees and it's of ${pen.company} brand.`);
