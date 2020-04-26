import { GameConstants } from '../../../../../../constants/game-constants';
import { Settings } from './settings';

export class SettingsManager {
  constructor(handler) {
    this.handler = handler;
  }

  showSetting(number) {
    let settingsApp = this.handler.getEntityManager().findEntityByName(GameConstants.APPS.SETTINGS);

    if (!settingsApp) {
      settingsApp = new Settings(this.handler);

      const [ computer ] = this.handler.getEntityManager().getEntitiesByType(GameConstants.TYPES.COMPUTER);
      computer.addApp(settingsApp);
    }

    return settingsApp.showSetting(number);
  }
}