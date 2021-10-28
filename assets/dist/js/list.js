"use strict";

// Element variables
var list = document.querySelector(".List"); // Array variables

var itemArray = []; // Loop

for (var i = 1; i <= 3; i++) {
  var star = "https://swapi.dev/api/people/".concat(i);
  axios.get(star).then(function (response) {
    var data = response.data;
    itemArray.push(data.name); // Create: item

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
    title.innerHTML = "\n                <p class=\"List__text\">\n                    Name: ".concat(data.name, "\n                </p>\n            "); // Swipe left

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
    });
  });
}

;