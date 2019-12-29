
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
    }

    start() {
        this.bindKeyHandlers();
        this.game.draw();
        this.lastTime = 0;
        requestAnimationFrame(this.loop.bind(this))
    }

    loop(time) {
        const timeDelta = time - this.lastTime;
        this.frameCount += 1;
    }

    handleKeyDown(e) {
        if (e.key === 'ArrowRight' || e.key === 'd') {
            this.rightKey = true;
        }
        if (e.key === 'ArrowLeft' || e.key === 'a') {
            this.leftKey = true;
        }
        if (e.key === 'ArrowUp' || e.key === 'w') {
            this.upKey = true;
        }
        if (e.key === 'ArrowDown' || e.key === 's') {
            this.downKey = true;
        }

        // if <option> than do logic to move background sprite and animate player sprite
    }

    bindKeyHandlers() {
        document.addEventListener("keydown", (e) => handleKeyDown(e));
    }
}

export default GameView;