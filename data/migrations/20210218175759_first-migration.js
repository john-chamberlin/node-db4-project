exports.up = function (knex) {
	return knex.schema
		.createTable('recipes', table => {
			table.increments('recipe_id')
			table.string('recipe_name', 128).notNullable()
		})
		.createTable('ingredients', table => {
			table.increments('ingredient_id')
			table.string('ingredient_name').notNullable()
		})
		.createTable('steps', table => {
			table.increments('step_id')
			table.string('step_name').notNullable()
			table.float('step_instructions').notNullable()
			table
				.integer('recipe_id')
				.unsigned()
				.notNullable()
				.references('recipe_id')
				.inTable('recipes')
		})
		.createTable('recipe_ingredients', table => {
			table.increments('recipe_ingred_id')
			table
				.integer('recipe_id')
				.unsigned()
				.notNullable()
				.references('recipe_id')
				.inTable('recipes')
			table
				.integer('ingredient_id')
				.unsigned()
				.notNullable()
				.references('ingredient_id')
				.inTable('ingredients')
			table.float('ingredient_quantity').notNullable()
		})
}

exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists('recipe_ingredients')
		.dropTableIfExists('steps')
		.dropTableIfExists('ingredients')
		.dropTableIfExists('recipes')
}
