
import { StaticEntity } from '../static-entity';
import { GameConstants } from '../../../../constants/game-constants';
export class Radio extends StaticEntity {
  constructor(handler, x, y) {
    super(handler, x, y);

    this.width = 132;
    this.height = 73;

    this.bounds = {
      x: 0,
      y: 22,
      width: this.width,
      height: this.height - 22,
    };

    this.type = GameConstants.TYPES.INTERACTIVE;
  }

  tick() {
    //
  }

  render(graphics) {
    // this.drawCollisionBounds(graphics);
  }

  wasClickedAt(x, y) {
    this.handler.getFootageManager().updateIntervened();
  }
}