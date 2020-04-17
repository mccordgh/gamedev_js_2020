import { GameConstants } from '../../constants/game-constants';

export class GraphicsManager {
    constructor() {
        this.customizeContext();
        this.initializeCanvas();
        this.initializeGraphics();
    }

    customizeContext() {
        CanvasRenderingContext2D.prototype.drawSprite = (asset, x = 0, y = 0, width, height) => {
            if (!width) {
                width = asset.width;
            }

            if (!height) {
                height = asset.height;
            }

            this.graphics.drawImage(asset.sheet, asset.x, asset.y, asset.width, asset.height, x, y, width, height);
        };

        CanvasRenderingContext2D.prototype.drawText = (
            text,
            x,
            y,
            color = GameConstants.COLORS.CREAM,
            highlight = true,
            size = GameConstants.FONT_SIZ
        ) => {
            this.graphics.font = `${size}px Arial`;

            if (highlight) {
                this.graphics.fillStyle = 'black';
                this.graphics.fillText(text, x - 2, y + 2);
            }

            this.graphics.fillStyle = color;
            this.graphics.fillText(text,  x, y);
        };
    }

    initializeCanvas() {
        this.canvas = document.querySelector('#canvas');


        this.canvas.setAttribute('width', GameConstants.GAME_WIDTH);
        this.canvas.setAttribute('height', GameConstants.GAME_HEIGHT);
    }

    initializeGraphics() {
        this.graphics = this.canvas.getContext('2d');

        this.graphics.imageSmoothingEnabled = false;
        this.graphics.webkitImageSmoothingEnabled = false;
    }

    getCanvas() {
        return this.canvas;
    }

    getGraphics() {
        return this.graphics;
    }
}