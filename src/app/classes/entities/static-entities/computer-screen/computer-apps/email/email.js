import { ComputerApp } from "../computer-app.js";
import { Assets } from '../../../../../assets/assets';
import { GameConstants } from '../../../../../../constants/game-constants';
import { BigEmail } from './big-email';
import * as emailCopy from './email-copy';
import { EmailInbox } from './email-inbox';

export class Email extends ComputerApp {
  constructor(handler) {
    super(handler, GameConstants.APPS.EMAIL);

    this.bounds = {
      x: 0,
      y: 26,
      width: this.width,
      height: 36,
    };

    this.textXOffset = 10;
    this.textYOffset = this.height + 18;

    this.assets = Assets.getAssets('email');

    this.emails = [
      new BigEmail(this.handler, emailCopy.first, false, GameConstants.APPS.FOOTAGE),
    ];

    // skip opening/loading animation for dev
    // this.state = 'loading';
    // this.assets.animations['loading'].index = 10;
  }

  setActive() {
    this.state = 'idle';
  }

  appLoaded() {
    this.handler.getEntityManager().addEntity(new EmailInbox(this.handler, this.emails, this.setActive.bind(this)));
  }
}