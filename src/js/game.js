//import Tank from '/js/tanks/tank.js';
import InputHandler from '/src/js/input.js';
import Player from '/src/js/tanks/Player.js';
import Block from '/src/js/block.js'
import {buildLevel, level1} from "/src/js/levels.js"

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

        let bricks = buildLevel(this, level1);
        this.gameObjects = [
            this.player,
            ...bricks
        ];
        
    }

    //Draws all objects
    draw(ctx) {
        this.gameObjects.forEach(object => object.draw(ctx));
       
    }

    update(deltaTime){
        this.gameObjects.forEach(object => object.update(deltaTime));
    }
}

