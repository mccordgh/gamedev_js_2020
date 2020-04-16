
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
            x: 6,
            y: 6,
            width: 24,
            height: 24,
        };

        this.assets = {
            hand: Assets.getAssets('hand2').pointer,
            arrow: Assets.getAssets('cursor2').pointer,
        };

        this.swapToHand();
    }

    render(graphics) {
        //offset x, y for hand cursor so click zone isnt at top left of sprite
        const offset = (this.cursor === this.assets.hand) ? 16 : 0;

        graphics.drawSprite(this.cursor, this.x - offset, this.y - offset, 64, 64);

        //draw collision bounds for debugging
        // graphics.fillStyle = "blue";
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