
import { Assets } from '../assets/assets';

export class PlayerCursor {
    constructor() {
        this.x = null;
        this.y = null;

        this.handBounds = {
            x: 4,
            y: 4,
            width: 24,
            height: 24,
        };

        this.arrowBounds = {
            x: 4,
            y: 0,
            width: 6,
            height: 6,
        };

        this.assets = {
            hand: Assets.getAssets('hand2').pointer,
            arrow: Assets.getAssets('cursor2').pointer,
        };

        this.swapToComputer();
        // this.swapToHand();
    }

    render(graphics) {
        //offset x, y for hand cursor so click zone isnt at top left of sprite
        const isHandCursor = this.cursor === this.assets.hand;
        const offset = isHandCursor ? 16 : 0;
        const size = isHandCursor ? 64 : 32;

        graphics.drawSprite(this.cursor, this.x - offset, this.y - offset, size, size);

        // draw collision bounds for debugging
        // graphics.fillStyle = this.bounds === this.arrowBounds ? "red" : "blue";
        // graphics.fillRect(this.x + this.bounds.x, this.y + this.bounds.y, this.bounds.width, this.bounds.height)
    }

    swapToComputer() {
        this.cursor = this.assets.arrow;
        this.bounds = this.arrowBounds;
    }

    swapToHand() {
        this.cursor = this.assets.hand;
        this.bounds = this.handBounds;
    }
}