// Create a div element with the id "rand"
let randomNum = document.createElement('div');
randomNum.id = 'rand';

// Generate a random number
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Set the inner text of the div to display the random number
randomNum.innerText = "Random Number Generator:  " + randomNumber;

// Append the div to the body of the document
document.body.appendChild(randomNum);