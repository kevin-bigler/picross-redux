import * as PIXI from 'pixi.js';

const initRenderer = (parent, width, height, backgroundColor) => {
    // const app = new PIXI.Application({width, height, transparent: true}); // 0xff0000});
    const renderer = PIXI.autoDetectRenderer({
        antialias: true,
        transparent : backgroundColor === undefined,
        preserveDrawingBuffer: true,
        backgroundColor,
        width,
        height,
        autoDensity: true,
        resolution: devicePixelRatio
    });
    parent.replaceChild(renderer.view, parent.lastElementChild); // Hack for parcel HMR

    return renderer;
};

export default initRenderer;
