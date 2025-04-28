// create player1 and player2 and set currentPlayer to player1
let player1 = "player1";
let player2 = "player2";
let currentPlayer = player1;

/* a Set that contains the square names that match
   the classNames of squares in index.html

   this helps with checking if the user clicked on 
   a valid square and if the square is empty
*/
let set = new Set();
for (let i = 1; i <= 9; i++) {
  set.add("square" + i);
}

/* gets the square that was clicked on and runs the insertLetter
   function, and will only run the switchPlayer function if a 
   letter was inserted into a valid square
*/ 
addEventListener("click", (event) => {{
  const square = event.target;
  const inserted = insertLetter(square.className, currentPlayer);
  if (inserted) {
    currentPlayer = switchPlayer(currentPlayer);
  } 
}});

/* game logic for checking if player1 or player2 wins,
   currently only checks the rows
*/
addEventListener("click", () => {
  checkRowOneX();
  checkRowOneO();
  checkRowTwoX();
  checkRowTwoO();
  checkRowThreeX();
  checkRowThreeO();
});

// first row
const squaresInRow1 = document.querySelector('.row1');
const checkRowOneX = () => {
  const letter1 = squaresInRow1.children[0].textContent.trim();
  const letter2 = squaresInRow1.children[1].textContent.trim();
  const letter3 = squaresInRow1.children[2].textContent.trim();
  if (letter1 === 'X' && letter2 === 'X' && letter3 === 'X') {
    setTimeout(() => {
      alert("Player 1 Wins!");
    }, 3);
  } 
}

const checkRowOneO = () => {
  const letter1 = squaresInRow1.children[0].textContent.trim();
  const letter2 = squaresInRow1.children[1].textContent.trim();
  const letter3 = squaresInRow1.children[2].textContent.trim();
  if (letter1 === 'O' && letter2 === 'O' && letter3 === 'O') {
    setTimeout(() => {
      alert("Player 2 Wins!");
    }, 3);
  } 
}

// second row
const squaresInRow2 = document.querySelector('.row2');
const checkRowTwoX = () => {
  const letter1 = squaresInRow2.children[0].textContent.trim();
  const letter2 = squaresInRow2.children[1].textContent.trim();
  const letter3 = squaresInRow2.children[2].textContent.trim();
  if (letter1 === 'X' && letter2 === 'X' && letter3 === 'X') {
    setTimeout(() => {
      alert("Player 1 Wins!");
    }, 3);
  } 
}

const checkRowTwoO = () => {
  const letter1 = squaresInRow2.children[0].textContent.trim();
  const letter2 = squaresInRow2.children[1].textContent.trim();
  const letter3 = squaresInRow2.children[2].textContent.trim();
  if (letter1 === 'O' && letter2 === 'O' && letter3 === 'O') {
    setTimeout(() => {
      alert("Player 2 Wins!");
    }, 3);
  } 
}

// third row
const squaresInRow3 = document.querySelector('.row3');
const checkRowThreeX = () => {
  const letter1 = squaresInRow3.children[0].textContent.trim();
  const letter2 = squaresInRow3.children[1].textContent.trim();
  const letter3 = squaresInRow3.children[2].textContent.trim();
  if (letter1 === 'X' && letter2 === 'X' && letter3 === 'X') {
    setTimeout(() => {
      alert("Player 1 Wins!");
    }, 3);
  } 
}

const checkRowThreeO = () => {
  const letter1 = squaresInRow3.children[0].textContent.trim();
  const letter2 = squaresInRow3.children[1].textContent.trim();
  const letter3 = squaresInRow3.children[2].textContent.trim();
  if (letter1 === 'O' && letter2 === 'O' && letter3 === 'O') {
    setTimeout(() => {
      alert("Player 2 Wins!");
    }, 3);
  } 
}

/* check if set contains the square that was clicked and is empty
   if so, insert letter X or O into the square based on currentPlayer
*/
function insertLetter(square, currentPlayer) {
    if (set.has(square)) {
      const letter = document.createElement("span");
      if (currentPlayer == player1) {
        letter.classList.add("player-x");
        letter.textContent = "X";
      } else {
        letter.classList.add("player-o");
        letter.textContent = "O";
      }
      document.querySelector('.'+square).appendChild(letter);
      document.querySelector('.'+square).classList.add("hasLetter");
      return true;
    } else {
      alert("Must insert a letter into an empty square!");
      return false;
    }
}

// switches and returns the currentPlayer
function switchPlayer(currentPlayer) {
  currentPlayer === player1 ? currentPlayer = player2 : currentPlayer = player1;
  return currentPlayer;
}
