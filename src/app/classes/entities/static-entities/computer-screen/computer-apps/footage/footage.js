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
    this.watchedCounter = 0;

    this.videos = {
      johnDies: {
        clueNumber: 1,
        who: "John Smith",
        type: 'death',
        assets: Assets.getAssets('johnDies'),
      },
      johnLives: {
        clueNumber: 1,
        who: "John Smith",
        type: "alive",
        assets: Assets.getAssets('johnLives'),
      },
      oliviaDies: {
        clueNumber: 2,
        who: "Olivia Bouqets",
        type: 'death',
        assets: Assets.getAssets('oliviaDies'),
      },
      oliviaLives: {
        clueNumber: 2,
        who: "Olivia Bouqets",
        type: "alive",
        assets: Assets.getAssets('oliviaLives'),
      },
      peterDies: {
        clueNumber: 3,
        who: "Peter Pipers",
        type: 'death',
        assets: Assets.getAssets('peterDies'),
      },
      peterLives: {
        clueNumber: 3,
        who: "Peter Pipers",
        type: "alive",
        assets: Assets.getAssets('peterLives'),
      },
    };

    const [ computer ] = this.handler.getEntityManager().getEntitiesByType(GameConstants.TYPES.COMPUTER);
    const screenPos = { x: computer.x, y: computer.y };

    this.footage = [
      new BigFootage(this.handler, screenPos.x, screenPos.y, this.videos.johnDies, false, this.increaseWatchedCounter.bind(this)),
      new BigFootage(this.handler, screenPos.x, screenPos.y, this.videos.oliviaDies, false, this.increaseWatchedCounter.bind(this)),
      new BigFootage(this.handler, screenPos.x, screenPos.y, this.videos.peterDies, false, this.increaseWatchedCounter.bind(this)),
    ];

    // skip opening/loading animation for dev
    // this.state = 'loading';
    // this.assets.animations['loading'].index = 63;
  }

  setActive() {
    this.state = 'idle';
  }

  increaseWatchedCounter() {
    this.watchedCounter += 1;

    if (this.watchedCounter === 1 ) {
      this.handler.getEmailManager().addEmail('second');
    }
  }

  appLoaded() {
    this.handler.getEntityManager().addEntity(new FootageLibrary(this.handler, this.footage, this.setActive.bind(this)));
  }

  updateFootage(clueNumber) {
    const [ computer ] = this.handler.getEntityManager().getEntitiesByType(GameConstants.TYPES.COMPUTER);
    const screenPos = { x: computer.x, y: computer.y };

    let replaced = false;

    for (let i = 0; i < this.footage.length; i += 1) {
      if (this.footage[i].video.clueNumber === clueNumber) {
        switch (clueNumber) {
          case 1:
            this.footage[i] = new BigFootage(this.handler, screenPos.x, screenPos.y, this.videos.johnLives, false);
            replaced = true;
            break;

          case 2:
            this.footage[i] = new BigFootage(this.handler, screenPos.x, screenPos.y, this.videos.oliviaLives, false);
            replaced = true;
            break;

          case 3:
            this.footage[i] = new BigFootage(this.handler, screenPos.x, screenPos.y, this.videos.peterLives, false);
            replaced = true;
            break;
        }
      }
    }

    if (!replaced) {
      throw new Error(`video with clue number ${clueNumber} not found in Footage.footage`)
    }
  }
}