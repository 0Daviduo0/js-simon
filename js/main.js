// Variabile per l'array dei guess dell'user
let UserGuess = [];
// variabile di quanti numeri prendere
n=5;
// numeri da 1 a 100
array=Array.from({length:100},(v,k)=>k*1);
// L'array da 1 a 100 viene mischiato
var shuffled = array.sort(function(){return .5 - Math.random()});
// Vengono poi estratti "n" numeri dall'array mischiato
var numberToGuess =shuffled.slice(0,n);
// Viene printato l'array dei numeri da indovinare presi dagli "n" numeri mischiati
console.log("i numeri casuali sono:", numberToGuess.toString());
// Viene richiamata una funzione 30 secondi dopo
setTimeout(richiestaGuess, 30000);
// La funzione chiede 5 volte all'utente per i numeri da indovinare, poi mette ciascun numero dentro l'array dei guess dell'utente
function richiestaGuess(){
    for (i = 0; i < 5; i++){
        let askNumbers = parseInt(prompt("scrivi uno alla volta il numero"));
        UserGuess.push(askNumbers);
    }
    // vengono stampati i guess dell'utente
    console.log("i numeri scelti dall'utente sono:", UserGuess.toString());
    // Vengono confronteti con i numeri presenti dentro l'array dei numeri da indovinare
    let rightElements = UserGuess.filter(element => numberToGuess.includes(element));
        console.log(rightElements);             // Vengono printati i numeri che l'utente ha indovinato
        console.log(rightElements.length);      // Viene anche printata la quantità dei numeri indovinati
}





