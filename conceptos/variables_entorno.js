// En consola se pone 
// NOMBRE=ANDRES node conceptos/variables_entorno.js
// NOMBRE=ANDRES WEB=aeruiz.com node conceptos/variables_entorno.js
let nombre = process.env.NOMBRE || 'SIN NOMBRE'
let web = process.env.WEB || 'No tengo web'
console.log('Hola! ' + nombre)
console.log('Mi web es ' + web)
