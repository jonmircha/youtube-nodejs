var fs = require('fs')
console.log('\nAbriendo Archivo...')
 
var content = fs.readFile('archivo.txt', 'utf8', function (error, content){
	console.log(content)
})

console.log('\nHaciendo otra cosa\n')

console.log( process.uptime() )