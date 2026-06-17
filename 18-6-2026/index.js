let student = {
    name: "Mouli",
    age: 22,
    branch: "ECE"
};

for(let key in student){
    console.log(key + " : " + student[key]);
}

let employee = {
    id: 101,
    name: "Rahul",
    salary: 50000
};

for(let key in employee){
    console.log(`${key} = ${employee[key]}`);
}

let today = new Date();

console.log(today);

let today = new Date();

console.log("Year:", today.getFullYear());
console.log("Month:", today.getMonth() + 1);
console.log("Date:", today.getDate());
console.log("Day:", today.getDay());

let name = "Mouli";
let age = 22;

console.log(`My name is ${name} and I am ${age} years old.`);

let product = "Laptop";
let price = 50000;

console.log(`The price of ${product} is ₹${price}`);

console.log(Math.round(5.7));

console.log(Math.ceil(5.1));

console.log(Math.sqrt(64));

console.log(Math.pow(2, 4));

console.log(Math.max(10, 20, 30));
console.log(Math.min(10, 20, 30));

let str = "JavaScript";

console.log(str.length);

let str = "hello";

console.log(str.toUpperCase());

let str = "HELLO";

console.log(str.toLowerCase());

let str = "JavaScript";

console.log(str.includes("Script"));

let str = "I like Java";

console.log(str.replace("Java", "JavaScript"));

let str = "apple,mango,banana";

console.log(str.split(","));

u