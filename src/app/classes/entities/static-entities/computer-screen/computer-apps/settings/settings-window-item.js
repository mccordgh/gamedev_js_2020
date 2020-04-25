import { StaticEntity } from '../../../static-entity';
import { GameConstants } from '../../../../../../constants/game-constants';
import { Assets } from '../../../../../assets/assets';

export class SettingsWindowItem extends StaticEntity {
  constructor(handler, x, y, width, height, setting) {
    super(handler, x, y);
    this.width = width;
    this.height = height;

    this.hovered = false;
    this.setting = setting;
console.log('SettingsWindowItem setting:', this.setting);

    this.bounds = {
      x: -32,
      y: 0,
      width: this.width,
      height: this.height,
    };

    this.type = GameConstants.TYPES.SETTINGS_WINDOW_ITEMS;

    this.hidden = setting.hidden;
    this.isChecked = setting.checked;
    this.wasToggled = false;

    this.assets = Assets.getAssets('settingsCheck');
  }

  tick() {
    //
  }

  render(graphics) {
    if (!this.hidden) {
      const { x, y, width, height } = this;

      // this.drawCollisionBounds(graphics, 'orange');

      if (this.hovered) {
        graphics.fillStyle = GameConstants.COLORS.LIGHT_PURPLE;
        graphics.globalAlpha = 0.4;
        graphics.fillRect(this.x + this.bounds.x, this.y + this.bounds.y, this.bounds.width, this.bounds.height);
        graphics.globalAlpha = 1;
        graphics.fillStyle = 'black';
      }

      graphics.drawSprite(this.assets.box, this.x, this.y, this.assets.box.width, this.assets.box.height);

      if (this.setting.checked) {
        graphics.drawSprite(this.assets.check, this.x, this.y, this.assets.box.width, this.assets.box.height);
      }

      graphics.drawText(
        this.setting.label,
        this.x + 50,
        this.y + 32,
        'black',
        false,
        24,
      );
    }
  }

  wasHoveredAt(x, y) {
    this.hovered = true;
  }

  wasBlurred() {
    this.hovered = false;
  }

  wasClickedAt() {
    if (this.toggled) {
      return;
    }

    console.log('settings item clicked');

    this.toggled = true;
    this.setting.checked = !this.setting.checked;

    this.handler.getFootageManager().interveneClue(this.setting.clueNumber);
  }
}
