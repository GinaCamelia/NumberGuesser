let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => Math.floor(Math.random() * 10)
console.log(generateTarget());


const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
  if (humanGuess < 0 || humanGuess > 9) {
      window.alert('Error, your number needs to be between 0 and 9. Please try again.');
      end ;
  } else if (Math.abs(secretTarget - humanGuess) < Math.abs(secretTarget - computerGuess)){
    return true;
  } else if (Math.abs(secretTarget - humanGuess) > Math.abs(secretTarget - computerGuess)){
    return false;
  } else {
    return true;
  }
}
console.log(compareGuesses());


const updateScore = winner => {
  if (winner === 'human') {
    return humanScore += 1;
  } else if (winner === 'computer') {
    return computerScore += 1;
    } 
  }
  console.log(updateScore());


  const advanceRound = () => currentRoundNumber += 1;