'use strict'

var http = require('http').createServer(webServer),
	fs = require('fs'),
	path = require('path'),
	url = require('url'),
	urls = [
		{
			id : 1,
			route : '',
			output : 'assets/index.html'
		},
		{
			id : 2,
			route : 'acerca',
			output : 'assets/acerca.html'
		},
		{
			id : 3,
			route : 'contacto',
			output : 'assets/contacto.html'
		}
	]

function webServer(req, res)
{
	var pathURL = path.basename(req.url),
		id = url.parse( req.url, true ).query.id

	console.log(`path:${pathURL}, id: ${id}`)

	urls.forEach(function (pos){
		if(pos.route == pathURL || pos.id == id)
		{
			res.writeHead(200, {'Content-Type':'text/html'})
			fs.readFile(pos.output, function (err, data){
				if(err) throw err
				res.end(data)
			})
		}
	})

	if(!res.finished)
	{
		res.writeHead(404, {'Content-Type':'text/html'})
		fs.readFile('assets/404.html', function (err, data){
			if(err) throw err
			res.end(data)	
		})
	}
}

http.listen(3000)

console.log('Servidor corriendo en http://localhost:3000/')