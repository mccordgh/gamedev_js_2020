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
  }

  setActive() {
    this.state = 'idle';
  }

  badClue() {
    this.handler.getWorld().createDialogue([
      'iNPuT NoT ReCoGNiZeD',
      'TRy aGaiN, HuMaN... :O',
    ]);
  }

  appLoaded() {
    const clue = prompt('GIVE YOUR CLUE TO CODE MAN NOW:');

    if (!clue) {
      this.badClue();

      return;
    }

    let correct = false;

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
        'SySTeM SeTTiNGS HaVe BeeN uPDaTeD',
        'HaVe a NiCe DaY, HuMaN... :)',
      ]);
    } else {
      this.handler.getWorld().createDialogue([
        'I aLReaDY uPDaTeD THaT SeTTiNG',
        'FoR YoU, HuMaN... :|',
      ])
    }
  }
}