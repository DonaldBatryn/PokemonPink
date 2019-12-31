
class GameView {
    constructor(game, context, canvas) {
        this.game = game;
        this.ctx = context;
        this.canvas = canvas;
        this.frameCount = 0;
        this.leftKey = false;
        this.rightKey = false;
        this.upKey = false;
        this.downKey = false;
        this.eastBorder = 500;
        this.westBorder = 300;
        this.northBorder = 250;
        this.southBorder = 450;
    }

    start() {
        this.bindKeyHandlers();
        this.game.draw(this.ctx);
        // this.game.blockers.forEach(blocker => blocker.draw(this.ctx));
        this.lastTime = 0;
        requestAnimationFrame(this.loop.bind(this))
    }

    loop(time) {
        const timeDelta = time - this.lastTime;
        this.frameCount += 1;

        if (this.frameCount > 50) {
            this.frameCount = 0;
        }
        
        // let bounds = this.game.checkBounds(this.game.player.pos);
        // console.log('player pos', this.game.player.pos);
        // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        if (this.game.checkCollisions()) {
            console.log('check collisions was true')
            this.game.player.stillMove(timeDelta, this.game.player.direction);
            return;
        }

        if (this.game.player.moving) {
            switch (this.game.player.direction) {
                case 'left':
                    if (this.game.player.pos[0] <= this.westBorder && this.game.sX < 0) {
                        // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                        this.game.player.stillMove(timeDelta, 'left');
                        this.game.moveMap();
                        // this.game.blockers.forEach(blocker => blocker.move('left'));
                    } else {
                        this.game.player.move(timeDelta);
                    }
                    break;
                case 'right':
                    if (this.game.player.pos[0] >= this.eastBorder && this.game.sX > -902) {
                        this.game.player.stillMove(timeDelta, 'right');
                        this.game.moveMap();
                        // this.game.blockers.forEach(blocker => blocker.move('right'));
                    } else {
                        this.game.player.move(timeDelta);
                    }
                    break;
                case 'up':
                    if (this.game.player.pos[1] <= this.northBorder && this.game.sY < -3) {
                        this.game.player.stillMove(timeDelta, 'up');
                        this.game.moveMap();
                        // this.game.blockers.forEach(blocker => blocker.move('up'));
                    } else {
                        this.game.player.move(timeDelta);
                    }
                    break;
                case 'down':
                    if (this.game.player.pos[1] >= this.southBorder && this.game.sY > -595) {
                        // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                        this.game.player.stillMove(timeDelta, 'down');
                        this.game.moveMap();
                        // this.game.blockers.forEach(blocker => {
                        //     console.log('moving down')
                        //     blocker.move('down');
                        //     blocker.draw(this.ctx)
                        // });
                    } else {
                        this.game.player.move(timeDelta);
                    }
                    break;
            }
        }

        this.game.draw(this.ctx);
        // this.game.blockers.forEach(blocker => blocker.draw(this.ctx));
        this.lastTime = time
        requestAnimationFrame(this.loop.bind(this))
    }

    handleKeyDown(e) {
        if (e.key === 'ArrowRight' || e.key === 'd') {
            this.rightKey = true;
            this.upKey = false;
            this.downKey = false;
        }
        if (e.key === 'ArrowLeft' || e.key === 'a') {
            this.leftKey = true;
            this.upKey = false;
            this.downKey = false;
        }
        if (e.key === 'ArrowUp' || e.key === 'w') {
            this.upKey = true;
            this.leftKey = false;
            this.rightKey = false;
        }
        if (e.key === 'ArrowDown' || e.key === 's') {
            this.downKey = true;
            this.leftKey = false;
            this.rightKey = false;
        }
        
        if (this.downKey) {
            this.game.player.direction = 'down';
            this.game.player.moving = true;
           
        }
        if (this.upKey) {
            this.game.player.direction = 'up';
            this.game.player.moving = true;
           
        }
        if (this.leftKey) {
            this.game.player.direction = 'left';
            this.game.player.moving = true;
           
        }
        if (this.rightKey) {
            this.game.player.direction = 'right';
            this.game.player.moving = true;
           
        }
    }

    handleKeyUp(e) {
        this.game.player.moving = false;
        if (e.key === 'ArrowRight' || e.key === 'd') {
            this.rightKey = false;
        }
        if (e.key === 'ArrowLeft' || e.key === 'a') {
            this.leftKey = false;
        }
        if (e.key === 'ArrowUp' || e.key === 'w') {
            this.upKey = false;
        }
        if (e.key === 'ArrowDown' || e.key === 's') {
            this.downKey = false;
        }
    }

    bindKeyHandlers() {
        document.addEventListener("keydown", (e) => this.handleKeyDown(e));
        document.addEventListener("keyup", (e) => this.handleKeyUp(e))
    }
}

export default GameView;