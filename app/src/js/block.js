const DESTROYABLE = {
	TRUE: 0,
	FALSE: 1,
};

export default class Block {
	constructor(game, position) {
		this.game = game;
		this.position = position;
		this.width = 40;
		this.height = 40;
		this.DESTROYABLE = DESTROYABLE;

		this.image = {};
		this.image.block = new Image();
		this.image.block.src = "/app/assets/block.png";
	}

	draw(ctx) {
		ctx.strokeStyle = "#827756";
		ctx.drawImage(this.image.block, this.position.x, this.position.y);
	}

	update(deltaTime) {
		if (!deltaTime) return;
	}
}
