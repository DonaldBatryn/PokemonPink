import Game from './game';
import GameView from './game_view';

// const MTSILVER = new Image();
// MTSILVER.src = "assets/mtSilver.png";
// const REDSPRITES = new Image();
// REDSPRITES.src = "assets/redSprites.png";




document.addEventListener("DOMContentLoaded", () => {
    let canvas = document.getElementById("root");
    let ctx = canvas.getContext('2d');
    
    let game = new Game(canvas);
    new GameView(game, ctx, canvas).start();
})