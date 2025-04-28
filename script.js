addEventListener("click", (event) => {{
  const square = event.target;
  insertO(square.className);
}});

function insertO(square) {
  const letter = document.createElement("span");
  letter.classList.add("player-o");
  letter.textContent = "O";
  document.querySelector('.'+square).appendChild(letter);
}