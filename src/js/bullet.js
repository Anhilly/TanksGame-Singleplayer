export default class Bullet {
    constructor(game, tank) {
        this.tank = tank;
        this.game = game;
        this.width = 10;
        this.height = 10;
        this.position = {
            x: this.tank.tank.x + this.width, 
            y: this.tank.tank.y - this.tank.tank.height / 2 + this.height
        }
        this.speed = { x: 2, y: 2 };
        //Image
        this.image = {};
        this.image.bulletDefault = new Image();
        this.image.bulletDefault.src = '/assets/defaultBullet.png'
        this.dodgeCount = 1;
    }

    draw(ctx) {
        ctx.drawImage(this.image.bulletDefault, this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime) {
        if(!deltaTime) return;
        this.position.x += 2;
        //this.position.y += 2;
    }
    //Collision detection - Bounce normal 1
}