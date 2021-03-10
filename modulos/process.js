//const p = require('process')

process.on('exit', ()=> {
  console.log('El proceso ha acado')
  setTimeout(()=>{
    console.log('Esto no se vera nunca')
  }, 1000)
})

process.on('beforeExit', ()=> {
  console.log('El proceso va a terminar')
})

process.on('uncaughtException', (err, origen) => {
  console.error('Vata, se nos ha olvidado capturar un error')
  console.error(err)
})

functionQueNoExiste()
console.log('Esto si el error no se recoge')

//process.on('uncaughtException')
