import { Game } from './classes/game';

document.title = 'Gamedev.js 2020';

window.rndIndex = (nums) => nums[Math.floor(Math.random() * (nums.length))];
window.rndInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

let game = new Game();

game.run();
