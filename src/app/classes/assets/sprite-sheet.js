export class SpriteSheet {
    constructor(sheet) {
        this.sheet = sheet;
    }

    crop(x, y, width, height) {
        return {
            sheet: this.sheet,
            x,
            y,
            width,
            height,
        };
    }
}
