import { StaticEntity } from '../static-entity';
import { Assets } from '../../../assets/assets';
import gameConstants from '../../../../constants/game-constants';

export class ComputerScreen extends StaticEntity {
    constructor(handler, x, y) {
        super(handler, x, y);

        this.width = gameConstants.SCREEN_WIDTH;
        this.height = gameConstants.SCREEN_HEIGHT;
        // this.assets = Assets.getAssets('')
    }

    tick(deltaTime) {
      //
    }

    render(graphics) {
      graphics.fillStyle = "#0978b2";
      graphics.fillRect(this.x, this.y, this.width, this.height);
    }

    wasClickedAt(x, y) {
      console.log("screen clicked at ", x, ":", y)
    }
}
