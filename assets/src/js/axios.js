// icanhazdadjoke
let ican = "https://icanhazdadjoke.com/";
axios.get(ican)
    .then(response => {
        console.log("icanhazdadjoke");
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    })
    .then(function() {
        // always executed
    });



// Pokeapi
let poke = "https://pokeapi.co/api/v2/pokemon/ditto";
axios.get(poke)
    .then(response => {
        let data = response.data;
        console.log("pokeapi");
        console.log(`Name: ${data.name}`);
    })
    .catch(function(error) {
        console.log(error);
    })
    .then(function() {
        // always executed
    });



let star = "https://swapi.dev/api/people/1";     
axios.get(star)
    .then(response => {
        let data = response.data;
        console.log("swapi");
        console.log(`Name: ${data.name}`);
    })
    .catch(function(error) {
        console.log(error);
    })
    .then(function() {
        // always executed
    });