export class PiBox {
    constructor(rect) {
        this.state = 'blank';
        this.rect = rect;
    }

    fill() {
        this.state = 'full';
    }

    clear() {
        this.state = 'blank';
    }

    toggle() {
        this.state = this.state === 'blank' ? 'full' : 'blank';
    }
}