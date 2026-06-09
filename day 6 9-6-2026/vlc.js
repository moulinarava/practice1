var a = 10;
let b = 20;
const c = 30;

a = 100;
b = 200;
//c = 300;

console.log(a);
console.log(b);
console.log(c);

//scope
if (true) {
    var x = 10;
}

console.log(x);

if (true) {
    let y = 20;
}

// console.log(y); 

if (true) {
    const z = 30;
}

// console.log(z); // Error
let age =20
let z = age>=18 ? "adult" : "minor";
console.log(z)

