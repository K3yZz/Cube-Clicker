import { ctx } from "./main";

export const player = {
    maxHealth: 10,
    health: 10,
    speed: 1,
    x: 275,
    y: 275,
    width: 100,
    height: 100,
};

export const drawPlayer = () => {
    ctx.fillStyle = "red";
    ctx.shadowColor = "rgb(242, 8, 8)";
    ctx.shadowBlur = 10;
    ctx.strokeStyle = 'white';
    ctx.lineWidth = .5;
    ctx.fillRect(player.x, player.y, player.width, player.height);
    ctx.strokeRect(player.x, player.y, player.width, player.height);
};