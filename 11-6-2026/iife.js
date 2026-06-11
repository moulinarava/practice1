//immediate invoke function expression

(function(){
    console.log("welcome to kakinada")
})();

(function(width,length){
    console.log(width*length)
})(100,2);

(function(a,b){
    console.log(a*b+1)
})(2,7);

(function (price, discount) {
    let finalPrice = price - (price * discount / 100);
    console.log("Final Price:", finalPrice);
})(1000, 10);

//clousure-based program
function studentMarks() {
    let total = 0;

    return function (marks) {
        total += marks;
        console.log("Total Marks:", total);
    };
}

let addMarks = studentMarks();

addMarks(40);
addMarks(30);

function bankAccount(balance) {
    return function (amount) {
        balance += amount;
        console.log("Balance:", balance);
    };
}

let deposit = bankAccount(1000);

deposit(500);
deposit(200);
//functions passed as argument
function add(a, b) {
    return a + b;
}

function calculate(x, y, operation) {
    console.log(operation(x, y));
}

calculate(10, 20, add);

function display(num) {
    console.log(num);
}

let numbers = [1, 2, 3, 4];

numbers.forEach(display);

//FUNCTION RETURNED FROM ANOTHER FUNCTION

function multiplier(num) {
    return function (value) {
        return value * num;
    };
}

let double = multiplier(2);

console.log(double(10));

function greeting(message) {
    return function (name) {
        console.log(message + " " + name);
    };
}

let welcome = greeting("Welcome");

welcome("Mouli");

//pure function
function convert(celsius) {
    return (celsius * 9 / 5) + 32;
}

console.log(convert(30));

function area(length, width) {
    return length * width;
}

console.log(area(5, 4));

//impure function

let count = 0;

function increment() {
    count++;
    return count;
}

console.log(increment());
console.log(increment());

function getTime() {
    return new Date();
}

console.log(getTime());

//compare call apply bind
function details(city, state) {
    console.log(this.name, city, state);
}

const user = {
    name: "Mouli"
};

details.call(user, "Kakinada", "AP");

details.apply(user, ["Kakinada", "AP"]);

const fn = details.bind(user, "Kakinada", "AP");
fn();

//this
const student = {
    name: "Chandra",
    age: 22,

    display() {
        console.log(this.name);
        console.log(this.age);
    }
};

student.display();

function show() {
    console.log(this);
}

show();

const employee = {
    name: "Ravi",

    showName: function () {
        console.log(this.name);
    }
};

employee.showName();

const person = {
    name: "Mouli",

    show: () => {
        console.log(this);
    }
};

person.show();

//methods

const student1 = {
    name: "Chandra"
};

function greet(city) {
    console.log(`Hello ${this.name} from ${city}`);
}

greet.call(student1, "Kakinada");

const student2 = {
    name: "Mouli"
};

function intro(city, country) {
    console.log(`${this.name} lives in ${city}, ${country}`);
}

intro.apply(student2, ["Hyderabad", "India"]);

const person1 = {
    name: "Chandra"
};

function display() {
    console.log(this.name);
}

const newFunction = display.bind(person1);

newFunction();





