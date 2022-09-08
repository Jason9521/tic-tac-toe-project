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
const replay = document.getElementById('replay')
let messageLog = document.getElementById('message');

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
    let pickedSymbol 
    return {pickedSymbol}
}

const GameflowPVP = () => {

    let topLeftOn = false
    let topMidOn = false
    let topRightOn = false
    let midLeftOn = false
    let midMidOn = false
    let midRightOn = false
    let btmLeftOn = false
    let btmMidOn = false
    let btmRightOn = false
    let index = 0
    let scoreOne = 0
    let scoreTwo = 0
    let nameOne
    let nameTwo
    let symOne
    let symTwo

    
    const getNames = () => {
        nameOne = prompt('Player One, Enter Your Name');
        nameTwo = prompt('Player Two, Enter Your Name');

        if (nameOne == '' || nameOne == null) {
            nameOne = 'Player 1'
        }

        if (nameTwo == '' || nameTwo == null) {
            nameTwo = 'Player 2'
        }

        playerOneName.textContent = nameOne
        playerTwoName.textContent = nameTwo
        playerOneScore.textContent = 0
        playerTwoScore.textContent = 0

    }

    const firstTurn = () => {
        
        chooseO.classList.add('disabled')
        chooseX.classList.add('disabled')
        difficulty.classList.add('disabled')
        gameBoardActive()
        
        symOne = PlayerOne.pickedSymbol;
        symTwo = PlayerTwo.pickedSymbol;
        nameOne = playerOneName.textContent
        nameTwo = playerTwoName.textContent
        
        messageLog.textContent = `${nameOne} chose '${symOne}' and ${nameTwo} chose '${symTwo}'`
        
        let randInt = Math.floor(Math.random() * 2)

        if (randInt == 0) {
            board.symArray.push(symOne, symTwo, symOne, symTwo, symOne, symTwo, symOne, symTwo, symOne, 'filler');
            first = true
            messageLog.textContent = `${nameOne} goes first`
        } 
        
        else {
            board.symArray.push(symTwo, symOne, symTwo, symOne, symTwo, symOne, symTwo, symOne, symTwo, 'filler')
            first = false
            messageLog.textContent = `${nameTwo} goes first`
        }
    }

    const playerTurn = () => {

        if (board.symArray[0] == symOne) {
            if (index % 2 != 0) {
                messageLog.textContent = `${nameOne}'s Turn`
            } 

            else {
                messageLog.textContent = `${nameTwo}'s Turn`
            }
        }

        else if (board.symArray[0] == symTwo) {
            if (index % 2 != 0) {
                messageLog.textContent = `${nameTwo}'s Turn`
            } 

            else {
                messageLog.textContent = `${nameOne}'s Turn`
            }
        }

        index++
    }

    const replayMessage = () => {

        if (window.screen.width < 800) {
            messageLog.textContent = "Press 'Play Again' to replay, or press 'Reset' to quit"
        }

        else {
            messageLog.textContent = "Press 'ENTER' to play again, or press 'BACKSPACE' to quit"
        }
        
        document.addEventListener('keydown', function(e) {
            if (e.code == "Enter" || e.code == "NumpadEnter") {
                index = 0
                game.index = 0
                clearBoard()
                firstTurn()  
            }
        })
        
        document.addEventListener('keydown', function(e) {
            if (e.code == "Backspace") {
                window.location.reload()
            }
        })
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
                    scoreOne++
                    playerOneScore.textContent = scoreOne
                    messageLog.textContent = `${nameOne} wins!`
                    setTimeout(replayMessage, 3000)
                }

                else if (PlayerTwo.pickedSymbol == 'X') {
                    scoreTwo++
                    playerTwoScore.textContent = scoreTwo
                    messageLog.textContent = `${nameTwo} wins!`
                    setTimeout(replayMessage, 3000)
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
                        scoreOne++
                        playerOneScore.textContent = scoreOne
                        messageLog.textContent = `${nameOne} wins!`
                        setTimeout(replayMessage, 3000)
                    }

                    else if (PlayerTwo.pickedSymbol == 'O') {
                        scoreTwo++
                        playerTwoScore.textContent = scoreTwo
                        messageLog.textContent = `${nameTwo} wins!`
                        setTimeout(replayMessage, 3000)
                    }
            }
        
        else if (index == 9) {
            messageLog.textContent = "It's a Draw"
            setTimeout(replayMessage, 3000)
        }    
    }

    return {index, topLeftOn, topMidOn, topRightOn, midLeftOn, midMidOn, midRightOn, btmLeftOn, btmMidOn, btmRightOn, getNames, playerTurn, replayMessage, getWinner, firstTurn}
}


// FUNCTIONS

function gameBoardActive() {
    game.topLeftOn = true
    game.topMidOn = true
    game.topRightOn = true
    game.midLeftOn = true
    game.midMidOn = true
    game.midRightOn = true
    game.btmLeftOn = true
    game.btmMidOn = true
    game.btmRightOn = true
}

