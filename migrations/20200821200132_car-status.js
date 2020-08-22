
exports.up = async function(knex) {
    await knex.schema.alterTable("cars", (table) => {
        table.boolean("Clean").defaultTo(true)
        table.boolean("Salvage").defaultTo(true)
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("cars")
};
