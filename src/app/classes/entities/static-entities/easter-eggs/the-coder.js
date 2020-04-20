import { EasterEggGame } from './easter-egg-game';

export class TheCodersGame extends EasterEggGame {
  constructor(handler) {
    super(handler);

    this.src = 'https://js13kgames.com/games/thecoders-game/index.html';
    this.title = 'The_Coder\'s Game';
  }
}
