"use strict";

// icanhazdadjoke
var ican = "https://icanhazdadjoke.com/";
axios.get(ican).then(function (response) {
  console.log("icanhazdadjoke");
  console.log(response);
})["catch"](function (error) {
  console.log(error);
}).then(function () {// always executed
}); // Pokeapi

var poke = "https://pokeapi.co/api/v2/pokemon/ditto";
axios.get(poke).then(function (response) {
  var data = response.data;
  console.log("pokeapi");
  console.log("Name: ".concat(data.name));
})["catch"](function (error) {
  console.log(error);
}).then(function () {// always executed
});
var star = "https://swapi.dev/api/people/1";
axios.get(star).then(function (response) {
  var data = response.data;
  console.log("swapi");
  console.log("Name: ".concat(data.name));
})["catch"](function (error) {
  console.log(error);
}).then(function () {// always executed
});