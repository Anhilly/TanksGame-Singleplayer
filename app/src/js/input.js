export default class InputHandler {
	constructor(player, game) {
		let lastInput = "";

		let keyMap = [false, false, false, false];
		document.addEventListener("keydown", (event) => {
			switch (event.key) {
				case "w":
					keyMap[0] = true;
					break;
				case "a":
					keyMap[1] = true;
					break;
				case "s":
					keyMap[2] = true;
					break;
				case "d":
					keyMap[3] = true;
					break;
			}
			player.setKeyMap(keyMap);
		});

		document.addEventListener("keyup", (event) => {
			switch (event.key) {
				case "w":
					keyMap[0] = false;
					break;
				case "a":
					keyMap[1] = false;
					break;
				case "s":
					keyMap[2] = false;
					break;
				case "d":
					keyMap[3] = false;
					break;
			}
			player.setKeyMap(keyMap);
		});

		document.addEventListener("mousemove", (mouse) => {
			let mousePosition = {
				x: mouse.x,
				y: mouse.y,
			};
			player.setMousePosition(mousePosition);
		});

		document.addEventListener("mousedown", (mouse) => {
			player.setMousePosition({ x: mouse.x, y: mouse.y });
			player.shoot();
		});
	}
}
