export class StateManager {
    construct() {
        this.currentState = null;
    }

    getState() {
        return this.currentState;
    }

    setState(state) {
        this.currentState = state;
    }
}