let numberToGuess = [];
let UserGuess = [];

for(i = 0; i < 5; i++){
    let randomNumber = Math.floor(Math.random() * 10);
    console.log(randomNumber);
    numberToGuess.push(randomNumber)
}

console.log(numberToGuess);

setTimeout(richiestaGuess, 5000);

function richiestaGuess(){
    for (i = 0; i < 5; i++){
        let askNumbers = parseInt(prompt("scrivi uno alla volta il numero"));
        console.log(askNumbers);
        UserGuess.push(askNumbers);
    }
    console.log(UserGuess);
}




