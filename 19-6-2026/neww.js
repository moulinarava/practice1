console.log("Start");

console.log("Middle");

console.log("End");

console.log("Start");

setTimeout(() => {
    console.log("Inside Timeout");
}, 2000);

console.log("End");
setTimeout(() => {
    console.log("Hello after 3 seconds");
}, 3000);

let timerId = setTimeout(() => {
    console.log("This will not execute");
}, 5000);

clearTimeout(timerId);

console.log("Timeout cancelled");

setInterval(() => {
    console.log("Running...");
}, 1000);

let count = 0;

let intervalId = setInterval(() => {
    count++;
    console.log(count);

    if (count === 5) {
        clearInterval(intervalId);
    }
}, 1000);


