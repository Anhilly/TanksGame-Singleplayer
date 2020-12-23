const TEAM = {
    PLAYER: 0,
    EVIL: 1,
};

export default class Tank{
    constructor(game){
        this.tank = {
            width: 40,
            height: 61,
            x: game.gameWidth / 5,
            y: game.gameHeight / 2,
            speed: 2
        }
        this.canon = {
            width: 40,
            height: 61,
            x: this.tank.x + this.tank.width  - (this.tank.width / 2),
            y: this.tank.y + this.tank.height - (this.tank.height / 2) - 10 / 2,
        }
        this.game = game;
    }
}