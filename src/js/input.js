export default class InputHandler {
    constructor(Player, game){
        let lastInput = 'a';
        document.addEventListener('keydown', event => {
            switch(event.key){
                case 'w':
                    Player.moveUp(lastInput);
                    lastInput = event.key;
                    break;
                case 'a':
                    Player.moveLeft(lastInput);
                    lastInput = event.key;
                    break;
                case 's':
                    Player.moveDown(lastInput)
                    lastInput = event.key;
                    break;
                case 'd':
                    Player.moveRight(lastInput);
                    lastInput = event.key;
                    break;
                case ' ':
                    Player.shoot();
                    lastInput = event.key;
                    break;
                
            }
        });
        document.addEventListener('mousemove', mouse => {
            let mousePosition = {
                x: mouse.x,
                y: mouse.y
            };
            Player.setMousePosition(mousePosition);
        });
    }
}