
class Blocker {
    constructor(pos, dims) {
        this.pos = pos;
        this.dims = dims;
        this.speed = 3;
        this.move = this.move.bind(this);
    }

    draw(ctx) {
        
        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'pink';
        
        ctx.rect(this.pos[0], this.pos[1], this.dims[0], this.dims[1]);
        ctx.stroke();
        // ctx.fill();
    }

    move(dir) {
        switch (dir) {
            case 'left':
                this.pos[0] += this.speed;
                break;
            case 'right':
                this.pos[0] -= this.speed;
                break;
            case 'up':
                this.pos[1] += this.speed;
                break;
            case 'down':
                this.pos[1] -= this.speed;
                break;
        }
    }

    isCollidedWith(player) {
        

        // left side of player hitting right side of blocker
            // left side of player = player.pos[0], from player.pos[1] to player.pos[1] + player.height
            // right side of blocker = this.pos[0] + this.dims[0], from this.pos[1] to this.pos[1] + this.dims[1]

        //bottom of player hitting top of blocker
            // bottom of player = player.pos[1] + player.height, from player.pos[0] to player.pos[0] + player.width
            // top of blocker = this.pos[1], from this.pos[0] to this.pos[0] + this.dims[0]

        //right side of player hitting left side of blocker
            // right side of player = player.pos[0] + player.width, from player.pos[1] to player.pos[1] + player.height
            // left side of blocker = this.pos[0], from this.pos[1] to this.pos[1] + this.dims[1]

        //top of player hitting bottom of blocker
            // top of player = player.pos[1], from player.pos[0] to player.pos[0] + player.width
            // bottom of blocker = this.pos[1] + this.dims[1], from this.pos[0] to this.pos[0] + this.dims[0]
    }
}

export default Blocker;