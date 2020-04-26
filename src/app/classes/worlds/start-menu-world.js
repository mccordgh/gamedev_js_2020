
import { GameConstants } from '../../constants/game-constants';
import { SpatialGrid } from '../entities/collision/spatial-grid';
import {Assets} from "../assets/assets";
import { ComputerScreen } from '../entities/static-entities/computer-screen/computer-screen';
import { Dialogue } from '../dialogue/dialogue';
import { EasterEggGame } from '../entities/static-entities/easter-eggs/easter-egg-game';
import { TheCore } from '../entities/static-entities/easter-eggs/the-core';
import { MeMyselfAndI } from '../entities/static-entities/easter-eggs/me-myself-and-i';
import { TheCodersGame } from '../entities/static-entities/easter-eggs/the-coder';
import { Radio } from '../entities/static-entities/radio/radio';
import { Telephone } from '../entities/static-entities/telephone/telephone';
import { WallPaperTear } from '../entities/static-entities/wall-paper-tear/wall-paper-tear';
import { GiantInteractiveHack } from './giant-interactive-hack';

let counter = 0;

export class StartMenuWorld {
    constructor(handler) {
        this.handler = handler;
        this.entityManager = handler.createEntityManager();

        this.spatialGrid = new SpatialGrid(
            GameConstants.GAME_WIDTH,
            GameConstants.GAME_HEIGHT,
            GameConstants.SPATIAL_GRID_SIZE,
        );

        this.states = {
            INITIALIZE: 'initialize',
        };

        this.state = this.states.INITIALIZE;
    }

    tick(deltaTime) {
      this.entityManager.tick(deltaTime);
    }

    render(graphics) {
      this.entityManager.render(graphics);
    }

    init() {
      this.entityManager.addEntity(new GiantInteractiveHack(this.handler, 0, 0));
    }

    getSpatialGrid() {
        return this.spatialGrid;
    }
}