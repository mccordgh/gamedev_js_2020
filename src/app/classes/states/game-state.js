export class GameState {
    constructor(managerHandler, world) {
        this.managerHandler = managerHandler;
        this.world = world;
    }

    tick(deltaTime) {
        this.world.tick(deltaTime);
    }

    render(graphics) {
        this.world.render(graphics);
    }

    getManagerHandler() {
        return this.managerHandler;
    }

    getWorld() {
        return this.world;
    }

    setWorld(world) {
        this.world = world;
    }
}