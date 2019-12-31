import Player from "./player";
import Blocker from './blocker'

class Game {
    constructor(canvas) {
        this.player = new Player(this);
        this.canvas = canvas;
        this.blockers = [];
        this.scale = 2.8;
        this.speed = 3;
        this.sX = -200;
        this.sY = -200;
        this.width = 608;
        this.height = 464;
        this.levelSprite = new Image();
        this.levelSprite.src = "mtSilver.png";
        this.grid = Array.from({ length: 58 }, (_, i) => Array.from({ length: 76 }, (_, j) => true ));
        
    }

    // makeBlockers(ctx) {
    //     let blocker = new Blocker([400, 200], [80, 20]);
    //     // blocker.draw(ctx);
    //     this.blockers.push(blocker);
    // }

    checkBounds(playerPos, playerDir) {
        switch (playerDir) {
            case 'left':

                break;
            case 'right':

                break;
            case 'up':

                break;
            case 'down':

                break;
        }
    }

    checkCollisions(dir) {
        let collided = false;
        console.log(this.player.pos)
        console.log(this.player.gridPos)
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[i].length; j++) {
                if (this.grid[i][j] === false && this.player.gridPos === [i, j]) {
                    collided = true;

                }
            }
        }
        return collided;
    }

    moveMap() {
        // if player moving left
            // decrease mapX
        if (this.player.direction === 'left') {
            this.sX += this.speed;
            // this.blockers.forEach(blocker => blocker.pos[0] += this.speed);
        }
        // if player moving right
            // increase mapX
        if (this.player.direction === 'right') {
            this.sX -= this.speed;
            // this.blockers.forEach(blocker => blocker.pos[0] -= this.speed);
        }
        //if player moving down
            // decrease mapY
        if (this.player.direction === 'down') {
            this.sY -= this.speed;
            // this.blockers.forEach(blocker => blocker.pos[1] -= this.speed);
        }
        // if player moving up
            // increase mapY
        if (this.player.direction === 'up') {
            this.sY += this.speed;
            // this.blockers.forEach(blocker => blocker.pos[1] += this.speed);
        }
    }

    drawCell(ctx, pos) {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'gray';
        
        ctx.rect(pos[0], pos[1], 8 * this.scale, 8 * this.scale);
        ctx.stroke();
   
    }

    setValidSquares(){
        // let playerCenter = [(this.player.pos[0] + (this.player.width / 2)), (this.player.pos[1] + (this.player.height / 2))]

        // upper wall by cave door
        this.grid[11][27] = false;
        this.grid[11][28] = false;
        this.grid[11][29] = false;
        this.grid[11][30] = false;
        this.grid[11][31] = false;
        this.grid[11][34] = false;
        this.grid[11][35] = false;
        this.grid[11][36] = false;

        // upper left wall
        this.grid[12][27] = false;
        this.grid[13][27] = false;
        this.grid[14][27] = false;
        this.grid[15][27] = false;
        this.grid[16][27] = false;
        this.grid[17][27] = false;
        this.grid[18][27] = false;
        this.grid[19][27] = false;
        this.grid[20][27] = false;
        this.grid[21][27] = false;
        this.grid[22][27] = false;
        this.grid[23][27] = false;
        this.grid[24][27] = false;
        this.grid[25][27] = false;
        this.grid[26][27] = false;
        this.grid[27][27] = false;
        this.grid[28][27] = false;

        // ... into lower hedge
        this.grid[28][28] = false;
        this.grid[28][29] = false;
        this.grid[28][30] = false;
        this.grid[28][31] = false;

        // down into water
        this.grid[28][31] = false;
        this.grid[29][31] = false;
        this.grid[30][31] = false;
        this.grid[31][31] = false;
        this.grid[32][31] = false;
        this.grid[33][31] = false;
        this.grid[34][31] = false;
        this.grid[35][31] = false;
        this.grid[36][31] = false;
        this.grid[37][31] = false;
        this.grid[38][31] = false;
        this.grid[39][31] = false;

        // lower aisle against water
        this.grid[40][32] = false;
        this.grid[40][33] = false;
        this.grid[40][34] = false;
        this.grid[40][35] = false;
        this.grid[40][36] = false;
        this.grid[40][37] = false;
        this.grid[40][38] = false;
        this.grid[40][39] = false;
        this.grid[40][40] = false;
        this.grid[40][41] = false;
        this.grid[40][42] = false;
        this.grid[40][43] = false;

        //zig zag down water
        this.grid[41][35] = false;
        this.grid[42][35] = false;
        this.grid[43][35] = false;
        this.grid[44][35] = false;

        this.grid[41][43] = false;
        this.grid[42][43] = false;
        this.grid[43][43] = false;
        this.grid[44][43] = false;
        this.grid[45][43] = false;
        this.grid[46][43] = false;
        this.grid[47][43] = false;
        this.grid[48][43] = false;


        this.grid[48][44] = false;
        this.grid[48][45] = false;
        this.grid[48][46] = false;
        this.grid[48][47] = false;
        this.grid[48][48] = false;
        this.grid[48][49] = false;
        this.grid[48][50] = false;
        this.grid[48][51] = false;


        this.grid[49][51] = false;
        this.grid[50][51] = false;
        this.grid[51][51] = false;
        this.grid[52][51] = false;
        this.grid[53][51] = false;
        this.grid[54][51] = false;
        this.grid[55][51] = false;
        this.grid[56][51] = false;

        // far bottom edge
        this.grid[56][52] = false;
        this.grid[56][53] = false;
        this.grid[56][54] = false;
        this.grid[56][55] = false;
        this.grid[56][56] = false;
        this.grid[56][57] = false;
        this.grid[56][58] = false;
        this.grid[56][59] = false;
        this.grid[56][60] = false;
        this.grid[56][61] = false;
        this.grid[56][62] = false;
        this.grid[56][63] = false;
        this.grid[56][64] = false;
        this.grid[56][65] = false;
        this.grid[56][66] = false;
        this.grid[56][67] = false;
        this.grid[56][68] = false;
        this.grid[56][69] = false;
        this.grid[56][70] = false;
        this.grid[56][71] = false;
        this.grid[56][72] = false;


        this.grid[52][72] = false;
        this.grid[53][72] = false;
        this.grid[54][72] = false;
        this.grid[55][72] = false;


        this.grid[52][73] = false;
        this.grid[52][74] = false;
        this.grid[52][75] = false;

        this.grid[47][64] = false;
        this.grid[47][65] = false;
        this.grid[47][66] = false;
        this.grid[47][67] = false;
        this.grid[47][68] = false;
        this.grid[47][69] = false;
        this.grid[47][70] = false;
        this.grid[47][71] = false;
        this.grid[47][72] = false;
        this.grid[47][73] = false;
        this.grid[47][74] = false;
        this.grid[47][75] = false;

        this.grid[40][64] = false;
        this.grid[41][64] = false;
        this.grid[42][64] = false;
        this.grid[43][64] = false;
        this.grid[44][64] = false;
        this.grid[45][64] = false;
        this.grid[46][64] = false;

        this.grid[40][65] = false;
        this.grid[40][66] = false;
        
        this.grid[32][66] = false;
        this.grid[33][66] = false;
        this.grid[34][66] = false;
        this.grid[35][66] = false;
        this.grid[36][66] = false;
        this.grid[37][66] = false;
        this.grid[38][66] = false;
        this.grid[39][66] = false;

        this.grid[32][67] = false;
        this.grid[32][68] = false;
        this.grid[32][69] = false;
        this.grid[32][70] = false;
        this.grid[32][71] = false;
        this.grid[32][72] = false;
        this.grid[32][73] = false;
        this.grid[32][74] = false;
        this.grid[32][75] = false;

        this.grid[29][64] = false;
        this.grid[29][65] = false;
        this.grid[29][66] = false;
        this.grid[29][67] = false;
        this.grid[29][68] = false;
        this.grid[29][69] = false;
        this.grid[29][70] = false;
        this.grid[29][71] = false;
        this.grid[29][72] = false;
        this.grid[29][73] = false;
        this.grid[29][74] = false;
        this.grid[29][75] = false;

        this.grid[29][63] = false;
        this.grid[30][63] = false;
        this.grid[31][63] = false;
        this.grid[32][63] = false;
        this.grid[33][63] = false;
        this.grid[34][63] = false;
        this.grid[35][63] = false;
        this.grid[36][63] = false;
        this.grid[37][63] = false;

        this.grid[37][60] = false;
        this.grid[37][61] = false;
        this.grid[37][62] = false;

        this.grid[27][60] = false;
        this.grid[28][60] = false;
        this.grid[29][60] = false;
        this.grid[30][60] = false;
        this.grid[31][60] = false;
        this.grid[32][60] = false;
        this.grid[33][60] = false;
        this.grid[34][60] = false;
        this.grid[35][60] = false;
        this.grid[36][60] = false;

        this.grid[27][37] = false;
        this.grid[27][38] = false;
        this.grid[27][39] = false;
        this.grid[27][40] = false;
        this.grid[27][41] = false;
        this.grid[27][44] = false;
        this.grid[27][45] = false;
        this.grid[27][46] = false;
        this.grid[27][47] = false;
        this.grid[27][48] = false;
        this.grid[27][49] = false;
        this.grid[27][50] = false;
        this.grid[27][51] = false;
        this.grid[27][52] = false;
        this.grid[27][53] = false;
        this.grid[27][54] = false;
        this.grid[27][55] = false;
        this.grid[27][56] = false;
        this.grid[27][57] = false;
        this.grid[27][58] = false;
        this.grid[27][59] = false;

        // right wall from cave
        this.grid[12][36] = false;
        this.grid[13][36] = false;
        this.grid[14][36] = false;
        this.grid[15][36] = false;
        this.grid[16][36] = false;
        this.grid[17][36] = false;
        this.grid[18][36] = false;
        this.grid[19][36] = false;
        this.grid[20][36] = false;
        this.grid[21][36] = false;
        this.grid[22][36] = false;
        this.grid[23][36] = false;
        this.grid[24][36] = false;
        this.grid[25][36] = false;
        this.grid[26][36] = false;
        this.grid[27][36] = false;
        this.grid[28][36] = false;
        this.grid[29][36] = false;
        this.grid[30][36] = false;
        this.grid[31][36] = false;
        this.grid[32][36] = false;
        this.grid[33][36] = false;
        this.grid[34][36] = false;
        this.grid[35][36] = false;

        this.grid[35][37] = false;
        this.grid[35][38] = false;
        this.grid[35][39] = false;
        this.grid[35][40] = false;
        this.grid[35][41] = false;
        this.grid[35][42] = false;
        this.grid[35][43] = false;
        this.grid[35][44] = false;
        this.grid[35][45] = false;
        this.grid[35][46] = false;
        this.grid[35][47] = false;
        this.grid[35][48] = false;
        this.grid[35][49] = false;
        this.grid[35][50] = false;
        this.grid[35][51] = false;
        this.grid[35][52] = false;

        this.grid[34][52] = false;
        this.grid[34][53] = false;
        this.grid[34][54] = false;
        this.grid[34][55] = false;

        this.grid[36][52] = false;
        this.grid[37][52] = false;
        this.grid[38][52] = false;
        this.grid[39][52] = false;
        this.grid[40][52] = false;
        this.grid[41][52] = false;
        this.grid[42][52] = false;
        this.grid[43][52] = false;

        this.grid[43][44] = false;
        this.grid[43][45] = false;
        this.grid[43][48] = false;
        this.grid[43][49] = false;
        this.grid[43][50] = false;
        this.grid[43][51] = false;

        this.grid[43][53] = false;
        this.grid[43][54] = false;
        this.grid[43][55] = false;
        this.grid[43][56] = false;
        this.grid[43][57] = false;
        this.grid[43][58] = false;
        this.grid[43][59] = false;
        this.grid[43][60] = false;
        this.grid[43][61] = false;
        this.grid[43][62] = false;
        this.grid[43][63] = false;

        this.grid[40][59] = false;
        this.grid[41][59] = false;
        this.grid[42][59] = false;
        
    }

    layGrid(ctx) {
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[i].length; j++) {
                let startX = this.sX + (j * 8 * this.scale);
                let startY = this.sY + (i * 8 * this.scale);
                if (this.grid[i][j] === false) {
                    this.drawCell(ctx, [startX, startY])
                }
            }
        }
    }

    draw(ctx) {
        // this.makeBlockers(ctx);
        // ctx.clearRect(0, 0, 800, 700);
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
        this.setValidSquares();
        this.layGrid(ctx);
        this.player.draw(ctx);
        this.setValidSquares();
        // this.blockers.forEach(blocker => blocker.draw(ctx))
    }
}

export default Game;