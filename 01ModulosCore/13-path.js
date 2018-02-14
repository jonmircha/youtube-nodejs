/*
Path
https://nodejs.org/api/path.html
Contiene utilidades para manejar y transformar las rutas de los directorios y  archivos a formato de cadena. El sistema de archivos no es consultado para comprobar si los caminos son válidos.
*/
'use strict'

var http = require('http').createServer(webServer),
	path = require('path'),
	urls = [
		{
			route : '',
			output : '<h2>Home</h2>'
		},
		{
			route : 'acerca',
			output : '<h2>Acerca</h2>'
		},
		{
			route : 'contacto',
			output : '<h2>Contacto</h2>'
		}
	]

function webServer(req, res)
{
	var message = '<h1>Hola Node.js</h1>',
		pathURL = path.basename(req.url)

	console.log(pathURL)

	urls.forEach(function (pos){
		if(pos.route == pathURL)
		{
			res.writeHead(200, {'Content-Type':'text/html'})
			res.end(message + pos.output)
		}
	})

	if(!res.finished)
	{
		res.writeHead(404, {'Content-Type':'text/html'})
		res.end('<h1>Error 404: Not Found</h1>')
	}
}

http.listen(3000)

console.log('Servidor corriendo en http://localhost:3000/')