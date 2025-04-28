let player1 = "player1";
let player2 = "player2";
let currentPlayer = player1;

let set = new Set();
for (let i = 1; i <= 9; i++) {
  set.add("square" + i);
}

addEventListener("click", (event) => {{
  const square = event.target;
  const inserted = insertLetter(square.className, currentPlayer);
  if (inserted) {
    currentPlayer = switchPlayer(currentPlayer);
  } 
}});

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

function switchPlayer(currentPlayer) {
  currentPlayer === player1 ? currentPlayer = player2 : currentPlayer = player1;
  return currentPlayer;
}
