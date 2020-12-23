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


    draw(ctx){
        //Drawing tank and Canon
        ctx.strokeStyle = 'blue';

        ctx.strokeRect(this.tank.x, this.tank.y, this.tank.width, this.tank.height);
        ctx.strokeRect(this.canon.x, this.canon.y, this.canon.width, this.canon.height);
    }

    update(deltaTime){
        if(!deltaTime) return;
         //To calculate the canon depending on where the tank is
        this.canon.x = this.tank.x + this.tank.width  - (this.tank.width / 2);
        this.canon.y = this.tank.y + this.tank.height - (this.tank.height / 2) - 10 / 2;
    }
}
/*
function defaultTank(){
    const tank = {
        width: 50,
        height: 30,
        x: 800 / 5,
        y: 600 / 2,
        canon : {
            width: 60,
            height: 5,
           // x: tank.x + tank.width  - (tank.width / 2),
            // y: tank.y + tank.height - (tank.height / 2) - 5 / 2
        }
    } 

    return tank
}

function drawTank(ctx, tankb, color){
    let tank = tankb;
    console.log(tank)
    return {
        draw: (ctx, tank) => {
            ctx.rect(tank.x, tank.y, tank.width, tank.height);
            console.log(tank)
            ctx.rect(tank.x + tank.width  - (tank.width / 2), tank.y + tank.height - (tank.height / 2) - 5 / 2, tank.canon.width ,tank.canon.height);
            ctx.strokeStyle = color;
        }
    }
}

function drawPlayer(ctx, color){
    return {
        "tank" : defaultTank(),
        ...drawTank(ctx, defaultTank(), color)
    }
}

const player = drawPlayer(document.getElementById("gameScreen").getContext("2d"), 'blue');
player.draw(document.getElementById("gameScreen").getContext("2d"), player.tank)
console.log(player.tank.x);
*/