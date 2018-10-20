$(document).ready(function() {

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
                "n","o","p","q","r","s","t","u","v","w","x","y","z"];

function randomLetter(){
    var randomIndex = Math.floor((Math.random() * 26) + 1); 
    var letter = alphabet[randomIndex];
    console.log(letter)    
    return letter;
    
}
   
var answer = randomLetter();
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = "";

$(document).keypress(function(event){
    keyPressed = (event.key);
     
        if (answer === keyPressed && guessesLeft > 0 && guessesLeft <= 9){
            wins++;
            guessesLeft = 9;
            $("#guesses-left-data").text(guessesLeft)
            $("#win-data").text(wins);
            guessesSoFar = "";
            $("#guesses-data").text(guessesSoFar);
            answer = randomLetter();
            
        }

        else if (answer !== keyPressed && guessesLeft > 0 && guessesLeft <= 9) {
            guessesLeft--;
            $("#guesses-left-data").text(guessesLeft);
            if (guessesSoFar === ""){
                guessesSoFar = " " + keyPressed;
                $("#guesses-data").text(guessesSoFar);
            }
            else {
                guessesSoFar = guessesSoFar + ", " + keyPressed;
                $("#guesses-data").text(guessesSoFar);
                
            }
        }
        else {
            losses++;
            guessesLeft = 9;
            $("#loss-data").text(losses);
            guessesSoFar = "";
            $("#guesses-data").text(guessesSoFar); 
            answer = randomLetter();
            console.log(answer);
        }            
    })
})
