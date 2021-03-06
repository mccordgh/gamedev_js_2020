import { ComputerApp } from "../computer-app.js";
import { Assets } from '../../../../../assets/assets';
import { GameConstants } from '../../../../../../constants/game-constants';

export class CodeMan extends ComputerApp {
  constructor(handler) {
    super(handler, GameConstants.APPS.CODE_MAN);

    this.bounds = {
      x: -4,
      y: 0,
      width: this.width + 16,
      height: 64,
    };

    this.textXOffset = -6;
    this.textYOffset = this.height + 18;

    this.assets = Assets.getAssets('codeMan');

    // skip opening/loading animation for dev
    // this.state = 'loading';
    // this.assets.animations['loading'].index = 10;

    // MORE DDEV STUFF
      // this.handler.getSettingsManager().showSetting(1);
      // this.handler.getSettingsManager().showSetting(2);
      // this.handler.getSettingsManager().showSetting(3);
      // this.handler.getFootageManager().interveneClue(1);
      // this.handler.getFootageManager().interveneClue(2);
      // this.handler.getFootageManager().interveneClue(3);
      // this.handler.getFootageManager().updateWatchedBestVideo(1);
      // this.handler.getFootageManager().updateWatchedBestVideo(2);
      // this.handler.getFootageManager().updateWatchedBestVideo(3);
      // if (this.handler.getFootageManager().isLogComplete()) {
      //   this.handler.getWorld().gameWon();
      // }
  }

  setActive() {
    this.state = 'idle';
  }

  badClue() {
    this.handler.getWorld().createDialogue([
      'iNPuT NoT ReCoGNiZeD'.toUpperCase(),
      'TRy aGaiN, HuMaN... :O'.toUpperCase(),
    ], true);
  }

  appLoaded() {
    let clue = prompt('GIVE YOUR CODE TO CODE MAN NOW:');

    if (!clue) {
      this.badClue();
      return;
    }

    let correct = false;

    clue = clue.trim();
    clue = clue.toUpperCase();

    switch (clue) {
      case 'BONK':
        correct = this.handler.getSettingsManager().showSetting(1);
        break;

      case 'UFO':
        correct = this.handler.getSettingsManager().showSetting(2);
        break;

      case 'BLUE':
        correct = this.handler.getSettingsManager().showSetting(3);
        break;

      default:
        this.badClue();

        return;
    }

    if (correct) {
      this.handler.getWorld().createDialogue([
        'SySTeM SeTTiNGS HaVe BeeN uPDaTeD'.toUpperCase(),
        'HaVe a NiCe DaY, HuMaN... :)'.toUpperCase(),
      ], true);
    } else {
      this.handler.getWorld().createDialogue([
        'I aLReaDY uPDaTeD THaT SeTTiNG'.toUpperCase(),
        'FoR YoU, HuMaN... :|'.toUpperCase(),
      ], true)
    }
  }
}