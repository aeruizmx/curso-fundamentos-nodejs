const os = require('os')

//Ver la arquitectura
console.log('Arquitectura: ', os.arch())

//Ver la plataforma
console.log('Plataforma: ', os.platform())

//Ver la informacion de las CPUS
console.log('CPUS: ', os.cpus())

//Ver la cantidad cores
console.log('Cantidad cores: ', os.cpus().length)

//Ver las constantes
console.log('Constantes: ', os.constants)

//Ver la memoria libre
const SIZE = 1024
function kb(bytes) { return bytes/ SIZE }
function mg(bytes) { return kb(bytes)/ SIZE }
function gb(bytes) { return mg(bytes)/ SIZE }
console.log('Memoria libre Bytes: ', os.freemem())
console.log('Memoria libre KBytes: ', kb(os.freemem()))
console.log('Memoria libre MBytes: ', mg(os.freemem()))
console.log('Memoria libre GBytes: ', gb(os.freemem()))

console.log('Total memoria GBytes: ', gb(os.totalmem()))

//Ver direccion home
console.log('Ver direccion home ',os.homedir())

//Ver direccion temporales
console.log('Ver direccion temporales ',os.tmpdir())

//Ver nombre maquina
console.log('Ver nombre de la maquina ',os.hostname())

//Ver interfaz de red
console.log('Ver nombre de la maquina ',os.networkInterfaces())