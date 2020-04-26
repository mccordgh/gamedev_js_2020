import { StaticEntity } from '../static-entity';
import { Assets } from '../../../assets/assets';
import { GameConstants } from '../../../../constants/game-constants';
import { Email } from './computer-apps/email/email';
import { Footage } from './computer-apps/footage/footage';
import { Settings } from './computer-apps/settings/settings';
import { CodeMan } from './computer-apps/code-man/code-man';

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
        this.bootWait = 0;
        // this.bootWait = 120;
        this.type = GameConstants.TYPES.INTERACTIVE;

        const entityManager = this.handler.getEntityManager();

        // this.state = this.states.OFF;
        // this.state = this.states.IDLE;


        // Below is for quick dev testing only keep commented in real game mode
        this.type = GameConstants.TYPES.COMPUTER;
        this.state = this.states.INITIALIZE;
        this.assets.animations[this.states.BOOTING].index = 9;
    }

    initializeApps() {
      this.apps = [
        this.handler.getEntityManager().addEntity(new Email(this.handler)),
        // this.handler.getEntityManager().addEntity(new Footage(this.handler)),
        // this.handler.getEntityManager().addEntity(new Settings(this.handler)),
        // this.handler.getEntityManager().addEntity(new CodeMan(this.handler)),
      ];
    }

    addApp(app) {
      this.apps.push(app);
      this.handler.getEntityManager().addEntity(app);
      this.resetAppPositions();
    }

    // alignIconsTopLeftToBottomRight() {
    //   let currentX = this.x;
    //   let currentY = this.y;
    //   currentY += this.padding;

    //   // This handles positioning all apps in the correct row / column.
    //   for (let i = 0; i < this.apps.length; i += 1) {
    //     const app = this.apps[i];

    //     currentX += this.padding;

    //     if ((i % this.iconsPerRow) === 0 && i !== 0) {
    //       currentY += app.height + this.padding;
    //       currentX = this.x + this.padding;
    //     }

    //     app.x = currentX;
    //     app.y = currentY;

    //     currentX += app.width;

    //     currentX += this.padding;
    //   }
    // }

    resetAppPositions() {
      // this.alignIconsTopLeftToBottomRight()

      const centerX = this.x + (this.width / 2);
      const centerY = this.y + (this.height / 2);

      // center single app
      if (this.apps.length === 1) {
        const [app] = this.apps;

        app.x = centerX - (app.bounds.width / 2);
        app.y = centerY - (app.bounds.height);

        return;
      }

      if (this.apps.length === 2) {
        const [app1, app2] = this.apps;

        app1.x = centerX - (app1.bounds.width / 2) - 96;
        app1.y = centerY - (app1.bounds.height);

        app2.x = centerX - (app2.bounds.width / 2) + 96;
        app2.y = centerY - (app2.bounds.height);

        return;
      }

      if (this.apps.length === 3) {
        const [app1, app2, app3] = this.apps;

        app1.x = centerX - (app1.bounds.width / 2) - 96;
        app1.y = centerY - (app1.bounds.height) - 96 + 16;

        app2.x = centerX - (app2.bounds.width / 2) + 96;
        app2.y = centerY - (app2.bounds.height) - 96 + 16;

        app3.x = centerX - (app3.bounds.width / 2);
        app3.y = centerY - (app2.bounds.height) + 32 + 16;

        return;
      }

      if (this.apps.length === 4) {
        const [app1, app2, app3, app4] = this.apps;

        app1.x = centerX - (app1.bounds.width / 2) - 96;
        app1.y = centerY - (app1.bounds.height) - 96 + 16;

        app2.x = centerX - (app2.bounds.width / 2) + 96;
        app2.y = centerY - (app2.bounds.height) - 96 + 16;

        app3.x = centerX - (app1.bounds.width / 2) - 96;
        app3.y = centerY - (app1.bounds.height) + 96 - 32;

        app4.x = centerX - (app2.bounds.width / 2) + 96;
        app4.y = centerY - (app2.bounds.height) + 96 - 32;

        return;
      }

      throw new Error(`apps length is great then expected (${this.apps.length}) in ComputerScreen.resetAppPositions()`)
    }

    tick() {
      switch (this.state) {
        case this.states.OFF:
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

            if (this.bootCounter >= this.bootWait) {
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
        case this.states.OFF:
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
      // graphics.fillStyle = "grey";
      // graphics.fillRect(this.x - 10, this.y - 10 , this.width + 20, this.height + 20);

      //screen
      graphics.fillStyle = (this.state === this.states.OFF ? 'black' : GameConstants.COLORS.PURPLE);
      graphics.fillRect(this.x, this.y, this.width, this.height);

      switch (this.state) {
        case this.states.OFF:
        case this.states.INITIALIZE:
          break;

        case this.states.IDLE:
          // tell all apps to draw themselves
          for (let i = 0; i < this.apps.length; i += 1) {
            const app = this.apps[i];

            graphics.drawText(app.name, app.x + app.textXOffset, app.y + app.textYOffset, GameConstants.COLORS.CREAM, false);
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

    wasClickedAt(x, y) {
      if (this.state === this.states.OFF) {
        this.type = GameConstants.TYPES.COMPUTER;
        this.state = this.states.INITIALIZE;
      }
    }
}
