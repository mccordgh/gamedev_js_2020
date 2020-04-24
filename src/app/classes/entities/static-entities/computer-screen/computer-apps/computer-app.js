import { StaticEntity } from '../../static-entity';
import { GameConstants } from '../../../../../constants/game-constants';

export class ComputerApp extends StaticEntity {
 constructor(handler, name, x = 0, y = 0) {
    super(handler, x, y); // x and y handled by ComputerScreen for apps

    this.handler = handler;
    this.name = name;
    this.nameWidth = handler.getGraphicsManager().getGraphics().measureText(this.name).width;
    this.x = x;
    this.y = y;
    this.width = GameConstants.ICON_WIDTH;
    this.height = GameConstants.ICON_HEIGHT;
    this.type = GameConstants.TYPES.COMPUTER_APP;

    this.yPadding = 22;
    this.hovered = false;

    this.state = 'idle';
  }

  tick() {
    switch (this.state) {
      case "idle":
        break;

      case "loading":
        const animation = this.assets.animations['loading'];

        // 9 is used here because this animation has 10 frames 0 to 9 and we want it to stop animating at the end
        if (animation.index >= animation.frames.length-1) {
          this.appLoaded();

          animation.index = 0;
          this.state = 'inactive';

          return;
        }

        animation.tick();
        break;

      case "inactive":
        break;

      default:
        throw new Error(`Computer App animation state "${this.state} is not accounted for`)
    }
  }

  getCurrentAnimationFrame() {
    switch (this.state) {
      case "idle":
        break;

      case "loading":
        const animation = this.assets.animations['loading'];

        return animation.getCurrentFrame();
        break;

      case "inactive":
        break;

      default:
        throw new Error(`Computer App animation state "${this.state} is not accounted for`)
    }
  }

  render(graphics) {
    switch (this.state) {
      case "idle":
        graphics.drawSprite(this.assets.icon, this.x, this.y, this.width, this.height);

        if (this.hovered) {
          graphics.globalAlpha = 0.4;
          graphics.fillStyle = "black";
          const padding = 6;
          graphics.fillRect(this.x + this.bounds.x - padding, this.y + this.bounds.y - padding, this.bounds.width + (padding * 2), this.bounds.height + (padding * 2) + GameConstants.FONT_SIZE + 2);
          graphics.globalAlpha = 1;
        }

        break;

      case "loading":
        graphics.drawSprite(this.getCurrentAnimationFrame(), this.x, this.y, this.width, this.height);

        break;

      case "inactive":
        break;

      default:
        throw new Error(`Computer App state "${this.state} is not accounted for`)
    }

    //draw collision bounds for debugging
    // graphics.fillStyle = "yellow";
    // graphics.fillRect(this.x + this.bounds.x, this.y + this.bounds.y, this.bounds.width, this.bounds.height)
  }

  wasClickedAt(x, y) {
    this.hovered = false;

    switch (this.state) {
      case "idle":
        this.state = "loading";
        break;

      case "loading":
        break;

      default:
        throw new Error(`Computer App state "${this.state} is not accounted for during mouseclicked`)
    }
  }

  wasHoveredAt(x, y) {
    if (this.state !== 'inactive' && this.state !== 'loading') {
      this.hovered = true;
    }
  }

  wasBlurred() {
    if (this.state !== 'inactive' && this.state !== 'loading') {
      this.hovered = false;
    }
  }
}