import Player from "/app/src/js/tanks/Player.js";

const TEAM = {
	PLAYER: 0,
	EVIL: 1,
};
export default class Tank {
	constructor(game) {
		this.game = game;
		this.position = {
			x: game.gameWidth / 5,
			y: game.gameHeight / 2,
		};
		this.width = 40;
		this.height = 50;
		this.speed = 1;
		this.bounceCounter = 1;
		this.rotate = 0;
		this.destroyed = 0;
		//Image
		this.image = {};
		this.image.tank = new Image();
		this.image.canon = new Image();
		this.image.explosion = new Image();
		this.image.explosion.src = "/app/assets/Explosion.png";
		//Spriteanimation
		this.explosionFrameX = 0;
		this.explosionWidth = 96;
		this.explosionHeight = 96;

		//Audio
		this.explosionAudio = new Audio("/app/assets/sounds/explosion.wav");
	}

	moveUp() {
		if (this.canMove("up")) this.position.y -= this.speed;
	}
	moveLeft() {
		if (this.canMove("left")) this.position.x -= this.speed;
	}
	moveRight() {
		if (this.canMove("right")) this.position.x += this.speed;
	}
	moveDown() {
		if (this.canMove("down")) this.position.y += this.speed;
	}

	deleteTank() {
		this.game.gameObjects = this.game.gameObjects.filter(
			(obj) => !(this.position.x == obj.position.x && this.position.y == obj.position.y)
		);
	}
	//Returns a Array with all objects close to our current object
	getCloseObjects(game, object) {
		let closeObject = game.gameObjects.filter(
			(component) =>
				Math.sqrt(
					Math.pow(component.position.x - this.position.x, 2) +
						Math.pow(component.position.y - this.position.y, 2)
				) <= 100 && this != component
		);
		return closeObject;
	}

	playExplosionAudio() {
		this.explosionAudio.play();
		this.explosionAudio.currentTime = 0;
	}

	findPlayer() {
		let player = this.game.gameObjects.find((obj) => obj instanceof Player);
		return player;
	}

	//Gets the target position sets the rotations number
	rotateCanonTo(target) {
		//Sucht uns die mitte von unserem Panzer
		let offsetX = this.position.x + this.width / 2;
		let offsetY = this.position.y + this.height / 2;
		this.rotate = Math.atan2(target.x - offsetX, -(target.y - offsetY));
	}

	canMove(position) {
		let closeObject = this.getCloseObjects(this.game, this);
		if (position == "right") {
			for (let i = 0; i < closeObject.length; i++) {
				if (
					this.position.x + this.speed <
						closeObject[i].position.x + closeObject[i].width &&
					this.position.x + this.width + this.speed > closeObject[i].position.x &&
					this.position.y < closeObject[i].position.y + closeObject[i].height &&
					this.position.y + this.height > closeObject[i].position.y
				) {
					return false;
				}
			}
		} else if (position == "left") {
			for (let i = 0; i < closeObject.length; i++) {
				if (
					this.position.x - this.speed <
						closeObject[i].position.x + closeObject[i].width &&
					this.position.x + this.width - this.speed > closeObject[i].position.x &&
					this.position.y < closeObject[i].position.y + closeObject[i].height &&
					this.position.y + this.height > closeObject[i].position.y
				) {
					return false;
				}
			}
		} else if (position === "up") {
			for (let i = 0; i < closeObject.length; i++) {
				if (
					this.position.x < closeObject[i].position.x + closeObject[i].width &&
					this.position.x + this.width > closeObject[i].position.x &&
					this.position.y - this.speed <
						closeObject[i].position.y + closeObject[i].height &&
					this.position.y + this.height > closeObject[i].position.y
				) {
					return false;
				}
			}
		} else if (position == "down") {
			for (let i = 0; i < closeObject.length; i++) {
				if (
					this.position.x < closeObject[i].position.x + closeObject[i].width &&
					this.position.x + this.width > closeObject[i].position.x &&
					this.position.y < closeObject[i].position.y + closeObject[i].height &&
					this.position.y + this.height + this.speed > closeObject[i].position.y
				) {
					return false;
				}
			}
		}
		return true;
	}

	//Sets the this.destroyed value
	setDestroyed(value) {
		this.destroyed = value;
		if (value == 1) {
			this.playExplosionAudio();
		}
	}

	aimCanon() {
		let player = this.findPlayer();
		if (player == null) return;
		let aimPosition = {
			x: player.position.x + this.width / 2,
			y: player.position.y + this.height / 2,
		};
		this.rotateCanonTo(aimPosition);
	}

	draw(ctx) {
		if (this.destroyed === 1) {
			this.drawExplosion(ctx);
			if (this.explosionFrameX > 12) {
				this.deleteTank();
			}
		} else {
			ctx.drawImage(this.image.tank, this.position.x, this.position.y);
			this.drawCanon(ctx);
		}
	}

	//Draws the explosion
	drawExplosion(ctx) {
		if (this.explosionFrameX <= 12) this.explosionFrameX += 0.2;
		ctx.drawImage(
			this.image.explosion,
			this.explosionWidth * Math.floor(this.explosionFrameX),
			0,
			this.explosionWidth,
			this.explosionHeight,
			this.position.x - 15,
			this.position.y - 25,
			this.width * 1.8,
			this.height * 1.8
		);
	}

	drawCanon(ctx) {
		ctx.save();
		//Rotation Point
		ctx.translate(this.position.x + this.width / 2, this.position.y + this.height / 2);
		ctx.rotate(this.rotate);
		//Drawing the canon on our translated ctx
		ctx.drawImage(this.image.canon, -this.width / 2, -35);
		ctx.restore();
	}

	update(deltaTime) {
		if (!deltaTime) return;
	}
}
