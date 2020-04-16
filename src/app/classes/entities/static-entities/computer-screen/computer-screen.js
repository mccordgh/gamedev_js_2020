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

        this.padding = 32;
        this.iconsPerRow = 4;

        this.type = GameConstants.TYPES.COMPUTER;

        const entityManager = this.handler.getEntityManager();

        this.apps = [
          entityManager.addEntity(new Email(handler)),
          entityManager.addEntity(new Email(handler)),
          entityManager.addEntity(new Email(handler)),
          entityManager.addEntity(new Email(handler)),
          entityManager.addEntity(new Email(handler)),
          entityManager.addEntity(new Email(handler)),
          entityManager.addEntity(new Email(handler)),
          entityManager.addEntity(new Email(handler)),
          entityManager.addEntity(new Email(handler)),
          entityManager.addEntity(new Email(handler)),
          entityManager.addEntity(new Email(handler)),
        ];

        this.resetAppPositions();
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

    tick(deltaTime) {
      //
    }

    render(graphics) {
      //border
      graphics.fillStyle = "grey";
      graphics.fillRect(this.x - 10, this.y - 10 , this.width + 20, this.height + 20);

      //screen
      graphics.fillStyle = "#7b538f";
      graphics.fillRect(this.x, this.y, this.width, this.height);

      // tell all apps to draw themselves
      for (let i = 0; i < this.apps.length; i += 1) {
        this.apps[i].render(graphics);
      }
    }

    wasHoveredAt(x, y) {
      console.log('screen hovered')
    }

    wasClickedAt(x, y) {
      console.log("screen clicked at ", x, ":", y)
    }
}
