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
		//Image
		this.image = {};
		this.image.tank = new Image();
		this.image.canon = new Image();
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

	draw(ctx) {
		ctx.drawImage(this.image.tank, this.position.x, this.position.y);
		this.drawCanon(ctx);
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
