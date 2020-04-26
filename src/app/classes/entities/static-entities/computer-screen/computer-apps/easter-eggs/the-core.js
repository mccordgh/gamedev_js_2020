import { ComputerApp } from "../computer-app.js";
import { Assets } from '../../../../../assets/assets';
import { GameConstants } from '../../../../../../constants/game-constants';
import { TheCore } from '../../../easter-eggs/the-core';

export class TheCoreApp extends ComputerApp {
  constructor(handler) {
    super(handler, GameConstants.APPS.THE_CORE);

    this.bounds = {
      x: -8,
      y: 0,
      width: this.width + 18,
      height: 64,
    };

    this.textXOffset = -8;
    this.textYOffset = this.height + 18;

    this.assets = Assets.getAssets('theCore');

    // skip opening/loading animation for dev
    // this.state = 'loading';
    // this.assets.animations['loading'].index = 10;
  }

  setActive() {
    this.state = 'idle';
  }

  appLoaded() {
    this.handler.getEntityManager().addEntity(new TheCore(this.handler));
  }
}