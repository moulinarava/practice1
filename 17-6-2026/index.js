let student1 = {
    name: "Mouli",
    age: 22
};

let student2 = student1; // Normal Copy

student2.age = 23;

console.log(student1);
console.log(student2);

let student3 = {
    name: "Mouli",
    age: 22
};

let student4 = { ...student3 };

student2.age = 23;

console.log(student3);
console.log(student4);

let student5 = {
    name: "Mouli",
    age: 22
};

let student6= Object.assign({}, student5);

student2.age = 23;

console.log(student5);
console.log(student6);

let student7 = {
    name: "Mouli",
    address: {
        city: "Kakinada"
    }
};

let student8 = JSON.parse(JSON.stringify(student7));

student2.address.city = "Hyderabad";

console.log(student7);
console.log(student8);

