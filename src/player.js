

class Player {
    constructor(game) {
        this.game = game;
        this.pos = [450, 250];
        this.gridPos = [0, 0];
        this.dX = 0;
        this.dY = 0;
        this.width = 15;
        this.height = 15;
        this.sprite = new Image();
        this.sprite.src = "redSprites.png";
        this.direction = 'down';
        this.biking = false;
        this.fishing = false;
        this.moving = false;
        this.frame = 0;
        this.speed = 3;
    }

    draw(ctx) {
        const playerL = {
            walkLeftAnimation: [
                { sX: 29, sY: 4 },
                { sX: 29, sY: 4 },
                { sX: 29, sY: 4 },
                { sX: 29, sY: 4 },
                { sX: 29, sY: 4 },
                { sX: 44, sY: 4 },
                { sX: 44, sY: 4 },
                { sX: 44, sY: 4 },
                { sX: 44, sY: 4 },
                { sX: 44, sY: 4 },
                { sX: 29, sY: 4 },
                { sX: 29, sY: 4 },
                { sX: 29, sY: 4 },
                { sX: 29, sY: 4 },
                { sX: 29, sY: 4 },
            ],
            x: this.pos[0],
            y: this.pos[1],
            w: this.width - 2,
            h: this.height
        };

        const playerR = {
            walkRightAnimation: [
                { sX: 0, sY: 4 },
                { sX: 0, sY: 4 },
                { sX: 0, sY: 4 },
                { sX: 0, sY: 4 },
                { sX: 0, sY: 4 },
                { sX: 14, sY: 4 },
                { sX: 14, sY: 4 },
                { sX: 14, sY: 4 },
                { sX: 14, sY: 4 },
                { sX: 14, sY: 4 },
                { sX: 0, sY: 4 },
                { sX: 0, sY: 4 },
                { sX: 0, sY: 4 },
                { sX: 0, sY: 4 },
                { sX: 0, sY: 4 },
            ],
            x: this.pos[0],
            y: this.pos[1],
            w: this.width,
            h: this.height
        };
        const playerU = {
            walkUpAnimation: [
                { sX: 122, sY: 4},
                { sX: 122, sY: 4},
                { sX: 122, sY: 4},
                { sX: 122, sY: 4},
                { sX: 122, sY: 4},
                { sX: 137, sY: 4},
                { sX: 137, sY: 4},
                { sX: 137, sY: 4},
                { sX: 137, sY: 4},
                { sX: 137, sY: 4},
                { sX: 122, sY: 4},
                { sX: 122, sY: 4},
                { sX: 122, sY: 4},
                { sX: 122, sY: 4},
                { sX: 122, sY: 4},
            ],
            x: this.pos[0],
            y: this.pos[1],
            w: this.width,
            h: this.height
        };
        const playerD = {
            walkDownAnimation: [
                { sX: 73, sY: 4 },
                { sX: 73, sY: 4 },
                { sX: 73, sY: 4 },
                { sX: 73, sY: 4 },
                { sX: 73, sY: 4 },
                { sX: 89, sY: 4 },
                { sX: 89, sY: 4 },
                { sX: 89, sY: 4 },
                { sX: 89, sY: 4 },
                { sX: 89, sY: 4 },
                { sX: 73, sY: 4 },
                { sX: 73, sY: 4 },
                { sX: 73, sY: 4 },
                { sX: 73, sY: 4 },
                { sX: 73, sY: 4 },
            ],
            x: this.pos[0],
            y: this.pos[1],
            w: this.width,
            h: this.height
        };

        let player;
        switch (this.direction) {
            case 'left':
                player = playerL.walkLeftAnimation[this.frame];
                break;
            case 'right':
                player = playerR.walkRightAnimation[this.frame];
                break;
            case 'up':
                player = playerU.walkUpAnimation[this.frame];
                break;
            case 'down':
                player = playerD.walkDownAnimation[this.frame];
                break;
        }
       
        if (this.direction === 'left') {
            ctx.drawImage(
                this.sprite,
                player.sX,
                player.sY,
                playerL.w,
                playerL.h,
                playerL.x,
                playerL.y,
                playerL.w * this.game.scale,
                playerL.h * this.game.scale
            );

        } else if (this.direction === 'right') {
            ctx.drawImage(
                this.sprite,
                player.sX,
                player.sY,
                playerR.w,
                playerR.h,
                playerR.x,
                playerR.y,
                playerR.w * this.game.scale,
                playerR.h * this.game.scale
            );
            
        } else if (this.direction === 'up') {
            ctx.drawImage(
                this.sprite,
                player.sX,
                player.sY,
                playerU.w,
                playerU.h,
                playerU.x,
                playerU.y,
                playerU.w * this.game.scale,
                playerU.h * this.game.scale
            );
            
        } else {
            ctx.drawImage(
                this.sprite,
                player.sX,
                player.sY,
                playerD.w,
                playerD.h,
                playerD.x,
                playerD.y,
                playerD.w * this.game.scale,
                playerD.h * this.game.scale
            );

        }
    }

