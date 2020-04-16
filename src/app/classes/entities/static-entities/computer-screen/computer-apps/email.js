import { ComputerApp } from "./computer-app.js";
import { Assets } from '../../../../assets/assets';

export class Email extends ComputerApp {
  constructor(handler) {
    super(handler, "Email");

    this.bounds = {
      x: 0,
      y: 26,
      width: this.width,
      height: 36,
    }

    this.assets = {
      icon: Assets.getAssets('email').icon,
    }
  }
}