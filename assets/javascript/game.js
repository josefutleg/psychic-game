var alphabet = ['a','b','c','d','e','f','g','h','i','j',
                'k','l','m','n','o','p','q','r','s','t',
                'u','v','w','x','y','z']

var guesses = [];

var winCounter = 0;
var lossCounter = 0;
var guessesCounter = 9;
var hint = 'I';
var randomLetter = Math.floor(Math.random()*alphabet.length);
var resetGuesses =" ";

document.getElementById('wins').innerText = winCounter;
document.getElementById('losses').innerText = winCounter;
document.getElementById('remainingGuesses').innerText = guessesCounter;

console.log(alphabet[randomLetter]);

function play(x){
    var userInput = x.key;
    guessesCounter = guessesCounter -1;
    if(userInput !== (alphabet[randomLetter])) {
        guesses.push(userInput);
        document.getElementById('userGuesses').innerText = guesses;
        document.getElementById('remainingGuesses').innerText = guessesCounter;
    }
    if (userInput == (alphabet[randomLetter])){
        randomLetter = Math.floor(Math.random()*alphabet.length);
        var computerAlphabet = alphabet[randomLetter];
        console.log(computerAlphabet);
        guessesCounter = 9;
        resetGuesses = ' ';
        guesses = [];
        hint = 'I';
        winCounter++;
        document.getElementById('remainingGuesses').innerText = guessesCounter;
        document.getElementById('userGuesses').innerText = resetGuesses;
        document.getElementById('wins').innerText = winCounter;
        document.getElementById('hint').innerHTML = hint;
    }
    if (guessesCounter == 1){
        hint = alphabet[randomLetter];
        document.getElementById('hint').innerHTML = hint;
    }
    if (guessesCounter == 0){
        guessesCounter = 9;
        resetGuesses = ' ';
        lossCounter++;
        guesses = [];
        hint = 'I';
        document.getElementById('remainingGuesses').innerText = guessesCounter;
        document.getElementById('userGuesses').innerText = resetGuesses;
        document.getElementById('losses').innerText = lossCounter;
        document.getElementById('hint').innerHTML = hint;
    }
}

document.onkeyup = play;
