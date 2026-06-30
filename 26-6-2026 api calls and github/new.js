const button = document.getElementById("btn");
const user = document.getElementById("user");

button.addEventListener("click", async () => {

    try {

        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();

        const person = data.results[0];

        user.innerHTML = `
            <img src="${person.picture.large}">
            <h3>${person.name.first} ${person.name.last}</h3>
            <p>${person.email}</p>
            <p>${person.country}</p>
        `;

    } catch(error){
        user.innerHTML = "Unable to fetch data";
    }

});

//
Working Directory
        ↓

git add

        ↓

Staging Area
        ↓

git commit

        ↓

Local Repository
        ↓

git push

        ↓

GitHub Repository

//
