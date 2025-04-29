// create player1 and player2 and set currentPlayer to player1
let player1 = { name: "player1", score: 0 };
let player2 = { name: "player2", score: 0 };
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

// columns that contain the squares in each column
const column1 = [
  (square1 = document.querySelector(".square1")),
  (square4 = document.querySelector(".square4")),
  (square7 = document.querySelector(".square7")),
];

const column2 = [
  (square2 = document.querySelector(".square2")),
  (square5 = document.querySelector(".square5")),
  (square8 = document.querySelector(".square8")),
];

const column3 = [
  (square3 = document.querySelector(".square3")),
  (square6 = document.querySelector(".square6")),
  (square9 = document.querySelector(".square9")),
];

// diagonal squares
const diagonal1 = [
  (square1 = document.querySelector(".square1")),
  (square5 = document.querySelector(".square5")),
  (square9 = document.querySelector(".square9")),
];

const diagonal2 = [
  (square3 = document.querySelector(".square3")),
  (square5 = document.querySelector(".square5")),
  (square7 = document.querySelector(".square7")),
];

/* gets the square that was clicked on and runs the insertLetter
   function

   passes the squares parent element (row) and the currentPlayer to 
   checkRows function which checks if player1 or player2 wins

   passes the square that was clicked on to the getColumn function
   which returns the column the square is in

   passes the square that was clicked on to the getDiagonal
   function which returns the diagonal array the square is in
   
   passes the column and currentPlayer to the checkColumns 
   function which checks if player1 or player2 wins

   passes the diagonal array(s) and currentPlayer to the checkDiagonal
   function which checks if player1 or player2 wins
   
   checks the rows, columns, and diagonals

   will check if it is a draw

   will only run the switchPlayer function if a 
   letter was inserted into a valid square
*/
addEventListener("click", (event) => {
  const square = event.target;
  const inserted = insertLetter(square.className, currentPlayer);
  const s = document.querySelector("." + square.className.split(" ")[0]);
  const row = s.parentElement;
  const column = getColumn(s);
  const diagonal = getDiagonal(s);
  checkRows(row, currentPlayer);
  checkColumns(column, currentPlayer);
  checkDiagonal(diagonal, currentPlayer);
  if (checkIfDraw(getRows())) {
    setTimeout(() => {
      alert("Draw!");
      clearBoard();
    }, 3);
  }
  if (inserted) {
    currentPlayer = switchPlayer(currentPlayer);
  }
});

// check row of squares to determine if player1 or player2 won
const checkRows = (row, currentPlayer) => {
  const letter1 = row.children[0].textContent.trim();
  const letter2 = row.children[1].textContent.trim();
  const letter3 = row.children[2].textContent.trim();
  if (currentPlayer === player1) {
    if (letter1 === "X" && letter2 === "X" && letter3 === "X") {
      setTimeout(() => {
        alert("Player 1 Wins!");
        clearBoard();
        score(player1);
      }, 3);
    }
  } else {
    if (letter1 === "O" && letter2 === "O" && letter3 === "O") {
      setTimeout(() => {
        alert("Player 2 Wins!");
        clearBoard();
        score(player2);
      }, 3);
    }
  }
};

// check column of squares to determine if player1 or player2 won
const checkColumns = (column, currentPlayer) => {
  const letter1 = column[0].textContent.trim();
  const letter2 = column[1].textContent.trim();
  const letter3 = column[2].textContent.trim();
  if (currentPlayer === player1) {
    if (letter1 === "X" && letter2 === "X" && letter3 === "X") {
      setTimeout(() => {
        alert("Player 1 Wins!");
        clearBoard();
        score(player1);
      }, 3);
    }
  } else {
    if (letter1 === "O" && letter2 === "O" && letter3 === "O") {
      setTimeout(() => {
        alert("Player 2 Wins!");
        clearBoard();
        score(player2);
      }, 3);
    }
  }
};

// check diagonal of squares to determine if player1 or player2 won
const checkDiagonal = (diagonal, currentPlayer) => {
  if (diagonal.length === 2) {
    checkDiagonal(diagonal[0], currentPlayer);
    checkDiagonal(diagonal[1], currentPlayer);
    return;
  }
  const letter1 = diagonal[0].textContent.trim();
  const letter2 = diagonal[1].textContent.trim();
  const letter3 = diagonal[2].textContent.trim();
  if (currentPlayer === player1) {
    if (letter1 === "X" && letter2 === "X" && letter3 === "X") {
      setTimeout(() => {
        alert("Player 1 Wins!");
        clearBoard();
        score(player1);
      }, 3);
    }
  } else {
    if (letter1 === "O" && letter2 === "O" && letter3 === "O") {
      setTimeout(() => {
        alert("Player 2 Wins!");
        clearBoard();
        score(player2);
      }, 3);
    }
  }
};

// return the column the square is in
function getColumn(square) {
  let column;
  if (column1.includes(square)) {
    column = column1;
  } else if (column2.includes(square)) {
    column = column2;
  } else {
    column = column3;
  }
  return column;
}

// return the diagonal array(s) the square is in
function getDiagonal(square) {
  let diagonal;
  if (square.className.split(" ")[0] === "square5") {
    diagonal = [diagonal1, diagonal2];
    return diagonal;
  }
  if (diagonal1.includes(square)) {
    diagonal = diagonal1;
  } else {
    diagonal = diagonal2;
  }
  return diagonal;
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
    document.querySelector("." + square).appendChild(letter);
    document.querySelector("." + square).classList.add("hasLetter");
    return true;
  } else {
    alert("Must insert a letter into an empty square!");
    return false;
  }
}

// switches and returns the currentPlayer
function switchPlayer(currentPlayer) {
  currentPlayer === player1
    ? (currentPlayer = player2)
    : (currentPlayer = player1);
  return currentPlayer;
}

// clears the board
function clearBoard() {
  const row1 = document.querySelector(".row1").children;
  const row2 = document.querySelector(".row2").children;
  const row3 = document.querySelector(".row3").children;
  removeClassListAndTextContent(row1);
  removeClassListAndTextContent(row2);
  removeClassListAndTextContent(row3);
}

// removes the additional class and textContent of all squares in the row
const removeClassListAndTextContent = (row) => {
  for (let i = 0; i < row.length; i++) {
    row[i].classList.remove("hasLetter");
    row[i].textContent = "";
  }
};

/* gets the current score of the player who won
   and updates their score
*/
function score(player) {
  let score;
  if (player === player1) {
    score = document.getElementById("score1");
  } else {
    score = document.getElementById("score2");
  }
  player.score = player.score + 1;
  score.textContent = player.score;
}

// returns an array of each rows child elements
const getRows = () => {
    const row1 = document.querySelector(".row1").children;
    const row2 = document.querySelector(".row2").children;
    const row3 = document.querySelector(".row3").children;
    const rows = [row1, row2, row3];
  return rows;
};

/* checks if each square has a className of length 2.
   a className of length 2 means the element has the 
   additional "hasLetter" class. if all the squares
   have this additional "hasLetter" class, and no winner 
   has been declared, then all the squares have letters and it is a draw
*/
function checkIfDraw(rows) {
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < rows[i].length; j++) {
      if (rows[i][j].className.split(" ").length !== 2) {
        return false;
      }
    }
  }
  return true;
}
