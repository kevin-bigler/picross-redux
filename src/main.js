import * as PIXI from 'pixi.js';
import { Rect } from './main/geometry/Rect';
import { getRectGraphics } from './main/engine/graphicsHelper';
// import initRenderer from './main/engine/initRenderer';
import { PiBox } from './main/picross/PiBox';

console.log('main.js');
const canvasWidth = 800;
const canvasHeight = 600;

// const renderer = initRenderer(document.body, canvasWidth, canvasHeight, 0xeeeeee);
// const stage = new PIXI.Container();

// const length = 5;
// const r = 10;
// const topMargin = canvasHeight / 2 - r/2;
// const leftMargin = 10;
// const lineWidth = 1.5;

// let boxes = [];

// for (let i = 0; i < length; i++) {
//     // draw a square at the index
//     const x = i * r + leftMargin;
//     const y = topMargin;
//     const sq = getRectGraphics(x, y, r, r, 0xffffff, lineWidth, 0x000000);
//     const rect = new Rect(x, y, r, r);
//     const box = new PiBox(rect);
//     stage.addChild(sq);
// }

// renderer.render(stage);

import BouncyBall from './main/BouncyBall';
const bouncyBall = new BouncyBall(canvasWidth, canvasHeight);

const formatFps = (fpsCounter) => 
    ''+Math.round(fpsCounter.currentFps) + ' | ' + Math.round(fpsCounter.currentDtsFps) + ' | ' + Math.round(fpsCounter.highestDt, 2);

const update = (dt) => {
    bouncyBall.update(dt);
};

const draw = (stage) => {
    bouncyBall.draw(stage);
    document.getElementById('fps').innerText = formatFps(game.fpsCounter);
};






import { Game } from './main/engine/Game';
const game = new Game({
    width: canvasWidth, 
    height: canvasHeight, 
    // setup, 
    update, 
    draw, 
    // framerate: 10,
    backgroundColor: 0x333333,
});
game.start();
