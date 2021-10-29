// Element variables
const list = document.querySelector(".List");
const button = document.querySelector(".Remove-all");

// Array variables
let itemArray = [];

/*
// Loop: Swapi
for(let i = 1; i <= 5; i++) {       
    let star = `https://swapi.dev/api/people/${i}`;
    axios.get(star)
        .then(response => {
            var data = response.data;
            itemArray.push(data.name);
            console.log(data.name);
            


            // Create: item
            let item = document.createElement("li");
            list.appendChild(item);
            item.classList.add("List__item")

            // Create: remove
            let remove = document.createElement("li");
            item.appendChild(remove);
            remove.classList.add("List__remove")
            remove.innerHTML = `
                <p class="List__text">
                    Remove
                </p>
            `;

            // Create: save
            let save = document.createElement("li");
            item.appendChild(save);
            save.classList.add("List__save")
            save.innerHTML = `
                <p class="List__text">
                    Save
                </p>
            `;

            // Create: title
            let title = document.createElement("li");
            item.appendChild(title);
            title.classList.add("List__title")
            title.innerHTML = `
                <p class="List__text">
                    Name: ${data.name}
                </p>
            `;
            
            // Swipe left
            let active = false;
            title.addEventListener("click", () => {
                if(active == false) {
                    title.style.left = "-300px";
                    active = true;
                }else{
                    title.style.left = "0px";
                    active = false;
                }
            });

            // Remove
            remove.addEventListener("click", () => {
                item.remove();
            });

            // Remove all
            button.addEventListener("click", () => {
                item.remove();
            });
        })
        .catch(function(error) {
            console.log(error);
        })
        .then(function() {
            //...
        });
};
*/



// Joke array
let jokeArray = [
    "0189hNRf2g",
    "08EQZ8EQukb",
    "08xHQCdx5Ed"
];

// Loop: icanhazdadjoke
for(let i = 0; i < jokeArray.length; i++) {       
    let ican = `https://icanhazdadjoke.com/j/${jokeArray[i]}`;
    axios.get(ican, {
        headers: {
            Accept: "application/json",
        },
    })
        .then(response => {
            var data = response.data;
            itemArray.push(data.joke);
            console.log(data.joke);
            


            // Create: item
            let item = document.createElement("li");
            list.appendChild(item);
            item.classList.add("List__item")

            // Create: remove
            let remove = document.createElement("li");
            item.appendChild(remove);
            remove.classList.add("List__remove")
            remove.innerHTML = `
                <p class="List__text">
                    Remove
                </p>
            `;

            // Create: save
            let save = document.createElement("li");
            item.appendChild(save);
            save.classList.add("List__save")
            save.innerHTML = `
                <p class="List__text">
                    Save
                </p>
            `;

            // Create: title
            let title = document.createElement("li");
            item.appendChild(title);
            title.classList.add("List__title")
            title.innerHTML = `
                <p class="List__text">
                    ${data.joke}
                </p>
            `;
            
            // Swipe left
            let active = false;
            title.addEventListener("click", () => {
                if(active == false) {
                    title.style.left = "-300px";
                    active = true;
                }else{
                    title.style.left = "0px";
                    active = false;
                }
            });

            // Remove
            remove.addEventListener("click", () => {
                item.remove();
            });

            // Remove all
            button.addEventListener("click", () => {
                item.remove();
            });
        })
        .catch(function(error) {
            console.log(error);
        })
        .then(function() {
            //...
        });
};





// Log the item array
console.log("Item array:");
console.log(itemArray);

// For each test
itemArray.forEach(element => {
    console.log("hey");
});
// For loop test
for(let i = 0; i < itemArray.length; i++) {
    console.log("hey");
}



// icanhazdadjoke
let url = "https://icanhazdadjoke.com"; // `https://icanhazdadjoke.com/j/${ joke id }`

// Axios API
axios.get(url, {
    headers: {
        Accept: "application/json",
    },
})
    .then(response => {
        console.log("Axios:");
        console.log(response);
    });

// Fetch API
fetch(url, {
    headers: {
        Accept: "application/json",
    },
})
    .then((response) => response.json())
    .then((data) => {
        console.log("Fetch:")
        console.log(data)
    });