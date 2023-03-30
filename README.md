# Carnival Themed Tic Tac Toe Game

Tic Tac Toe Carnival Game

## Table of Contents

- [Instructions](#instructions)
- [Summary](#summary)
- [Planning](#planning)
- [Technologies](#technologies)
- [Favorites](#favorites)


## Instructions

--- How To Play ---

1. Player 1 - is automatically assigned the X game piece.  Player 1 chooses where to place their first X 
game piece on the board.  This marks the board with an image for the X game piece.<br><br>
2. It is Player 2 turn, which has been assigned the O game piece.  They choose where to place their first game
piece on the board. This marks the board with an image for the O game piece.<br><br>
3. This cycle repeats until a winner status is achieved by one of the players.<br><br>
4. If the game has no winner, the result will be a tie.
5. If a winner is determined the game results will be announced within the game results board area.<br>
6. To start a new game, click the "Play Again" button.<br>
7. Use the music toggler to control how the music is played while playing the game.<br>

## Summary

--- Game Summary ---

This is a fun interactive Carnival Themed Tic Tac Toe game.  Grab a friend and challenge them to a game of Tic Tac Toe, today.

## Planning

### --- User Stores ---
1. As a player, I should be able to start the game<br>
2. As a player, I should be able to place a game piece (X or O) on the board.<br>
3. As a player, I should be able to easily see the game results.<br>
4. As a player, once I square has been selected it can be changed or selected again by any player.<br>
5. As a player, I should be able to play another game with refreshing the page.<br>
6. As a player, I should be able to see whose turn it is.<br>
7. As a player, I should be able to see all moves that have been made on the board with game pieces.<br>
8. As a player, I should know when the game is over.<br><br>

### --- MVP Bronze --- (- ✓ = Completed Task / - ✗ = Incompleted Task )

1. The game should consist of  3 x 3 rows & columns of squares - ✓ <br>
2. The game should allow for 2 players. - ✓   <br>
3. Players take turns placing X & O on board - ✓  <br>
4. The potencial game outcomes are - Win or Tie. - ✓  <br>
5. A message should be shown that indicates who won, or if there was a tie. - ✓ <br>
6. There should be a button that resets to a new game. - ✓ <br>


### --- MVP Silver --- (- ✓ = Completed Task / - ✗ = Incompleted Task )

1. Provide the players a choice of which symbol to play as. - ✗ <br>
2. Provide a score board that will keep track of how many wins each player had  - ✗ <br>
3. Have audio effects - ✓  <br>
4. Involve other animations such as instead of using X, use characters that represent them instead - ✓  <br>
5. The game should be responsive. - ✗ <br>
6. Have unique styling - ✓  <br>


### --- MVP Gold --- (- ✓ = Completed Task / - ✗ = Incompleted Task )

1. Players can upload their own player avatars. - ✗ <br>
2. Use localStorage so that data is store instead of lost on page refresh - ✗ <br>
3. Enable player to player computer - ✗ <br>
4. Utilize Firebase so that two players can play online together. - ✗ <br>


### --- Pseduo Code ---

1. Start the game board 
2. Game board loads 
3. Assign player 1 to be X. 
4. Start of game loop<br> 
    a. Player 1 selects first square <br>
    b. If move is valid, mark board accordingly. <br>
    c. If it wasn't valid the board wouldn't have allowed that square to be reselected <br>
    d. Board should now be marked with the players characters <br>
    e. Check for winner <br>
    f. If no winner yet, player 2 will Gold <br>
    g. Player 2 selects square <br>
    h. If available, that square is marked <br>
    i. Checks again if there is a winner <br>
    j. Continues until a result of true is for a winner <br>
    k. If no winner the game is marked as a tie. <br>
5. Game ends


### --- Wireframe ---

![WireFrame](https://github.com/pammie89/Tic-Tac-Toe-Carnival/blob/main/images/wireframe.png)

### --- Technologies ---

The technologies used were <br>

1. HTML <br>
2. CSS <br>
3. Javascript <br>
4. Markdown (readme.md) <br>

### --- Favorites ---

1. the sound effect and the <br> <br>
2. X & O characters I created for the game.<br>

## Goals

=== TO DO'S ===

I would like to finish all MVP Lists.
