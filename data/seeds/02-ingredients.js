exports.seed = function (knex) {
	return knex('ingredients').insert([
		{ ingredient_name: 'butter' },
		{ ingredient_name: 'salt' },
		{ ingredient_name: 'beef' },
		{ ingredient_name: 'chicken' },
		{ ingredient_name: 'brocolli' },
		{ ingredient_name: 'garlic' },
		{ ingredient_name: 'shrimp' },
		{ ingredient_name: 'asparagus' },
		{ ingredient_name: 'steak' },
		{ ingredient_name: 'potatoes' },
		{ ingredient_name: 'green beans' },
		{ ingredient_name: 'broth' }
	])
}
