const TEAM = {
	PLAYER: 0,
	EVIL: 1,
};

export default class Tank {
	constructor(game) {
		this.tank = {
			width: 40,
			height: 61,
			x: game.gameWidth / 5,
			y: game.gameHeight / 2,
			speed: 1,
			bounceCounter: 1,
		};
		this.rotate = 0;
		this.game = game;
		this.image = {};
		this.image.tank = new Image();
		this.image.canon = new Image();
	}

	moveUp() {
		this.tank.y -= this.tank.speed;
	}
	moveLeft() {
		this.tank.x -= this.tank.speed;
	}
	moveRight() {
		this.tank.x += this.tank.speed;
	}
	moveDown() {
		this.tank.y += this.tank.speed;
	}

	draw(ctx) {
		ctx.drawImage(this.image.tank, this.tank.x, this.tank.y);
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
	}
}
