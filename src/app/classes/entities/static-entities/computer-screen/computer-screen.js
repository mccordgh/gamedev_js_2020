import { StaticEntity } from '../static-entity';
import { Assets } from '../../../assets/assets';
import { GameConstants } from '../../../../constants/game-constants';
import { Email } from './computer-apps/email';

export class ComputerScreen extends StaticEntity {
    constructor(handler, x, y) {
        super(handler, x, y);

        this.width = GameConstants.SCREEN_WIDTH;
        this.height = GameConstants.SCREEN_HEIGHT;
        // this.assets = Assets.getAssets('')

        this.numberOfIconsPerRow = Math.floor(this.width / GameConstants.ICON_WIDTH) - 1;
        this.numberOfIconsPerColumn = Math.floor(this.height / GameConstants.ICON_HEIGHT) - 1;
        // padding = screen width minus combined width of numberOfIconsPerRow dividied by the numberOfIconsPerRow + 1 for the number of padded areas
        this.padding = (this.width - (GameConstants.ICON_WIDTH * this.numberOfIconsPerRow)) / ((this.numberOfIconsPerRow) + 1);

        this.apps = [
          new Email(handler),
        ];
    }

    tick(deltaTime) {
      //
    }

    render(graphics) {
      //border
      graphics.fillStyle = "grey";
      graphics.fillRect(this.x - 10, this.y - 10 , this.width + 20, this.height + 20);

      //screen
      graphics.fillStyle = "#0978b2";
      graphics.fillRect(this.x, this.y, this.width, this.height);

      // This handles positioning all apps in the correct row / column.
      for (let i = 0; i < this.apps.length; i += 1) {
        const app = this.apps[i];
        const rowNumber = Math.floor(i / this.numberOfIconsPerRow);
        const columnNumber = i % (this.numberOfIconsPerColumn + 1);

        const xx = (this.x + this.padding + (this.padding * columnNumber) + (app.width * columnNumber));
        const yy = (this.y + this.padding + (this.padding * rowNumber) + (app.height * rowNumber));

        app.render(graphics, xx, yy);
      }
    }

    wasClickedAt(x, y) {
      console.log("screen clicked at ", x, ":", y)
    }
}
