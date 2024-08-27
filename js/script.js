console.log('JS OK');
/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.

Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

BONUS 1:
Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
BONUS 2:
Generiamo gli input da JS, invece di scriverli nel codice
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
* Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"
*/

//prendo elementi dal DOM
const display = document.getElementById('display');
const randomNum = document.getElementById('random-num');
const rng1 = document.getElementById('first-rng-num');
const rng2 = document.getElementById('second-rng-num');
const rng3 = document.getElementById('third-rng-num');
const rng4 = document.getElementById('fourth-rng-num');
const rng5 = document.getElementById('fifth-rng-num');
const form = document.getElementById('form');
const num1Field = document.getElementById('first-num');
const num2Field = document.getElementById('secondt-num');
const num3Field = document.getElementById('third-num');
const num4Field = document.getElementById('fourth-num');
const num5Field = document.getElementById('fifth-num');

const rngArray = [];
const getRandomNumber = () => {
     
    
    while (rngArray.length < 5){
       const randomNum = Math.floor(Math.random() * 100) +1;
       if (!rngArray.includes(randomNum)){
        rngArray.push(randomNum);
       }
    }
   return rngArray;
   
}
randomNum.innerText = getRandomNumber();
console.log(rngArray);

let seconds = 7;
display.innerText = seconds;
const countdown = setInterval(() => {
    display.innerText = --seconds;
}, 1000);

setTimeout(() => {
    clearInterval(countdown);
    form.classList.remove('d-none');
    randomNum.classList.add('d-none');
}, 7000);