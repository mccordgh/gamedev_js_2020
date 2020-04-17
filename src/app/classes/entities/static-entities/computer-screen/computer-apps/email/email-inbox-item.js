import { StaticEntity } from '../../../static-entity';
import { GameConstants } from '../../../../../../constants/game-constants';
import { BigEmail } from './big-email';

export class EmailInboxItem extends StaticEntity {
  constructor(handler, x, y, width, height, email, bgColor, setHiddenCallback) {
    super(handler, x, y);

    this.width = width;
    this.height = height;
    this.email = email;
    this.bgColor = bgColor;

    this.hovered = false;

    this.bounds = {
      x: -16,
      y: -26,
      width: this.width,
      height: this.height,
    };

    this.type = GameConstants.TYPES.EMAIL_ITEMS;
    this.setHiddenCallback = setHiddenCallback;

    this.hidden = false;
  }

  tick() {
    //
  }

  render(graphics) {
    if (!this.hidden) {
      const { x, y, width, height } = this;

      graphics.fillStyle = this.bgColor;
      graphics.fillRect(x - 16, y - 26, width, height);
      graphics.fillStyle = 'black';

      graphics.drawText(
        this.email.sender,
        this.x,
        this.y - 4,
        'white',
        false,
        GameConstants.EMAIL_ITEM_SIZE,
      );

      graphics.drawText(
        this.email.subject,
        this.x + 224,
        this.y - 4,
        'white',
        false,
        GameConstants.EMAIL_ITEM_SIZE,
      );

      if (this.hovered) {
        graphics.fillStyle = 'black';
        graphics.globalAlpha = 1;
        graphics.fillRect(x - 16, y - 26, width, height);
        graphics.globalAlpha = 1;
      }
    }
  }

  wasHoveredAt(x, y) {
    this.hovered = true;
  }

  wasBlurred() {
    this.hovered = false;
  }

  wasClickedAt() {
    this.setHiddenCallback(true);

    this.email.isRead = true;
    this.email.setHiddenCallback = this.setHiddenCallback;

    this.handler.getEntityManager().addEntity(this.email);
  }
}
