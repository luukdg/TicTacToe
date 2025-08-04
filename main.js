import { gameLoop } from './gameLoop.js';

export let gameFinished = false;

export function finishGame() {
    gameFinished = true;
}

if (!gameFinished) {
    console.log("Starting game loop...");
    gameLoop();
}