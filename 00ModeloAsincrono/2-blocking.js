var fs = require('fs')
console.log('\nAbriendo Archivo...')

var content = fs.readFileSync('archivo.txt', 'utf8')
console.log(content)

console.log('\nHaciendo otra cosa\n')

console.log( process.uptime() )