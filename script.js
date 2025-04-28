let player1 = "player1";
let player2 = "player2";
let currentPlayer = player1;

let set = new Set();
for (let i = 1; i <= 9; i++) {
  set.add("square" + i);
}

addEventListener("click", (event) => {{
  const square = event.target;
  insertLetter(square.className, currentPlayer);
  currentPlayer = switchPlayer(currentPlayer);
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
    } else {
      alert("Must insert a letter into an empty square!");
    }
}

function switchPlayer(currentPlayer) {
  currentPlayer === player1 ? currentPlayer = player2 : currentPlayer = player1;
  return currentPlayer;
}
