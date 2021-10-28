"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // URL variables
  var url = window.location.search;
  var params = new URLSearchParams(url);
  var joke = params.get("joke");
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json"
    }
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    // Element variables
    var buttonElement = document.querySelector(".Button");
    var textElement = document.querySelector(".Container__text"); // Tell a joke on button press

    buttonElement.addEventListener("click", function () {
      return location.href = "index.html?joke=".concat(data.joke);
    });

    if (url.includes("?joke")) {
      textElement.textContent = joke;
    }
  });
});