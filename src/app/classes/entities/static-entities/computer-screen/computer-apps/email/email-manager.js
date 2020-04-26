
import { GameConstants } from '../../../../../../constants/game-constants';
import { Footage } from '../footage/footage';
import { CodeMan } from '../code-man/code-man';
import { TheCoreApp } from '../easter-eggs/the-core';
import { MeMyselfIApp } from '../easter-eggs/me-myself-i';
import { CodersGameApp } from '../easter-eggs/coders-game';

export class EmailManager {
  constructor(handler) {
    this.handler = handler;
  }

  unlockApp(appName) {
    const [ computer ] = this.handler.getEntityManager().getEntitiesByType(GameConstants.TYPES.COMPUTER);

    if (!computer) {
      throw new Error(`entity with type ${GameConstants.TYPES.COMPUTER} not found.`);
    }

    if (Array.isArray(appName)) {
      if (!this.appExistsOnComputer(computer, GameConstants.APPS.THE_CORE)) {
        computer.addApp(new TheCoreApp(this.handler));
      }

      if (!this.appExistsOnComputer(computer, GameConstants.APPS.ME_MYSELF_I)) {
        computer.addApp(new MeMyselfIApp(this.handler));
      }

      if (!this.appExistsOnComputer(computer, GameConstants.APPS.THE_CODERS_GAME)) {
        computer.addApp(new CodersGameApp(this.handler));
      }
    } else {
      switch (appName) {
        case GameConstants.APPS.FOOTAGE:
          if (!this.appExistsOnComputer(computer, GameConstants.APPS.FOOTAGE)) {
            computer.addApp(new Footage(this.handler));
          }
          break;

        case GameConstants.APPS.CODE_MAN:
          if (!this.appExistsOnComputer(computer, GameConstants.APPS.CODE_MAN)) {
            computer.addApp(new CodeMan(this.handler));
          }
          break;

        default:
          throw new Error(`${appName} is not a valid app name to unlock`);
      }
    }
  }

  addEmail(name) {
    const emailApp = this.handler.getEntityManager().findEntityByName(GameConstants.APPS.EMAIL);

    if (!emailApp) {
      throw new Error(`App with name ${GameConstants.APPS.EMAIL} not found!`);
    }

    emailApp.addEmail(name);
  }

  appExistsOnComputer(computer, name) {
    const found = computer.apps.find(app => app.name === name);

    return !!found;
  }
}