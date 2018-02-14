/*
Hacer Debug con el core de Node.js
https://nodejs.org/api/debugger.html
en la terminal ejecutar node debug nombre-script.js
*/

'use strict'

var http = require('http')

function webServer(req, res)
{
	res.writeHead(200, {'Content-Type':'text/html'})
	debugger;
	res.end('<h1>Hola Node.js</h1>')
}

http
	.createServer(webServer)
	.listen(3000, 'localhost')

console.log('Servidor corriendo en http://localhost:3000/')