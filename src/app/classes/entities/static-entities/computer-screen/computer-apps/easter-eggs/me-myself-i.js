import { ComputerApp } from "../computer-app.js";
import { Assets } from '../../../../../assets/assets';
import { GameConstants } from '../../../../../../constants/game-constants';
import { MeMyselfAndI } from '../../../easter-eggs/me-myself-and-i';

export class MeMyselfIApp extends ComputerApp {
  constructor(handler) {
    super(handler, GameConstants.APPS.ME_MYSELF_I);

    this.bounds = {
      x: -32,
      y: 0,
      width: this.width + 70,
      height: 64,
    };

    this.textXOffset = -28;
    this.textYOffset = this.height + 18;

    this.assets = Assets.getAssets('meMyselfI');

    // skip opening/loading animation for dev
    // this.state = 'loading';
    // this.assets.animations['loading'].index = 10;
  }

  setActive() {
    this.state = 'idle';
  }

  appLoaded() {
    this.handler.getEntityManager().addEntity(new MeMyselfAndI(this.handler));
  }
}