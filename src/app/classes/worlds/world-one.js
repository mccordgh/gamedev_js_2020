
import { GameConstants } from '../../constants/game-constants';
import { SpatialGrid } from '../entities/collision/spatial-grid';
import {Assets} from "../assets/assets";
import { ComputerScreen } from '../entities/static-entities/computer-screen/computer-screen';

let counter = 0;

export class WorldOne {
    constructor(handler) {
        this.handler = handler;
        this.entityManager = handler.createEntityManager();
        // this.monsterManager = handler.createMonsterManager();
        // this.heroManager = handler.createHeroManager();
        // this.seedManager = handler.createSeedManager();
        // this.uiManager = handler.createUiManager();
        this.assets = {
            background: Assets.getAssets('background').image,
        };

        this.spatialGrid = new SpatialGrid(
            GameConstants.GAME_WIDTH,
            GameConstants.GAME_HEIGHT,
            GameConstants.SPATIAL_GRID_SIZE,
        );

        this.state = 'intro';
    }

    loadEntities() {
        this.entityManager.addEntity(new ComputerScreen(this.handler, 260, 150))
        // const ySpawn = 90;

        // this.entityManager.addEntity(new FarmHouse(this.handler, 0, ySpawn));
        // this.entityManager.addEntity(Garden.create(this.handler, 101, ySpawn));

        //TODO: Make Player object to track stats/upgrades/heroes/etc
        // const availableSeeds = [WalnutSeed, PotatoSeed, TomatoSeed, OnionSeed];

        // this.uiManager.createButtonsFromSeeds(availableSeeds);
    }

    tick(deltaTime) {
        // counter++;

        this.entityManager.tick(deltaTime);
    }

    render(graphics) {
        this.drawBackground(graphics);

        this.spatialGrid.render(graphics);

        this.entityManager.render(graphics);
    }

    init() {
        this.loadEntities();
    }

    drawBackground(graphics) {
        const bg = this.assets.background;

        graphics.drawSprite(bg)
    }


    getSpatialGrid() {
        return this.spatialGrid;
    }
}