import Tank from "/src/js/tanks/Tank.js";

//Worst tank in the Game can't even Move
export default class NotMovingTank extends Tank {
	constructor(game) {
		super(game);
		this.tank.speed = 0;
	}
}
