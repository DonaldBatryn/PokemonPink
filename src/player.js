

class Player {
    constructor(game) {
        this.game = game;
        this.pos = [200, 200]
        this.width = 15;
        this.height = 20;
        this.sprite = new Image();
        this.sprite.src = "assets/redSprites.png";
        this.direction = 'down';
        this.biking = false;
        this.fishing = false;

    }

    draw(ctx) {
        const playerL = {
            walkLeftAnimation: [
                { sX: 30, sY: 0 },
                { sX: 45, sY: 0 },
                { sX: 30, sY: 0 }
            ],
            x: this.pos[0],
            y: this.pos[1],
            w: this.width,
            h: this.height
        };

        const playerR = {
            walkRightAnimation: [
                { sX: 0, sY: 0 },
                { sX: 15, sY: 0 },
                { sX: 0, sY: 0 },
            ]
        };
        const playerU = {};
        const playerD = {};
    }

    move(timeDelta) {

    }
}

export default Player;