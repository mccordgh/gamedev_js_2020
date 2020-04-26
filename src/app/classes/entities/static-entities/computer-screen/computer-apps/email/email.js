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

    this.newEmail = true;
    this.newFlasher = 0;
    this.newFlasherMax = 70;

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

  render(graphics) {
    super.render(graphics);

    if (this.newEmail && this.state === 'idle') {
      this.newFlasher += 1;

      if (this.newFlasher < (this.newFlasherMax / 2)) {
        graphics.fillStyle = 'black';
        graphics.fillRect(this.x + 28, this.y + 18, 46 + 4, 20 + 4)
        graphics.fillStyle = GameConstants.COLORS.RED;
        graphics.fillRect(this.x + 30, this.y + 20, 46, 20)
        graphics.fillStyle = 'black';

        graphics.drawText(
          'NEW!',
          this.x + 32,
          this.y + 36,
          GameConstants.COLORS.CREAM,
          false,
          16,
        );
      } else {
        if (this.newFlasher > this.newFlasherMax) {
          this.newFlasher = 0;
        }
      }
    }
  }

  addEmail(name) {
    let email;

    switch (name) {
      case 'second':
        email = emailCopy.second;
        break;

      case 'easterEggs':
        email = emailCopy.easterEggs;
        break;

      default:
        throw new Error(`No email by name ${name} found in emailCopy`);
    }

    let unlocks;

    switch (name) {
      case 'second':
        unlocks = GameConstants.APPS.CODE_MAN;
        break;

      case 'easterEggs':
        unlocks = [
          GameConstants.APPS.THE_CORE,
          GameConstants.APPS.ME_MYSELF_I,
          GameConstants.APPS.THE_CODERS_GAME,
        ];
        break;

      default:
        throw new Error(`No email by name ${name} found in emailCopy`);
    }


    this.emails.push(
      new BigEmail(this.handler, email, false, unlocks),
    )

    this.newEmail = true;
  }

  appLoaded() {
    this.newEmail = false;
    this.handler.getEntityManager().addEntity(new EmailInbox(this.handler, this.emails, this.setActive.bind(this)));
  }
}