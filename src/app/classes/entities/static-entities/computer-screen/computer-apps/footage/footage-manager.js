
import { GameConstants } from '../../../../../../constants/game-constants';
export class FootageManager {
  constructor(handler) {
    this.handler = handler;

    this.log = {
      john: {
        intervened: false,
        watchedBestVideo: false,
      },
    };
  }

  updateIntervened() {
    console.log('intervened!!')
    this.log.john.intervened = true;

    const footage = this.handler.getEntityManager().findEntityByName(GameConstants.APPS.FOOTAGE);
    console.log({footage})
    footage.intervened();
  };

  updateWatchedBestVideo() {
    console.log('watched best vid!');
    this.log.john.watchedBestVideo = true;
  };

  isLogComplete() {
    return !!this.log.john.intervened && !!this.log.john.watchedBestVideo;
  }
}