const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter Total Marks: ', (total) => {
  if (isNaN(total) || total <= 0) {
    console.log('Total Marks must be a positive number.');
    rl.close();
    return;
  }

  rl.question('Enter Obtained Marks: ', (obtained) => {
    if (isNaN(obtained) || obtained < 0) {
      console.log('Obtained Marks must be a non-negative number.');
      rl.close();
      return;
    }

    const percentage = (obtained * 100) / total;
    const roundedPercentage = percentage.toFixed(2);

    console.log(`Your Percentage: ${roundedPercentage}%`);
    rl.close();
  });
});
