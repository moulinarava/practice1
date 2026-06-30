export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export const pi = 3.14159;

//
localStorage.setItem("username", "Chandra");
//
const user = localStorage.getItem("username");
console.log(user);
//
localStorage.removeItem("username");
//
sessionStorage.setItem("course", "JavaScript");
//
const course = sessionStorage.getItem("course");
console.log(course);
//
sessionStorage.removeItem("course");
//
localStorage.setItem("theme", "dark");

console.log(localStorage.getItem("theme"));
//
sessionStorage.setItem("token", "ABC123");

console.log(sessionStorage.getItem("token"));
//
try {
    let age = -5;

    if (age < 0) {
        throw new Error("Age cannot be negative");
    }

    console.log(age);
}
catch (error) {
    console.log("Error:", error.message);
}
finally {
    console.log("Execution completed");
}
//
function validatePassword(password) {
    if (password.length < 8) {
        throw new Error("Password must contain at least 8 characters");
    }
    return "Valid Password";
}

try {
    console.log(validatePassword("abc"));
}
catch (error) {
    console.log(error.message);
}
//
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

try {
    console.log(divide(10, 0));
}
catch (error) {
    console.log(error.message);
} 