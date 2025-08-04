import { gameStatus } from './gameLogic.js';

let gameBoard = {
    row1: ["", "", ""],
    row2: ["", "", ""],
    row3: ["", "", ""]
}

let playerOrder = 1

const gameLoop = (gameBoard) => {
    
}

const gameField = () => {
    // Document querySelectors
    const playField = document.querySelectorAll("#id-1, #id-2, #id-3, #id-4, #id-5, #id-6, #id-7, #id-8, #id-9");

    const A1Dom = playField[0]

    let A1 = gameBoard.row1[0]

    // Field 1
    A1Dom.addEventListener("click", () => {
        if (gameBoard.row1[0]) {
            console.log("Choose again.")
            return;
        } else if (playerOrder === 1) {
            A1 = "X";
            A1Dom.textContent="X";
            console.log(gameBoard);
            gameStatus(gameBoard);
            playerOrder = 2;
        } else {
            A1 = "O";
            A1Dom.textContent="O";
            console.log(gameBoard);
            gameStatus(gameBoard);
            playerOrder = 1;
        }
    })
}

gameField();
// gameLoop(gameBoard);
