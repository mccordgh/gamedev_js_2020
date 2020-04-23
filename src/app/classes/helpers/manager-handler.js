import { MouseManager } from "../input/mouse-manager";
import { GraphicsManager } from "../graphics/graphics-manager";
import { EntityManager } from '../entities/entity-manager';
import { StateManager } from '../states/state-manager';
import { WorldOne } from '../worlds/world-one';
import { EmailManager } from '../entities/static-entities/computer-screen/computer-apps/email/email-manager';

export class ManagerHandler {
    constructor(game) {
        this.game = game;

        this.entityManager = null;
        this.graphicsManager = null;
        this.monsterManager = null;
        this.mouseManager = null;
        this.seedManager = null;
        this.stateManager = null;
        this.uiManager = null;
        this.world = null;
    }

    getEmailManager() {
        return this.emailManager;
    }

    getEntityManager() {
        return this.entityManager;
    }

    getGame() {
        return this.game;
    }

    getGraphicsManager() {
        return this.graphicsManager;
    }

    getMouseManager() {
        return this.mouseManager;
    }

    getUiManager() {
        return this.uiManager;
    }

    getWorld() {
        return this.world;
    }

    createEntityManager() {
        return this.entityManager = new EntityManager(this);
    }

    createEmailManager() {
        return this.emailManager = new EmailManager(this);
    }

    createGraphicsManager() {
        return this.graphicsManager = new GraphicsManager();
    }

    createMouseManager() {
        return this.mouseManager = new MouseManager(this);
    }

    createStateManager() {
        return this.stateManager = new StateManager();
    }

    createUiManager() {
        return this.uiManager = new UiManager(this);
    }

    createWorld() {
        return this.world = new WorldOne(this);
    }

    event(type, data) {
        if (type === 'click') {
            this.entityManager.mouseClick(data);
        }

        if (type === 'move') {
            this.entityManager.mouseMove(data);
        }
    }
}