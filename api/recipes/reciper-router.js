const express = require('express')
const router = express.Router()

const Recipes = require('./recipe-model')

router.get('/', (req, res) => {
	Recipes.getRecipes()
		.then(recipes => {
			res.status(200).json(recipes)
		})
		.catch(err => {
			res.status(500).json(err)
		})
})

router.get('/:id/shoppingList', (req, res) => {
	const { id } = req.params
	Recipes.getShoppingList(id)
		.then(list => {
			res.status(200).json(list)
		})
		.catch(err => {
			res.status(500).json(err.message)
		})
})

router.get('/:id/instructions', (req, res) => {
	const { id } = req.params
	Recipes.getInstructions(id)
		.then(list => {
			res.status(200).json(list)
		})
		.catch(err => {
			res.status(500).json(err.message)
		})
})

module.exports = router
