
import { StaticEntity } from '../static-entity';
import { GameConstants } from '../../../../constants/game-constants';

export default class TeleButton extends StaticEntity {
  constructor(handler, x, y, number, addNumberCallback) {
    super(handler, x, y);

    this.width = GameConstants.TELEBUTTON_WIDTH;
    this.height = GameConstants.TELEBUTTON_HEIGHT;

    this.bounds = {
      x: 0,
      y: 0,
      width: this.width,
      height: this.height,
    };

    this.type = GameConstants.TYPES.TELEBUTTONS;
    this.number = number;
    this.addNumberCallback = addNumberCallback;
  }

  tick() {
    //
  }

  render(graphics) {
    graphics.drawText(
      this.number,
      (this.number.toString().length > 1) ? this.x + 7 : this.x + 11,
      this.y + 21,
      'black',
      true,
      GameConstants.BIG_FONT_SIZE - 12,
    );
  }

  wasClickedAt(x, y) {
    this.handler.getSoundManager().play('dialing');
    this.addNumberCallback(this.number);
  }
}