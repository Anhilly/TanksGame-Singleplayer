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
			speed: 4,
			bounceCounter: 1,
		};
		this.game = game;
	}
}
