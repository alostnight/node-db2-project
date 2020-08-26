
exports.up = async function(knex) {
    await knex.schema.createTableIfNotExists("cars", (table) => {
        table.increments("id")
        table.text("Vin").notNull().unique()
        table.text("Make").notNull()
        table.text("Model").notNull()
        table.decimal("Mileage").notNull()
        table.boolean("Clean").defaultTo(true)
        table.boolean("Salvage").defaultTo(false)
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("cars")
};
