class Student {
    constructor(name) {
        this.name = name;
    }

    display() {
        console.log(this.name);
    }
}

const s1 = new Student("Mouli");
s1.display();

//constructor program

class Employee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

const e1 = new Employee(101, "Chandra");
console.log(e1.id);
console.log(e1.name);

//multiple objects

class Mobile {
    constructor(name) {
        this.name = name;
    }

    show() {
        console.log(this.name);
    }
}

const m1 = new Mobile("Samsung");
const m2 = new Mobile("Apple");

m1.show();
m2.show();

//inheritance

class Animal {
    sound() {
        console.log("Animal Sound");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog Barking");
    }
}

const d1 = new Dog();
d1.sound();
d1.bark();

//method overriding

class Parent {
    show() {
        console.log("Parent Method");
    }
}

class Child extends Parent {
    show() {
        console.log("Child Method");
    }
}

const c1 = new Child();
c1.show();

//getter and setter methods

class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}

const p1 = new Person("Ram");
console.log(p1.name);

p1.name = "Krishna";
console.log(p1.name);

