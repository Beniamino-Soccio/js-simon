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
const form = document.getElementById('form');
const button = document.getElementById('button');

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

let formArray = [];
button.addEventListener('click', function(event){
    event.preventDefault();
    //raccolgo gli elementi all'interno del form del DOM
    const num1 = parseInt(document.getElementById('first-num').value);
    const num2 = parseInt(document.getElementById('second-num').value);
    const num3 = parseInt(document.getElementById('third-num').value);
    const num4 = parseInt(document.getElementById('fourth-num').value);
    const num5 = parseInt(document.getElementById('fifth-num').value);
    //creo array con numeri inseriti nel form
    //formArray = [Number(num1), Number(num2), Number(num3), Number(num4), Number(num5)];
    formArray = [num1, num2, num3, num4, num5];
    
    console.log(formArray);
    //creo array dove depositare i numeri uguali
    let correctNums = [];

    for (let i = 0; i < rngArray.length; i++) {
        // Se il numero è presente anche nel secondo array e non è già nell'array dei numeri corretti
        if (formArray.includes(rngArray[i]) && !correctNums.includes(rngArray[i])) {
            correctNums.push(rngArray[i]);
        }
    }
    let count = correctNums.length;

    document.getElementById('result').innerText = `hai inserito ${count} numero corretti e sono : ${correctNums}`;
    
})
