let marks = [35, 45, 20, 80];

let hasFail = marks.some(mark => mark < 35);

console.log(hasFail);
//
let ages = [18, 22, 25, 30];

let allAdults = ages.every(age => age >= 18);

console.log(allAdults);
//
let colors = ["Red", "Green", "Blue"];

console.log(colors.join(", "));
//
let names = ["John", "David", "Alex"];

names.sort();

console.log(names);
//
let arr = [1, 2, [3, 4], [5, 6]];

let result = arr.flat();

console.log(result);
//
let numbers = [1, 2, 2, 3, 4, 4, 5];

let unique = [...new Set(numbers)];

console.log(unique);
//
let fruits = ["Apple", "Banana", "Mango", "Banana"];

console.log(fruits.indexOf("Banana"));
//
let fruits1 = ["Apple", "Banana", "Mango", "Banana"];

console.log(fruits1.lastIndexOf("Banana"));
//
let numbers1 = [1, 2, 3, 4];

let square = numbers1.map(num => num * num);

console.log(square);
//
let numbers = [10, 15, 20, 25, 30];

let even = numbers.filter(num => num % 2 === 0);

console.log(even);
//
let numbers = [10, 20, 30, 40];

let total = numbers.reduce((sum, num) => sum + num, 0);

console.log(total);

//
let student = {
    name: "Mouli",
    age: 21,
    course: "ECE"
};

console.log(student);
//
let person = new Object();

person.name = "John";
person.age = 25;

console.log(person);
//
let student = {
    name: "Mouli",
    age: 21
};

console.log(student.name);
console.log(student["age"]);
//
