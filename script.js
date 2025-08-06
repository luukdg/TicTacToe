import { gameFinished, gameLoop, buttons } from "./modules/game.js";

if (!gameFinished) {
    console.log("Starting game loop...");
    gameLoop();
}

buttons();