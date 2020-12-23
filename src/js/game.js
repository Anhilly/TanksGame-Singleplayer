//import Tank from '/js/tanks/tank.js';
import InputHandler from '/src/js/input.js';
import Player from '/src/js/tanks/Player.js';
import Block from '/src/js/block.js'
import {buildLevel, level1} from "/src/js/levels.js"
import Bullet from '/src/js/bullet.js';

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
        this.gameObjects = [];
    }

    start() {
        this.GAMESTATE = GAMESTATE.RUNNING;
        this.player = new Player(this);
        new InputHandler(this.player, this);
        let blocks = buildLevel(this, level1);
        this.gameObjects.push(this.player);
        this.gameObjects.push(...blocks);
    }

    getGameObjects(){
        return this.gameObjects;
    }

    addGameObjects(obj){
        this.gameObjects.push(obj);
    }

    //Draws all objects
    draw(ctx) {
        this.gameObjects.forEach(object => object.draw(ctx));
       
    }

    update(deltaTime){
        
        this.gameObjects.forEach(object => object.update(deltaTime));
    }
}
