'use strict'

var http = require('http').createServer()

function webServer(req, res)
{
	res.writeHead(200, {'Content-Type':'text/html'})
	res.end('<h1>Hola Node.js</h1>')
}

http
	.on('request', webServer)
	.listen(3000, 'localhost')

console.log('Servidor corriendo en http://localhost:3000/')