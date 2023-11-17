/* 
Es 1:
    Dichiarare variabili numeriche ed eseguire tutti i calcoli (somma, divisione, moltiplicazione, sottrazione) e stampare i risultati;
*/

let a = 3;
let b = 7;
let c = -2;

console.log(a + b); // 10
console.log(a - c); // 5
console.log(b * c); // -14
console.log(c / a); // -0.6666666666666666
console.log(a % b); // 3

/* 
Es 2:
    Scrivi un programma che utilizzi un ******** per stampare i numeri da 1 a 10;
*/

for (let k = 1; k <= 10; k++) {
  console.log(k);
}

/* 
Es 3:
    Esegui la stampa da 1 a 20 tramite un altro strumento;
*/

let whileVar = 1;

while (whileVar <= 20) {
  console.log(whileVar);
  whileVar++;
}

/* 
Es 4:
    Tramite un istruzione condizionale determinate se un numero è positivo, negativo o zero;
*/

let mysteryNumber = 84;

if (mysteryNumber < 0) {
  console.log('Negativo');
} else if (mysteryNumber > 0) {
  console.log('Positivo');
} else {
  console.log('Zero');
}

/* 
Es 5:
    Creare un programma che utilizzi un do-while per chiedere ad un utente un numero segreto fino a che non lo indovina
*/

const numeroSegreto = -15;

do {
  var answer = prompt('Inserisci un numero');
} while (answer != numeroSegreto);

/* 
Es.6
Determinare se un numero è pari o dispari
*/

// const numeroNonSegreto = -51;
const numeroNonSegreto = Math.floor(Math.random() * 100);
console.log("Random number: " + numeroNonSegreto);

if (numeroNonSegreto % 2 == 0) {
    console.log("Il numero è pari");
} else {
    console.log("Il numero è dispari")
}

/* 
Es.7
Scopri se un numero è divisibile per 7
*/

const numeroNonSegretoMaPiùSegretoDiQuelloDiPrima = 14;

if (numeroNonSegretoMaPiùSegretoDiQuelloDiPrima % 7 == 0) {
    console.log("Il numero è divisibile per 7");
} else {
    console.log("Il numero non è divisibile per 7")
}