import { ComputerApp } from "../computer-app.js";
import { Assets } from '../../../../../assets/assets';
import { GameConstants } from '../../../../../../constants/game-constants';
import { MeMyselfAndI } from '../../../easter-eggs/me-myself-and-i';
import { TheCodersGame } from '../../../easter-eggs/the-coder';

export class CodersGameApp extends ComputerApp {
  constructor(handler) {
    super(handler, GameConstants.APPS.THE_CODERS_GAME);

    this.bounds = {
      x: -30,
      y: 0,
      width: this.width + 64,
      height: 64,
    };

    this.textXOffset = -30;
    this.textYOffset = this.height + 18;

    this.assets = Assets.getAssets('codersGame');

    // skip opening/loading animation for dev
    // this.state = 'loading';
    // this.assets.animations['loading'].index = 10;
  }

  setActive() {
    this.state = 'idle';
  }

  appLoaded() {
    this.handler.getSoundManager().stop();
    this.handler.getEntityManager().addEntity(new TheCodersGame(this.handler));
  }
}