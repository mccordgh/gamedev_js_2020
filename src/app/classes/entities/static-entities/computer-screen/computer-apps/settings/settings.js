import { ComputerApp } from "../computer-app.js";
import { Assets } from '../../../../../assets/assets';
import { GameConstants } from '../../../../../../constants/game-constants';
import { SettingsWindow } from './settings-window';

export class Settings extends ComputerApp {
  constructor(handler) {
    super(handler, GameConstants.APPS.SETTINGS);

    this.bounds = {
      x: 0,
      y: 8,
      width: this.width,
      height: 36 + 24,
    };

    this.textXOffset = -2;
    this.textYOffset = this.height + 18;

    this.assets = Assets.getAssets('settings');

    this.settings = [
      {
        clueNumber: 1,
        hidden: true,
        label: 'Falling Pianos',
        checked: true,
      },
      {
        clueNumber: 2,
        hidden: true,
        label: 'UFO Intervention',
        checked: false,
      },
      {
        clueNumber: 3,
        hidden: true,
        label: 'Kamikaze Bird',
        checked: true,
      },
    ];

    // skip opening/loading animation for dev
    // this.state = 'loading';
    // this.assets.animations['loading'].index = 10;
  }

  showSetting(number) {
    const setting = this.settings[number - 1];

    if (setting.hidden === false) {
      return false;
    }

    setting.hidden = false;

    return true;
  }

  setActive() {
    this.state = 'idle';
  }

  appLoaded() {
    const [ computer ] = this.handler.getEntityManager().getEntitiesByType(GameConstants.TYPES.COMPUTER);
    const screenPos = { x: computer.x, y: computer.y };

    this.handler.getEntityManager().addEntity(new SettingsWindow(this.handler, screenPos.x, screenPos.y, this.settings, this.setActive.bind(this)));
  }
}