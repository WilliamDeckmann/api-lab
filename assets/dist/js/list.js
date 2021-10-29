"use strict";

// Element variables
var list = document.querySelector(".List");
var button = document.querySelector(".Remove-all"); // Joke array

var jokeArray = ["0189hNRf2g", "08EQZ8EQukb", "08xHQCdx5Ed"]; // Loop: icanhazdadjoke

for (var i = 0; i < jokeArray.length; i++) {
  var _url = "https://icanhazdadjoke.com/j/".concat(jokeArray[i]);

  axios.get(_url, {
    headers: {
      Accept: "application/json"
    }
  }).then(function (response) {
    // Response variable
    var data = response.data; // Create: item

    var item = document.createElement("li");
    list.appendChild(item);
    item.classList.add("List__item"); // Create: remove

    var remove = document.createElement("li");
    item.appendChild(remove);
    remove.classList.add("List__remove");
    remove.innerHTML = "\n                <p class=\"List__text\">\n                    Remove\n                </p>\n            "; // Create: save

    var save = document.createElement("li");
    item.appendChild(save);
    save.classList.add("List__save");
    save.innerHTML = "\n                <p class=\"List__text\">\n                    Save\n                </p>\n            "; // Create: title

    var title = document.createElement("li");
    item.appendChild(title);
    title.classList.add("List__title");
    title.innerHTML = "\n                <p class=\"List__text\">\n                    ".concat(data.joke, "\n                </p>\n            "); // Swipe left

    var active = false;
    title.addEventListener("click", function () {
      if (active == false) {
        title.style.left = "-300px";
        active = true;
      } else {
        title.style.left = "0px";
        active = false;
      }
    }); // Remove

    remove.addEventListener("click", function () {
      item.remove();
    }); // Remove all

    button.addEventListener("click", function () {
      item.remove();
    });
  })["catch"](function (error) {
    console.log(error);
  }).then(function () {//...
  });
}

; // icanhazdadjoke

var url = "https://icanhazdadjoke.com"; // `https://icanhazdadjoke.com/j/${ joke id }`
// Axios API

axios.get(url, {
  headers: {
    Accept: "application/json"
  }
}).then(function (response) {
  console.log("Axios:");
  console.log(response.data);
}); // Fetch API

fetch(url, {
  headers: {
    Accept: "application/json"
  }
}).then(function (response) {
  return response.json();
}).then(function (data) {
  console.log("Fetch:");
  console.log(data);
});