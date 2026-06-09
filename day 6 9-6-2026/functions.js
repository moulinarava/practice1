//function declereation
function greet(name) {
    return "Hello " + name;
}

console.log(greet("Mouli"));

//function expression

const add = function(a, b) {
    return a + b;
};

console.log(add(10, 20));

//named function

const factorial = function fact(n) {
    if (n === 0) {
        return 1;
    }
    return n * fact(n - 1);
};

console.log(factorial(5));

//anonymous function

const message = function() {
    console.log("Welcome to JavaScript");
};

message();

//arrow function

const square = (num) => num * num;

console.log(square(6));

const multiply = (a, b) => {
    return a * b;
};

console.log(multiply(4, 5));

//recursive function

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(factorial(5));

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

for (let i = 0; i < 10; i++) {
    console.log(fibonacci(i));
}

function sum(n) {
    if (n === 1) {
        return 1;
    }

    return n + sum(n - 1);
}

console.log(sum(5));

let age =20
let z = age>=18 ? "adult" : "minor";