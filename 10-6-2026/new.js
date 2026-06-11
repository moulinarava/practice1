let message = "Hello from Global Scope";

function showMessage() {
    console.log(message);
}

showMessage();
console.log(message);

function displayName() {
    let name = "Chandra Mouli";
    console.log(name);
}

displayName();
// console.log(name);

if (true) {
    let age = 22;
    console.log(age);
}

// console.log(age);

