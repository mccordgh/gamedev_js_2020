import { ComputerApp } from "../computer-app.js";
import { Assets } from '../../../../../assets/assets';
import { GameConstants } from '../../../../../../constants/game-constants';
import { FootageLibrary } from './footage-library';
import { BigFootage } from './big-footage';

export class Footage extends ComputerApp {
  constructor(handler) {
    super(handler, GameConstants.APPS.FOOTAGE);

    this.bounds = {
      x: 0,
      y: 26,
      width: this.width,
      height: 36,
    }

    this.textXOffset = 0;
    this.textYOffset = this.height + 18;

    this.assets = Assets.getAssets('footage');

    this.videos = {
      johnDies: {
        who: "John Smith",
        type: 'death',
        assets: Assets.getAssets('johnDies'),
      },
      johnLives: {
        who: "John Smith",
        type: "alive",
        assets: Assets.getAssets('johnLives'),
      },
    };

    this.updateFootage(this.videos.johnDies);

    // skip opening/loading animation for dev
    // this.state = 'loading';
    // this.assets.animations['loading'].index = 10;
  }

  setActive() {
    this.state = 'idle';
  }

  appLoaded() {
    this.handler.getEntityManager().addEntity(new FootageLibrary(this.handler, this.footage, this.setActive.bind(this)));
  }

  intervened() {
    console.log('footage intervened!');
    this.updateFootage(this.videos.johnLives)
  }

  updateFootage(video) {
    const [ computer ] = this.handler.getEntityManager().getEntitiesByType(GameConstants.TYPES.COMPUTER);
    const screenPos = { x: computer.x, y: computer.y };

    this.footage = [ new BigFootage(this.handler, screenPos.x, screenPos.y, video, false) ];
  }
}