
import { StaticEntity } from '../static-entity';
import { Assets } from '../../../assets/assets';
import TeleButton from './tele-button';
import { GameConstants } from '../../../../constants/game-constants';

export class Telephone extends StaticEntity {
  constructor(handler, x, y) {
    super(handler, x, y);

    this.width = 248;
    this.height = 185;

    this.assets = Assets.getAssets('telephone');

    this.buttons = [];
    this.numberSeries = "";

    this.initializeButtons();

    this.states = {
      IDLE: 'idle',
      CALLING: 'calling',
      CALLED: 'called',
    }

    this.state = this.states.IDLE;

    this.callingCounter = 0;
    this.callingMax = 120;

    this.seriesFlashTimer = 0;
  }

  initializeButtons() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 42];
    const xOffset = 120;
    let yOffset = 68;
    let perspectiveOffset = 0;

    for (let i = 0; i < 9; i += 1) {
      const index = rndInt(0, numbers.length - 1);
      const number = numbers[index];
      numbers.splice(index, 1);

      if (i >= 3 && i <=5) {
        perspectiveOffset = -4;
      }

      if (i >= 6 && i <= 8) {
        perspectiveOffset = -8;
      }

      if (i % 3 === 0 && i !== 0) {
        yOffset += GameConstants.TELEBUTTON_HEIGHT;
      }

      const button = new TeleButton(
        this.handler,
        this.x + xOffset + ((i % 3) * GameConstants.TELEBUTTON_WIDTH) + perspectiveOffset,
        this.y + yOffset,
        number,
        this.addNumber.bind(this),
      );

      this.buttons.push(button);
      this.handler.getEntityManager().addEntity(button);
    }
  }

  addNumber(number) {
    if (this.state !== this.states.IDLE) {
      return;
    }

    this.numberSeries += number.toString();

    if (this.numberSeries.length >= 7) {
      this.handler.getSoundManager().play('phoneRinging');

      this.state = this.states.CALLING;
    }
  }

  endPhoneCall() {
    this.numberSeries = "";
    this.state = this.states.IDLE;
  }

  tick() {
    switch (this.state) {
      case this.states.IDLE:
        break;

      case this.states.CALLING:
        this.callingCounter += 1;

        if (this.callingCounter > this.callingMax) {
          this.callingCounter = 0;
          this.state = this.states.CALLED;

          if (this.numberSeries === "42424242") {
            this.handler.getWorld().addCorrectPhoneDialogue(this.endPhoneCall.bind(this));

            return;
          }

          this.handler.getWorld().addBadPhoneDialogue(this.endPhoneCall.bind(this));
        }
        break;

      default:
        throw new Error(`Telephone tick state not recognized: ${this.state}`);
    }
  }

  render(graphics) {
    graphics.drawSprite(this.assets.img, this.x, this.y, this.width, this.height);

    switch (this.state) {
      case this.states.CALLING:
        this.seriesFlashTimer += 1;

        if (this.seriesFlashTimer > 20) {
          this.renderNumberSeries(graphics);
        }

        if (this.seriesFlashTimer > 39) {
          this.seriesFlashTimer = 0;
        }

        break;

      default:
    this.renderNumberSeries(graphics);
    }

    this.renderButtons(graphics);
  }

  renderNumberSeries(graphics) {
    let series = this.numberSeries;

    if (this.numberSeries.length > 3) {
      series = `${this.numberSeries.substring(0, 3)}-${this.numberSeries.substring(3, this.numberSeries.length)}`;
    }

    graphics.drawText(
      series,
      this.x + 135,
      this.y + 50,
      'black',
      true,
      GameConstants.BIG_FONT_SIZE - 16,
    );
  }

  renderButtons(graphics) {
    for (let i = 0; i < this.buttons.length; i += 1) {
      this.buttons[i].render(graphics);
    }
  }
}