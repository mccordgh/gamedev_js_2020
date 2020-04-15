import { StaticEntity } from '../static-entity';
import { Assets } from '../../../assets/assets';

export class ComputerScreen extends StaticEntity {
    constructor(handler, x, y) {
        super(handler, x, y);

        this.width = 320;
        this.height = 240;
        this.assets = Assets.getAssets('')
    }

    tick(deltaTime) {
      //
    }

    render(graphics) {
      //
    }

    wasClickedAt(x, y) {
      console.log("screen clicked at ", x, ":", y)
    }
}
