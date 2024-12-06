const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Show Numbers:" ,(answer)=> {
    const number = parseInt(answer , 10)
    if (isNaN(number)) {
        console.log("Enter valid number");
        
    } else {
        
        for (let index = 1; index <= answer; index++) {
              console.log(index);
        }
    }
    
    rl.close()
})