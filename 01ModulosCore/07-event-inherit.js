//https://nodejs.org/api/util.html#util_util_inherits_constructor_superconstructor

'use strict'

var EventEmitter = require('events').EventEmitter,
	inherits = require('util').inherits

var Clock = function ()
{
	var self = this

	setInterval(function (){
		//console.log('hola')
		self.emit('tictac')
	}, 1000)	
}

inherits(Clock, EventEmitter)

Clock.prototype.theTime = function ()
{
	var date = new Date(),
		hrs = date.getHours(),
		min = date.getMinutes(),
		sec = date.getSeconds(),
		msg = hrs + ':' + min + ':' + sec

	console.log(msg)
}

var cucu = new Clock()

cucu.on('tictac', function (){
	cucu.theTime()
})