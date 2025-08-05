import { gameFinished, gameLoop, buttons } from "./game.js";

if (!gameFinished) {
    console.log("Starting game loop...");
    gameLoop();
}

buttons();