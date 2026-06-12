//initialize array
let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits);

//multidimentional array

let students = [
    ["Ravi", 85],
    ["Sita", 92],
    ["John", 78]
];

console.log(students);
console.log(students[1][0]);
console.log(students[1][1]);

//adding elememnts

let numbers = [10, 20, 30];

numbers.push(40);

console.log(numbers);

let numbers1 = [20, 30, 40];

numbers1.unshift(10);

console.log(numbers1);

let colors = ["Red", "Blue", "Green"];

colors.splice(1, 0, "Yellow");

console.log(colors);

//access array elements

let fruits1 = ["Apple", "Banana", "Mango"];

console.log(fruits1[0]);
console.log(fruits1[2]);

//removing elements

let num = [10, 20, 30, 40];

num.pop();

console.log(num);

let num1 = [10, 20, 30];

num1.shift();

console.log(num1);

let fruits2 = ["Apple", "Banana", "Mango", "Orange"];

fruits2.splice(1, 1);

console.log(fruits2);

//array length

let ww=[1,2,3,4,5,6,7,8,0,8,87,7,7];
console.log(ww.length)

//element position

let rr = [1,2,3,4,5,67,88];
console.log(rr.indexOf(88));

//chech element exist
let fruits4 = ["Apple", "Banana", "Mango"];

console.log(fruits4.includes("Banana"));
console.log(fruits4.includes("Orange"));

//making array zero

let arr = [1, 2, 3, 4];

arr.length = 0;

console.log(arr);

let arr = [1, 2, 3, 4];

arr = [];

console.log(arr);

//combining array

let ar1 = [1, 2, 3];
let ar2 = [4, 5, 6];

let result1 = arr1.concat(arr2);

console.log(result);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let result = [...arr1, ...arr2];

console.log(result);

//loops
let fruits5 = ["Apple", "Banana", "Mango"];

for (let fruit of fruits5) {
    console.log(fruit);
}

let fruits6 = ["Apple", "Banana", "Mango"];

fruits6.forEach(function(fruit, index) {
    console.log(index, fruit);
});