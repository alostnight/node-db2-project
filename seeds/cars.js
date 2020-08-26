exports.seed = async function(knex) {
	await knex("cars").insert([
		{ Vin: "CAA98765027163527", Make: "Ford", Model: "F150", Mileage: "420000", Clean: true, Salvage: false },
		{ Vin: "CAA98765526163585", Make: "Honda", Model: "Accord", Mileage: "424500", Clean: true, Salvage: true },
	])
}