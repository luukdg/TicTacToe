// Change game state
export let gameFinished = false;
function finishGame() { gameFinished = true; }
export function endGame() { gameFinished = false; }

// Dom factory
export const domStatus = () => {
    const statusMessage = document.getElementById("status-message")

    function playerOne () {
        statusMessage.textContent = "Player X's turn"
    }

    function playerTwo () {
        statusMessage.textContent = "Player O's turn"
    }

    function playerOneWins () {
        statusMessage.textContent = "Player X wins!"
    }

    function playerTwoWins () {
        statusMessage.textContent = "Player O wins!"
    }

    function draw () {
    statusMessage.textContent = "It's a draw!";
    }

    function reset () {
        statusMessage.textContent = "Player X's turn";
    }

    return { playerOne, playerTwo, playerOneWins, playerTwoWins, draw, reset }
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

    let playerOrder = 1;

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

            if (!gameFinished) {           // ✅ Only change if game not over
                status.playerTwo();
                playerOrder = 2;
            }

        } else {
            id.textContent = "O";
            board[index] = "O";
            console.log(board);
            checkScore();

            if (!gameFinished) {           // ✅ Same here
                status.playerOne();
                playerOrder = 1;
            }
        }
    });
};


    return { getBoard, checkScore, gameInput, resetBoard };
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
    const playField = document.querySelectorAll("#id-1, #id-2, #id-3, #id-4, #id-5, #id-6, #id-7, #id-8, #id-9");
    const resetButton = document.getElementById("reset");

    resetButton.addEventListener("click", () => {
        game.resetBoard();
        playField.forEach(cell => {
            cell.textContent = "";
        });
        endGame();
        status.reset();
        console.log("reset game");
    });
};