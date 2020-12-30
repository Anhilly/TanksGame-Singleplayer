import Tank from "/src/js/tanks/Tank.js";
import Bullet from "/src/js/bullet.js";

export default class Player extends Tank {
	constructor(game) {
		super(game);
		this.mousePosition = { x: 0, y: 0 };
		this.rotate = 0;
		this.keyMap = [false, false, false, false];

		this.image = {};
		this.image.player = new Image();
		this.image.player.src = "/assets/playerTank_body.png";
		this.image.canon = new Image();
		this.image.canon.src = "/assets/playerTank_head.png";
		this.canon = {
			x: this.tank.x + this.tank.width / 2,
			y: this.tank.y + 35,
			// this.tank.x + this.tank.width / 2, this.tank.y + 35 rotation point
		};
	}

	setKeyMap(keyMap) {
		this.keyMap = keyMap;
	}

	/*
	move(input, lastInput) {
		switch (input) {
			case "w":
				this.moveUp();
				if (lastInput == "d") this.moveRight();
				if (lastInput == "a") this.moveLeft();
				break;
			case "a":
				this.moveLeft();
				if (lastInput == "s") this.moveDown();
				break;
			case "s":
				this.moveDown();
				if (lastInput == "a") this.moveLeft();
				if (lastInput == "d") this.moveRight();
				break;
			case "d":
				this.moveRight();
				if (lastInput == "w") this.moveUp();
				break;
		}
	} */

	move() {
		if (this.keyMap[0] && this.keyMap[1]) {
			this.moveUp();
			this.moveLeft();
		} else if (this.keyMap[0] && this.keyMap[3]) {
			this.moveUp();
			this.moveRight();
		} else if (this.keyMap[2] && this.keyMap[1]) {
			this.moveDown();
			this.moveLeft();
		} else if (this.keyMap[2] && this.keyMap[3]) {
			this.moveDown();
			this.moveRight();
		} else if (this.keyMap[1]) {
			this.moveLeft();
		} else if (this.keyMap[3]) {
			this.moveRight();
		} else if (this.keyMap[0]) {
			this.moveUp();
		} else if (this.keyMap[2]) {
			this.moveDown();
		}
	}

	shoot() {
		this.game.addGameObjects(new Bullet(this.game, this, { x: this.mousePosition.x, y: this.mousePosition.y }));
	}

	rotateTank() {
		//Sucht uns die mitte von unserem Panzer
		let offsetX = this.tank.x + this.tank.width / 2;
		let offsetY = this.tank.y + this.tank.height / 2;
		this.rotate = Math.atan2(this.mousePosition.x - offsetX, -(this.mousePosition.y - offsetY));
	}

	setMousePosition(mousePosition) {
		this.mousePosition.x = mousePosition.x;
		this.mousePosition.y = mousePosition.y;
	}

	draw(ctx) {
		//Drawing Tank
		ctx.drawImage(this.image.player, this.tank.x, this.tank.y);
		this.drawCanon(ctx);
	}

	drawCanon(ctx) {
		ctx.save();
		//Rotation Point
		ctx.translate(this.tank.x + this.tank.width / 2, this.tank.y + 35);
		ctx.rotate(this.rotate);
		//Drawing the canon on our translated ctx
		ctx.drawImage(this.image.canon, -this.tank.width / 2, -35);
		ctx.restore();
	}

	update(deltaTime) {
		if (!deltaTime) return;
		this.move();
		this.rotateTank();
	}
}
