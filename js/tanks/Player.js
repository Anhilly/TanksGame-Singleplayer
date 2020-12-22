import Tank from '/js/tanks/Tank.js'

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




}