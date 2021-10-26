
document.addEventListener("DOMContentLoaded", () => {
    // URL variables
    const url = window.location.search;
    const params = new URLSearchParams(url);
    const joke = params.get("joke");
    

    
    fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json",
        },
    })
        .then((response) => response.json())
        .then((data) => {

            // Element variables
            const buttonElement = document.querySelector(".Button")
            const textElement = document.querySelector(".Container__text")
    
            // Tell a joke on button press
            buttonElement.addEventListener("click", () => location.href = `index.html?joke=${data.joke}`);
            if (url.includes("?joke")){
                textElement.textContent = joke;
            }
        });
});