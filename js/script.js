$(document).ready(function () {

/*
JS - SIMON
Un alert espone 5 numeri casuali.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire un prompt alla volta
i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice
quanti e quali dei numeri da indovinare sono stati individuati
*/

// STEP #1 : Un alert espone 5 numeri casuali
//      ---> creo array contenente i 5 numeri random
//      ---> creo alert che visualizza i 5 numeri random
var randomNums = [];

for (var i = 0; i < 5; i++) {
  randomNums.push((parseInt(Math.floor(Math.random() * 100) + 1)));
}
alert(randomNums);
// console.log(randomNums);


// STEP #2: Parte un timer di 30 secondi
var secondiTimer = 5;  //DEBUG: set a 30

// diminuisco di 1 la var secondiTimer ogni secondo
var secondiCountdown = setInterval(diminuisciSecondi, 1000);

function diminuisciSecondi() {
  // secondiTimer = secondiTimer - 1
  console.log(secondiTimer);
  if (secondiTimer == 0) {
    clearInterval(secondiCountdown);
  }
  else {
    secondiTimer--;
  }
}


// STEP #3: Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
setTimeout(testMemoria, 6000);

  function testMemoria() {
    var numeriUtente = parseInt(prompt('Test Memoria: Inserisci i numeri che hai visualizzato'));
  }
















});
