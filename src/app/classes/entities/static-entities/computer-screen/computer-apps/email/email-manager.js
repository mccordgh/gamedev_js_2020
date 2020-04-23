
import { GameConstants } from '../../../../../../constants/game-constants';
import { Footage } from '../footage/footage';

export class EmailManager {
  constructor(handler) {
    this.handler = handler;
  }

  unlockApp(appName) {
    const [ computer ] = this.handler.getEntityManager().getEntitiesByType(GameConstants.TYPES.COMPUTER);

    switch (appName) {
      case GameConstants.APPS.FOOTAGE:
        if (!this.appExistsOnComputer(computer, GameConstants.APPS.FOOTAGE)) {
          computer.addApp(new Footage(this.handler));
        }

        break;

      default:
        throw new Error(`${appName} is not a valid app name to unlock`);
    }
  }

  appExistsOnComputer(computer, name) {
    const found = computer.apps.find(app => app.name === name);

    return !!found;
  }
}