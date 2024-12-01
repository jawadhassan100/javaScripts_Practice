const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let cart = [];
let maxItems = 5;

const myCart = () => {
  if (cart.length >= maxItems) {
    console.log("Your cart is full. Choose an option:");
    console.log("1. Add more items (increase limit by 5)");
    console.log("2. Show the cart length and exit.");

    rl.question('Enter your choice (1 or 2): ', (choice) => {
      if (choice === '1') {
        maxItems += 5;
        console.log("Cart limit extended. You can now add more items.");
        myCart();
      } else if (choice === '2') {
        console.log(`Your cart contains ${cart.length} items.`);
        rl.close();
      } else {
        console.log("Invalid choice. Please select 1 or 2.");
        myCart(); 
      }
    });
    return; // Stop further execution 
  }

  rl.question('Enter an item: ', (item) => {
    cart.push(item);
    console.log("Cart contents:", cart);
    myCart(); // Continue adding items
  });
};

myCart();
