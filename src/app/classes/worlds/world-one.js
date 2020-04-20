
import { GameConstants } from '../../constants/game-constants';
import { SpatialGrid } from '../entities/collision/spatial-grid';
import {Assets} from "../assets/assets";
import { ComputerScreen } from '../entities/static-entities/computer-screen/computer-screen';
import { Dialogue } from '../dialogue/dialogue';

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

        this.states = {
            INITIALIZE: 'initialize',
            INTRO: 'intro',
            IDLE: 'idle',
        };

        this.state = this.states.INITIALIZE;
    }

    initDialogue() {
        this.dialogue = this.entityManager.addEntity(
            new Dialogue(
                this.handler,
                [
                    'Hello, click to continue.',
                    'This is more intro text.',
                ]
            ),
        );
    }

    dialogueFinished() {
        console.log('Dialogue finished in state', this.state)
        switch (this.state) {
            case this.states.INITIALIZE:
                break;

            case this.states.INTRO:
                this.state = this.states.IDLE;
                break;


            case this.states.IDLE:
                this.spatialGrid.render(graphics);
                this.entityManager.render(graphics);
                break;

            default:
                throw new Error(`World One animation state "${this.state} is not accounted for`)
        }
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
        switch (this.state) {
            case this.states.INITIALIZE:
                this.initDialogue();

                this.state = this.states.INTRO;
                break;

            case this.states.INTRO:
                this.dialogue.tick();
                break;


            case this.states.IDLE:
                this.entityManager.tick(deltaTime);
                break;

            default:
                throw new Error(`World One animation state "${this.state} is not accounted for`)
        }

    }

    render(graphics) {
        this.drawBackground(graphics);

        switch (this.state) {
            case this.states.INITIALIZE:
                break;

            case this.states.INTRO:
                this.dialogue.render(graphics);
                break;


            case this.states.IDLE:
                this.spatialGrid.render(graphics);
                this.entityManager.render(graphics);
                break;

            default:
                throw new Error(`World One state "${this.state} is not accounted for`)
        }
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