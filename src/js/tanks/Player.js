import Tank from '/src/js/tanks/Tank.js'
import Bullet from '/src/js/bullet.js'

export default class Player extends Tank {
    constructor(game) {
        super(game);
        console.log(game);
        this.mousePosition = {x: 0,y:0};
        this.rotate = 0;
        
        this.image = {};
        this.image.player = new Image();
        this.image.player.src = '/assets/playerTank.png'
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

    rotateTank(){
        this.rotate = Math.atan2(this.mousePosition.x - this.tank.x,-(this.mousePosition.y - this.tank.y));
    } 1

    setMousePosition(mousePosition){
        this.mousePosition.x = mousePosition.x;
        this.mousePosition.y = mousePosition.y;
    }
    
    draw(ctx){
        //Drawing tank and Canon
        ctx.strokeStyle = 'blue';
        ctx.save();
        ctx.translate(this.tank.x, this.tank.y);
        ctx.rotate(this.rotate);
        ctx.drawImage(this.image.player, -this.tank.width /2, -this.tank.height /2);
        /*
        ctx.strokeRect(this.tank.x, this.tank.y, this.tank.width, this.tank.height);
        ctx.strokeRect(this.canon.x, this.canon.y, this.canon.width, this.canon.height); */
        ctx.restore();
    }

    update(deltaTime){
        if(!deltaTime) return;
         //To calculate the canon depending on where the tank is
        //this.canon.x = this.tank.x + this.tank.width  - (this.tank.width / 2);
        //this.canon.y = this.tank.y + this.tank.height - (this.tank.height / 2) - 10 / 2;
        this.rotateTank();
    }



}