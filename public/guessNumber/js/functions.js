var randomNumber = Math.floor(Math.random() * 99) + 1;
var guesses = document.querySelector('#guesses');
var lastResult = document.querySelector('#lastResult');
var lowOrHigh = document.querySelector('#lowOrHigh');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var guessCount = 1;
var resetButton = document.querySelector('#reset');
resetButton.style.display = "none";
var winsCount = 0;
var lossCount = 0;
var wins = document.querySelector('#wins');
var loss = document.querySelector('#loss');


function displayWins() {
    wins.innerHTML = `Wins ${winsCount}`;
}

function displayLosses() {
    loss.innerHTML = `Loss: ${lossCount}`;
}

function checkGuess() {
    var userGuess = Number(guessField.value);
    if (guessCount == 1) {
        guesses.innerHTML = "Previous guesses : ";
    }
    guesses.innerHTML += userGuess + ' ';

    if (userGuess == randomNumber) {
        lastResult.innerHTML = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHigh.innerHTML = ' ';
        winsCount += 1;
        displayWins()
        setGameOver();
    } else if (guessCount == 7) {
        lastResult.innerHTML = 'Sorry, you lost!';
        lossCount += 1;
        displayLosses();
        setGameOver();
    }
    if (userGuess > 99){
        lastResult.innerHTML = 'Error: Number entered is above 99';
        lowOrHigh.innerHTML = ' ';

    } else if (userGuess < 1) {
        lastResult.innerHTML = 'Error: Number entered is below 1';
        lowOrHigh.innerHTML = ' ';
    } else {
        lastResult.innerHTML = 'Wrong!';
        guessCount++;
        guessField.value = ' ';
    }
    lastResult.style.backgroundColor = 'red';
    if (userGuess < randomNumber) {
        lowOrHigh.innerHTML = 'Last guess was too low!';
    } else if (userGuess > randomNumber) {
        lowOrHigh.innerHTML = 'Last guess was too high!';
    }
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton.style.display = 'inline';
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;

    var resetParas = document.querySelectorAll('.resultParas p');
    for (var i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }
    resetButton.style.display = 'none';

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 99) + 1;
}

