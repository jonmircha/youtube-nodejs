//https://es.wikipedia.org/wiki/Observer_(patr%C3%B3n_de_dise%C3%B1o)

'use strict'

var EventEmitter = require('events').EventEmitter,
	pub = new EventEmitter()

pub
	.on('myevent', function (message){
		console.log(message)
	})

	.once('myevent', function (message){
		console.log('Se emite la primera vez:' + message)
	})

pub.emit('myevent', 'Soy un emisor de eventos')
pub.emit('myevent', 'Volviendo a emitir')
pub.removeAllListeners('myevent')
pub.emit('myevent', 'Volviendo a emitir por tercera vez')