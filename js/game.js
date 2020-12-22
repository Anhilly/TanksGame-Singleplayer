//import Tank from '/js/tanks/tank.js';
import InputHandler from './input.js';
import Player from '/js/tanks/Player.js';

const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3
}

export default class Game {
    constructor(gameHeight, gameWidth){
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;
        this.GAMESTATE = GAMESTATE;
    }

    start() {
        this.GAMESTATE = GAMESTATE.RUNNING;
        this.player = new Player(this);
        new InputHandler(this.player, this);
    }

    //Draws all objects
    draw(ctx) {     
        this.player.draw(ctx, 'blue');
    }

    update(deltaTime){
        if(!deltaTime) return;
    }
}

