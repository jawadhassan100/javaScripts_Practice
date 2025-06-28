const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randomNum = Math.floor(Math.random() * 16);
let remainingTries = 5;

const randomAnswer = () => {
  console.log(`The number you were guessing was: ${randomNum}`);
}

const askQuestion = () => {
  if (remainingTries === 0) {
    console.log("You've run out of tries! Better luck next time.");
    randomAnswer();
    rl.close();
    return;
  }

  rl.question('Guess the number: ', (answer) => {
    if (parseInt(answer) === randomNum) {
      console.log("You guessed the answer 🎉🎉");
      rl.close();
    } else {
      remainingTries -= 1;
      console.log("Wrong guess");
      console.log(`Remaining tries: ${remainingTries}`);
      askQuestion(); 
    }
  });
};

askQuestion();
