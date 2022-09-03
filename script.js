// GLOBAL VARIABLES

const darkMode = document.getElementById('darkMode');
const difficulty = document.getElementById('difficulty');
const gameMode = document.getElementById('gameMode');
const reset = document.getElementById('reset');
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


// FACTORY FUNCTIONS & MODULES

const Gameboard = () => {
    const symArray = []
    return {symArray}
}

const Player = name => {
    const getName = name
    let pickedSymbol
    let isFirstTurn 
    return {getName, pickedSymbol, isFirstTurn}
}

const GameflowPVP = () => {

    let index = 0

    let topLeftOn = true
    let topMidOn = true
    let topRightOn = true
    let midLeftOn = true
    let midMidOn = true
    let midRightOn = true
    let btmLeftOn = true
    let btmMidOn = true
    let btmRightOn = true
    
    const getNames = () => {
        let nameOne = prompt('Player One, Enter Your Name');
        let nameTwo = prompt('Player Two, Enter Your Name');

        if (nameOne == '' || nameOne == null) {
            nameOne = 'Player 1'
        }

        if (nameTwo == '' || nameTwo == null) {
            nameTwo = 'Player 2'
        }

        playerOneName.innerHTML = nameOne
        playerTwoName.innerHTML = nameTwo
        playerOneScore.innerHTML = 0
        playerTwoScore.innerHTML = 0
    }

    const firstTurn = () => {
        let randInt = Math.floor(Math.random() * 2)
        const symOne = PlayerOne.pickedSymbol;
        const symTwo = PlayerTwo.pickedSymbol;

        if (randInt == 0) {
            board.symArray.push(symOne, symTwo, symOne, symTwo, symOne, symTwo, symOne, symTwo, symOne, 'filler')
        } else {
            board.symArray.push(symTwo, symOne, symTwo, symOne, symTwo, symOne, symTwo, symOne, symTwo, 'filler')
        }
        console.log(board.symArray)
    }

   

    const getWinner = () => {
        if (topLeft.textContent == 'X' && topMid.textContent == 'X' && topRight.textContent == 'X' ||
            midLeft.textContent == 'X' && midMid.textContent == 'X' && midRight.textContent == 'X' ||
            btmLeft.textContent == 'X' && btmMid.textContent == 'X' && btmRight.textContent == 'X' ||
            topLeft.textContent == 'X' && midLeft.textContent == 'X' && btmLeft.textContent == 'X' ||
            topMid.textContent == 'X' && midMid.textContent == 'X' && btmMid.textContent == 'X' ||
            topRight.textContent == 'X' && midRight.textContent == 'X' && btmRight.textContent == 'X' ||
            topLeft.textContent == 'X' && topMid.textContent == 'X' && topRight.textContent == 'X' ||
            topLeft.textContent == 'X' && midMid.textContent == 'X' && btmRight.textContent == 'X' ||
            topRight.textContent == 'X' && midMid.textContent == 'X' && btmLeft.textContent == 'X') {

                if (PlayerOne.pickedSymbol == 'X') {
                    playerOneScore++
                    alert('Player One Wins')
                }

                else if (PlayerTwo.pickedSymbol == 'X') {
                        playerTwoScore++
                        alert('Player Two Wins')
                    }
            }

        else if (topLeft.textContent == 'O' && topMid.textContent == 'O' && topRight.textContent == 'O' ||
                midLeft.textContent == 'O' && midMid.textContent == 'O' && midRight.textContent == 'O' ||
                btmLeft.textContent == 'O' && btmMid.textContent == 'O' && btmRight.textContent == 'O' ||
                topLeft.textContent == 'O' && midLeft.textContent == 'O' && btmLeft.textContent == 'O' ||
                topMid.textContent == 'O' && midMid.textContent == 'O' && btmMid.textContent == 'O' ||
                topRight.textContent == 'O' && midRight.textContent == 'O' && btmRight.textContent == 'O' ||
                topLeft.textContent == 'O' && topMid.textContent == 'O' && topRight.textContent == 'O' ||
                topLeft.textContent == 'O' && midMid.textContent == 'O' && btmRight.textContent == 'O' ||
                topRight.textContent == 'O' && midMid.textContent == 'O' && btmLeft.textContent == 'O') {

                    if (PlayerOne.pickedSymbol == 'O') {
                        playerOneScore++
                        alert('Player One Wins')
                    }

                    else if (PlayerTwo.pickedSymbol == 'O') {
                        playerTwoScore++
                        alert('Player Two Wins')
                    }
            }

        else {}
    }

    return {index, topLeftOn, topMidOn, topRightOn, midLeftOn, midMidOn, midRightOn, btmLeftOn, btmMidOn, btmRightOn, getNames, getWinner, firstTurn}
}



// FUNCTIONS



// EVENT LISTENERS

gameMode.addEventListener('change', function() {
   
})



chooseX.addEventListener('click', function() {
    PlayerOne.pickedSymbol = 'X'
    PlayerTwo.pickedSymbol = 'O'

    if(gameMode.options[0].selected) {
        difficulty.classList.add('disabled')
            game = GameflowPVP()
            game.getNames()
            game.firstTurn()

       } else {
        difficulty.classList.add('disabled')
        // PvE stuff
       }
    
})

chooseO.addEventListener('click', function() {
    PlayerOne.pickedSymbol = 'O'
    PlayerTwo.pickedSymbol = 'X'
    
})

reset.addEventListener('click', function() {
    playerOneScore.innerHTML = 0
    playerTwoScore.innerHTML = 0
})

topLeft.addEventListener('click', function() {
    

    if(game.topLeftOn) {
        topLeft.textContent = board.symArray[game.index]
        game.index += 1
        game.topLeftOn = false
        
    }
})

topMid.addEventListener('click', function() {
    

    if(game.topMidOn) {
        topMid.textContent = board.symArray[game.index]
        game.index += 1
        game.topMidOn = false
    }
})

topRight.addEventListener('click', function() {
   

    if(game.topRightOn) {
        topRight.textContent = board.symArray[game.index]
        game.index += 1
        game.topRightOn = false
    }
})

midLeft.addEventListener('click', function() {
 

    if(game.midLeftOn) {
        midLeft.textContent = board.symArray[game.index]
        game.index += 1
        game.midLeftOn = false
    }
})

midMid.addEventListener('click', function() {
    

    if(game.midMidOn) {
        midMid.textContent = board.symArray[game.index]
        game.index += 1
        game.midMidOn = false
    }
})

midRight.addEventListener('click', function() {
    

    if(game.midRightOn) {
        midRight.textContent = board.symArray[game.index]
        game.index += 1
        game.midRightOn = false
    }
})

btmLeft.addEventListener('click', function() {
    

    if(game.btmLeftOn) {
        btmLeft.textContent = board.symArray[game.index]
        game.index += 1
        game.btmLeftOn = false
    }
})

btmMid.addEventListener('click', function() {
    

    if(game.btmMidOn) {
        btmMid.textContent = board.symArray[game.index]
        game.index += 1
        game.btmMidOn = false
    }
})

btmRight.addEventListener('click', function() {
    

    if(game.btmRightOn) {
        btmRight.textContent = board.symArray[game.index]
        game.index += 1
        game.btmRightOn = false
    }
})

// CODE

let board = Gameboard()
let game = GameflowPVP()

const PlayerOne = Player();
const PlayerTwo = Player();








// Notes


// Tasks

// Add necessary code for getWinner function to operate correctly

