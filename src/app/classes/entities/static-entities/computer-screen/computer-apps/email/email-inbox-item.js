import { StaticEntity } from '../../../static-entity';
import { GameConstants } from '../../../../../../constants/game-constants';

export class EmailInboxItem extends StaticEntity {
  constructor(handler, x, y, width, height, sender, subject, bgColor) {
    super(handler, x, y);

    this.width = width;
    this.height = height;
    this.sender = sender;
    this.subject = subject;
    this.bgColor = bgColor;

    this.type = GameConstants.TYPES.INTERACTIVE;
  }

  tick() {
    //
  }

  render(graphics) {
    const { x, y, width, height } = this;

    graphics.fillStyle = this.bgColor;
    graphics.fillRect(x - 16, y - 26, width, height);
    graphics.fillStyle = 'black';

    graphics.drawText(
      this.sender,
      this.x,
      this.y - 4,
      'white',
      false,
      GameConstants.EMAIL_ITEM_SIZE,
    );

    graphics.drawText(
      this.subject,
      this.x + 224,
      this.y - 4,
      'white',
      false,
      GameConstants.EMAIL_ITEM_SIZE,
    );
  }

  wasClickedAt() {
    console.log('inbox item clicked', email.sender, email.subject);
  }
}
