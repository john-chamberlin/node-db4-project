exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('recipe_ingredients').insert([
		{ recipe_id: 1, ingredient_id: 12, ingredient_quantity: '4 cups' },
		{ recipe_id: 1, ingredient_id: 6, ingredient_quantity: '2 tablespoons' },
		{ recipe_id: 1, ingredient_id: 3, ingredient_quantity: '1 cup' },
		{ recipe_id: 2, ingredient_id: 7, ingredient_quantity: '1 cup' },
		{ recipe_id: 2, ingredient_id: 12, ingredient_quantity: '3 cups' }
	])
}
