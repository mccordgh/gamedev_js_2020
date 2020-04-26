
import { GameConstants } from '../../../../../../constants/game-constants';
export class FootageManager {
  constructor(handler) {
    this.handler = handler;

    this.log = {
      john: {
        number: 1,
        name: 'John Smith',
        intervened: false,
        watchedBestVideo: false,
      },
      olivia: {
        number: 2,
        name: 'Olivia Bouqets',
        intervened: false,
        watchedBestVideo: false,
      },
      peter: {
        number: 3,
        name: 'Peter Pipers',
        intervened: false,
        watchedBestVideo: false,
      }
    };
  }

  interveneClue(clueNumber) {
    // console.log('FootageManager.interveneClue!! Clue Number', clueNumber)

    switch (clueNumber) {
      case 1:
        this.log.john.intervened = true;
        break;

      case 2:
        this.log.olivia.intervened = true;
        break;

      case 3:
        this.log.peter.intervened = true;
        break;

      default:
        throw new Error(`clue number ${clueNumber} not recognized in FootageManager.interveneClue`)
    }

    const footageApp = this.handler.getEntityManager().findEntityByName(GameConstants.APPS.FOOTAGE);

    if (!footageApp) {
      throw new Error(`Footage ${name} not found in FootageManager.updateIntervened`);
    }

    footageApp.updateFootage(clueNumber);
  };

  updateWatchedBestVideo(clueNumber) {
     // console.log('watched best vid!! Clue Numbger', clueNumber)

    switch (clueNumber) {
      case 1:
        this.log.john.watchedBestVideo = true;
        break;

      case 2:
        this.log.olivia.watchedBestVideo = true;
        break;

      case 3:
        this.log.peter.watchedBestVideo = true;
        break;

      default:
        throw new Error(`clue number ${clueNumber} not recognized in FootageManager.interveneClue`)
    }

  };

  isLogComplete() {
    return !!this.log.john.intervened
      && !!this.log.olivia.watchedBestVideo
      && !!this.log.olivia.intervened
      && !!this.log.peter.watchedBestVideo
      && !!this.log.peter.intervened
      && !!this.log.peter.watchedBestVideo;
  }
}