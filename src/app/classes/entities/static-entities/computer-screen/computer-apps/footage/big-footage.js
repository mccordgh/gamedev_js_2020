import { StaticEntity } from '../../../static-entity';
import { GameConstants } from '../../../../../../constants/game-constants';
import { Assets } from '../../../../../assets/assets';

export class BigFootage extends StaticEntity {
  constructor(handler, x, y, video, isViewed = false) {
    super(handler, x, y);

    this.x = x;
    this.y = y;

    this.bounds = {
      x: 0,
      y: 0,
      width: GameConstants.GAME_WIDTH,
      height: GameConstants.GAME_HEIGHT,
    };

    this.type = GameConstants.TYPES.INTERACTIVE;
    this.isViewed = isViewed;
    this.video = video;

    this.states = {
      IDLE: 'idle',
      PLAYING: 'playing',
      FINISHED: 'finished',
    };

    this.assets = Assets.getAssets('bigFootage');
    this.state = this.states.IDLE;
  }

  tick() {
    switch (this.state) {
      case this.states.FINISHED:
      case this.states.IDLE:
        break;

      case this.states.PLAYING:
        const animation = this.video.assets.animations[this.states.PLAYING];

        // 9 is used here because this animation has 10 frames 0 to 9 and we want it to stop animating at the end
        if (animation.index >= 9) {
          this.state = this.states.FINISHED;

          return;
        }

        animation.tick();
        break;

      default:
        throw new Error(`Big Footage unrecognized state: ${this.state}`);
    }
  }

  drawFadedBackground(graphics) {
    const { x, y, width, height } = this.bounds;

    graphics.globalAlpha = 0.4;
    graphics.fillStyle = 'black';
    graphics.fillRect(x, y, width, height);
    graphics.globalAlpha = 1;
  }

  getCurrentAnimationFrame() {
    switch (this.state) {
      case this.states.IDLE:
        break;

      case this.states.FINISHED:
      case this.states.PLAYING:
        const animation = this.video.assets.animations[this.states.PLAYING];

        return animation.getCurrentFrame();
        break;

      default:
        throw new Error(`Big Footage animation state "${this.state} is not accounted for`)
    }
  }

  render(graphics) {
    this.drawFadedBackground(graphics);

    switch (this.state) {
      case this.states.IDLE:
        graphics.drawSprite(this.assets.playButton, this.x, this.y, this.width, this.height);
        break;

      case this.states.FINISHED:
        graphics.drawSprite(this.getCurrentAnimationFrame(), this.x, this.y, this.width, this.height);

        graphics.fillStyle = 'black';
        graphics.globalAlpha = 0.6;
        graphics.fillRect(this.x, this.y, this.assets.playButton.width, this.assets.playButton.height);
        graphics.globalAlpha = 1;
        graphics.fillStyle = 'black';

        break;


      case this.states.PLAYING:
        graphics.drawSprite(this.getCurrentAnimationFrame(), this.x, this.y, this.width, this.height);

        break;

      default:
        throw new Error(`Big Footage unrecognized state: ${this.state}`);
    }

    // this.drawCollisionBounds();
  }

  wasClickedAt() {
    switch (this.state) {
       case this.states.IDLE:
        this.state = this.states.PLAYING;
        break;

      case this.states.PLAYING:
        //
        break;

      case this.states.FINISHED:
        this.video.assets.animations[this.states.PLAYING].index = 0;
        this.setHiddenCallback(false);
        this.handler.getEntityManager().removeEntity(this);
        break;

      default:
        throw new Error(`Big Footage wasClicked unrecognized state: ${this.state}`);
    }
  }
}