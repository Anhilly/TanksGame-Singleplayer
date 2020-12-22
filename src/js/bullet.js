export default class Bullet {
    constructor(game, tank) {
        this.tank = tank;
        this.game = game;
        this.width = 30;
        this.height = 30;
        this.position = {
            x: 0,
            y: 0
        }
        this.speed = { x: 2, y: 2 };
        //Image
        this.image.bulletDefault = new Image();
        this.image.bulletDefault.src = '/assets/defaultBullet.png'
        this.dodgeCount = 1;
    }

    draw(ctx) {
        
    }

    update(deltaTime) {

    }
    //Collision detection - Bounce normal 1
}