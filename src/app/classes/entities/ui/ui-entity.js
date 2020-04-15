import { Entity } from '../entity';
import { GameConstants } from '../../../constants/game-constants';
import {Assets} from "../../assets/assets";


export class UiEntity extends Entity {
    constructor(handler, x, y, width, height, seed) {
        super(handler, x, y, width, height);

        this.handler = handler;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.seed = seed;

        this.bounds = {
            x: 0,
            y: 0,
            width: this.width,
            height: this.height,
        };

        this.assets  = { ...Assets.getAssets('button') };

        this.text = this.seed.getDisplayName();
        this.active = false;

        this.type = GameConstants.TYPES.UI;
    }

    activeAction(plot) {
        if(plot.type===GameConstants.TYPES.PLOT){
          plot.sownBy(this.seed)
        }
    }

    tick(dt) {}

    render(graphics) {
        const background = this.active ? this.assets.pressedButton : this.assets.button;
        const textColor = this.active ? 'white' : '#999';

        // ****** DRAW BOUNDING BOX
        // graphics.fillStyle = backgroundColor;
        // graphics.fillRect(this.bounds.x + this.x, this.bounds.y + this.y, this.bounds.width, this.bounds.height);
        // ****** DRAW BOUNDING BOX

        graphics.drawSprite(background, this.bounds.x + this.x, this.bounds.y + this.y, this.bounds.width, this.bounds.height*2)

        graphics.drawText(this.text, this.x + 12, this.y + 54, textColor);
    }

    wasClickedAt(x, y, activeUi) {
        this.handler.getUiManager().toggleElement(this);
    }
}