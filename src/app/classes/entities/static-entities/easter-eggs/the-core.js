import { EasterEggGame } from './easter-egg-game';

export class TheCore extends EasterEggGame {
  constructor(handler) {
    super(handler);

    this.src = 'https://mccordgh.github.io/the_line_js13kgames_2018/';
    this.title = "The Core";
  }
}
