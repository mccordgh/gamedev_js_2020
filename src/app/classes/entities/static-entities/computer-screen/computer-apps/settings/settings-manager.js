import { GameConstants } from '../../../../../../constants/game-constants';

export class SettingsManager {
  constructor(handler) {
    this.handler = handler;
  }

  showSetting(number) {
    const settingsApp = this.handler.getEntityManager().findEntityByName(GameConstants.APPS.SETTINGS);

    if (!settingsApp) {
      throw new Error(`Settings app not found with name ${APPS.SETTINGS} in entities list`)
    }

    return settingsApp.showSetting(number);
  }
}