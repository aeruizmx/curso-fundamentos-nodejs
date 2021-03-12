function asincrona(){
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      console.log('Proceso asincrono terminado')
      resolve()
    }, 10000)
  })
}

console.time('todo')
let suma = 0

console.time('bucle')
for (let index = 0; index < 100000000; index++) {
  suma += index
}
console.timeEnd('bucle')

let suma2 = 0

console.time('bucle 2')
for (let index2 = 0; index2 < 100000000; index2++) {
  suma2 += index2
}
console.timeEnd('bucle 2')

console.time('asincrona')
asincrona()
.then(()=> {
  console.timeEnd('asincrona')
})

console.timeEnd('todo')
