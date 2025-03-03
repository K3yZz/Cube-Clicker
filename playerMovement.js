import { canvas } from "./main";
import { player } from "./player";

const movePlayer = (dx, dy) => {
    player.x = Math.max(0, Math.min(canvas.width - player.width, player.x + dx));
    player.y = Math.max(0, Math.min(canvas.height - player.height, player.y + dy));
};

export const handleMovement = () => {
    if (keys['w'] || keys['ArrowUp']) movePlayer(0, player.speed * -1);
    if (keys['s'] || keys['ArrowDown']) movePlayer(0, player.speed);
    if (keys['a'] || keys['ArrowLeft']) movePlayer(player.speed * -1, 0);
    if (keys['d'] || keys['ArrowRight']) movePlayer(player.speed, 0);
};