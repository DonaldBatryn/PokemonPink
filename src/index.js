import Game from './game';
import GameView from './game_view';


document.addEventListener("DOMContentLoaded", () => {
    let canvas = document.getElementById("root");
    let ctx = canvas.getContext('2d');
    
    let game = new Game(canvas);
    new GameView(game, ctx, canvas).start();
})