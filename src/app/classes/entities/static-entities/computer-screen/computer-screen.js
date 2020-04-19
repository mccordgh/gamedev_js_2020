import { StaticEntity } from '../static-entity';
import { Assets } from '../../../assets/assets';
import { GameConstants } from '../../../../constants/game-constants';
import { Email } from './computer-apps/email/email';

export class ComputerScreen extends StaticEntity {
    constructor(handler, x, y) {
        super(handler, x, y);

        this.states = {
          OFF: 'off',
          INITIALIZE: 'initialize',
          BOOTING: 'booting',
          IDLE: 'idle',
        };

        this.width = GameConstants.SCREEN_WIDTH;
        this.height = GameConstants.SCREEN_HEIGHT;

        this.bounds = {
          x: 4,
          y: 4,
          width: this.width - 4,
          height: this.height - 4,
        };

        this.assets = Assets.getAssets('os');

        this.padding = 32;
        this.iconsPerRow = 4;

        this.bootCounter = 0;
        this.bootWait = 120;
        this.type = GameConstants.TYPES.COMPUTER;

        const entityManager = this.handler.getEntityManager();

        this.state = this.states.OFF;
        // this.state = this.states.IDLE;
        // this.state = this.states.BOOTING;
    }

    initializeApps() {
      this.apps = [
        this.handler.getEntityManager().addEntity(new Email(this.handler)),
      ];
    }

    alignIconsTopLeftToBottomRight() {
      let currentX = this.x;
      let currentY = this.y;
      currentY += this.padding;

      // This handles positioning all apps in the correct row / column.
      for (let i = 0; i < this.apps.length; i += 1) {
        const app = this.apps[i];

        currentX += this.padding;

        if ((i % this.iconsPerRow) === 0 && i !== 0) {
          currentY += app.height + this.padding;
          currentX = this.x + this.padding;
        }

        app.x = currentX;
        app.y = currentY;

        currentX += app.width;

        currentX += this.padding;
      }
    }

    resetAppPositions() {
      // this.alignIconsTopLeftToBottomRight()

      // center single app
      if (this.apps.length === 1) {
        const [app] = this.apps;

        app.x = this.x + (this.width / 2) - (app.bounds.width / 2);
        app.y = this.y + (this.height / 2) - (app.bounds.height);
      }
    }

    tick() {
      switch (this.state) {
        case this.states.OFF:
          this.state = this.states.INITIALIZE;
          break;

        case this.states.INITIALIZE:
          this.initializeApps();
          this.resetAppPositions();

          this.state = this.states.BOOTING;
          break;

        case this.states.IDLE:
          break;

        case this.states.BOOTING:
          const animation = this.assets.animations[this.states.BOOTING];

          // 9 is used here because this animation has 10 frames 0 to 9 and we want to go to the desktop when it finishes
          if (animation.index >= 9) {
            this.bootCounter += 1;

            if (this.bootCounter === this.bootWait) {
              this.bootCounter = 0;
              this.state = this.states.IDLE;

            }

            return;
          }

          animation.tick();

          break;

        default:
          throw new Error(`Computer Screen animation state "${this.state} is not accounted for`)
      }
    }

    getCurrentAnimationFrame() {
      switch (this.state) {
        case "off":
        case this.states.INITIALIZE:
        case this.states.IDLE:
          break;

        case this.states.BOOTING:
          const animation = this.assets.animations[this.states.BOOTING];

          return animation.getCurrentFrame();
          break;

        default:
          throw new Error(`Computer App animation state "${this.state} is not accounted for`)
      }
    }

    render(graphics) {
      //border
      graphics.fillStyle = "grey";
      graphics.fillRect(this.x - 10, this.y - 10 , this.width + 20, this.height + 20);

      //screen
      graphics.fillStyle = (this.state === this.states.OFF ? 'black' : GameConstants.COLORS.PURPLE);
      graphics.fillRect(this.x, this.y, this.width, this.height);

      switch (this.state) {
        case "off":
        case this.states.INITIALIZE:
          break;

        case this.states.IDLE:
          // tell all apps to draw themselves
          for (let i = 0; i < this.apps.length; i += 1) {
            const app = this.apps[i];

            graphics.drawText(app.name, app.x + app.textXOffset, app.y + app.textYOffset);
            app.render(graphics);
          }
          break;

        case this.states.BOOTING:
          if (this.bootCounter > (this.bootWait / 4)) {
            graphics.globalAlpha -= this.bootCounter / this.bootWait;
          }

          graphics.drawSprite(this.getCurrentAnimationFrame(), this.x, this.y, this.width, this.height);
          graphics.globalAlpha = 1;

          break;

        default:
          throw new Error(`Computer App animation state "${this.state} is not accounted for`)
      }


    }

    // wasHoveredAt(x, y) {
    //   //
    // }

    // wasClickedAt(x, y) {
    //  //
    // }
}
