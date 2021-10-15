// OO Refactor: Player 
class Player {
  constructor(color) {
    this.color = color;
  }
}

// OO Refactor 
class Game {
  constructor(p1, p2, width=7, height=6) {
    this.players = [p1, p2];
    this.width = width;
    this.height = height;
    this.currPlayer = p1;
    this.board = [];
    this.makeBoard();
    this.makeHtmlBoard();
  }
  
  // Set the initial board class property
  makeBoard() {
    for (let y = 0; y < this.height; y++) {
      this.board.push(Array.from({ length: this.width }));
    }
  }
  
  // Make the board in the DOM
  makeHtmlBoard() {
    const board = document.getElementById('board');
    board.innerHTML = '';

    // make column tops (clickable area for adding a piece to that column)
    const top = document.createElement('tr');
    top.setAttribute('id', 'column-top');
    
    // Need to bind this reference to handleClick
    this.handleGameClick = this.handleClick.bind(this);
    top.addEventListener('click', this.handleGameClick);

    for (let x = 0; x < this.width; x++) {
      const headCell = document.createElement('td');
      headCell.setAttribute('id', x);
      top.append(headCell);
    }

    board.append(top);

    // make main part of board
    for (let y = 0; y < this.height; y++) {
      const row = document.createElement('tr');

      for (let x = 0; x < this.width; x++) {
        const cell = document.createElement('td');
        cell.setAttribute('id', `${y}-${x}`);
        row.append(cell);
      }

      board.append(row);
    }
  }
  
  // Find the next available spot in board 
  findSpotForCol(x) {
    for (let y = this.height - 1; y >= 0; y--) {
      if (!this.board[y][x]) {
        return y;
      }
    }
    return null;
  }
  
  // Place in the table 
  placeInTable(y, x) {
    const piece = document.createElement('div');
    piece.classList.add('piece');
    piece.style.backgroundColor = this.currPlayer.color;
    piece.style.top = -50 * (y + 2);

    const spot = document.getElementById(`${y}-${x}`);
    spot.append(piece);
  }
  
  // End the game 
  endGame(msg) {
    function showGameMessage(msg) {
      alert(msg);
    }
    // Show message after delay 
    setTimeout(showGameMessage(msg), 3000);
    
    // Remove Event Listener, so no new pieces can be added 
    const top = document.getElementById("column-top");
    top.removeEventListener("click", this.handleGameClick);
  }
  
  /** handleClick: handle click of column top to play piece */
  handleClick(evt) {
    // get x from ID of clicked cell
    const x = +evt.target.id;
    
    // get next spot in column (if none, ignore click)
    const y = this.findSpotForCol(x);
    if (y === null) {
      return;
    }

    // place piece in board and add to HTML table
    this.board[y][x] = this.currPlayer;
    this.placeInTable(y, x);
    
    // check for win
    if (this.checkForWin()) {
      return this.endGame(`Player ${this.currPlayer.color} won!`);
    }
    
    // check for tie
    if (this.board.every(row => row.every(cell => cell))) {
      return this.endGame('Tie!');
    }
      
    // switch players
    this.currPlayer = this.currPlayer === this.players[0] ? this.players[1] : this.players[0];
  }
  
  /** checkForWin: check board cell-by-cell for "does a win start here?" */
  checkForWin() {
    const _win = cells => {
      // Check four cells to see if they're all color of current player
      //  - cells: list of four (y, x) cells
      //  - returns true if all are legal coordinates & all match currPlayer
      return cells.every(
        ([y, x]) =>
          y >= 0 &&
          y < this.height &&
          x >= 0 &&
          x < this.width &&
          this.board[y][x] === this.currPlayer
      );
    }

    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        // get "check list" of 4 cells (starting here) for each of the different
        // ways to win
        const horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
        const vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
        const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
        const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];

        // find winner (only checking each win-possibility as needed)
        if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
          return true;
        }
      }
    }
  }

  
}


// Game 
const gameForm = document.getElementById("game-form");
gameForm.addEventListener("submit", (e) => {
  // Prevent Page from Reloading 
  e.preventDefault();
  
  // Define the two player variables 
  let p1, p2;
  
  // Set Player 1 color 
  if (e.target.p1color.value == undefined || e.target.p1color.value == "") {
    p1 = new Player("red");
  } else {
    p1 = new Player(e.target.p1color.value);
  }
  
  // Set Player 2 color 
  if (e.target.p2color.value == undefined || e.target.p2color.value == "") {
    p2 = new Player("blue");
  } else {
    p2 = new Player(e.target.p2color.value);
  }

  // Start New Game With Entered Colors 
  const newGame = new Game(p1, p2);
});