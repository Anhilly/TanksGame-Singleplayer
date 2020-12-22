const DESTROYABLE = {
    TRUE: 0,
    FALSE: 1,
};

export default class Block{
    constructor(game, position){
        this.game = game;
        this.position = position;
        this.width = 40;
        this.height = 40;
        this.DESTROYABLE = DESTROYABLE;
    }

    draw(ctx){
        ctx.strokeStyle = '#827756';
        ctx.strokeRect(this.position.x, this.position.y, this.width, this.height);
        ctx.stroke();
    }

    update(deltaTime){
        if(!deltaTime) return;
    }
}