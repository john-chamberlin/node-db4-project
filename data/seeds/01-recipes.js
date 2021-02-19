exports.seed = function (knex) {
	return knex('recipes').insert([
		{ recipe_name: 'beef stew' },
		{ recipe_name: 'shrimp gumbo' },
		{ recipe_name: 'steak, potatoes, and green beans' },
		{ recipe_name: 'chicken fried steak' }
	])
}
