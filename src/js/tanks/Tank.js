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
		this.game = game;
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
}
