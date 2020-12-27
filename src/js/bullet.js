import Block from "/src/js/block.js";

export default class Bullet {
    constructor(game, tank, mouse) {
        this.tank = tank;
        this.game = game;
        this.mouse = mouse;
        this.width = 10;
        this.height = 10;
        //Position
        this.position = {
            x: this.tank.tank.x + this.tank.tank.width / 2,
            y: this.tank.tank.y + this.tank.tank.height / 2
        }
        //Hitbox
        this.hitbox = {
            left: this.position.x,
            up: this.position.y,
            right: this.position.x + this.width,
            down: this.position.y + this.height,
        }

        this.speed = { x: 2, y: 2 };
        //Image
        this.image = {};
        this.image.bulletDefault = new Image();
        this.image.bulletDefault.src = '/assets/defaultBullet.png'
        this.bounceCounter = 1;

        //Calculations
        this.dx = this.position.x - this.mouse.x;
        this.dy = this.position.y - this.mouse.y;
    }

    draw(ctx) {
        ctx.lineWidth = 0.2;
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = 'red';
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }

    collisionDetection() {

    }


    update(deltaTime) {
        if (!deltaTime) return;

        if (this.position.x >= this.game.gameWidth + this.width || this.position.y >= this.game.gameHeight + this.height) {
            return;
        }


        this.game.gameObjects.forEach(element => {
            if (element instanceof Block) {
                if ((Math.sqrt(Math.pow(this.position.x - element.position.x, 2) + Math.pow(this.position.y - element.position.y, 2))) >= 50) {
                    return;
                }
                //Hit oben block
                if (this.position.x >= element.position.x && this.position.x <= element.position.x + element.width) {
                    if (this.position.y + this.height == element.position.y) {
                        console.log("Hit block oben");
                        this.dy = -this.dy;
                    } 
                }


            }


        });

        //if(this.position.x < this.game.gameWidth && this.position.y < this.game.gameHeight && this.position.x > 0 && this.position.y > 0){
        this.position.x = Math.floor(this.position.x - this.dx / 30);
        this.position.y = Math.floor(this.position.y - this.dy / 30);


        //this.position.x += 2;
        //this.position.y += 2;
    }
    //Collision detection - Bounce normal 1
}