function clearBoard() {
    topLeft.textContent = ''
    topMid.textContent = ''
    topRight.textContent = ''
    midLeft.textContent = ''
    midMid.textContent = ''
    midRight.textContent = ''
    btmLeft.textContent = ''
    btmMid.textContent = ''
    btmRight.textContent = ''
    board.symArray = []
}


// EVENT LISTENERS

gameMode.addEventListener('change', function() {
    if(gameMode.options[1].selected) {
        difficulty.classList.remove('disabled')
        chooseO.classList.remove('disabled')
        chooseX.classList.remove('disabled')
        messageLog.textContent = "Choose  'X'  or  'O'  to begin"

       } else {
        difficulty.classList.add('disabled')
        // Code for AI in future
       }
})

chooseX.addEventListener('click', function() {
    PlayerOne.pickedSymbol = 'X'
    PlayerTwo.pickedSymbol = 'O'

    if(gameMode.options[0].selected) {
        difficulty.classList.remove('disabled')
        game = GameflowPVP()
        game.getNames()
        game.firstTurn()

       } else {
        difficulty.classList.add('disabled')
        // Code for AI in future
       }
})

document.addEventListener('keydown', function(e) {
    if (e.code == 'KeyX') {
        PlayerOne.pickedSymbol = 'X'
        PlayerTwo.pickedSymbol = 'O'

    if(gameMode.options[0].selected) {
        difficulty.classList.remove('disabled')
        game = GameflowPVP()
        game.getNames()
        game.firstTurn()

    } else {
        difficulty.classList.add('disabled')
        // Code for AI in future
    }}
})

chooseO.addEventListener('click', function() {
    PlayerOne.pickedSymbol = 'O'
    PlayerTwo.pickedSymbol = 'X'

    if(gameMode.options[0].selected) {
        difficulty.classList.remove('disabled')
            game = GameflowPVP()
            game.getNames()
            game.firstTurn()

       } else {
        difficulty.classList.add('disabled')
        // Code for AI in future
       }
})

document.addEventListener('keydown', function(e) {
    if (e.code == 'KeyO') {
        PlayerOne.pickedSymbol = 'O'
        PlayerTwo.pickedSymbol = 'X'

    if(gameMode.options[0].selected) {
        difficulty.classList.remove('disabled')
        game = GameflowPVP()
        game.getNames()
        game.firstTurn()

    } else {
        difficulty.classList.add('disabled')
        // Code for AI in future
    }
    }
})

replay.addEventListener('click', function() {
        index = 0
        game.index = 0
        clearBoard()
        game.firstTurn()  
})

reset.addEventListener('click', function() {
    playerOneScore.innerHTML = 0
    playerTwoScore.innerHTML = 0
    window.location.reload()
})

topLeft.addEventListener('click', function() {
    
    if(game.topLeftOn) {
        topLeft.textContent = board.symArray[game.index]
        game.index += 1
        game.playerTurn()
        game.getWinner()
        game.topLeftOn = false
    }
})

topMid.addEventListener('click', function() {
    
    if(game.topMidOn) {
        topMid.textContent = board.symArray[game.index]
        game.index += 1
        game.playerTurn()
        game.getWinner()
        game.topMidOn = false
    }
})

topRight.addEventListener('click', function() {
   
    if(game.topRightOn) {
        topRight.textContent = board.symArray[game.index]
        game.index += 1
        game.playerTurn()
        game.getWinner()
        game.topRightOn = false
    }
})

midLeft.addEventListener('click', function() {
 
    if(game.midLeftOn) {
        midLeft.textContent = board.symArray[game.index]
        game.index += 1
        game.playerTurn()
        game.getWinner()
        game.midLeftOn = false
    }
})

midMid.addEventListener('click', function() {
    
    if(game.midMidOn) {
        midMid.textContent = board.symArray[game.index]
        game.index += 1
        game.playerTurn()
        game.getWinner()
        game.midMidOn = false
    }
})

midRight.addEventListener('click', function() {
    
    if(game.midRightOn) {
        midRight.textContent = board.symArray[game.index]
        game.index += 1
        game.playerTurn()
        game.getWinner()
        game.midRightOn = false
    }
})

btmLeft.addEventListener('click', function() {
    
    if(game.btmLeftOn) {
        btmLeft.textContent = board.symArray[game.index]
        game.index += 1
        game.playerTurn()
        game.getWinner()
        game.btmLeftOn = false
    }
})

btmMid.addEventListener('click', function() {
    
    if(game.btmMidOn) {
        btmMid.textContent = board.symArray[game.index]
        game.index += 1
        game.playerTurn()
        game.getWinner()
        game.btmMidOn = false
    }
})

btmRight.addEventListener('click', function() {
    
    if(game.btmRightOn) {
        btmRight.textContent = board.symArray[game.index]
        game.index += 1
        game.playerTurn()
        game.getWinner()
        game.btmRightOn = false
    }
})

// CODE

let board = Gameboard()
let game = GameflowPVP()

const PlayerOne = Player();
const PlayerTwo = Player();