import { GameConstants } from '../../../../../../constants/game-constants';
import { StaticEntity } from '../../../static-entity';
import { Assets } from '../../../../../assets/assets';
import { SettingsWindowItem } from './settings-window-item';

export class SettingsWindow extends StaticEntity {
  constructor(handler, x, y, settings, setActiveCallback) {
    super(handler, x, y);

    this.x = x;
    this.y = y;
    this.paddingX = 50;
    this.paddingY = 50;

    this.width = 416;
    this.height = 278;

    this.bounds = {
      x: 418,
      y: 63,
      width: 36,
      height: 34,
    };

    this.setActiveCallback = setActiveCallback;

    this.type = GameConstants.TYPES.SETTINGS_ITEMS;
    this.hidden = false;

    this.settings = settings;

    this.assets = Assets.getAssets('settingsWindow');
    this.settingsItems = [];

    this.initializeSettingsItems();
  }

  tick() {
    //
  }

  initializeSettingsItems() {
    let xx = 32;
    let yy = 80;

    for (let i = 0; i < this.settings.length; i += 1) {
      const setting = this.settings[i];

      const settingsItem = new SettingsWindowItem(
        this.handler,
        this.x + xx + this.paddingX,
        this.y + yy + this.paddingY,
        this.width,
        45,
        setting,
        this.setHidden.bind(this)
      );

      this.handler.getEntityManager().addEntity(settingsItem);
      this.settingsItems.push(settingsItem);

      yy += 64;
    }
  }

  drawFadedBackground(graphics) {
    graphics.globalAlpha = 0.4;
    graphics.fillStyle = 'black';
    graphics.fillRect(0, 0, GameConstants.GAME_WIDTH, GameConstants.GAME_HEIGHT);
    graphics.globalAlpha = 1;
  }

  render(graphics) {
    if (!this.hidden) {
      this.drawFadedBackground(graphics);
      this.drawWindow(graphics);
      this.drawSettingsItems(graphics);
    }

    // this.drawCollisionBounds(graphics, 'green');
  }

  setHidden(value) {
    this.hidden = value;

    for (let i = 0; i < this.settingsItems.length; i += 1) {
      this.settingsItems[i].hidden = value;
    }
  }

  drawSettingsItems(graphics) {
    for (let i = 0; i < this.settingsItems.length; i += 1) {
      this.settingsItems[i].render(graphics);
    }
  }

  drawWindow(graphics) {
    graphics.drawSprite(this.assets.bg, this.paddingX + this.x, this.paddingY + this.y, this.width, this.height);
  }

  wasClickedAt() {
    const entityManager = this.handler.getEntityManager();

    for (let i = 0; i < this.settingsItems.length; i += 1) {
      entityManager.removeEntity(this.settingsItems[i]);
    }

    entityManager.removeEntity(this);

    this.setActiveCallback();
  }
}
