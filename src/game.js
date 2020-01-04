import Player from "./player";


class Game {
    constructor(canvas) {
        this.player = new Player(this);
        this.startTime = Date.now();
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
        this.grid = Array.from({ length: 58 }, (_, i) => Array.from({ length: 76 }, (_, j) => Object.assign({}, { 'valid': true, 'throughDirection': '', 'surfable': false }) ));
        
    }

    checkCollisions(playerGridPos) {
        
        let j = playerGridPos[0];
        let i = playerGridPos[1];
        if (j > 75 || j < 0 || i > 57 || i < 0) return false;
        return this.grid[i][j]['valid'];
    }

    moveMap() {
        // if player moving left
            // decrease mapX
        if (this.player.direction === 'left') {
            this.sX += this.speed;
            
        }
        // if player moving right
            // increase mapX
        if (this.player.direction === 'right') {
            this.sX -= this.speed;
        }
        //if player moving down
            // decrease mapY
        if (this.player.direction === 'down') {
            this.sY -= this.speed;
        }
        // if player moving up
            // increase mapY
        if (this.player.direction === 'up') {
            this.sY += this.speed;
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
        // upper wall by cave door
        this.grid[11][27]['valid'] = false;
        this.grid[11][28]['valid'] = false;
        this.grid[11][29]['valid'] = false;
        this.grid[11][30]['valid'] = false;
        this.grid[11][31]['valid'] = false;
        this.grid[11][33]['valid'] = false;
        this.grid[11][34]['valid'] = false;
        this.grid[11][35]['valid'] = false;

        this.grid[13][29]['valid'] = false;
        this.grid[13][30]['valid'] = false;
        this.grid[13][31]['valid'] = false;
        this.grid[14][30]['valid'] = false;
        this.grid[14][29]['valid'] = false;
        this.grid[14][31]['valid'] = false;
        this.grid[15][29]['valid'] = false;
        this.grid[15][30]['valid'] = false;
        this.grid[15][31]['valid'] = false;

        // upper left wall
        this.grid[12][27]['valid'] = false;
        this.grid[13][27]['valid'] = false;
        this.grid[14][27]['valid'] = false;
        this.grid[15][27]['valid'] = false;
        this.grid[16][27]['valid'] = false;
        this.grid[17][27]['valid'] = false;
        this.grid[18][27]['valid'] = false;
        this.grid[19][27]['valid'] = false;
        this.grid[20][27]['valid'] = false;
        this.grid[21][27]['valid'] = false;
        this.grid[22][27]['valid'] = false;
        this.grid[23][27]['valid'] = false;
        this.grid[24][27]['valid'] = false;
        this.grid[25][27]['valid'] = false;
        this.grid[26][27]['valid'] = false;
        this.grid[27][27]['valid'] = false;
        this.grid[28][27]['valid'] = false;

        // ... into lower hedge
        this.grid[26][27]['valid'] = false;
        this.grid[28][28]['valid'] = false;
        this.grid[28][29]['valid'] = false;
        this.grid[28][30]['valid'] = false;
        this.grid[28][31]['valid'] = false;

        // down into water

        this.grid[29][31]['valid'] = false;
        this.grid[30][31]['valid'] = false;
        this.grid[31][31]['valid'] = false;
        this.grid[32][31]['valid'] = false;
        this.grid[33][31]['valid'] = false;
        this.grid[34][31]['valid'] = false;
        this.grid[35][31]['valid'] = false;
        this.grid[36][31]['valid'] = false;
        this.grid[37][31]['valid'] = false;
        this.grid[38][31]['valid'] = false;
        this.grid[39][31]['valid'] = false;

        // lower aisle against water
        this.grid[40][32]['valid'] = false;
        this.grid[40][33]['valid'] = false;
        this.grid[40][34]['valid'] = false;
        this.grid[40][35]['valid'] = false;
        this.grid[40][36]['valid'] = false;
        this.grid[40][37]['valid'] = false;
        this.grid[40][38]['valid'] = false;
        this.grid[40][39]['valid'] = false;
        this.grid[40][40]['valid'] = false;
        this.grid[40][41]['valid'] = false;
        this.grid[40][42]['valid'] = false;
        this.grid[40][43]['valid'] = false;

        //zig zag down water
        this.grid[41][35]['valid'] = false;
        this.grid[42][35]['valid'] = false;
        this.grid[43][35]['valid'] = false;
        this.grid[44][35]['valid'] = false;


        this.grid[40][43]['valid'] = false;
        this.grid[41][43]['valid'] = false;
        this.grid[42][43]['valid'] = false;
        this.grid[43][43]['valid'] = false;
        this.grid[44][43]['valid'] = false;
        this.grid[45][43]['valid'] = false;
        this.grid[46][43]['valid'] = false;
        this.grid[47][43]['valid'] = false;
        this.grid[48][43]['valid'] = false;


        this.grid[48][44]['valid'] = false;
        this.grid[48][45]['valid'] = false;
        this.grid[48][46]['valid'] = false;
        this.grid[48][47]['valid'] = false;
        this.grid[48][48]['valid'] = false;
        this.grid[48][49]['valid'] = false;
        this.grid[48][50]['valid'] = false;
        this.grid[48][51]['valid'] = false;


        this.grid[48][51]['valid'] = false;
        this.grid[49][51]['valid'] = false;
        this.grid[50][51]['valid'] = false;
        this.grid[51][51]['valid'] = false;
        this.grid[52][51]['valid'] = false;
        this.grid[53][51]['valid'] = false;
        this.grid[54][51]['valid'] = false;
        this.grid[55][51]['valid'] = false;
        this.grid[56][51]['valid'] = false;

        // far bottom edge
        this.grid[56][52]['valid'] = false;
        this.grid[56][53]['valid'] = false;
        this.grid[56][54]['valid'] = false;
        this.grid[56][55]['valid'] = false;
        this.grid[56][56]['valid'] = false;
        this.grid[56][57]['valid'] = false;
        this.grid[56][58]['valid'] = false;
        this.grid[56][59]['valid'] = false;
        this.grid[56][60]['valid'] = false;
        this.grid[56][61]['valid'] = false;
        this.grid[56][62]['valid'] = false;
        this.grid[56][63]['valid'] = false;
        this.grid[56][64]['valid'] = false;
        this.grid[56][65]['valid'] = false;
        this.grid[56][66]['valid'] = false;
        this.grid[56][67]['valid'] = false;
        this.grid[56][68]['valid'] = false;
        this.grid[56][69]['valid'] = false;
        this.grid[56][70]['valid'] = false;
        this.grid[56][71]['valid'] = false;
        this.grid[56][72]['valid'] = false;


        this.grid[52][72]['valid'] = false;
        this.grid[53][72]['valid'] = false;
        this.grid[54][72]['valid'] = false;
        this.grid[55][72]['valid'] = false;


        this.grid[52][72]['valid'] = false;
        this.grid[52][73]['valid'] = false;
        this.grid[52][74]['valid'] = false;
        this.grid[52][75]['valid'] = false;

        this.grid[47][64]['valid'] = false;
        this.grid[47][65]['valid'] = false;
        this.grid[47][66]['valid'] = false;
        this.grid[47][67]['valid'] = false;
        this.grid[47][68]['valid'] = false;
        this.grid[47][69]['valid'] = false;
        this.grid[47][70]['valid'] = false;
        this.grid[47][71]['valid'] = false;
        this.grid[47][72]['valid'] = false;
        this.grid[47][73]['valid'] = false;
        this.grid[47][74]['valid'] = false;
        this.grid[47][75]['valid'] = false;

        this.grid[40][64]['valid'] = false;
        this.grid[41][64]['valid'] = false;
        this.grid[42][64]['valid'] = false;
        this.grid[43][64]['valid'] = false;
        this.grid[44][64]['valid'] = false;
        this.grid[45][64]['valid'] = false;
        this.grid[46][64]['valid'] = false;

        this.grid[40][65]['valid'] = false;
        this.grid[40][66]['valid'] = false;
        
        this.grid[32][66]['valid'] = false;
        this.grid[33][66]['valid'] = false;
        this.grid[34][66]['valid'] = false;
        this.grid[35][66]['valid'] = false;
        this.grid[36][66]['valid'] = false;
        this.grid[37][66]['valid'] = false;
        this.grid[38][66]['valid'] = false;
        this.grid[39][66]['valid'] = false;

        this.grid[32][67]['valid'] = false;
        this.grid[32][68]['valid'] = false;
        this.grid[32][69]['valid'] = false;
        this.grid[32][70]['valid'] = false;
        this.grid[32][71]['valid'] = false;
        this.grid[32][72]['valid'] = false;
        this.grid[32][73]['valid'] = false;
        this.grid[32][74]['valid'] = false;
        this.grid[32][75]['valid'] = false;

        this.grid[29][64]['valid'] = false;
        this.grid[29][65]['valid'] = false;
        this.grid[29][66]['valid'] = false;
        this.grid[29][67]['valid'] = false;
        this.grid[29][68]['valid'] = false;
        this.grid[29][69]['valid'] = false;
        this.grid[29][70]['valid'] = false;
        this.grid[29][71]['valid'] = false;
        this.grid[29][72]['valid'] = false;
        this.grid[29][73]['valid'] = false;
        this.grid[29][74]['valid'] = false;
        this.grid[29][75]['valid'] = false;

        this.grid[29][63]['valid'] = false;
        this.grid[30][63]['valid'] = false;
        this.grid[31][63]['valid'] = false;
        this.grid[32][63]['valid'] = false;
        this.grid[33][63]['valid'] = false;
        this.grid[34][63]['valid'] = false;
        this.grid[35][63]['valid'] = false;
        this.grid[36][63]['valid'] = false;
        this.grid[37][63]['valid'] = false;

        this.grid[37][60]['valid'] = false;
        this.grid[37][61]['valid'] = false;
        this.grid[37][62]['valid'] = false;

        this.grid[27][60]['valid'] = false;
        this.grid[28][60]['valid'] = false;
        this.grid[29][60]['valid'] = false;
        this.grid[30][60]['valid'] = false;
        this.grid[31][60]['valid'] = false;
        this.grid[32][60]['valid'] = false;
        this.grid[33][60]['valid'] = false;
        this.grid[34][60]['valid'] = false;
        this.grid[35][60]['valid'] = false;
        this.grid[36][60]['valid'] = false;


        this.grid[27][36]['valid'] = false;
        this.grid[27][37]['valid'] = false;
        this.grid[27][38]['valid'] = false;
        this.grid[27][39]['valid'] = false;
        this.grid[27][40]['valid'] = false;
        this.grid[27][41]['valid'] = false;
        this.grid[27][44]['valid'] = false;
        this.grid[27][45]['valid'] = false;
        this.grid[27][46]['valid'] = false;
        this.grid[27][47]['valid'] = false;
        this.grid[27][48]['valid'] = false;
        this.grid[27][49]['valid'] = false;
        this.grid[27][50]['valid'] = false;
        this.grid[27][51]['valid'] = false;
        this.grid[27][52]['valid'] = false;
        this.grid[27][53]['valid'] = false;
        this.grid[27][54]['valid'] = false;
        this.grid[27][55]['valid'] = false;
        this.grid[27][56]['valid'] = false;
        this.grid[27][57]['valid'] = false;
        this.grid[27][58]['valid'] = false;
        this.grid[27][59]['valid'] = false;

        this.grid[28][48]['valid'] = false;
        this.grid[29][48]['valid'] = false;
        this.grid[30][48]['valid'] = false;
        this.grid[31][48]['valid'] = false;

        this.grid[31][49]['valid'] = false;
        this.grid[31][50]['valid'] = false;
        this.grid[31][51]['valid'] = false;
        this.grid[31][52]['valid'] = false;
        this.grid[31][53]['valid'] = false;
        this.grid[31][56]['valid'] = false;
        this.grid[31][57]['valid'] = false;
        this.grid[31][58]['valid'] = false;
        this.grid[31][59]['valid'] = false;

        this.grid[35][55]['valid'] = false;
        this.grid[36][55]['valid'] = false;
        this.grid[37][55]['valid'] = false;
        this.grid[38][55]['valid'] = false;

        this.grid[38][56]['valid'] = false;
        this.grid[38][57]['valid'] = false;

        this.grid[39][57]['valid'] = false;
        this.grid[40][57]['valid'] = false;

        this.grid[40][58]['valid'] = false;

        // right wall from cave
        this.grid[12][36]['valid'] = false;
        this.grid[13][36]['valid'] = false;
        this.grid[14][36]['valid'] = false;
        this.grid[15][36]['valid'] = false;
        this.grid[16][36]['valid'] = false;
        this.grid[17][36]['valid'] = false;
        this.grid[18][36]['valid'] = false;
        this.grid[19][36]['valid'] = false;
        this.grid[20][36]['valid'] = false;
        this.grid[21][36]['valid'] = false;
        this.grid[22][36]['valid'] = false;
        this.grid[23][36]['valid'] = false;
        this.grid[24][36]['valid'] = false;
        this.grid[25][36]['valid'] = false;
        this.grid[26][36]['valid'] = false;
        this.grid[27][36]['valid'] = false;
        this.grid[28][36]['valid'] = false;
        this.grid[29][36]['valid'] = false;
        this.grid[30][36]['valid'] = false;
        this.grid[31][36]['valid'] = false;
        this.grid[32][36]['valid'] = false;
        this.grid[33][36]['valid'] = false;
        this.grid[34][36]['valid'] = false;
        this.grid[35][36]['valid'] = false;


        this.grid[35][36]['valid'] = false;
        this.grid[35][37]['valid'] = false;
        this.grid[35][38]['valid'] = false;
        this.grid[35][39]['valid'] = false;
        this.grid[35][40]['valid'] = false;
        this.grid[35][41]['valid'] = false;
        this.grid[35][43]['valid'] = false;
        this.grid[35][44]['valid'] = false;
        this.grid[35][45]['valid'] = false;
        this.grid[35][46]['valid'] = false;
        this.grid[35][47]['valid'] = false;
        this.grid[35][48]['valid'] = false;
        this.grid[35][49]['valid'] = false;
        this.grid[35][50]['valid'] = false;
        this.grid[35][51]['valid'] = false;
        this.grid[35][52]['valid'] = false;

        this.grid[34][52]['valid'] = false;
        this.grid[34][53]['valid'] = false;
        this.grid[34][54]['valid'] = false;
        this.grid[34][55]['valid'] = false;

        this.grid[36][52]['valid'] = false;
        this.grid[37][52]['valid'] = false;
        this.grid[38][52]['valid'] = false;
        this.grid[39][52]['valid'] = false;
        this.grid[40][52]['valid'] = false;
        this.grid[41][52]['valid'] = false;
        this.grid[42][52]['valid'] = false;
        this.grid[43][52]['valid'] = false;

        this.grid[43][44]['valid'] = false;
        this.grid[43][45]['valid'] = false;
        this.grid[43][48]['valid'] = false;
        this.grid[43][49]['valid'] = false;
        this.grid[43][50]['valid'] = false;
        this.grid[43][51]['valid'] = false;

        this.grid[43][53]['valid'] = false;
        this.grid[43][54]['valid'] = false;
        this.grid[43][55]['valid'] = false;
        this.grid[43][56]['valid'] = false;
        this.grid[43][57]['valid'] = false;
        this.grid[43][58]['valid'] = false;
        this.grid[43][59]['valid'] = false;
        this.grid[43][60]['valid'] = false;
        this.grid[43][61]['valid'] = false;
        this.grid[43][62]['valid'] = false;
        this.grid[43][63]['valid'] = false;

        this.grid[40][59]['valid'] = false;
        this.grid[41][59]['valid'] = false;
        this.grid[42][59]['valid'] = false;

        this.grid[51][56]['valid'] = false;
        this.grid[51][57]['valid'] = false;
        this.grid[51][58]['valid'] = false;
        this.grid[51][59]['valid'] = false;
        this.grid[51][60]['valid'] = false;
        this.grid[51][61]['valid'] = false;
        this.grid[51][62]['valid'] = false;
        this.grid[51][63]['valid'] = false;
        this.grid[51][64]['valid'] = false;
        this.grid[51][65]['valid'] = false;
        this.grid[51][66]['valid'] = false;
        this.grid[51][67]['valid'] = false;

        this.grid[44][56]['valid'] = false;
        this.grid[45][56]['valid'] = false;
        this.grid[46][56]['valid'] = false;
        this.grid[47][56]['valid'] = false;
        this.grid[48][56]['valid'] = false;
        this.grid[49][56]['valid'] = false;
        this.grid[50][56]['valid'] = false;
        
        this.grid[48][67]['valid'] = false;
        this.grid[49][67]['valid'] = false;
        this.grid[50][67]['valid'] = false;

        this.grid[36][24]['valid'] = false;
        this.grid[36][25]['valid'] = false;
        this.grid[36][26]['valid'] = false;
        this.grid[36][27]['valid'] = false;
        this.grid[36][28]['valid'] = false;
        this.grid[36][29]['valid'] = false;
        this.grid[36][30]['valid'] = false;

        this.grid[37][24]['valid'] = false;
        this.grid[38][24]['valid'] = false;
        this.grid[39][24]['valid'] = false;
        this.grid[40][24]['valid'] = false;
        this.grid[41][24]['valid'] = false;
        this.grid[42][24]['valid'] = false;
        this.grid[43][24]['valid'] = false;

        this.grid[37][19]['valid'] = false;
        this.grid[38][19]['valid'] = false;
        this.grid[39][19]['valid'] = false;
        this.grid[40][19]['valid'] = false;
        this.grid[41][19]['valid'] = false;
        this.grid[42][19]['valid'] = false;
        this.grid[43][19]['valid'] = false;

        this.grid[43][4]['valid'] = false;
        this.grid[43][5]['valid'] = false;
        this.grid[43][8]['valid'] = false;
        this.grid[43][9]['valid'] = false;
        this.grid[43][10]['valid'] = false;
        this.grid[43][11]['valid'] = false;
        this.grid[43][12]['valid'] = false;
        this.grid[43][13]['valid'] = false;
        this.grid[43][14]['valid'] = false;
        this.grid[43][15]['valid'] = false;
        this.grid[43][16]['valid'] = false;
        this.grid[43][17]['valid'] = false;
        this.grid[43][18]['valid'] = false;

        this.grid[44][28]['valid'] = false;
        this.grid[45][28]['valid'] = false;
        this.grid[46][28]['valid'] = false;
        this.grid[47][28]['valid'] = false;

        this.grid[39][3]['valid'] = false;
        this.grid[40][3]['valid'] = false;
        this.grid[41][3]['valid'] = false;
        this.grid[42][3]['valid'] = false;
        this.grid[43][3]['valid'] = false;
        this.grid[44][3]['valid'] = false;
        this.grid[45][3]['valid'] = false;
        this.grid[46][3]['valid'] = false;
        this.grid[47][3]['valid'] = false;
        this.grid[48][3]['valid'] = false;

        this.grid[39][4]['valid'] = false;
        this.grid[39][5]['valid'] = false;
        this.grid[39][6]['valid'] = false;
        this.grid[39][7]['valid'] = false;
        this.grid[39][8]['valid'] = false;
        this.grid[39][9]['valid'] = false;
        this.grid[39][10]['valid'] = false;
        this.grid[39][11]['valid'] = false;

        this.grid[36][19]['valid'] = false;

        this.grid[35][11]['valid'] = false;
        this.grid[36][11]['valid'] = false;
        this.grid[37][11]['valid'] = false;
        this.grid[38][11]['valid'] = false;

        this.grid[35][12]['valid'] = false;
        this.grid[35][13]['valid'] = false;
        this.grid[35][14]['valid'] = false;
        this.grid[35][15]['valid'] = false;
        this.grid[35][16]['valid'] = false;
        this.grid[35][17]['valid'] = false;
        this.grid[35][18]['valid'] = false;
        this.grid[35][19]['valid'] = false;
        this.grid[35][20]['valid'] = false;
        this.grid[35][21]['valid'] = false;
        this.grid[35][22]['valid'] = false;
        this.grid[35][23]['valid'] = false;

        this.grid[48][4]['valid'] = false;
        this.grid[48][5]['valid'] = false;
        this.grid[48][6]['valid'] = false;
        this.grid[48][7]['valid'] = false;
        this.grid[48][8]['valid'] = false;
        this.grid[48][9]['valid'] = false;
        this.grid[48][10]['valid'] = false;
        this.grid[48][11]['valid'] = false;
        this.grid[48][12]['valid'] = false;
        this.grid[48][13]['valid'] = false;
        this.grid[48][14]['valid'] = false;
        this.grid[48][15]['valid'] = false;
        this.grid[48][16]['valid'] = false;
        this.grid[48][17]['valid'] = false;
        this.grid[48][18]['valid'] = false;
        this.grid[48][19]['valid'] = false;
        this.grid[48][20]['valid'] = false;
        this.grid[48][21]['valid'] = false;
        this.grid[48][22]['valid'] = false;
        this.grid[48][23]['valid'] = false;
        this.grid[48][24]['valid'] = false;
        this.grid[48][25]['valid'] = false;
        this.grid[48][26]['valid'] = false;
        this.grid[48][27]['valid'] = false;
        this.grid[48][28]['valid'] = false;
        this.grid[48][29]['valid'] = false;
        this.grid[48][30]['valid'] = false;
        this.grid[48][31]['valid'] = false;
        this.grid[48][32]['valid'] = false;
        this.grid[48][33]['valid'] = false;
        this.grid[48][34]['valid'] = false;
        this.grid[48][35]['valid'] = false;
        this.grid[48][36]['valid'] = false;
        this.grid[48][37]['valid'] = false;
        this.grid[48][38]['valid'] = false;
        this.grid[48][39]['valid'] = false;
        this.grid[48][40]['valid'] = false;
        this.grid[48][41]['valid'] = false;
        this.grid[48][42]['valid'] = false;
    }

    layGrid(ctx) {
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[i].length; j++) {
                let startX = this.sX + (j * 8 * this.scale);
                let startY = this.sY + (i * 8 * this.scale);
                if (this.grid[i][j]['valid'] === false) {
                    this.drawCell(ctx, [startX, startY])
                }
            }
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
        // this.layGrid(ctx);
        this.player.draw(ctx);
        
    }
}

export default Game;