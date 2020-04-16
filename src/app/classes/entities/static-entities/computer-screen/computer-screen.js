import { StaticEntity } from '../static-entity';
import { Assets } from '../../../assets/assets';
import { GameConstants } from '../../../../constants/game-constants';
import { Email } from './computer-apps/email';

export class ComputerScreen extends StaticEntity {
    constructor(handler, x, y) {
        super(handler, x, y);

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

        this.apps = [
          entityManager.addEntity(new Email(handler)),
        ];

        this.resetAppPositions();

        this.state = 'booting';
    }

    resetAppPositions() {
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

    tick() {
      switch (this.state) {
        case "idle":
          break;

        case "booting":
          const animation = this.assets.animations['booting'];

          // 9 is used here because this animation has 10 frames 0 to 9 and we want to go to the desktop when it finishes
          if (animation.index >= 9) {
            this.bootCounter += 1;

            if (this.bootCounter === this.bootWait) {
              this.bootCounter = 0;
              this.state = "idle";

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
        case "idle":
          break;

        case "booting":
          const animation = this.assets.animations['booting'];

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
      graphics.fillStyle = "#7b538f";
      graphics.fillRect(this.x, this.y, this.width, this.height);

      switch (this.state) {
        case "idle":
          // tell all apps to draw themselves
          for (let i = 0; i < this.apps.length; i += 1) {
            this.apps[i].render(graphics);
          }
          break;

        case "booting":
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
