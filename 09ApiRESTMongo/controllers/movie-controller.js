'use strict'

var MovieModel = require('../models/movie-model'),
	MovieController = () => {}

MovieController.getAll = (req, res, next) => {
	MovieModel.getAll((docs) => {
		let locals = {
			title : 'Lista de Películas',
			data : docs
		}

		res.render('index', locals)
	})
}

MovieController.getOne = (req, res, next) => {
	let movie_id = req.params.movie_id
	console.log(movie_id)

	MovieModel.getOne(movie_id, (docs) => {
		let locals = {
			title : 'Editar Película',
			data : docs
		}

		res.render('edit-movie', locals)
	})
}

MovieController.save = (req, res, next) => {
	let movie = {
		movie_id : req.body.movie_id,
		title : req.body.title,
		release_year : req.body.release_year,
		rating : req.body.rating,
		image : req.body.image
	}

	console.log(movie)

	MovieModel.save( movie, () => res.redirect('/') )
}

MovieController.delete = (req, res, next) => {
	let movie_id = req.params.movie_id
	console.log(movie_id)

	MovieModel.delete( movie_id, () => res.redirect('/') )
}

MovieController.addForm = (req, res, next) => res.render('add-movie', { title : 'Agregar Película' })

MovieController.error404 = (req, res, next) => {
	let error = new Error(),
		locals = {
			title : 'Error 404',
			description : 'Recurso No Encontrado',
			error : error
		}

	error.status = 404

	res.render('error', locals)

	next()
}

module.exports = MovieController