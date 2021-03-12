function asincrona(callback){
  setTimeout(() => {
    try {
      let a = 3 + z
      callback(null, a)
    } catch (error) {
      callback(error, null)
    }
  }, 1000)
}

asincrona(function (err, dato) {
  if(err){
    console.error('Tenemos un error');
    console.error(err);
    //throw err // No funciona en asincronas
    return false
  } else {
    console.log(data);
  }
})