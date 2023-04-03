const cells = document.querySelectorAll('.cell'); //This is grabbing the .cell elements on the dom
const playerX = '<img src="images/X.png" alt="X" class="X">'; //This is the using an image for X player
const playerO = '<img src="images/O.png" alt="O" class="O">'; //This is using an image for O player
let thePlayer = playerX; //It starts with player x. 
let gameOver = false;
const clickSound = document.getElementById('click-sound'); //This plays the bubble pop sound when a player selects a piece on the board
const winSound = new Audio('./sound/win-banjo.mp3'); //Sound that plays when a player wins (I would like it to play automatically instead of after confirming the alert)


// START OF SCOREBOARD AREA

const scoreboard = document.getElementById('scoreboard');
let playerXScore = 0;
let playerOScore = 0;

function updateScoreboard(xScore, oScore) {
  playerXScore = xScore;
  playerOScore = oScore;
  scoreboard.innerHTML = `
    <p><strong>Player X</strong> Score: ${playerXScore} <br> <strong>Player O</strong> Score: ${playerOScore}</p>
  `;
}

// END OF SCOREBOARD AREA


//START OF PLAY AGAIN BUTTON AREA

//This allows the player to play another game without refreshing the screen
const playagainButton = document.getElementById('playagain-button');
playagainButton.addEventListener('click', function() { //This is listening to a click on the playagainButton and instructes it to call playagainGame();
  playagainGame();
});


//This block of code clears the board and resets the variables thePlayer and 
//gameOver to their initial values, and resets the result message. 

//I also had to change this block of code so it listed the game results on the DOM
function playagainGame() {
  const cells = document.querySelectorAll('.cell');
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = '';
  }

   // Resets game variables
  thePlayer = playerX;
  gameOver = false;
}

//END OF PLAY AGAIN BUTTON AREA


//START OF GAME LOGIC
//This event listener loops and checks if the game has reached gameOver status.  If it isn't it marks the board with the players game piece.
cells.forEach(function(cell) {
    cell.addEventListener('click', function() {
      if (gameOver) return;
  
      
      if (cell.innerHTML !== '') return;  //This line is making sure the cell hasn't already been selected
      console.log('This cell has already been selected');
  
      cell.innerHTML = thePlayer;
      clickSound.play(); // plays the sound effect when board piece is selected
  
  
  //This checks to see if there is a winner.  If there is a winner it sets gameOver.
  //This code was changed so that it would assign a win to the player who won so the scoreboard would work.
      
  
      if (checkWin()) {
        if (thePlayer === playerX) {
          playerXScore++;
        } else {
          playerOScore++;
        }
        updateScoreboard(playerXScore, playerOScore);
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `${thePlayer} WINS!`;
        winSound.play();
        gameOver = true;
        return;
      }
  
      //This is what announcing a tie when there is not winner.
  
      if (checkTie()) {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `IT'S A TIE!`;
        gameOver = true;
        return;
      }
      
  
      thePlayer = thePlayer === playerX ? playerO : playerX;
    });
  });
  
  /* This checkWin function is responsiable for checking if any of the eight possible 
  win conditions have been met, to determine a winner*/
  function checkWin() {
    return ( 
      
    /*The first three cellChecks are for the rows, then next 3 are for columns, then 
    the last two are the diagonal possiblilities. */
      cellCheck(0, 1, 2) ||
      cellCheck(3, 4, 5) ||
      cellCheck(6, 7, 8) ||
      cellCheck(0, 3, 6) ||
      cellCheck(1, 4, 7) ||
      cellCheck(2, 5, 8) ||
      cellCheck(0, 4, 8) ||
      cellCheck(2, 4, 6)
    );
  }
  
  
  /*this function checks to see If three cells have been marked by the same game player, which results in a 
  condition of true indicating that a player has won.*/
  function cellCheck(a, b, c) {
    return (
      cells[a].innerHTML === thePlayer &&
      cells[b].innerHTML === thePlayer &&
      cells[c].innerHTML === thePlayer
    );
  }
  
  
  /*This function iterates through all cells to determine if each cell has been marked with a game piece.
  It will return false until no other cells are empty, then the game will be declared a tie.*/


  function checkTie() {
    var cellsArray = Array.from(cells);
    var result = cellsArray.every(function(cell) {
      return cell.innerHTML !== '';
    });
    return result;
  }
  

//END OF GAME LOGIC
