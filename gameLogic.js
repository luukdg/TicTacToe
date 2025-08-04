export const gameStatus = (gameBoard) => {
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
                    console.log("It's a draw!")
                }
        }
        
    }