/*
URL
https://nodejs.org/api/url.html
Este módulo dispone de utilidades para la resolución y análisis de URLs

Query String
https://nodejs.org/api/querystring.html
Este módulo proporciona utilidades para hacer frente a las cadenas de consulta
*/
'use strict'

var http = require('http').createServer(webServer),
	path = require('path'),
	url = require('url'),
	urls = [
		{
			id : 1,
			route : '',
			output : '<h2>Home</h2>'
		},
		{
			id : 2,
			route : 'acerca',
			output : '<h2>Acerca</h2>'
		},
		{
			id : 3,
			route : 'contacto',
			output : '<h2>Contacto</h2>'
		}
	]

function webServer(req, res)
{
	var message = '<h1>Hola Node.js</h1>',
		pathURL = path.basename(req.url),
		//Pass true as the second argument to also parse the query string using the querystring module
		id = url.parse( req.url, true ).query.id

	console.log(`path:${pathURL}, id: ${id}`)

	urls.forEach(function (pos){
		if(pos.route == pathURL || pos.id == id)
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