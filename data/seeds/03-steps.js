exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('steps').insert([
		{
			step_name: 'cook food idk',
			step_instructions: 'throw ingredients in pot',
			recipe_id: 1
		},
		{
			step_name: 'cook food fr this time',
			step_instructions: 'cook ingredients in pot',
			recipe_id: 1
		},
		{
			step_name: 'dont cut yourself',
			step_instructions: 'be careful with knife',
			recipe_id: 2
		},
		{
			step_name: 'go to hospital',
			step_instructions: 'title. you cut yourself',
			recipe_id: 2
		}
	])
}
