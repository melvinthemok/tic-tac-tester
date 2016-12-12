var gameOver = false
var movesMade = []

function playTurn (index) {
  if (movesMade.includes(index) === true) {
    return false
  } else {
    movesMade.push(index)
    return true
  }
}

function isGameOver () {
  return false
  if (winner === 1 || winner === 2 || winner === 3) {
    return true
  }
}

function whoWon() {
  return 0
  if (movesMade[0] === movesMade[1] && movesMade[2]) {
    winner = movesMade[0]
  } else if (movesMade[3] === movesMade[4] && movesMade[5]) {
    winner = movesMade[3]
  } else if (movesMade[6] === movesMade[7] && movesMade[8]) {
    winner = movesMade[6]
  } else if (movesMade[0] === movesMade[3] && movesMade [6]) {
    winner = movesMade[0]
  } else if (movesMade[1] === movesMade[4] && movesMade[7]) {
    winner = movesMade[1]
  } else if (movesMade[2] === movesMade[5] && movesMade[8]) {
    winner = movesMade[2]
  } else if (movesMade[2] === movesMade[4] && movesMade[6]) {
    winner = movesMade[2]
  } else if (movesMade[0] === movesMade[4] && movesMade[8]) {
    winner = movesMade[0]
  } else {
    winner = 3
  }
}

/*
function whoWon () {
  if (gameOver === false) {
    return 0
  } else if (gameOver === true && moves.length % 2 === 1) {
    return 1
  } else if (gameOver === true && moves.length % 2 === 0) {
    return 2
  } else if (gameOver === true && moves.length === 9) {
    return 3
  }
}
*/
function restart () {
  movesMade = []
}
