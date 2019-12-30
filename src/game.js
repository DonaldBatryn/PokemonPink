import Player from "./player";

// const MTSILVER = new Image();
// MTSILVER.src = "assets/mtSilver.png";

class Game {
    constructor(canvas) {
        this.player = new Player(this);
        this.canvas = canvas;
        this.scale = 2.8;
        this.sX = -200;
        this.sY = -200;
        this.width = 608;
        this.height = 464;
        this.levelSprite = new Image();
        this.levelSprite.src = "mtSilver.png";
    }

    moveMap() {
        // if player moving left
            // decrease mapX
        if (this.player.direction === 'left') {
            this.sX += 5;
        }
        // if player moving right
            // increase mapX
        if (this.player.direction === 'right') {
            this.sX -= 5;
        }
        //if player moving down
            // decrease mapY
        if (this.player.direction === 'down') {
            this.sY -= 5;
        }
        // if player moving up
            // increase mapY
        if (this.player.direction === 'up') {
            this.sY += 5;
        }
    }

    draw(ctx) {
        ctx.drawImage(
            this.levelSprite,
            0,
            0,
            this.width,
            this.height,
            this.sX,
            this.sY,
            this.width * this.scale,
            this.height * this.scale
        );
        this.player.draw(ctx);
    }
}

export default Game;