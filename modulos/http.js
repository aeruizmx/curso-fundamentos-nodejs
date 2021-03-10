const http = require('http')

http.createServer(router).listen(3000)

function router (request, response){
  console.log('Nueva peticion!')
  console.log(request.url)
  switch (request.url) {
    case '/':
      response.write('Hola, que tal')
      response.end()
      break;
    default:
      response.write('Error 404')
      response.end()
      break;
  }
  // response.writeHead(201, { 'Content-Type':'text/plain' })
  // //Escribir respuesta al usuario
  // response.write('Hola, ya se usar HTTP de NodeJs')
  
}

console.log('Escuchando http en el puerto 3000')