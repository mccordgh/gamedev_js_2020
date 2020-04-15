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
      //border
      graphics.fillStyle = "grey";
      graphics.fillRect(this.x - 10, this.y - 10 , this.width + 20, this.height + 20);

      //screen
      graphics.fillStyle = "#0978b2";
      graphics.fillRect(this.x, this.y, this.width, this.height);

const padding = 12;

      //icon size?
      graphics.fillStyle = "white";
      graphics.fillRect(this.x + padding, this.y + padding, 32, 32);

      //icon size?
      graphics.fillStyle = "yellow";
      graphics.fillRect(this.x + padding + 32 + padding, this.y + padding, 64, 64);

      //icon size?
      graphics.fillStyle = "orange";
      graphics.fillRect(this.x + padding + 96 + padding + padding, this.y + padding, 96, 96);

    }

    wasClickedAt(x, y) {
      console.log("screen clicked at ", x, ":", y)
    }
}
