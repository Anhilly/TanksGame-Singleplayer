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
            }
        });
    }
}