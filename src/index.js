
document.addEventListener("DOMContentLoaded", () => {
    let canvas = document.getElementById("root");
    let ctx = canvas.getContext('2d');

    let image = new Image();
    image.src = "assets/mtSilver.png"
    // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    let scale = 1.3;
    image.addEventListener("load", () => {
        ctx.drawImage(image, 0, 0, 600, 470, 0, 0, 600 * scale, 470 * scale);
    })
})