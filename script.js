// const board = document.querySelectorAll('[data-cell]');
// const statusMessage = document.getElementById('statusMessage');
// const restartButton = document.getElementById('restartButton');
// let currentPlayer = 'X';
// let gameActive = true;
// const winCombinations = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ];
// let gameState = Array(9).fill('');

// function handleClick(e) {
//   const cell = e.target;
//   const cellIndex = Array.from(board).indexOf(cell);

//   if (gameState[cellIndex] !== '' || !gameActive) return;

//   gameState[cellIndex] = currentPlayer;
//   cell.textContent = currentPlayer;
//   cell.classList.add(`active-${currentPlayer.toLowerCase()}`);
//   checkResult();
// }

// function checkResult() {
//   let roundWon = false;
//   let winningCells = [];

//   for (let i = 0; i < winCombinations.length; i++) {
//     const [a, b, c] = winCombinations[i];
//     if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
//       roundWon = true;
//       winningCells = [a, b, c];
//       break;
//     }
//   }

//   if (roundWon) {
//     statusMessage.textContent = `Player ${currentPlayer} wins!`;
//     gameActive = false;
//     highlightWinningCells(winningCells);
//   } else if (!gameState.includes('')) {
//     statusMessage.textContent = "It's a draw!";
//     gameActive = false;
//   } else {
//     currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//     statusMessage.textContent = `Player ${currentPlayer}'s turn`;
//   }
// }

// function highlightWinningCells(cells) {
//   cells.forEach(index => {
//     board[index].classList.add('winning');
//   });
// }

// function restartGame() {
//   gameActive = true;
//   currentPlayer = 'X';
//   gameState = Array(9).fill('');
//   board.forEach(cell => {
//     cell.textContent = '';
//     cell.classList.remove('active-x', 'active-o', 'winning');
//   });
//   statusMessage.textContent = "Player X's turn";
// }

// function updateStatusMessage() {
//     statusMessage.textContent = `Player ${currentPlayer}'s turn`;
    
//     // Temporarily remove and re-add the animation class to re-trigger the animation
//     statusMessage.classList.remove('animate');
//     void statusMessage.offsetWidth;  // Trigger reflow to reset the animation
//     statusMessage.classList.add('animate');
//   }
  
//   function checkResult() {
//     let roundWon = false;
//     let winningCells = [];
  
//     for (let i = 0; i < winCombinations.length; i++) {
//       const [a, b, c] = winCombinations[i];
//       if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
//         roundWon = true;
//         winningCells = [a, b, c];
//         break;
//       }
//     }
  
//     if (roundWon) {
//       statusMessage.textContent = `Player ${currentPlayer} wins!`;
//       gameActive = false;
//       highlightWinningCells(winningCells);
//     } else if (!gameState.includes('')) {
//       statusMessage.textContent = "It's a draw!";
//       gameActive = false;
//     } else {
//       currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//       updateStatusMessage();  // Update turn message with animation
//     }
//   }
  
//   function restartGame() {
//     gameActive = true;
//     currentPlayer = 'X';
//     gameState = Array(9).fill('');
//     board.forEach(cell => {
//       cell.textContent = '';
//       cell.classList.remove('active-x', 'active-o', 'winning');
//     });
//     updateStatusMessage();  // Reset status message with animation
//   }
  



// board.forEach(cell => cell.addEventListener('click', handleClick));
// restartButton.addEventListener('click', restartGame);


const board = document.querySelectorAll('[data-cell]');
const statusMessage = document.getElementById('statusMessage');
const restartButton = document.getElementById('restartButton');
const turnIndicator = document.getElementById('turnIndicator');  // New turn indicator element
let currentPlayer = 'X';
let gameActive = true;
const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
let gameState = Array(9).fill('');

function handleClick(e) {
  const cell = e.target;
  const cellIndex = Array.from(board).indexOf(cell);

  if (gameState[cellIndex] !== '' || !gameActive) return;

  gameState[cellIndex] = currentPlayer;
  cell.textContent = currentPlayer;
  cell.classList.add(`active-${currentPlayer.toLowerCase()}`);
  checkResult();
}

function checkResult() {
    let roundWon = false;
    let winningCells = [];
  
    for (let i = 0; i < winCombinations.length; i++) {
      const [a, b, c] = winCombinations[i];
      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        roundWon = true;
        winningCells = [a, b, c];
        break;
      }
    }
  
    if (roundWon) {
      statusMessage.textContent = `Player ${currentPlayer} wins!`;
      // Add the appropriate win class to trigger the animation
      if (currentPlayer === 'X') {
        statusMessage.classList.add('win');
      } else {
        statusMessage.classList.add('o-win');
      }
      gameActive = false;
      highlightWinningCells(winningCells);
    } else if (!gameState.includes('')) {
      statusMessage.textContent = "It's a draw!";
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      updateTurnIndicator();  // Update the turn indicator when the turn changes
      statusMessage.textContent = `Player ${currentPlayer}'s turn`;
    }
  }


function highlightWinningCells(cells) {
  cells.forEach(index => {
    board[index].classList.add('winning');
  });
}

function updateTurnIndicator() {
  // Add the 'show' class to make the indicator visible with transition
  turnIndicator.classList.add('show');
  
  // Change the background color based on the current player
  if (currentPlayer === 'X') {
    turnIndicator.classList.remove('o-turn');
    turnIndicator.classList.add('x-turn');
  } else {
    turnIndicator.classList.remove('x-turn');
    turnIndicator.classList.add('o-turn');
  }

  // Hide the indicator after 1 second
  setTimeout(() => {
    turnIndicator.classList.remove('show');
  }, 1000);  // The indicator stays visible for 1 second
}

function restartGame() {
  gameActive = true;
  currentPlayer = 'X';
  gameState = Array(9).fill('');
  board.forEach(cell => {
    cell.textContent = '';
    cell.classList.remove('active-x', 'active-o', 'winning');
  });
  updateTurnIndicator();  // Reset the turn indicator
  statusMessage.textContent = "Player X's turn";
}

board.forEach(cell => cell.addEventListener('click', handleClick));
restartButton.addEventListener('click', restartGame);

