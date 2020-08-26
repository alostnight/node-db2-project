"use strict";

exports.seed = function _callee(knex) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(knex("cars").insert([{
            Vin: "CAA98765027163527",
            Make: "Ford",
            Model: "F150",
            Mileage: "420000",
            Clean: true,
            Salvage: false
          }, {
            Vin: "CAA98765526163585",
            Make: "Honda",
            Model: "Accord",
            Mileage: "424500",
            Clean: true,
            Salvage: true
          }]));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};