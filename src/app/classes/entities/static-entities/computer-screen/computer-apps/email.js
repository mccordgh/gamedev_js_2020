import { ComputerApp } from "./computer-app.js";
import { Assets } from '../../../../assets/assets';
import { GameConstants } from '../../../../../constants/game-constants';

export class Email extends ComputerApp {
  constructor(handler) {
    super(handler, "Email");

    this.bounds = {
      x: 0,
      y: 26,
      width: this.width,
      height: 36,
    }

    this.assets = Assets.getAssets('email');
  }

  appLoaded() {
    this.showEmail = true;
  }

  render(graphics) {
    super.render(graphics);

    if (this.showEmail) {
      const paddingX = GameConstants.GAME_WIDTH / 8;
      const paddingY = GameConstants.GAME_HEIGHT / 16;
      const width = GameConstants.GAME_WIDTH - (paddingX * 2);
      const height = GameConstants.GAME_HEIGHT - (paddingY * 2);

      graphics.fillStyle = "white";
      graphics.fillRect(paddingX, paddingY, width, height);

      graphics.drawText(
        "Dear Sir or Madam,",
        paddingX + 64,
        paddingY + 64,
        'black',
      );

      graphics.drawText(
        "Something something plot plot plot plotplot",
        paddingX + 64,
        paddingY + 64 + GameConstants.FONT_SIZE + 16,
        'black',
      );

      graphics.drawText(
        "Something Something email event or what not.",
        paddingX + 64,
        paddingY + 64 + GameConstants.FONT_SIZE + 16 + GameConstants.FONT_SIZE + 16,
        'black',
      );
    }
  }
}