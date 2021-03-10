function otraFuncion(){
  seRompe()
}

function seRompe(){
  return 3 + z
}

function seRompeAsincrona(cb){
  setTimeout( ()=> {
    try {
      return 3 + z 
      
    } catch (error) {
      console.error('Error en mi funcion asincrona')
      cb(error)
    }
  })
}

try {
  //otraFuncion()
  seRompeAsincrona(function (){
    console.log('Hay error')
  })
} catch (error) {
  console.error('Vaya, algo se ha roto')
  console.error(error.message)
  console.log('Pero no pasa nada, lo hemos capturado')
} finally {
  console.log('Esto aqui esta al final')
}