import { StaticEntity } from '../entities/static-entities/static-entity';
import { GameConstants } from '../../constants/game-constants';

export class Dialogue extends StaticEntity{
  constructor(handler, textArray) {
    super(handler, GameConstants.DIALOGUE.X, GameConstants.DIALOGUE.Y)

    this.x = GameConstants.DIALOGUE.X;
    this.y = GameConstants.DIALOGUE.Y;
    this.width = GameConstants.DIALOGUE.WIDTH;
    this.height = GameConstants.DIALOGUE.HEIGHT;

    this.bounds = {
      x: -this.x,
      y: -this.y,
      width: GameConstants.GAME_WIDTH,
      height: GameConstants.GAME_HEIGHT,
    };

    this.fontSize = 42;
    this.textX = this.x + this.fontSize;
    this.textY = this.y + (this.height / 2) + this.fontSize / 3;

    this.type = GameConstants.TYPES.INTERACTIVE;
    this.dialogue = '';
    this.speechTimer = 5;
    this.wasClicked = false;

    this.words = [];

    this.addWords(textArray);
  }
	tick(h) {
    if (!this.words.length) {
      this.handler.getWorld().dialogueFinished();

      this.handler.getEntityManager().removeEntity(this);
      return;
    }

		if (this.speechTimer >= 2) {
			if (this.words.length) {
				if (this.words[0].length) {
				  // h.getSM().play('txt'); <~ play sound later for text
					this.sayNextLetter();
				} else {
					if (this.wasClicked) {
            this.wasClicked = false;
						this.readNextSentence();
					}
				}
			}
		}

		if (this.speechTimer < 30) this.speechTimer++;
	}

  render(graphics) {
    if (!this.words[0]) {
      return;
    }

    graphics.fillStyle = 'black';
    graphics.globalAlpha = 0.6;
    graphics.fillRect(this.x + this.bounds.x, this.y + this.bounds.y, this.bounds.width, this.bounds.height)
    graphics.globalAlpha = 1;

    graphics.fillStyle = 'white';
    graphics.fillRect(this.x, this.y, this.width, this.height);

    graphics.drawText(this.dialogue, this.textX, this.textY, 'black', false, this.fontSize);

    if (!this.words[0].length) {
      graphics.fillStyle = 'blue';
      graphics.fillRect(this.x + this.width - 64, this.y + this.height - 64, 32, 32);
    }
  }

	readNextSentence() {
		this.words.splice(0, 1);

    this.clean();
	}

	clean() {
    this.dialogue = '';

    this.sentencePause = 0;
  }

	sayNextLetter() {
		let nextLetter = this.words[0][0];
		let color, txtClass;

    this.dialogue += nextLetter;

		this.words[0].splice(0, 1);

		this.speechTimer = 0;
	}

	addWords(_words) {
  if (!(_words instanceof Array)) _words = [_words];
	  _words.forEach((w) => { this.words.push(w.split('')); });
	}

	clear() {
		this.words = [];

	  this.clean();
	}

  wasClickedAt() {
    if (!this.words[0].length) {
      this.wasClicked = true;
    }
  }
}
