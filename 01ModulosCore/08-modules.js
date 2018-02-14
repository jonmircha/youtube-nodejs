/*
https://nodejs.org/api/modules.html
Módulos (require/exports)
	require(<paquete o ruta>)
		Importar módulos (paquetes, otros ficheros)
		Garantía: una única vez
		Devuelve el módulo!

	exports.propiedadPublica = <valor>
		El otro lado del mecanismo
		Se puede exportar cualquier valor
*/

'use strict'

//var myData = require('./my-data.js')
var myData = require('./my-data'),
	//Clock = require('./clock-es5'),
	Clock = require('./clock-es6'),
	cucu = new Clock()

console.log(
	myData.name,
	myData.email,
	myData.phone
)

cucu.on('tictac', function (){
	cucu.theTime()
})