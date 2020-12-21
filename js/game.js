import Tank from '/js/tank.js';

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
        this.player = new Tank(this);
    }

    //Draws all objects
    draw(ctx) {     
        this.player.draw(ctx);
        
    }

    update(deltaTime){
        this.player.update(deltaTime);
    }
}

