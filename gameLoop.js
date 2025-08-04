import { gameFinished, finishGame } from './main.js';

let gameBoard = {
    row1: ["", "", ""],
    row2: ["", "", ""],
    row3: ["", "", ""]
}

// GAMELOOP
export const gameLoop = () => {

    let playerOrder = 1

    // Document querySelectors
    const playField = document.querySelectorAll("#id-1, #id-2, #id-3, #id-4, #id-5, #id-6, #id-7, #id-8, #id-9");

    const A1 = playField[0]
    const A2 = playField[1]
    const A3 = playField[2]
    const B1 = playField[3]
    const B2 = playField[4]
    const B3 = playField[5]
    const C1 = playField[6]
    const C2 = playField[7]
    const C3 = playField[8]

    // Field 1
    A1.addEventListener("click", () => {
        if (gameFinished) { return; }
        else if (gameBoard.row1[0]) {
            console.log("Choose again.")
            return;
        } else if (playerOrder === 1) {
            gameBoard.row1[0] = "X";
            A1.textContent="X";
            console.log(gameBoard);
            gameStatus(gameBoard);
            playerOrder = 2;
        } else {
            gameBoard.row1[0] = "O";
            A1.textContent="O";
            console.log(gameBoard);
            gameStatus(gameBoard);
            playerOrder = 1;
        }
    })

    // Field 2
    A2.addEventListener("click", () => {
        if (gameFinished) { return; }
        else if (gameBoard.row1[1]) {
            console.log("Choose again.")
            return;
        } else if (playerOrder === 1) {
            gameBoard.row1[1] = "X";
            A2.textContent="X";
            console.log(gameBoard);
            gameStatus(gameBoard);
            playerOrder = 2;
        } else {
            gameBoard.row1[1] = "O";
            A2.textContent="O";
            console.log(gameBoard);
            gameStatus(gameBoard);
            playerOrder = 1;
        }
    })

    // Field 3
    A3.addEventListener("click", () => {
        if (gameFinished) { return; }
        else if (gameBoard.row1[2]) {
            console.log("Choose again.")
            return;
        } else if (playerOrder === 1) {
            gameBoard.row1[2] = "X";
            A3.textContent="X";
            console.log(gameBoard);
            gameStatus(gameBoard);
            playerOrder = 2;
        } else {
            gameBoard.row1[2] = "O";
            A3.textContent="O";
            console.log(gameBoard);
            gameStatus(gameBoard);
            playerOrder = 1;
        }
    })

    // Field 4
    B1.addEventListener("click", () => {
        if (gameFinished) { return; }
        else if (gameBoard.row2[0]) {
            console.log("Choose again.")
            return;
        } else if (playerOrder === 1) {
            gameBoard.row2[0] = "X";
            B1.textContent="X";
            console.log(gameBoard);
            gameStatus(gameBoard);
            playerOrder = 2;
        } else {
            gameBoard.row2[0] = "O";
            B1.textContent="O";
            console.log(gameBoard);
            gameStatus(gameBoard);
            playerOrder = 1;
        }
    })

    // Field 5
    B2.addEventListener("click", () => {
        if (gameFinished) { return; }
        else if (gameBoard.row2[1]) {
            console.log("Choose again.")
            return;
        } else if (playerOrder === 1) {
            gameBoard.row2[1] = "X";
            B2.textContent="X";
            console.log(gameBoard);
            gameStatus(gameBoard);
            playerOrder = 2;
        } else {
            gameBoard.row2[1] = "O";
            B2.textContent="O";
            console.log(gameBoard);
            gameStatus(gameBoard);
            playerOrder = 1;
        }
    })

    // Field 6
    B3.addEventListener("click", () => {
        if (gameFinished) { return; }
        else if (gameBoard.row2[2]) {
            console.log("Choose again.")
            return;
        } else if (playerOrder === 1) {
            gameBoard.row2[2] = "X";
            B3.textContent="X";
            console.log(gameBoard);
            gameStatus(gameBoard);
            playerOrder = 2;
        } else {
            gameBoard.row2[2] = "O";
            B3.textContent="O";
            console.log(gameBoard);
            gameStatus(gameBoard);
            playerOrder = 1;
        }
    })

    // Field 7
    C1.addEventListener("click", () => {
        if (gameFinished) { return; }
        else if (gameBoard.row3[0]) {
            console.log("Choose again.")
            return;
        } else if (playerOrder === 1) {
            gameBoard.row3[0] = "X";
            C1.textContent="X";
            console.log(gameBoard);
            gameStatus(gameBoard);
            playerOrder = 2;
        } else {
            gameBoard.row3[0] = "O";
            C1.textContent="O";
            console.log(gameBoard);
            gameStatus(gameBoard);
            playerOrder = 1;
        }
    })

    // Field 8
    C2.addEventListener("click", () => {
        if (gameFinished) { return; }
        else if (gameBoard.row3[1]) {
            console.log("Choose again.")
            return;
        } else if (playerOrder === 1) {
            gameBoard.row3[1] = "X";
            C2.textContent="X";
            console.log(gameBoard);
            gameStatus(gameBoard);
            playerOrder = 2;
        } else {
            gameBoard.row3[1] = "O";
            C2.textContent="O";
            console.log(gameBoard);
            gameStatus(gameBoard);
            playerOrder = 1;
        }
    })

    // Field 9
    C3.addEventListener("click", () => {
        if (gameFinished) { return; }
        else if (gameBoard.row3[2]) {
            console.log("Choose again.")
            return;
        } else if (playerOrder === 1) {
            gameBoard.row3[2] = "X";
            C3.textContent="X";
            console.log(gameBoard);
            gameStatus(gameBoard);
            playerOrder = 2;
        } else {
            gameBoard.row3[2] = "O";
            C3.textContent="O";
            console.log(gameBoard);
            gameStatus(gameBoard);
            playerOrder = 1;
        }
    })
}

// GAMESTATUS
export const gameStatus = (gameBoard) => {
    
    // Checking rows -> horizontal
    for (let i = 1; i < 4; i++) {
        const row = gameBoard['row' + i];
        const a = row[0];
        const b = row[1];
        const c = row[2];
            if (a && a === b && b === c) {
                console.log(`You win on row ${i}!`);
                finishGame();
                return;
            }
    }

    // Checking columns -> vertical
    for (let i = 0; i < 3; i++) {
        const a = gameBoard.row1[i]
        const b = gameBoard.row2[i]
        const c = gameBoard.row3[i]
            if (a && a === b && b === c) {
                console.log(`You win on column ${i + 1}!`);
                finishGame();
                return;
            }
    }

    // checking diagonal -> from left to right
    {
        const a = gameBoard.row1[0]
        const b = gameBoard.row2[1]
        const c = gameBoard.row3[2]
            if (a && a === b && b === c) {
                console.log("You win on diagonal!");
                finishGame();
                return;
            }
        }

    // checking diagonal -> from right to left
    {
        const a = gameBoard.row1[2]
        const b = gameBoard.row2[1]
        const c = gameBoard.row3[0]
            if (a && a === b && b === c) {
                console.log("You win on diagonal!");
                finishGame();
                return;
            }
        }

    // checking if all positions are filled in the matrix
    let checkDraw = 0

    for (let i = 0; i < 3; i++) {
        const a = gameBoard.row1[i]
        const b = gameBoard.row2[i]
        const c = gameBoard.row3[i]
            if (a !== "" && b !== "" && c !== "") {
            checkDraw += 1
            }
            if (checkDraw === 3) {
                    console.log("It's a draw!");
                    finishGame();
                }
        }
        
    }