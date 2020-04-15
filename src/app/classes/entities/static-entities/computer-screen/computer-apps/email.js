import { ComputerApp } from "./computer-app.js";

export class Email extends ComputerApp {
  constructor(handler) {
    super(handler, "Email");
  }

  render(graphics, x, y) {
    // graphics.drawSprite(this.asset, this.x, this.y, this.width, this.height);
    graphics.fillStyle = "pink";
    graphics.fillRect(x, y , this.width, this.height);
  }
}