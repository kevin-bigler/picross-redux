import * as PIXI from 'pixi.js';
import { getRectGraphics } from './main/graphicsHelper';
import initRenderer from './main/initRenderer';

console.log('main.js');
const canvasWidth = 300;
const canvasHeight = 200;

const renderer = initRenderer(document.body, canvasWidth, canvasHeight, 0xeeeeee);
const stage = new PIXI.Container();

const length = 5;
const r = 10;
const topMargin = canvasHeight / 2 - r/2;
const leftMargin = 10;
const lineWidth = 1.5;

for (let i = 0; i < length; i++) {
    // draw a square at the index
    const x = i * r + leftMargin;
    const y = topMargin;
    const sq = getRectGraphics(x, y, r, r, 0xffffff, lineWidth, 0x000000);
    stage.addChild(sq);
}

renderer.render(stage);
