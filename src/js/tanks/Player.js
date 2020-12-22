import Tank from '/src/js/tanks/Tank.js'
import Bullet from '/src/js/bullet.js'

export default class Player extends Tank {
    constructor(game) {
        super(game);
        console.log(game);
    }

    moveUp(lastInput) {
        //Turn
        if (lastInput != 'w' && lastInput != 's') {
            let hOld = this.tank.height;
            this.tank.height = this.tank.width;
            this.tank.width = hOld;
        }
        this.tank.y -= this.tank.speed;
    }

    moveRight(lastInput) {
        //Turn
        if (lastInput != 'a' && lastInput != 'd') {
            let hOld = this.tank.height;
            this.tank.height = this.tank.width;
            this.tank.width = hOld;
        }
        this.tank.x += this.tank.speed;
        console.log(this.game.getGameObjects())
    }


    moveDown(lastInput) {
        //Turn
        if (lastInput != 'w' && lastInput != 's') {
            let hOld = this.tank.height;
            this.tank.height = this.tank.width;
            this.tank.width = hOld;
        }
        this.tank.y += this.tank.speed;
    }
    moveLeft(lastInput) {
        //Turn
        if (lastInput != 'a' && lastInput != 'd') {
            let hOld = this.tank.height;
            this.tank.height = this.tank.width;
            this.tank.width = hOld;
        }
        this.tank.x -= this.tank.speed;
    }

    shoot(){
        this.game.addGameObjects(new Bullet(this.game, this));
    }

}