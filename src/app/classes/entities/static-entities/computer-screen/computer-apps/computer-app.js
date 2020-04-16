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
  }

  // getCurrentAnimationFrame() {
  //   return this.a.animations[this.type + '_idle'].getCurrentFrame();
  // }

  tick() {
    throw new Error('Computer App child must implement tick method')
  }

  render(graphics) {

    graphics.drawSprite(this.assets.icon, this.x, this.y, this.width, this.height);

    if (this.hovered) {
      graphics.globalAlpha = 0.4;
      graphics.fillStyle = "black";
      const padding = 6;
      graphics.fillRect(this.x + this.bounds.x - padding, this.y + this.bounds.y - padding, this.bounds.width + (padding * 2), this.bounds.height + (padding * 2));
      graphics.globalAlpha = 1;
    }

    //draw collision bounds for debugging
    // graphics.fillStyle = "yellow";
    // graphics.fillRect(this.x + this.bounds.x, this.y + this.bounds.y, this.bounds.width, this.bounds.height)
  }

  wasHoveredAt(x, y) {
    this.hovered = true;
  }

  wasBlurred() {
    this.hovered = false;
  }
}