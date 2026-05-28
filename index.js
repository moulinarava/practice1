let numbers = [10, 20, 30, 40, 50];
let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(numbers);
console.log(fruits);

console.log(numbers[0]);
console.log(fruits[2]);

fruits[1] = "Grapes";
console.log(fruits);

console.log(numbers.length);

numbers.push(60);
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.unshift(5);
console.log(numbers);

numbers.shift();
console.log(numbers);

console.log(fruits.indexOf("Mango"));

console.log(fruits.includes("Apple"));

console.log(fruits.join(" - "));

console.log(fruits.reverse());

let randomNumbers = [5, 2, 8, 1, 9];
randomNumbers.sort((a, b) => a - b);
console.log(randomNumbers);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combined = arr1.concat(arr2);
console.log(combined);

let sliced = combined.slice(1, 4);
console.log(sliced);

let colors = ["Red", "Blue", "Green", "Yellow"];
colors.splice(1, 2, "Black", "White");
console.log(colors);

numbers.forEach(function(num) {
    console.log(num);
});

let doubled = numbers.map(function(num) {
    return num * 2;
});
console.log(doubled);

let even = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log(even);

let total = numbers.reduce(function(sum, num) {
    return sum + num;
}, 0);
console.log(total);

let found = numbers.find(function(num) {
    return num > 25;
});
console.log(found);

let hasEven = numbers.some(function(num) {
    return num % 2 === 0;
});
console.log(hasEven);

let allPositive = numbers.every(function(num) {
    return num > 0;
});
console.log(allPositive);

let matrix = [
    [1, 2],
    [3, 4],
    [5, 6]
];

console.log(matrix[1][0]);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let fruit of fruits) {
    console.log(fruit);
}

let [a, b, c] = numbers;
console.log(a, b, c);

let copied = [...numbers];
console.log(copied);

let text = "JavaScript";
let chars = Array.from(text);
console.log(chars);

let fillArray = new Array(5).fill(100);
console.log(fillArray);

let nested = [1, 2, [3, 4, [5, 6]]];
console.log(nested.flat(2));

let flatMapped = [1, 2, 3].flatMap(x => [x, x * 2]);
console.log(flatMapped);

let max = Math.max(...numbers);
console.log(max);

let min = Math.min(...numbers);
console.log(min);

let duplicateArray = [1, 2, 2, 3, 4, 4, 5];
let unique = [...new Set(duplicateArray)];
console.log(unique);

console.log(numbers.toString());

console.log(Array.isArray(numbers));

for (let row of matrix) {
    for (let value of row) {
        console.log(value);
    }
}

let randomArray = [];

for (let i = 0; i < 10; i++) {
    randomArray.push(Math.floor(Math.random() * 100));
}

console.log(randomArray);

