let gameBoard = {
    row1: ["O", "P", "X"],
    row2: ["X", "X", "0"],
    row3: ["X", "O", "X"]
}

const checkWinner = (gameBoard) => {
    // Checking rows -> horizontal
    for (let i = 1; i < 4; i++) {
        const row = gameBoard['row' + i];
        const a = row[0];
        const b = row[1];
        const c = row[2];
            if (a && a === b && b === c) {
                console.log(`You win on row ${i}!`)
                return;
            }
    }

    // Checking columns -> vertical
    for (let i = 0; i < 3; i++) {
        const a = gameBoard.row1[i]
        const b = gameBoard.row2[i]
        const c = gameBoard.row3[i]
            if (a && a === b && b === c) {
                console.log(`You win on column ${i + 1}!`)
                return;
            }
    }

    // checking diagonal -> from left to right
    {
        const a = gameBoard.row1[0]
        const b = gameBoard.row2[1]
        const c = gameBoard.row3[2]
            if (a && a === b && b === c) {
                console.log("You win on diagonal!")
                return;
            }
        }

    // checking diagonal -> from right to left
    {
        const a = gameBoard.row1[2]
        const b = gameBoard.row2[1]
        const c = gameBoard.row3[0]
            if (a && a === b && b === c) {
                console.log("You win on diagonal!")
                return;
            }
        }
    }

// checkWinner(gameBoard)

checkWinner(gameBoard)