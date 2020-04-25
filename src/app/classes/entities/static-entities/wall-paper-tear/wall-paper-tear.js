
import { StaticEntity } from '../static-entity';
import { Assets } from '../../../assets/assets';
import { GameConstants } from '../../../../constants/game-constants';

export class WallPaperTear extends StaticEntity {
  constructor(handler, x, y) {
    super(handler, x, y);

    this.width = 192;
    this.height = 192;

    this.bounds = {
      x: 0,
      y: 0,
      width: this.width,
      height: this.height,
    };

    this.assets = Assets.getAssets('wallPaper');

    this.states = {
      ONE: 'one',
      TWO: 'two',
      THREE: 'three',
      FOUR: 'four',
      FIVE: 'five',
    };

    this.state = this.states.ONE;
    this.type = GameConstants.TYPES.INTERACTIVE;
  }

  tick() {
    //
  }

  render(graphics) {
    graphics.drawSprite(this.assets[this.state], this.x, this.y, this.width, this.height);
  }

  wasClickedAt() {
    switch (this.state) {
      case this.states.ONE:
        this.state = this.states.TWO;
        break;

      case this.states.TWO:
        this.state = this.states.THREE;
        break;

      case this.states.THREE:
        this.state = this.states.FOUR;
        break;

      case this.states.FOUR:
        this.state = this.states.FIVE;
        break;

      case this.states.FIVE:
        break;

      default:
        throw new Error(`WallPaperTear state ${this.state} not recognized in wasClickedAt`);
    }
  }
}