import { GameConstants } from "../../constants/game-constants";
import { Rectangle } from './collision/rectangle';

const doesNotCollide = [GameConstants.TYPES.GARDEN, GameConstants.TYPES.PLOT, GameConstants.TYPES.LANE];

export class Entity {
    constructor(handler, x, y, width, height) {
        this.handler = handler;
        this.x = x;
        this.y = y;

        this.bounds = new Rectangle(0, 0, this.width, this.height);
    }

    tick() {
        throw new Error(`${this.constructor.name} did not implement tick() method`)
    }

    getCollisionBounds(xOffset, yOffset) {
        const x = parseInt(this.x + this.bounds.x + xOffset, 10);
        const y = parseInt(this.y + this.bounds.y + yOffset);

        return new Rectangle(x, y, this.bounds.width, this.bounds.height);
    }

    checkEntityCollisions(xOffset, yOffset) {
        let candidates =  this.handler.getWorld().getSpatialGrid().retrieve(new Rectangle(this.x + this.bounds.x, this.y + this.bounds.y, this.bounds.width, this.bounds.height), this);
        candidates = candidates.filter(candidate => !doesNotCollide.includes(candidate.type));

        for(let i = 0; i < candidates.length; i++) {
            let entity = candidates[i];

            if (entity.getCollisionBounds(0, 0).intersects(this.getCollisionBounds(xOffset, yOffset))) {
              this.checkForCollisionEvents(this, entity);

              return true;
            }
        }

        return false;
    }

    takeDamageFrom(entity) {
        this.health -= entity.getAttackDamage();
    }

    checkForCollisionEvents(e1, e2) {
        // if player and guard bump
        // if (this.checkCollidingTypes(e1, e2, GameConstants.TYPES.HOUSE, GameConstants.TYPES.MONSTER)) {
        //     const house = e1.type === GameConstants.TYPES.HOUSE ? e1 : e2;
        //     const monster = e1.type === GameConstants.TYPES.MONSTER ? e1 : e2;

        //     this.monsterHouseCollision(monster, house);
        // }

        // if (this.checkCollidingTypes(e1, e2, GameConstants.TYPES.HERO, GameConstants.TYPES.MONSTER)) {
        //     const hero = e1.type === GameConstants.TYPES.HERO ? e1 : e2;
        //     const monster = e1.type === GameConstants.TYPES.MONSTER ? e1 : e2;

        //     this.monsterHeroCollision(monster, hero);
        // }
    }

    checkCollidingTypes(e1, e2, type1, type2) {
        return ((e1.type === type1 && e2.type === type2) || (e1.type === type2 && e2.type === type1));
    }
}