//create an array with all of the letters
var alphabet = ['a','b','c','d','e','f','g','h','i','j',
                'k','l','m','n','o','p','q','r','s','t',
                'u','v','w','x','y','z']
    
//
var guesses = [];

var winCounter = 0;
var lossCounter = 0;
var guessesCounter = 9;
var userGuessesContainer ='';
var randomLetter = Math.floor(Math.random()*alphabet.length);



document.getElementById('wins').innerText = winCounter;
document.getElementById('losses').innerText = winCounter;
document.getElementById('remainingGuesses').innerText = guessesCounter;

function startUp(){
    for(var i = 0; i < randomLetter.length; i++){
    }
}
console.log(alphabet[randomLetter]);

function play(x){
    if(x.key !== alphabet[randomLetter]){
        guesses.push(x.key);
        document.getElementById('userGuesses').innerText = guesses;
        guessesCounter = guessesCounter - 1
        document.getElementById('remainingGuesses').innerText = guessesCounter;
        console.log('false');
    }
    if (x.key == alphabet[randomLetter]) {
        winCounter = winCounter + 1
        document.getElementById('wins').innerText = winCounter;
        var resetGuesses =" ";
        document.getElementById('userGuesses').innerText = resetGuesses;

    }
    if (guessesCounter <= 0){
        startUp();
        lossCounter = lossCounter +1;
        document.getElementById('losses').innerText = lossCounter;
        var resetLossesCounter = 9;
        document.getElementById('remainingGuesses').innerText = resetLossesCounter;
        var resetUserGuesses = " ";
        document.getElementById('userGueses')
        .innerText = resetUserGuesses;
    }

}


document.onkeyup = play;
