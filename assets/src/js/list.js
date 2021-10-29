// Element variables
const list = document.querySelector(".List");
const button = document.querySelector(".Remove-all");



// Joke array
let jokeArray = [
    "0189hNRf2g",
    "08EQZ8EQukb",
    "08xHQCdx5Ed"
];

// Loop: icanhazdadjoke
for(let i = 0; i < jokeArray.length; i++) {       
    let url = `https://icanhazdadjoke.com/j/${jokeArray[i]}`;
    axios.get(url, {
        headers: {
            Accept: "application/json",
        },
    })
        .then(response => {

            // Response variable
            var data = response.data;



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
        console.log(response.data);
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