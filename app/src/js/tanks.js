import Game from "/app/src/js/game.js";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let game = new Game(GAME_HEIGHT, GAME_WIDTH);
game.start();

let lastTime = 0;

function gameLoop(timestamp) {
	ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
	ctx.beginPath();
	let deltaTime = timestamp - lastTime;
	lastTime = timestamp;
	game.update(deltaTime);
	game.draw(ctx);

	requestAnimationFrame(gameLoop);
}
gameLoop();
