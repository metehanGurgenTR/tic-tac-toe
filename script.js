let player1 = "player1";
let player2 = "player2";
let currentPlayer = player1;

addEventListener("click", (event) => {{
  const square = event.target;
  if (currentPlayer === player1) {
    insertX(square.className);
  } else {
    insertO(square.className);
  }
  currentPlayer = switchPlayer(currentPlayer);
}});

function insertO(square) {
  const letter = document.createElement("span");
  letter.classList.add("player-o");
  letter.textContent = "O";
  document.querySelector('.'+square).appendChild(letter);
}

function insertX(square) {
  const letter = document.createElement("span");
  letter.classList.add("player-x");
  letter.textContent = "X";
  document.querySelector('.'+square).appendChild(letter);
}

function switchPlayer(currentPlayer) {
  currentPlayer === player1 ? currentPlayer = player2 : currentPlayer = player1;
  return currentPlayer;
}
