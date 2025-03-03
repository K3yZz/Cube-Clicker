import { setupCanvas } from "./setupUI";
import { drawPlayer } from "./player";
import { handleMovement } from "./playerMovement";

export const canvas = setupCanvas();
export const ctx = canvas.getContext('2d');

document.addEventListener('DOMContentLoaded', (event) => {
    runGame();
});

const update = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawPlayer();
    handleMovement();
}

export const runGame = () => {
    update();
    
    rungameframe = requestAnimationFrame(runGame);
};