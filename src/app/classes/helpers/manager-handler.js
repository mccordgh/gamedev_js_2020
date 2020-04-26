import { MouseManager } from "../input/mouse-manager";
import { GraphicsManager } from "../graphics/graphics-manager";
import { EntityManager } from '../entities/entity-manager';
import { StateManager } from '../states/state-manager';
import { WorldOne } from '../worlds/world-one';
import { EmailManager } from '../entities/static-entities/computer-screen/computer-apps/email/email-manager';
import { FootageManager } from '../entities/static-entities/computer-screen/computer-apps/footage/footage-manager';
import { SoundManager } from '../sounds/sound-manager';
import { SettingsManager } from '../entities/static-entities/computer-screen/computer-apps/settings/settings-manager';

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

    getFootageManager() {
        return this.footageManager;
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

    getSettingsManager() {
        return this.settingsManager;
    }

    getSoundManager() {
        return this.soundManager;
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

    createFootageManager() {
        return this.footageManager = new FootageManager(this);
    }

    createGraphicsManager() {
        return this.graphicsManager = new GraphicsManager();
    }

    createMouseManager() {
        return this.mouseManager = new MouseManager(this);
    }

    createSettingsManager() {
        return this.settingsManager = new SettingsManager(this);
    }

    createSoundManager() {
        return this.soundManager = new SoundManager(this);
    }

    createStateManager() {
        return this.stateManager = new StateManager();
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