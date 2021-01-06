import Tank from "/src/js/tanks/Tank.js";
import Bullet from "/src/js/bullet.js";

//Worst tank in the Game can't even Move
export default class NotMovingTank extends Tank {
	constructor(game) {
		super(game);
		this.speed = 0;
		this.image.tank.src = "/assets/EnemyTank_NotMovingTank_body.png";
		this.image.canon.src = "/assets/EnemyTank_NotMovingTank_canon.png";
		this.exeTime = 0;
	}

	shoot() {
		let player = this.findPlayer();
		if (player == null) return;
		this.game.addGameObjects(
			new Bullet(this.game, this, {
				x: player.position.x + player.width / 2,
				y: player.position.y + player.height / 2,
			})
		);
	}

	shootTimer() {
		if (this.exeTime % 200 === 0) this.shoot();
	}

	update(deltaTime) {
		if (!deltaTime) return;
		this.exeTime++;
		this.aimCanon();
		this.shootTimer();
	}
}
