for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let a = 1;

while (a <= 10) {
    console.log(a);
    a++;
}

let b = 1;

do {
    console.log(b);
    b++;
} while (b <= 10);

let fruits = ["Apple", "Banana", "Mango", "Orange"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let fruit of fruits) {
    console.log(fruit);
}

let person = {
    name: "Chandra",
    age: 21,
    city: "Kakinada"
};

for (let key in person) {
    console.log(key, person[key]);
}

fruits.forEach(function(item, index) {
    console.log(index, item);
});

let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(function(num) {
    return num * 2;
});

console.log(doubled);

let even = numbers.filter(function(num) {
    return num % 2 === 0;
});

console.log(even);

let sum = numbers.reduce(function(total, num) {
    return total + num;
}, 0);

console.log(sum);

let found = numbers.find(function(num) {
    return num > 3;
});

console.log(found);

let index = numbers.findIndex(function(num) {
    return num === 3;
});

console.log(index);

let hasEven = numbers.some(function(num) {
    return num % 2 === 0;
});

console.log(hasEven);

let allPositive = numbers.every(function(num) {
    return num > 0;
});

console.log(allPositive);

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}

for (let i = 1; i <= 5; i++) {
    if (i === 4) {
        break;
    }
    console.log(i);
}

let matrix = [
    [1, 2],
    [3, 4],
    [5, 6]
];

for (let row of matrix) {
    for (let value of row) {
        console.log(value);
    }
}

let randomNumbers = [];

for (let i = 0; i < 10; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100));
}

console.log(randomNumbers);

numbers.forEach((num) => {
    console.log(num * num);
});

let cube = numbers.map((num) => num ** 3);
console.log(cube);

let odd = numbers.filter((num) => num % 2 !== 0);
console.log(odd);

let reverseLoop = [10, 20, 30, 40, 50];

for (let i = reverseLoop.length - 1; i >= 0; i--) {
    console.log(reverseLoop[i]);
}

