function guessingGame() {
  const secerectNum = Math.floor(Math.random() * 100);
  let winning = false;
  return function (num) {
    if (winning) {
      return "The game is over, you already won!";
    }
    if(num < secerectNum){
        return "50 is too low!";
    } else if(num > secerectNum){
        return "90 is too high!";
    } else {
        winning = true;
        return "You win! You found 70 in 3 guesses."
    }
  };
}

module.exports = { guessingGame };
