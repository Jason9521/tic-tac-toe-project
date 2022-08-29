// GLOBAL VARIABLES

const darkMode = document.getElementById('darkMode');
const difficulty = document.getElementById('difficulty');
const gameMode = document.getElementById('gameMode');
const resetScore = document.getElementById('resetScore');
const easyMode = document.getElementById('easy');
const normalMode = document.getElementById('normal');
const hardMode = document.getElementById('hard');
const ripMode = document.getElementById('rip');
const pvp = document.getElementById('pvp');
const pve = document.getElementsByName('pve');
const chooseX = document.getElementById('chooseX');
const chooseO = document.getElementById('chooseO');
let playerOneName = document.getElementById('playerOne');
let playerTwoName = document.getElementById('playerTwo');
let playerOneScore = document.getElementById('playerOneScore');
let playerTwoScore = document.getElementById('playerTwoScore');

const topLeft = document.getElementById('topLeft');
const topMid = document.getElementById('topMid');
const topRight = document.getElementById('topRight');
const midLeft = document.getElementById('midLeft');
const midMid = document.getElementById('midMid');
const midRight = document.getElementById('midRight');
const btmLeft = document.getElementById('btmLeft');
const btmMid = document.getElementById('btmMid');
const btmRight = document.getElementById('btmRight');

// CODE

let game

// FACTORY FUNCTIONS & MODULES

const Gameboard = () => {
    const gameBoard = []
    return {gameBoard}
}

const Player = name => {
    const getName = name
    let pickedSymbol 
    return {getName, pickedSymbol}
}

const GameflowPVP = () => {
    
    let nameOne = prompt('Player One, Enter Your Name');
    let nameTwo = prompt('Player Two, Enter Your Name');

    if (nameOne == '' || nameOne == null) {
        nameOne = 'Player 1'
    }

    if (nameTwo == '' || nameTwo == null) {
        nameTwo = 'Player 2'
    }

       
    const declareNames = () => {
        playerOneName.innerHTML = nameOne
        playerTwoName.innerHTML = nameTwo
        playerOneScore.innerHTML = '0'
        playerTwoScore.innerHTML = '0'
    }

    return {declareNames}
}


// FUNCTIONS



// EVENT LISTENERS

gameMode.addEventListener('change', function() {
   if(gameMode.options[0].selected) {
    difficulty.classList.add('disabled')
        game = GameflowPVP()
        game.declareNames()
   } else {
    difficulty.classList.add('disabled')
    // PvE stuff
   }
})



chooseX.addEventListener('click', function() {

})

chooseO.addEventListener('click', function() {

})

resetScore.addEventListener('click', function() {

})



// Notes

// Player should be able to store picked symbol (X or O), append said symbol to gameBoard array, keep score

// Gameboard should have a 'clear function'



// Tasks

// Add event listeners to chooseX and chooseO, assign chosen letter to Player and the opposite to the opponent while also resetting all stored data
// 