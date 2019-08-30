 alert.function= ("Ready to play?")
 
 var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
//Global Variables
var wins= 0;
var losses= 0;
var guessesR= 10;
var pastguesses= [];

var randomletter= alphabet [Math.floor(Math.random()*alphabet.length)];
var userchoice= document.getElementById ("userchoice");
var countdown= document.getElementById ("guessesleft");
var wincounter= document.getElementById ("wins");
var losscounter= document.getElementById ("losses");


// var functon.push= ("alphabet");

//Restart Function

//User press Function
document.onkeyup = function(event){
    console.log("button i just pushed : " +event.key);
    if (guessesR == 0) {
        pastguesses = []
        guessesR = 10
        losses++
    }
    // if i guessed what the computer guess, win, else loss;
    if(event.key===randomletter) {
        console.log("winner!");
    } else {
        guessesR--
        console.log('you lost!')
    }
    pastguesses.push(event.key)
    userchoice.textContent = pastguesses;
    countdown.textContent = guessesR;
    wincounter.textContent = wins;
    losscounter.textContent = losses;
    console.log("computer Guess: " + randomletter);

} 