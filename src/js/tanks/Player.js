import Tank from '/src/js/tanks/Tank.js'
import Bullet from '/src/js/bullet.js'

export default class Player extends Tank {
    constructor(game) {
        super(game);
        this.mousePosition = { x: 0, y: 0 };
        this.rotate = 0;

        this.image = {};
        this.image.player = new Image();
        this.image.player.src = '/assets/playerTank_body.png';
        this.image.canon = new Image();
        this.image.canon.src = '/assets/playerTank_head.png';
        this.canon = {
            x: this.tank.x + this.tank.width / 2,
            y: this.tank.y + 35,
            // this.tank.x + this.tank.width / 2, this.tank.y + 35 rotation point
        }
    }

    moveUp(lastInput) {
        //Turn
        /*
        if (lastInput != 'w' && lastInput != 's') {
            let hOld = this.tank.height;
            this.tank.height = this.tank.width;
            this.tank.width = hOld;
        } */
        this.tank.y -= this.tank.speed;
    }

    moveRight(lastInput) {
        //Turn
        /*
        if (lastInput != 'a' && lastInput != 'd') {
            let hOld = this.tank.height;
            this.tank.height = this.tank.width;
            this.tank.width = hOld;
        } */
        this.tank.x += this.tank.speed;
    }


    moveDown(lastInput) {
        //Turn
        /*
        if (lastInput != 'w' && lastInput != 's') {
            let hOld = this.tank.height;
            this.tank.height = this.tank.width;
            this.tank.width = hOld;
        } */
        this.tank.y += this.tank.speed;
    }
    moveLeft(lastInput) {
        //Turn
        /*
        if (lastInput != 'a' && lastInput != 'd') {
            let hOld = this.tank.height;
            this.tank.height = this.tank.width;
            this.tank.width = hOld;
        } */
        this.tank.x -= this.tank.speed;
    }

    shoot() {
        this.game.addGameObjects(new Bullet(this.game, this));
    }

    rotateTank() {
        console.log("x: ", this.tank.x, "| y: ", this.tank.y);
        //Sucht uns die mitte von unserem Panzer
        let offsetX = this.tank.x + this.tank.width / 2;
        let offsetY = this.tank.y + this.tank.height / 2;
        console.log(offsetX, offsetY)
        this.rotate = Math.atan2(this.mousePosition.x - offsetX, -(this.mousePosition.y - offsetY));
    } 

    setMousePosition(mousePosition) {
        this.mousePosition.x = mousePosition.x;
        this.mousePosition.y = mousePosition.y;
    }

    draw(ctx) {
        //Drawing Tank
        ctx.drawImage(this.image.player, this.tank.x,this.tank.y);
        this.drawCanon(ctx);
    }

    drawCanon(ctx){
        ctx.save();
        //Rotation Point
        ctx.translate(this.tank.x + this.tank.width / 2, this.tank.y + 35);
        ctx.rotate(this.rotate);
        //Drawing the canon on our translated ctx
        ctx.drawImage(this.image.canon, -this.tank.width / 2, -35);
        /*
        ctx.strokeRect(this.tank.x, this.tank.y, this.tank.width, this.tank.height);
        ctx.strokeRect(this.canon.x, this.canon.y, this.canon.width, this.canon.height); */
        ctx.restore();
    }

    update(deltaTime) {
        if (!deltaTime) return;
        this.rotateTank();
    }



}