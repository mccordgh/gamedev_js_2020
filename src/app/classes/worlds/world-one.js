
import gameConstants from '../../constants/game-constants';
import { SpatialGrid } from '../entities/collision/spatial-grid';
import {Assets} from "../assets/assets";

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
            gameConstants.GAME_WIDTH,
            gameConstants.GAME_HEIGHT,
            gameConstants.SPATIAL_GRID_SIZE,
        );
    }

    loadEntities() {
        // const ySpawn = 90;

        // this.entityManager.addEntity(new FarmHouse(this.handler, 0, ySpawn));
        // this.entityManager.addEntity(Garden.create(this.handler, 101, ySpawn));

        //TODO: Make Player object to track stats/upgrades/heroes/etc
        // const availableSeeds = [WalnutSeed, PotatoSeed, TomatoSeed, OnionSeed];

        // this.uiManager.createButtonsFromSeeds(availableSeeds);
    }

    tick(deltaTime) {
        // counter++;

        // if (counter >= (gameConstants.FPS)) {
            // counter = 0;

            // this.monsterManager.spawnMonster();
        // }

        // this.entityManager.tick(deltaTime);
    }

    render(graphics) {
        this.drawBackground(graphics);

        this.spatialGrid.render(graphics);
        // this.entityManager.render(graphics);
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