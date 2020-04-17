import { StaticEntity } from '../../../static-entity';
import { GameConstants } from '../../../../../../constants/game-constants';

export class BigEmail extends StaticEntity {
  constructor(handler, textArray, sender, subject, isRead = false) {
    super(handler, 0, 0);

    this.x = 0;
    this.y = 0;

    this.bounds = {
      x: 0,
      y: 0,
      width: GameConstants.GAME_WIDTH,
      height: GameConstants.GAME_HEIGHT,
    };

    this.type = GameConstants.TYPES.INTERACTIVE;
    this.textArray = textArray;
    this.isRead = isRead;
    this.sender = sender;
    this.subject = subject;
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
    this.drawPaperAndText(graphics);
  }

  drawPaperAndText(graphics) {
    const paddingX = GameConstants.GAME_WIDTH / 8;
    const paddingY = GameConstants.GAME_HEIGHT / 16;
    const width = GameConstants.GAME_WIDTH - (paddingX * 2);
    const height = GameConstants.GAME_HEIGHT - (paddingY * 2);

    graphics.fillStyle = "white";
    graphics.fillRect(paddingX, paddingY, width, height);

    let xx = paddingX + 64;
    let yy = paddingY + 64;

    for (let i = 0; i < this.textArray.length; i += 1) {
      graphics.drawText(
        this.textArray[i],
        xx,
        yy,
        'black',
        false,
        GameConstants.BIG_FONT_SIZE,
      );

      yy += GameConstants.BIG_FONT_SIZE + 16;
    }

    // draw collision bounds for debugging
    // graphics.fillStyle = "yellow";
    // graphics.fillRect(this.x + this.bounds.x, this.y + this.bounds.y, this.bounds.width, this.bounds.height)
  }

  wasClickedAt() {
    this.handler.getEntityManager().removeEntity(this);
  }
}