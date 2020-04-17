import { GameConstants } from '../../../../../../constants/game-constants';
import { StaticEntity } from '../../../static-entity';
import { Assets } from '../../../../../assets/assets';
import { EmailInboxItem } from './email-inbox-item';

export class EmailInbox extends StaticEntity {
  constructor(handler, emails) {
    super(handler, 0, 0);

    this.x = 0;
    this.y = 0;

    this.paddingX = GameConstants.GAME_WIDTH / 8;
    this.paddingY = GameConstants.GAME_HEIGHT / 16;

    this.width = GameConstants.GAME_WIDTH - (this.paddingX * 2);
    this.height = GameConstants.GAME_HEIGHT - (this.paddingY * 2);


    this.bounds = {
      x: 0,
      y: 0,
      width: GameConstants.GAME_WIDTH,
      height: GameConstants.GAME_HEIGHT,
    };

    this.type = GameConstants.TYPES.INTERACTIVE;
    this.emails = emails;
    this.assets = Assets.getAssets('inbox');
  }

  tick() {
    //
  }

  drawFadedBackground(graphics) {
    const { x, y, width, height } = this.bounds;

    graphics.globalAlpha = 0.4;
    graphics.fillStyle = 'black';
    graphics.fillRect(x, y, width, height);
    graphics.globalAlpha = 1;
  }

  render(graphics) {
    this.drawFadedBackground(graphics);
    this.drawInbox(graphics);

    // draw collision bounds for debugging
    // graphics.fillStyle = "yellow";
    // graphics.fillRect(this.x + this.bounds.x, this.y + this.bounds.y, this.bounds.width, this.bounds.height)
  }

  drawEmails(graphics) {
    let xx = this.paddingX + 16;
    let yy = this.paddingY + 64 + 38;

    const subjectColX = xx + 74

    for (let i = 0; i < this.emails.length; i += 1) {
      const email = this.emails[i];
      const bgColor = (i % 2) ? GameConstants.COLORS.PURPLE : GameConstants.COLORS.RED;

      this.handler.getEntityManager().addEntity(
        new EmailInboxItem(this.handler, xx, yy, this.width, GameConstants.FONT_SIZE * 2, email.sender, email.subject, bgColor)
      );

      yy += 36;
    }
  }

  drawInbox(graphics) {
    graphics.drawSprite(this.assets.bg, this.paddingX, this.paddingY, this.width, this.height);

    this.drawEmails(graphics);
  }

  wasClickedAt() {
    this.handler.getEntityManager().removeEntity(this);
  }
}
