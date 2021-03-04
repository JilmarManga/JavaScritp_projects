
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error');
  }
};

//console.log(getUserChoice('rock'));

 const getComputerChoice = () => {
   const getRandomNumber = Math.floor(Math.random() * 3);
   if (getRandomNumber === 0) {
     return 'rock';
   } else if (getRandomNumber === 1) {
     return 'paper';
  } else if (getRandomNumber === 2) {
     return 'scissors';
  }
 };

 //console.log(getComputerChoice());

 function determineWinner (userChoice, computerChoice) {
   if (userChoice === computerChoice) {
     return 'Es un empate!';
   }
   if (userChoice === 'rock') {
     if (computerChoice === 'paper') {
     return 'The computer Won!';
   } else {
     return 'user Won!';
   }
 }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
      return 'Computer Won!';
    } else {
      return 'User Won!';
    }
  }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'computer Won!';
      } else {
        return 'User Won!';
      }
  }
    if (userChoice === 'bomb') {
      return 'User Won!!!';
    }
};

const playGame = () => {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log('you threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);

console.log(determineWinner(userChoice, computerChoice));

};

playGame();
