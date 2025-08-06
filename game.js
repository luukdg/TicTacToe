// Change game state
export let gameFinished = false;
function finishGame() { gameFinished = true; }
export function endGame() { gameFinished = false; }

// Dom factory
export const domStatus = () => {
    let winnerFlag = ""

    const statusMessage = document.getElementById("status-message")

    function playerOne () {
        statusMessage.textContent = "Player X's turn"
    }

    function playerTwo () {
        statusMessage.textContent = "Player O's turn"
    }

    function playerOneWins () {
        statusMessage.textContent = "Player X wins!"
        winnerFlag = "X"
    }

    function playerTwoWins () {
        statusMessage.textContent = "Player O wins!"
        winnerFlag = "O"
    }

    function draw () {
        statusMessage.textContent = "It's a draw!";
        winnerFlag = "Draw"
    }

    function reset () {
        statusMessage.textContent = "Player X's turn";
        winnerFlag = ""
    }

    function getWinnerFlag() {
        return winnerFlag;
    }

    return { playerOne, playerTwo, playerOneWins, playerTwoWins, draw, reset, getWinnerFlag }
}

// create domStatus instance (AFTER defining factory)
const status = domStatus();

// game logic
export const game = (function () {

    // gameBoard
    let board = ["", "", "", "", "", "", "", "", ""];
    //           0.  1.  2.  3.  4.  5.  6.  7.  8.

        const getBoard = function() {
            return board;
        }

        const resetBoard = function() {
            board = ["", "", "", "", "", "", "", "", ""];
        }

    // Check possible results
    const checkScore = () => {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        for (const pattern of winPatterns) {
                const [a, b, c] = pattern;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                console.log("Player " + board[a] + " is the winner!"); // Return the winning player ('X' or 'O')
                finishGame();
                if (board[a] === "X") {
                    status.playerOneWins();
                } else {
                    status.playerTwoWins();
                }
            return;
        }
    }
        
        let isBoardFull = board.every(cell => cell !== "");
            if (isBoardFull) {
                console.log("It's a draw");
                status.draw();
                finishGame();
            }
    }

    // Reset player order
    let playerOrder = 1;

    const resetPlayerOrder = () => {
        playerOrder = 1;
    }

    // Function for eventlistener
    const gameInput = (id, index) => {
    id.addEventListener("click", () => {
        if (gameFinished) return;

        if (board[index]) {
            console.log("Choose again.");
            return;
        }

        if (playerOrder === 1) {
            id.textContent = "X";
            board[index] = "X";
            console.log(board);
            checkScore();

            if (!gameFinished) {
                status.playerTwo();
                playerOrder = 2;
            }

        } else {
            id.textContent = "O";
            board[index] = "O";
            console.log(board);
            checkScore();

            if (!gameFinished) {
                status.playerOne();
                playerOrder = 1;
            }
        }
    });
};


    return { getBoard, checkScore, gameInput, resetBoard, resetPlayerOrder, board };
})();

// gameLoop
export const gameLoop = () => {

    // Document querySelectors
    const playField = document.querySelectorAll(
        "#id-1, #id-2, #id-3, #id-4, #id-5, #id-6, #id-7, #id-8, #id-9"
    );

    // Assigning playField to variables
    const A1 = playField[0];
    const A2 = playField[1];
    const A3 = playField[2];
    const B1 = playField[3];
    const B2 = playField[4];
    const B3 = playField[5];
    const C1 = playField[6];
    const C2 = playField[7];
    const C3 = playField[8];

    // Assigning event listeners to playField
    game.gameInput(A1, 0);
    game.gameInput(A2, 1);
    game.gameInput(A3, 2);
    game.gameInput(B1, 3);
    game.gameInput(B2, 4);
    game.gameInput(B3, 5);
    game.gameInput(C1, 6);
    game.gameInput(C2, 7);
    game.gameInput(C3, 8);
};

export const buttons = () => {
    let X = 0;
    let O = 0;
    let draw = 0;

    const playField = document.querySelectorAll("#id-1, #id-2, #id-3, #id-4, #id-5, #id-6, #id-7, #id-8, #id-9");
    const resetButton = document.getElementById("reset");
    const nextButton = document.getElementById("next");
    const scoreX = document.getElementById("scoreX");
    const scoreO = document.getElementById("scoreO");
    const scoreDraw = document.getElementById("scoreDraw");

    // Reset game button
    resetButton.addEventListener("click", () => {
        game.resetBoard();
        playField.forEach(cell => {
            cell.textContent = "";
        });
        endGame();
        status.reset();
        console.log("reset game");
        game.resetPlayerOrder();
        scoreX.textContent = "X: 0"
        scoreO.textContent = "O: 0"
        scoreDraw.textContent = "Draw: O"
        X = 0;
        O = 0;
        draw = 0;
    });

    // Next game button
    nextButton.addEventListener("click", () => {
    if (gameFinished) {
        game.resetBoard();
        playField.forEach(cell => {
            cell.textContent = "";
        });

        const winner = status.getWinnerFlag();

        if (winner === "X") {
            X += 1;
            scoreX.textContent = "X: " + X;
        } else if (winner === "O") {
            O += 1;
            scoreO.textContent = "O: " + O;
        } else if (winner === "Draw") {
            draw += 1;
            scoreDraw.textContent = "Draw: " + draw;
        }

        console.log("next game");
        game.resetPlayerOrder();
        endGame();
    }
});

};