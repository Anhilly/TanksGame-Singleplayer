//Tanks
import Player from "/src/js/tanks/Player.js";
import NotMovingTank from "/src/js/tanks/NotMovingTank.js";

import Block from "/src/js/block.js";
import InputHandler from "/src/js/input.js";

//1 = Block, 2 = Player spawn, 3 = NotMovingTank, 4 = MovingTank
export const level1 = [
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

export function buildLevel(game, level) {
	let components = [];

	level.forEach((row, rowIndex) => {
		row.forEach((map, mapIndex) => {
			if (map != 0) {
				let position = calculatePosition(mapIndex, rowIndex);
				if (map === 1) {
					components.push(new Block(game, position));
				} else if (map === 2) {
					components.push(generatePlayer(game, position));
				} else if (map === 3) {
					components.push(generateNotMovingTank(game, position));
				}
			}
		});
	});
	return components;
}

function calculatePosition(mapIndex, rowIndex) {
	let position = {
		x: 40 * mapIndex,
		y: 40 * rowIndex,
	};
	return position;
}

function generateNotMovingTank(game, position) {
	let tank = new NotMovingTank(game);
	tank.position.x = position.x;
	tank.position.y = position.y;
	return tank;
}

function generatePlayer(game, position) {
	let player = new Player(game);
	player.position.x = position.x;
	player.position.y = position.y;
	new InputHandler(player, game);
	return player;
}
