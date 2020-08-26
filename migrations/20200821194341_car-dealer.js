
exports.up = async function(knex) {
    await knex.schema.createTableIfNotExists("cars", (table) => {
        table.increments("id")
        table.text("Vin", 17).unique()
        table.text("Make").notNull()
        table.text("Model").notNull()
        table.decimal("Mileage").notNull()
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("cars")
};
