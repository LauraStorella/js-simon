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
//      ---> imposto funzione che sarà attivata dopo i 30 secondi del timer
//      ---> display singoli prompt per inserimento numeri utente
setTimeout(testMemoria, 6000);  //DEBUG: set to 40000 (su base 30 secondi)

  function testMemoria() {
    var numeriUtente = [];

    for (var i = 0; i < 5; i++) {
      numeriUtente.push(parseInt(prompt('Inserisci i numeri visualizzati')));
    }
    // console.log(numeriUtente);


// STEP #4: Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
    // Confronto array randomNums e numeriUtente
    for (var i = 0; i < randomNums.length; i++) {
      if(randomNums[i]!=numeriUtente[i]) {
        console.log('Non hai inserito i numeri corretti');
      }
      else {
        console.log('Bravo! Hai memorizzato tutti i numeri');
      }
    }
    
  }

















});
