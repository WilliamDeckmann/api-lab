"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// API test with Axios
console.log("Async vs Fetch"); // Make asynchronous API fetch

function myFetch() {
  return _myFetch.apply(this, arguments);
} // Filler space


function _myFetch() {
  _myFetch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var response, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https://icanhazdadjoke.com/", {
              headers: {
                Accept: "application/json"
              }
            });

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _myFetch.apply(this, arguments);
}

console.log("...");
console.log("...");
console.log("..."); // Use fetched API data

myFetch().then(function (data) {
  console.log("Async:");
  console.log(data.joke);
}); // Fetch API

var icanhaz = "https://icanhazdadjoke.com/";
fetch(icanhaz, {
  headers: {
    Accept: "application/json"
  }
}).then(function (response) {
  return response.json();
}).then(function (data) {
  console.log("Fetch:");
  console.log(data.joke);
});