    move(timeDelta) {
        if (this.frame === 14) {
            this.frame = 0;
        } else {
            this.frame += 1;
        }
        if (this.moving){
            if (this.direction === 'down') {
                this.pos[1] += this.speed;
            } else if (this.direction === 'up') {
                this.pos[1] -= this.speed;
            } else if (this.direction === 'right') {
                this.pos[0] += this.speed;
            } else if (this.direction === 'left') {
                this.pos[0] -= this.speed;
            }
        } else {
            return;
        }
        this.updateGridPos();
    }

    stillMove(timeDelta, boundDir) {
        if (this.frame === 14) {
            this.frame = 0;
        } else {
            this.frame += 1;
        }

        if (this.direction === 'down' && boundDir === 'down') {
            this.pos[1] += 0;
            this.updateGridPos();
            return;
        } 

        if (this.direction === 'up' && boundDir === 'up') {
            this.pos[1] += 0;
            this.updateGridPos();
            return;
        } 

        if (this.direction === 'left' && boundDir === 'left') {
            this.pos[0] += 0;
            this.updateGridPos();
            return;
        } 

        if (this.direction === 'right' && boundDir === 'right') {
            this.pos[0] += 0;
            this.updateGridPos();
            return;
        } 
        if (this.direction === 'down'){
            this.pos[1] += this.speed;
            this.updateGridPos();
            return;
        } else if (this.direction === 'up') {
            this.pos[1] -= this.speed;
            this.updateGridPos();
            return;
        } else if (this.direction === 'right') {
            this.pos[0] += this.speed;
            this.updateGridPos();
            return;
        } else if (this.direction === 'left') {
            this.pos[0] -= this.speed;
            this.updateGridPos();
            return;
        }
    }

    hitWall(timeDelta) {
        if (this.frame === 14) {
            this.frame = 0;
        } else {
            this.frame += 1;
        }

        if (this.direction === 'down') {
            this.pos[1] -= 2;
            this.updateGridPos();
            return;
        }

        if (this.direction === 'up') {
            this.pos[1] += 2;
            this.updateGridPos();
            return;
        }

        if (this.direction === 'left') {
            this.pos[0] += 2;
            this.updateGridPos();
            return;
        }

        if (this.direction === 'right') {
            this.pos[0] -= 2;
            this.updateGridPos();
            return;
        }
    }
    
    updateGridPos(){
        // let centerX = this.pos[0] + ((this.width * this.game.scale) / 2);
        // let centerY = this.pos[1] + ((this.height * this.game.scale) / 2);
        
        let rightSide = this.pos[0] + this.width * this.game.scale;
        let downSide = this.pos[1] + this.height * this.game.scale;
        switch (this.direction) {
            case 'left':
                this.gridPos = [Math.floor(((this.pos[0] - this.game.sX) / 22.4)), Math.floor(((this.pos[1] - this.game.sY) / 22.4))];
            break;
            case 'right':
                this.gridPos = [Math.floor(((rightSide - this.game.sX) / 22.4)), Math.floor(((this.pos[1] - this.game.sY) / 22.4))];
            break;
            case 'up':
                this.gridPos = [Math.floor(((this.pos[0] - this.game.sX) / 22.4)), Math.floor(((this.pos[1] - this.game.sY) / 22.4))];
            break;
            case 'down':
                this.gridPos = [Math.floor(((this.pos[0] - this.game.sX) / 22.4)), Math.floor(((downSide - this.game.sY) / 22.4))];
            break;
        }
        // this.gridPos = [Math.floor(((centerX - this.game.sX) / 22.4)), Math.floor(((centerY - this.game.sY) / 22.4))]

    }
}

export default Player;