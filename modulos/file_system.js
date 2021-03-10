const fs = require('fs')

function leer(ruta, callback){
  fs.readFile(ruta, (error, data) => {
    callback(data.toString())
  })
}

function escribir(ruta, contenido, callback){
  fs.writeFile(ruta, contenido, (err) => {
    if(err){
      console.error('No he podido escribirlo')
    } else{
      console.log('Se ha escrito correctamente')
    }
  })
}

function borrar(ruta, callback){
  fs.unlink(ruta, (err) => {
    if(err){
      console.error(err)
    } else{
      console.log('bien')
    }
  })
}

//leer(__dirname + '/archivo.txt', console.log)
//escribir(__dirname+'/archivo1.txt', 'Soy un archivo nuevo!', console.log)
borrar(__dirname + '/archivo1.txt', console.log)