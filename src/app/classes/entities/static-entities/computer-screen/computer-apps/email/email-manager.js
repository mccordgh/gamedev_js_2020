
import { GameConstants } from '../../../../../../constants/game-constants';
import { Footage } from '../footage/footage';
import { CodeMan } from '../code-man/code-man';

export class EmailManager {
  constructor(handler) {
    this.handler = handler;
  }

  unlockApp(appName) {
    const [ computer ] = this.handler.getEntityManager().getEntitiesByType(GameConstants.TYPES.COMPUTER);

    if (!computer) {
      // console.log({computer});
      throw new Error(`entity with type ${GameConstants.TYPES.COMPUTER} not found.`);
    }

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

  addEmail(name) {
    console.log(`EmailManager.addEmail(${name}`)
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