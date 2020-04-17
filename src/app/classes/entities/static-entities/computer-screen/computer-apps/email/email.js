import { ComputerApp } from "../computer-app.js";
import { Assets } from '../../../../../assets/assets';
import { GameConstants } from '../../../../../../constants/game-constants';
import { BigEmail } from './big-email';
import * as emailCopy from './email-copy';
import { EmailInbox } from './email-inbox';

export class Email extends ComputerApp {
  constructor(handler) {
    super(handler, "Email");

    this.bounds = {
      x: 0,
      y: 26,
      width: this.width,
      height: 36,
    }

    this.textXOffset = 10;
    this.textYOffset = this.height + 18;

    this.assets = Assets.getAssets('email');

    this.emails = [
      new BigEmail(this.handler, emailCopy.one, 'Thor, Son of Odin', 'I demand you fix my mistakes because I am great.', false),
      new BigEmail(this.handler, emailCopy.two, 'Odin, god', 'Why have you not paid tribute to me recently? :(', true),
      new BigEmail(this.handler, emailCopy.three, 'Lonely Russian Women', 'I want to meet you online come to my site', true),
      new BigEmail(this.handler, emailCopy.four, 'Prestige Worldwide', 'Grow your own sea monkeys!!@', true),
    ];

    //TODO REMOVE
    this.state = 'idle';
    // this.state = 'loading';
    // this.assets.animations['loading'].index = 10;
  }

  appLoaded() {
    this.handler.getEntityManager().addEntity(new EmailInbox(this.handler, this.emails));
  }
}