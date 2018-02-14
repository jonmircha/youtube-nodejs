'use strict'

var fs = require('fs'),
	file = './assets/nombres.tx',
	newFile = './assets/nombres-promises-es6.txt',
	promise = new Promise((resolve, reject) => {
		fs.access(file, fs.F_OK, function (err){
			return (err) ? reject( new Error('El archivo no existe') ) : resolve(true)
		})
	})

promise
	.then((dataPromise) => {
		console.log('El archivo existe')
	
		return new Promise((resolve, reject) => {
			fs.readFile(file, function (err, data){
				return (err) ? reject( new Error('El archivo no se pudo leer') ) : resolve(data)
			})
		})
	})
	.then((dataPromise) => {
		console.log('El archivo se ha leído exitosamente')

		return new Promise((resolve, reject) => {
			fs.writeFile(newFile, dataPromise, function (err){
				return (err) ? reject( new Error('El archivo no se pudo copiar') ) : resolve('El archivo se ha copiado con éxito')
			})
		})
	})
	.then((dataPromise) => { console.log(dataPromise) })
	.catch((err) => { console.log(err.message) })