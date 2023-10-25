let randomNum = document.createElement('div');
randomNum.id = 'rand';


let randomNumber = Math.floor(Math.random() * 100) + 1;

randomNum.innerText = "(Day 7) Random Number Generator:  " + randomNumber;

document.body.appendChild(randomNum);