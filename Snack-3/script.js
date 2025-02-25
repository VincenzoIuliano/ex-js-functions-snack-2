const eseguiOperazione = (numA, numB, operazione) => operazione(numA, numB);

const somma = (numA, numB) => (numA + numB);
const moltiplicazione = (numA, numB) => (numA * numB);
const sottrazione = (numA, numB) => (numA - numB);
const divisione = (numA, numB) => (numA / numB); // non faccio nessuna verifica

console.log(eseguiOperazione(5, 3, somma)); //8
console.log(eseguiOperazione(10, 2, divisione)); //5
console.log(eseguiOperazione(11, 3, moltiplicazione)); //33

