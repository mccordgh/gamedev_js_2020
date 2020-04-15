import { EntityManager } from "../entity-manager";
import gameConstants from "../../../constants/game-constants";
import { UiEntity } from './ui-entity';

export class UiManager {
    constructor(handler) {
        this.handler = handler;

        this.styles = {
            height: 80,
            width: 160,
        };
    }

    toggleElement(element) {
        const uiElements = this.handler.getEntityManager().getEntitiesByType(gameConstants.TYPES.UI);

        uiElements.forEach((uiElement) => {
            uiElement.active = false;
        })

        element.active = true;
    }
}
