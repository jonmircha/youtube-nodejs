/*
Streams
	'Chorros' de información que se transmiten en 'Pedazos' (Chunks)
	3 tipos: Lectura / Escritura / Duplex
	Instancias de EventEmitter
	Acceso asíncrono
	Es raro crear streams directamente
	Pero muchos recursos nos ofrecen este interfaz
	Detrás de muchos mecanismos de Node.JS
		stdin/stdout
		request de HTTP
		Sockets
		Manipulación de ficheros/imágenes
*/

'use strict'

var fs = require('fs'),
	readStream = fs.createReadStream('assets/nombres.txt'),
	writeStream = fs.createWriteStream('assets/nombres_copia.txt')

/*
readStream.pipe(writeStream)

readStream.on('data', function (chunk){
	console.log(
		'He leído:',
		chunk.length,
		'caracteres'
	)
})

readStream.on('end', function (){
	console.log('Terminé de leer el archivo')
})
*/

readStream.pipe(writeStream)

readStream
	.on('data', function (chunk){
		console.log(
			'He leído:',
			chunk.length,
			'caracteres'
		)
	})
	.on('end', function (){
		console.log('Terminé de leer el archivo')
	})