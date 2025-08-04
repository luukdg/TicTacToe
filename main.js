import { gameStatus } from './gameLogic.js';

let gameBoard = {
    row1: ["", "", ""],
    row2: ["", "", ""],
    row3: ["", "", ""]
}

const gameLoop = (gameBoard) => {
    if (gameBoard.row1[0]) {
        console.log("Choose again.")
    } else {
    gameBoard.row1[0] = "X";
    console.log(gameBoard);
    gameStatus(gameBoard);
    }

    gameBoard.row2[1] = "X";
    console.log(gameBoard);
    gameStatus(gameBoard);

    gameBoard.row3[2] = "X";
    console.log(gameBoard);
    gameStatus(gameBoard);
}

gameLoop(gameBoard);