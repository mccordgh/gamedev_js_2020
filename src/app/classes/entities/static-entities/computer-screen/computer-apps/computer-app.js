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

    this.yPadding = 22;
  }

  // getCurrentAnimationFrame() {
  //   return this.a.animations[this.type + '_idle'].getCurrentFrame();
  // }

  tick() {
    // this.x += 1;
    // this.a.animations[this.type + '_idle'].tick();
  }

  render(g) {
    g.fillStyle = "white";
    g.fillRect(this.x, this.y, this.width, this.height);

    g.drawText({
      text: this.name,
      fontSize: 16,
      fillColor: "black",
      x: ((this.x + this.width) / 2) - (this.nameWidth / 2),
      y: this.y + this.height + this.yPadding,
    });
    // g.myDrawImage(this.getCurrentAnimationFrame(), this.x, this.y, this.width, this.height);
  }
}