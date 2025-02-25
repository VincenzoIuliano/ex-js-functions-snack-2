function eseguiEFerma(message, startTime, endTime) {
   let timer = setInterval(() => {console.log(`${message}`)}, startTime);
   setTimeout(() => {clearInterval(timer), console.log('Terminato')
   }, endTime);
}

eseguiEFerma('Ciao', 1000, 5000);