let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
  maximum = parseInt(prompt("Please enter a valid number and try again"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === "q") break;
  attempts++;
  if (guess > targetNum) {
    guess = prompt("Too high! Enter a new guess");
  } else {
    guess = prompt("too low! Enter a new guess");
  }
}

if (guess !== "q") {
  document.querySelector(
    ".winning"
  ).innerText = `It took you ${attempts} attempts to select the winning number of ${targetNum}`;
} else {
  document.querySelector(
    ".winning"
  ).innerText = `You quit the game, the number to win would have been ${targetNum}`;
}
