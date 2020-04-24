
import { StaticEntity } from '../static-entity';
import { GameConstants } from '../../../../constants/game-constants';
import { Assets } from '../../../assets/assets';
export class Radio extends StaticEntity {
  constructor(handler, x, y) {
    super(handler, x, y);

    this.width = GameConstants.RADIO_WIDTH;
    this.height = GameConstants.RADIO_HEIGHT;

    this.bounds = {
      x: 0,
      y: 22,
      width: this.width,
      height: this.height - 22,
    };

    this.type = GameConstants.TYPES.INTERACTIVE;
    this.assets = Assets.getAssets('radio');

    this.states = {
      OFF: 'off',
      STATION1: 'station-1',
      STATION2: 'station-2',
      STATION3: 'station-3',
    }

    this.state = this.states.OFF;
  }

  tick() {
    //
  }

  render(graphics) {
    let sprite;

    switch (this.state) {
      case this.states.OFF:
        sprite = this.assets.off;
        break;

      case this.states.STATION1:
        sprite = this.assets.station1;
        break;

      case this.states.STATION2:
        sprite = this.assets.station2;
        break;

      case this.states.STATION3:
        sprite = this.assets.station3;
        break;
    }

    graphics.drawSprite(sprite, this.x, this.y, this.width, this.height);
  }

  wasClickedAt(x, y) {
    const sm = this.handler.getSoundManager();

    switch (this.state) {
      case this.states.OFF:
        this.state = this.states.STATION1;
        sm.play('station1');
        break;

      case this.states.STATION1:
        this.state = this.states.STATION2;
        sm.play('station2');
        break;

      case this.states.STATION2:
        this.state = this.states.STATION3;
        sm.play('station3');
        break;

      case this.states.STATION3:
        this.state = this.states.OFF;
        sm.play('bgm');
        break;
    }
  }
}