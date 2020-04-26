
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
    const spacer = 64;
    let yy = 100;

    [
        "ACME Time Fixers",
        "",
        "Credits:",
        "Matthew McCord: Programming, Sound, Game Design, Art",
        "Addison Craik: Art, Programming",
        "Keith Davis: Narrative, Game Design",
        "",
        "Click Here to Begin.",
    ].forEach((text) => {
      graphics.drawText(
        text,
        100,
        yy,
        GameConstants.COLORS.CREAM,
        true,
        GameConstants.BIG_FONT_SIZE,
      );

      yy += spacer;
    });

    // this.drawCollisionBounds(graphics);
  }

  wasClickedAt() {
    const world = new WorldOne(this.handler);
    this.handler.updateWorld(world);
    world.init();

    // const sm = this.handler.getSoundManager();
    // const bgm = sm.sources.bgm;
    // sm.lastSoundPlayed = sm.play('bgm');
  }
}