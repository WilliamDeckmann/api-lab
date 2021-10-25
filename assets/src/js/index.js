document.addEventListener("DOMContentLoaded", () => {

    // Element variables
    const buttonElement = document.querySelector(".Button")
    const textElement = document.querySelector(".Container__text")

    // Array variables
    const jokeArray = [
        "joke 1",
        "joke 2",
        "joke 3",
        "joke 4",
        "joke 5"
    ];



    // Tell a joke on button press
    function TellJoke() {
        buttonElement.addEventListener("click", () => {
            textElement.textContent = jokeArray[Math.floor(Math.random()*jokeArray.length)];
        });
    };

    // Initiate the joke
    TellJoke();
});