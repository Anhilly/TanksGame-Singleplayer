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
		this.height = 61;
		this.speed = 1;
		this.bounceCounter = 1;
		this.rotate = 0;
		this.destroyed = 0;
		//Image
		this.image = {};
		this.image.tank = new Image();
		this.image.canon = new Image();
		this.image.explosion = new Image();
		this.image.explosion.src = "/assets/Explosion.png";
		//Spriteanimation
		this.explosionFrameX = 0;
		this.explosionWidth = 96;
		this.explosionHeight = 96;
	}

	moveUp() {
		this.position.y -= this.speed;
	}
	moveLeft() {
		this.position.x -= this.speed;
	}
	moveRight() {
		this.position.x += this.speed;
	}
	moveDown() {
		this.position.y += this.speed;
	}

	deleteTank() {
		this.game.gameObjects = this.game.gameObjects.filter(
			(obj) => !(this.position.x == obj.position.x && this.position.y == obj.position.y)
		);
	}
	/*
	canMove(position) {
		if (up) {
			if(this.position)
		} else if (left) {
		} else if (right) {
		} else if (down) {
		}
	} */

	//Sets the this.destroyed value
	setDestroyed(value) {
		this.destroyed = value;
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
		ctx.translate(this.position.x + this.width / 2, this.position.y + 35);
		ctx.rotate(this.rotate);
		//Drawing the canon on our translated ctx
		ctx.drawImage(this.image.canon, -this.width / 2, -35);
		ctx.restore();
	}

	update(deltaTime) {
		if (!deltaTime) return;
	}
}
