async function myFetch() {
    let response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json",
        },
    });

    let data = await response.json();
    return data;
}



myFetch().then(data => {
    console.log(data.joke)
});