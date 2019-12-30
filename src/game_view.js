
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
        this.triggeredBound = '';
    }

    start() {
        this.bindKeyHandlers();
        
        this.game.draw(this.ctx);
        this.lastTime = 0;
        requestAnimationFrame(this.loop.bind(this))
    }

    loop(time) {
        const timeDelta = time - this.lastTime;
        this.frameCount += 1;

        if (this.frameCount > 50) {
            this.frameCount = 0;
        }

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        let bounds = this.game.player.outOfBounds();
        let dirs = ['left', 'up', 'right', 'down'];
        let dirIndex = dirs.indexOf(bounds[1]);
        this.game.player.boundDirs.unshift(bounds[1]);
        
        if (this.game.player.moving && bounds[0] && (this.game.player.direction === this.game.player.boundDirs[0])) {
            console.log('moving, outOBound=true, player direction same as boundDir')
            console.log('bound direction:', this.game.player.boundDirs[0])
            this.game.player.stillMove(timeDelta, this.game.player.boundDirs[0]);
            this.game.moveMap();
        } else if (this.game.player.moving && bounds[0] && (this.game.player.direction === dirs[(dirIndex + 1) % 4])) {
            console.log('moving, outOBound=true, player direction right of boundDir')
            this.game.player.boundDirs.unshift(dirs[(dirIndex + 1) % 4]);
            console.log('bound direction:', this.game.player.boundDirs[0])
            bounds[0] = false

            this.game.player.move(timeDelta);
            
        } else if (this.game.player.moving && bounds[0] && (this.game.player.direction === dirs[(dirIndex + 3) % 4])) {
            console.log('moving, outOBound=true, player direction left of boundDir')
            this.game.player.boundDirs.unshift(dirs[(dirIndex + 3) % 4]);
            console.log('bound direction:', this.game.player.boundDirs[0])
            this.game.player.move(timeDelta);
        } else if (this.game.player.moving) {
            console.log('just moving')
            console.log('bound direction:', this.game.player.boundDirs[0])
            this.game.player.move(timeDelta);
        }

        this.game.draw(this.ctx);

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