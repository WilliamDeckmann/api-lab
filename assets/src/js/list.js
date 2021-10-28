// Element variables
const list = document.querySelector(".List");

// Array variables
let itemArray = [];

// Loop
for(let i = 1; i <= 3; i++) {       
    let star = `https://swapi.dev/api/people/${i}`;
    axios.get(star)
        .then(response => {
            let data = response.data;
            itemArray.push(data.name);

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
        });
};