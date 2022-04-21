let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
  maximum = parseInt(prompt("Please enter a valid number and try again"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);
