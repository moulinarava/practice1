let element = document.getElementById("para");

console.log(element.innerText);

let heading = document.getElementById("heading");

console.log(heading.innerText);
console.log(heading.textContent);
console.log(heading.innerHTML);
console.log(heading.id);

let element = document.querySelector(".heading");

console.log(element.innerText);

let elements = document.querySelectorAll(".item");

elements.forEach((item) => {
    console.log(item.innerText);
});

let parent = document.getElementById("parent");

console.log(parent.children);

let title = parent.firstElementChild;

console.log(title.nextElementSibling.innerText);

let heading = document.createElement("h1");

heading.innerText = "New Heading";

console.log(heading);

let heading = document.createElement("h1");

heading.innerText = "New Heading";

console.log(heading);

let container = document.getElementById("container");

let para = document.createElement("p");

para.innerText = "This is a dynamic paragraph.";

container.appendChild(para);

let ul = document.createElement("ul");

for(let i = 1; i <= 3; i++) {
    let li = document.createElement("li");

    li.innerText = "Item " + i;

    ul.appendChild(li);
}

document.body.appendChild(ul);

