import { PlayerCursor } from '../input/player-cursor';
import { Rectangle } from './collision/rectangle';
import gameConstants from '../../constants/game-constants';

const clickableTypes = [
    gameConstants.TYPES.GARDEN,
    gameConstants.TYPES.UI
];

export class EntityManager {
    constructor(handler) {
        this.handler = handler;
        this.cursor = new PlayerCursor();
        this.entities = [];
    }

    tick(deltaTime) {
        for (let i = 0; i < this.entities.length; i += 1) {
            if (this.entities[i].health <= 0) {
                this.removeEntity(this.entities[i]);

                return;
            }

            this.entities[i].tick(deltaTime);
        }
    }

    render(graphics) {
        for (let i = 0; i < this.entities.length; i += 1) {
            this.entities[i].render(graphics);
        }

        if (this.cursor.x && this.cursor.y) {
            this.cursor.render(graphics);
        }
    }

    addEntity(entity) {
        this.entities.push(entity);

        const rectangle = new Rectangle(
            entity.x + entity.bounds.x, entity.y + entity.bounds.y, entity.bounds.width, entity.bounds.height
        );

        this.handler.getWorld().getSpatialGrid().insert(rectangle, entity);
    }

    removeEntity(entity) {
        let index = this.entities.indexOf(entity);

        this.handler.getWorld().getSpatialGrid().remove(
            new Rectangle(
                entity.x + entity.bounds.x, entity.y + entity.bounds.y, entity.bounds.width, entity.bounds.height,
            ), entity
        );

        this.entities.splice(index, 1);
        entity = undefined;
    }

    findClickableEntityAt(x, y) {
        const fingerRectangle = new Rectangle(
            x - (gameConstants.FINGER_WIDTH / 2),
            y - (gameConstants.FINGER_WIDTH / 2),
            gameConstants.FINGER_WIDTH,
            gameConstants.FINGER_WIDTH,
        );

        const clickableEntities = this.entities.find((entity) => {
            const entityRect = new Rectangle(entity.x, entity.y, entity.width, entity.height);

            return fingerRectangle.intersects(entityRect) && clickableTypes.includes(entity.type);
        });

        return clickableEntities;
    }

    findActiveUi() {
        return this.getEntitiesByType(gameConstants.TYPES.UI).find(ui => ui.active);
    }

    mouseClick(data) {
        let activeUi = this.findActiveUi();

        const { x, y } = data;
        const clicked = this.findClickableEntityAt(x, y);

        if (!clicked) {
            return;
        }

        clicked.wasClickedAt(x, y, activeUi);
    }

    mouseMove(data) {
        this.cursor.x = data.x;
        this.cursor.y = data.y;
    }

    getEntitiesByType(type) {
        return this.entities.filter(entity => entity.type == type);
    }
}