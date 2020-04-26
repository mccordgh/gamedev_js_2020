import { GameState } from './states/game-state';
import { ManagerHandler } from './helpers/manager-handler';

import { GameConstants } from '../constants/game-constants';

export class Game {
    // setup all the things aka managers of input, sound, etc
    initialize() {
        this.managerHandler = new ManagerHandler(this);
        this.graphicsManager = this.managerHandler.createGraphicsManager();
        this.stateManager = this.managerHandler.createStateManager();
        this.mouseManager = this.managerHandler.createMouseManager();
        this.managerHandler.createEmailManager();
        this.managerHandler.createFootageManager();
        this.managerHandler.createSoundManager();
        this.managerHandler.createSettingsManager();

        const world = this.managerHandler.createWorld();
        world.init();

        const gameState = new GameState(this.managerHandler, world);

        this.stateManager.setState(gameState);
    }

    run() {
        this.initialize();

        const fps = GameConstants.FPS;
        const timePerTick = 1000 / fps;

        let delta = 0;
        let deltaTime = timer / 1000;
        let now = Date.now();
        let lastTime = now;
        let timer = 0;

        const loop = () => {
            now = Date.now();
            delta = now - lastTime;
            timer += delta;
            lastTime = now;

            if (timer >= timePerTick) {
                deltaTime = timer / 1000;

                this.tick(deltaTime);
                this.render(this.graphicsManager.getGraphics());

                timer = 0;
            }

            window.requestAnimationFrame(loop);
        }

        loop();
    }

    // Update all game logic
    tick(deltaTime) {
        this.stateManager.getState().tick(deltaTime);
    }

    // Draw everything after it is updated
    render(graphics) {
        graphics.clearRect(0, 0, GameConstants.GAME_WIDTH, GameConstants.GAME_HEIGHT);

        this.stateManager.getState().render(graphics);
    }
};