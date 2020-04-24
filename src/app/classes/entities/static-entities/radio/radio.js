
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
    this.bannerAssets = Assets.getAssets('radioBanner');

    this.states = {
      OFF: 'off',
      STATION1: 'station-1',
      STATION2: 'station-2',
      STATION3: 'station-3',
    }

    this.state = this.states.OFF;

    this.titles = {
      [this.states.STATION1]: 'Dirt',
      [this.states.STATION2]: 'Råtten',
      [this.states.STATION3]: 'B-L-U-E',
    };

    this.artists = {
      [this.states.STATION1]: 'The Greebles',
      [this.states.STATION2]: 'Black Eyeball',
      [this.states.STATION3]: 'The Clue-sters',
    };

    this.bannerCounter = 0;
    this.showBannerMax = 60 * 6;
    this.showBanner = false;
  }

  tick() {
    if (this.showBanner) {
      this.bannerCounter += 1;

      if (this.bannerCounter >= this.showBannerMax) {
        this.showBanner = false;
        this.bannerCounter = 0;
      }
    }
  }

  startBanner() {
    this.bannerCounter = 0;
    this.showBanner = true;
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

    if (this.state !== this.states.OFF && this.showBanner) {
      this.drawRadioBanner(graphics);
    }
  }

  drawRadioBanner(graphics) {
    let xx = this.x - 36;
    let yy = this.y + 46;
    const wordSpace = 22;

    graphics.drawSprite(this.bannerAssets.img, xx, yy, 225, 225);

    xx += 40;
    yy += 106;

    graphics.drawText(
      `Now Playing:`,
      xx,
      yy,
      'black',
      true,
      18,
    );

    yy += wordSpace;

    graphics.drawText(
      this.titles[this.state],
      xx,
      yy,
      'black',
      true,
      18,
    );

    yy += wordSpace;

    graphics.drawText(
      this.artists[this.state],
      xx,
      yy,
      'black',
      true,
      18,
    );
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

    if (this.state !== this.states.OFF) {
      this.startBanner();
    }
  }
}