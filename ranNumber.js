function numberGame() {

  var randomNumber = 0;

  var numberGuess = 0;

  var numTries = 1;

  randomNumber = Math.floor((Math.random() * 100) + 1);
  var userName = prompt("Please enter your name");
  numberGuess = prompt("Enter a number between 1 and 100");



  do {

    if (numberGuess > randomNumber) {
      numberGuess = prompt("Number is too high!\nGuesses used: " + numTries);
    }
    else if (numberGuess < randomNumber){
      numberGuess = prompt("Number is too low!\nGuesses used: " + numTries);
    }
    else if (numberGuess != parseInt(numberGuess,10)) {
      numberGuess = prompt("Please enter numbers only!\nGuesses used: " + numTries);
    }
    numTries++;
  }
    while (numberGuess != randomNumber && numTries < 8);
    if (numberGuess === randomNumber) {
      alert("You guessed correctly, " + userName + "!");
    }
    else {
      alert("You suck, " + userName + "!");
    }
};
