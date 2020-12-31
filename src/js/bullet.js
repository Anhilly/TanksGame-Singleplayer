import Block from "/src/js/block.js";

export default class Bullet {
	constructor(game, tank, mouse) {
		this.tank = tank;
		this.game = game;
		this.mouse = mouse;
		this.width = 8;
		this.height = 8;
		this.speed = 4;
		this.bounceCounter = this.tank.tank.bounceCounter;
		//Position
		this.position = {
			x: this.tank.tank.x + this.tank.tank.width / 2,
			y: this.tank.tank.y + this.tank.tank.height / 2,
		};

		//Image
		this.image = {};
		this.image.bulletDefault = new Image();
		this.image.bulletDefault.src = "/assets/defaultBullet.png";

		//Calculations
		this.dx = this.position.x - this.mouse.x;
		this.dy = this.position.y - this.mouse.y;

		//Normierte Vektoren
		this.vx = this.dx / Math.sqrt(Math.pow(this.dx, 2) + Math.pow(this.dy, 2));
		this.vy = this.dy / Math.sqrt(Math.pow(this.dx, 2) + Math.pow(this.dy, 2));
	}

	draw(ctx) {
		ctx.save();
		ctx.globalCompositeOperation = "destination-over";
		ctx.lineWidth = 0.2;
		ctx.beginPath();
		ctx.arc(this.position.x, this.position.y + this.height / 2, 5, 0, Math.PI * 2);
		ctx.fillStyle = "red";
		ctx.stroke();
		ctx.fill();
		ctx.closePath();
		ctx.restore();
	}

	collisionDetection() {
		this.game.gameObjects.forEach((element) => {
			if (element instanceof Block) {
				//Calculates distance to elimate most blocks
				if (Math.sqrt(Math.pow(this.position.x - element.position.x, 2) + Math.pow(this.position.y - element.position.y, 2)) >= 100) {
					return;
				}
				if (
					//Hit oben block
					this.position.x >= element.position.x &&
					this.position.x <= element.position.x + element.width &&
					this.position.y + this.speed >= element.position.y &&
					this.position.y <= element.position.y
				) {
					this.vy = -this.vy;
					this.bounceCounter--;
					console.log("hit oben block");
				} else if (
					//Hit unten block
					this.position.x >= element.position.x &&
					this.position.x <= element.position.x + element.width &&
					this.position.y + this.speed >= element.position.y + element.height &&
					this.position.y <= element.position.y + element.height
				) {
					this.vy = -this.vy;
					this.bounceCounter--;
					console.log("hit unten block");
				} else if (
					//Hit left block
					this.position.x + this.speed >= element.position.x &&
					this.position.x <= element.position.x &&
					this.position.y + this.speed >= element.position.y &&
					this.position.y <= element.position.y + element.width
				) {
					this.vx = -this.vx;
					this.bounceCounter--;
					console.log("Links block");
				} else if (
					//Hit right block
					this.position.x + this.speed >= element.position.x + element.width &&
					this.position.x <= element.position.x + element.width &&
					this.position.y + this.speed >= element.position.y &&
					this.position.y <= element.position.y + element.width
				) {
					this.vx = -this.vx;
					this.bounceCounter--;
					console.log("rechts block");
				}
			}
		});
	}

	deleteObject(Object) {
		this.game.gameObjects = this.game.gameObjects.filter(
			(obj) => !(obj instanceof Object && obj.position.x == this.position.x && obj.position.y == this.position.y)
		);
	}

	update(deltaTime) {
		if (!deltaTime) return;

		if (this.bounceCounter < 0) {
			this.deleteObject(Bullet);
		}

		if (this.position.x >= this.game.gameWidth + this.width || this.position.y >= this.game.gameHeight + this.height) {
			return;
		}

		this.collisionDetection();

		//Updating the Position (Bullettravel)
		this.position.x = this.position.x - this.vx * this.speed;
		this.position.y = this.position.y - this.vy * this.speed;
	}
}
