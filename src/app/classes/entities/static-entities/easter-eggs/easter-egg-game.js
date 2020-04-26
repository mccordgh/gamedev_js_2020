import { StaticEntity } from '../static-entity';
import { GameConstants } from '../../../../constants/game-constants';

export class EasterEggGame extends StaticEntity {
  constructor(handler) {
    super(handler, 0, 0);

    this.width = GameConstants.GAME_WIDTH;
    this.height = GameConstants.GAME_HEIGHT;

    this.states = {
      INIT: 'init',
      IDLE: 'idle',
    };

    this.bounds = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };

    this.state = this.states.INIT;
    this.parentWindow = document.querySelector('#main');
  }

   initIframe() {
    this.wrapper = document.createElement('div');
    const iframe = document.createElement('iframe');

    this.wrapper.style.cursor = 'auto';
    this.wrapper.style.width = `${this.width}px`;
    this.wrapper.style.height = `${this.height}px`;
    this.wrapper.style.position = 'absolute';

    iframe.style.width = this.wrapper.style.width;
    iframe.style.height = this.wrapper.style.height;

    this.wrapper.setAttribute('z-index', '9999');
    iframe.setAttribute('z-index', '9998');
    iframe.setAttribute('src', this.src);

    this.parentWindow.appendChild(this.wrapper);
    this.wrapper.appendChild(iframe);

    this.initGameHeader();
    }

    initGameHeader() {
      const gameHeader = document.createElement('div');
      gameHeader.setAttribute('id', 'game-header');

      const styles = gameHeader.style;
      styles.width = `${this.width + 4}px`;
      styles.height = '40px';
      styles.position = 'absolute';
      styles.top = '0px';
      styles.borderRadius = '1%';
      styles.border = '2px black solid';

      gameHeader.setAttribute('z-index', '9999');

      this.wrapper.appendChild(gameHeader);

      this.initGameHeaderStripes(gameHeader);
      this.initGameHeaderCloseButton(gameHeader);
    }

    initGameHeaderStripes(gameHeader) {
      const stripeParent = document.createElement('div');

      stripeParent.style.height = '100%';
      stripeParent.style.width = '95%';
      stripeParent.style.display = 'inline-block';

      gameHeader.appendChild(stripeParent);

      for (let i = 0; i < 3; i += 1) {
        const stripe = document.createElement('div');

        stripe.style.height = '33%';
        stripe.style.backgroundColor = (i === 0 ? GameConstants.COLORS.PURPLE : (i === 1 ? GameConstants.COLORS.CREAM : GameConstants.COLORS.RED));

        stripeParent.appendChild(stripe);
      }
    }

    initGameHeaderCloseButton(gameHeader) {
      const closeButton = document.createElement('div');

      const styles = closeButton.style;
      styles.display = 'inline-block';
      styles.width = '4%';
      styles.backgroundColor = 'lightgrey';
      styles.height = '80%';
      styles.borderLeftColor = 'grey';
      styles.borderTopColor = 'white';
      styles.borderRightColor = 'white';
      styles.borderBottomColor = 'grey';
      styles.borderWidth = '4px';
      styles.borderStyle = 'solid';
      styles.position = 'relative';

      gameHeader.appendChild(closeButton);

      const XClose = document.createElement('h2');
      XClose.innerHTML = 'X';

      XClose.style.position = 'absolute';
      XClose.style.top = '-17px';
      XClose.style.right = '11px';

      closeButton.appendChild(XClose);

      closeButton.addEventListener('click', this.closeSelf.bind(this));
    }

    closeSelf() {
      this.handler.getSoundManager().play('bgm');

      this.parentWindow.removeChild(this.wrapper);

      this.destroySelf();
    }

    tick() {
      switch (this.state) {
        case this.states.INIT:
          if (!this.src) throw new Error('Easter egg game has no .src!');

          this.initIframe();

          this.state = this.states.IDLE;
          break;

        case this.states.IDLE:
          break;

        default:
          throw new Error(`Easter Egg Game state "${this.state} is not accounted for`)
      }
    }

    render(graphics) {
      // this.drawCollisionBounds(graphics);
    }
}
