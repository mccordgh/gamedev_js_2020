
import { StaticEntity } from '../entities/static-entities/static-entity';
import { GameConstants } from '../../constants/game-constants';
import { WorldOne } from './world-one';

export class GiantInteractiveHack extends StaticEntity {
  constructor(handler, x, y) {
    super(handler, x, y);

    this.width = GameConstants.GAME_WIDTH;
    this.height = GameConstants.GAME_HEIGHT;

    this.bounds = {
      x: 0,
      y: 0,
      width: this.width,
      height: this.height,
    }

    this.type = GameConstants.TYPES.INTERACTIVE;
  }

  tick() {}

  render(graphics) {
    graphics.drawText(
      "ACME Time Fixers",
      400,
      300,
      GameConstants.COLORS.CREAM,
      true,
      GameConstants.BIG_FONT_SIZE,
    );

    graphics.drawText(
      "Click Here to Begin.",
      400,
      400,
      GameConstants.COLORS.CREAM,
      true,
      GameConstants.BIG_FONT_SIZE,
    );

    // this.drawCollisionBounds(graphics);
  }

  wasClickedAt() {
    const world = new WorldOne(this.handler);
    this.handler.updateWorld(world);
    world.init();

    const sm = this.handler.getSoundManager();
    sm.play('bgm');
  }
}