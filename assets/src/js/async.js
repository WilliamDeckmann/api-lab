// API test with Axios
console.log("List of API data")

// Make asynchronous API fetch
async function myFetch() {
    let response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json",
        },
    });

    let data = await response.json();
    return data;
}

// Filler space
console.log("...")
console.log("...")
console.log("...")

// Use fetched API data
myFetch().then(data => {
    console.log("icanhazdadjoke:")
    console.log(data.joke)
});



// Fetch API
let icanhaz = "https://icanhazdadjoke.com/";
fetch(icanhaz, {
        headers: {
            Accept: "application/json",
        },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Fetch:")
            console.log(data.joke)
        });