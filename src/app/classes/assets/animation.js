export class Animation {
    constructor(frames) {
        this.frames = frames;
        this.index = 0;
        this.lastTime = Date.now();
        this.timer = 0;
        this.speed = this.frames[this.index].speed;
    }

    tick() {
        this.timer += Date.now() - this.lastTime;
        this.lastTime = Date.now();

        if (!this.speed) {
            throw new Error('SPEED NOT DEFINED FOR', this);
        }

        if (this.timer >= this.speed) {
            this.index += 1;
            this.timer = 0;

            if (this.index >= this.frames.length) {
                this.index = 0;
            }
        }
    }

    getCurrentFrame() {
        return this.frames[this.index].frame;
    }
}