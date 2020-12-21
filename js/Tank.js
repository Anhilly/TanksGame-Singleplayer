const TEAM = {
    PLAYER: 0,
    EVIL: 1,
};

export default class Tank{
    constructor(game){
        this.tank = {
            width: 50,
            height: 30,
            x: game.gameWidth / 5,
            y: game.gameHeight / 3,
        }
        this.canon = {
            width: 70,
            height: 5,
            x: this.tank.x + this.tank.width  - (this.tank.width / 2),
            y: this.tank.y + this.tank.height - (this.tank.height / 2) - 5 / 2,
        }
        this.game = game;
    }

    draw(ctx){
        ctx.rect(this.tank.x, this.tank.y, this.tank.width, this.tank.height);
        ctx.rect(this.canon.x, this.canon.y, this.canon.width, this.canon.height);
        ctx.stroke();
    }

    update(deltaTime){
        if(!deltaTime) return;
    }
}