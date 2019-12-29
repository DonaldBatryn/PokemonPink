import GameView from './game_view';
import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
    let canvas = document.getElementById("root");
    let ctx = canvas.getContext('2d');
    let game = new Game();
    new GameView(game, ctx, canvas).start();
})