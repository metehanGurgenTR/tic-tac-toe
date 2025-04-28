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
   function

   passes the squares parent element (row) and the currentPlayer to 
   checkRows function which checks if player1 or player2 wins,
   currently only checks the rows

   will only run the switchPlayer function if a 
   letter was inserted into a valid square
*/
addEventListener("click", (event) => {
  const square = event.target;
  const inserted = insertLetter(square.className, currentPlayer);
  const s = document.querySelector('.'+square.className.split(' ')[0]);
  const row = s.parentElement;
  checkRows(row, currentPlayer);
  if (inserted) {
    currentPlayer = switchPlayer(currentPlayer);
  } 
});

const checkRows = (row, currentPlayer) => {
  const letter1 = row.children[0].textContent.trim();
  const letter2 = row.children[1].textContent.trim();
  const letter3 = row.children[2].textContent.trim();
  if (currentPlayer === "player1") {
    if (letter1 === 'X' && letter2 === 'X' && letter3 === 'X') {
      setTimeout(() => {
        alert("Player 1 Wins!");
      }, 3);
    } 
  } else {
    if (letter1 === 'O' && letter2 === 'O' && letter3 === 'O') {
      setTimeout(() => {
        alert("Player 2 Wins!");
      }, 3);
    } 
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
