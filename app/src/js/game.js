//import Tank from '/js/tanks/tank.js';
import InputHandler from "/app/src/js/input.js";
import Player from "/app/src/js/tanks/Player.js";
import Block from "/app/src/js/block.js";
import { buildLevel, level1 } from "/app/src/js/levels.js";
import Bullet from "/app/src/js/bullet.js";

const GAMESTATE = {
	PAUSED: 0,
	RUNNING: 1,
	MENU: 2,
	GAMEOVER: 3,
};

export default class Game {
	constructor(gameHeight, gameWidth) {
		this.gameHeight = gameHeight;
		this.gameWidth = gameWidth;
		this.gameObjects = [];
		this.gameState = GAMESTATE;
	}
	getGameState() {
		return this.GAMESTATE;
	}

	setGameState(value) {
		this.gameState = value;
	}

	start() {
		this.gameState = GAMESTATE.RUNNING;
		let components = buildLevel(this, level1);
		this.gameObjects.push(...components);
	}

	getGameObjects() {
		return this.gameObjects;
	}

	addGameObjects(obj) {
		this.gameObjects.push(obj);
	}

	//Draws all objects
	draw(ctx) {
		if (this.gameState === GAMESTATE.RUNNING)
			this.gameObjects.forEach((object) => object.draw(ctx));
		if (this.gameState === GAMESTATE.GAMEOVER) this.drawGameOverScreen(ctx);
	}

	//Draws the GameOver Screen
	drawGameOverScreen(ctx) {
		//Background
		ctx.rect(this.gameWidth, this.gameHeight, 0, 0);
		//Text
		ctx.font = "75px Arial";
		ctx.fillStyle = "white";
		ctx.textAlign = "center";
		ctx.fillText("Game Over!", this.gameWidth / 2, this.gameHeight / 2);
	}

	update(deltaTime) {
		if (this.gameState === GAMESTATE.RUNNING)
			this.gameObjects.forEach((object) => object.update(deltaTime));
		if (this.gameState === GAMESTATE.GAMEOVER) return;
	}
}
