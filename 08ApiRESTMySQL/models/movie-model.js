'use strict'

var conn = require('./movie-connection'),
	MovieModel = () => {}

MovieModel.getAll = (cb) => conn.query('SELECT * FROM movie', cb)

MovieModel.getOne = (id, cb) => conn.query('SELECT * FROM movie WHERE movie_id = ?', id, cb)

//MovieModel.insert = (data, cb) => conn.query('INSERT INTO movie SET ?', data, cb)

//MovieModel.update = (data, cb) => conn.query('UPDATE movie SET ? WHERE movie_id = ?', [data, data.movie_id], cb)

MovieModel.save = (data, cb) => {
	conn.query('SELECT * FROM movie WHERE movie_id = ?', data.movie_id, (err, rows) => {
		console.log(`Número de registros: ${rows.length}`)

		if(err)
		{
			return err
		}
		else
		{
			return ( rows.length == 1 ) 
					? conn.query('UPDATE movie SET ? WHERE movie_id = ?', [data, data.movie_id], cb) 
					: conn.query('INSERT INTO movie SET ?', data, cb)
		}
	})
}

MovieModel.delete = (id, cb) => conn.query('DELETE FROM movie WHERE movie_id = ?', id, cb)

module.exports = MovieModel