console.log(global) // Donde estan todos los módulos globales
console.log(setInterval)
let i = 0
let intervalo = setInterval( function () {
  console.log('hola')
  if(1===3) {
    clearInterval(intervalo)
  }
  i++
  
}, 1000)

setImmediate(function(){
  console.log('Hola')
})

require
console.log(process)

console.log(__dirname)
console.log(__filename)

global.miVariable = 'valor'
console.log(miVariable)