// alert("it's working!")

// ## Steps

// ⏺ Select All The buttons and get the indiviual target id of each button
// ⏺ Create a variable that stores all  the UserChoices and displays them next the user
// ⏺ Create function that generates randomNumbr for the computer to guess from the choices and store them in a variable which then later displays it next to Computer choice
// ⏺ Creat a function for the result for each scenario a player loses or wins and store them in a variable which then later is displayed next to result





const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoice = document.querySelectorAll('button');

let userChoice
let computerChoice

possibleChoice.forEach(btnChoice => btnChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.textContent = e.target.id
    generateComputerChoice()
    getResult ()
}))

function  generateComputerChoice () {
    let RandomNumber = Math.floor(Math.random()* possibleChoice.length + 1);
   
    if( RandomNumber === 1){
        computerChoice = 'rock'
    }
    if( RandomNumber === 2){
        computerChoice = 'paper'
    }
    if( RandomNumber === 3){
        computerChoice = 'scissor'
    }
    computerChoiceDisplay.textContent = computerChoice
    
}

function getResult () {
    if(computerChoice === userChoice){
        result =  "It's a draw"
    }
    if(computerChoice === 'rock' && userChoice === 'paper'){
        result = "You've won"
    }
    if (computerChoice === 'rock' && userChoice === 'scissor') {
        result =  "You've lost"
    }
    if(computerChoice === 'paper' && userChoice === 'scissor') {
        result =  "You've won"
    }if (computerChoice === 'paper' && userChoice === 'rock') {
        result = "You've won"
    }if (computerChoice === 'scissor' && userChoice === 'paper'){
        result =  "You've lost"
    }if (computerChoice === 'scissor' && userChoice === 'rock'){
        result = "You've won"
    }
   
    resultDisplay.innerHTML=  result 
    
}