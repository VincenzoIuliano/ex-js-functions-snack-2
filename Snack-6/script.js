function creaContatoreAutomatico() {
  let contatore = 0;
  return function() {
    setInterval(() => {
      contatore++;
      console.log(contatore);
    }, 1000);
  }
}

creaContatoreAutomatico()();