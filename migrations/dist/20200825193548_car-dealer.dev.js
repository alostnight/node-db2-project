"use strict";

exports.up = function _callee(knex) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(knex.schema.createTableIfNotExists("cars", function (table) {
            table.increments("id");
            table.text("Vin").notNull().unique();
            table.text("Make").notNull();
            table.text("Model").notNull();
            table.decimal("Mileage").notNull();
            table["boolean"]("Clean").defaultTo(true);
            table["boolean"]("Salvage").defaultTo(false);
          }));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.down = function _callee2(knex) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(knex.schema.dropTableIfExists("cars"));

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
};