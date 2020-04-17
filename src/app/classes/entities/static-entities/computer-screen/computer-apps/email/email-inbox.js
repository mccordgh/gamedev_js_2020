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
      x: 850,
      y: 52,
      width: 34,
      height: 30,
    };

    this.type = GameConstants.TYPES.EMAIL_ITEMS;
    this.hidden = false;

    this.emails = emails;
    this.emailItems = [];
    this.assets = Assets.getAssets('inbox');
  }

  tick() {
    //
  }

  drawFadedBackground(graphics) {
    graphics.globalAlpha = 0.4;
    graphics.fillStyle = 'black';
    graphics.fillRect(0, 0, GameConstants.GAME_WIDTH, GameConstants.GAME_HEIGHT);
    graphics.globalAlpha = 1;
  }

  render(graphics) {
    if (!this.hidden) {
      this.drawFadedBackground(graphics);
      this.drawInbox(graphics);
    }

    // draw collision bounds for debugging
    // graphics.fillStyle = "yellow";
    // graphics.fillRect(this.x + this.bounds.x, this.y + this.bounds.y, this.bounds.width, this.bounds.height)
  }

  setHidden(value) {
    this.hidden = value;

    for (let i = 0; i < this.emailItems.length; i += 1) {
      this.emailItems[i].hidden = true;
    }
  }

  drawEmails(graphics) {
    let xx = this.paddingX + 16;
    let yy = this.paddingY + 64 + 38;

    const subjectColX = xx + 74

    for (let i = 0; i < this.emails.length; i += 1) {
      const email = this.emails[i];
      const bgColor = (i % 2) ? GameConstants.COLORS.PURPLE : GameConstants.COLORS.RED;

      const emailItem = new EmailInboxItem(
        this.handler,
        xx,
        yy,
        this.width,
        GameConstants.FONT_SIZE * 2,
        email,
        bgColor,
        this.setHidden.bind(this)
        );

        this.handler.getEntityManager().addEntity(emailItem);
        this.emailItems.push(emailItem);

      yy += 36;
    }
  }

  drawInbox(graphics) {
    graphics.drawSprite(this.assets.bg, this.paddingX, this.paddingY, this.width, this.height);

    this.drawEmails(graphics);
  }

  wasClickedAt() {
    const entityManager = this.handler.getEntityManager()

    for (let i = 0; i < this.emailItems.length; i += 1) {
      entityManager.removeEntity(this.emailItems[i]);
    }

    entityManager.removeEntity(this);
  }
}
