const db = require('../../data/db-config')

function getRecipes() {
	return db('recipes')
}

function getShoppingList(id) {
	return db('recipes as r')
		.join('recipe_ingredients as ri', 'r.recipe_id', 'ri.recipe_id')
		.join('ingredients as i', 'ri.ingredient_id', 'i.ingredient_id')
		.select('r.recipe_name', 'i.ingredient_name', 'ri.ingredient_quantity')
		.where('r.recipe_id', id)
}

function getInstructions(id) {
	return db('recipes as r')
		.join('steps as s', 'r.recipe_id', 's.recipe_id')
		.select('s.step_id', 's.step_name', 's.step_instructions')
		.where('r.recipe_id', id)
}

module.exports = {
	getRecipes,
	getShoppingList,
	getInstructions
}
