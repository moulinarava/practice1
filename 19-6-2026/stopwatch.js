let seconds = 0;
let intervalId;

function start() {
    intervalId = setInterval(() => {
        seconds++;
        document.getElementById("display").textContent = seconds;
    }, 1000);
}

function stop() {
    clearInterval(intervalId);
}

function reset() {
    clearInterval(intervalId);
    seconds = 0;
    document.getElementById("display").textContent = seconds;
}