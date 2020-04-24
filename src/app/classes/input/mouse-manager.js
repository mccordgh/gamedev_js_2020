export class MouseManager {
    constructor(managerHandler) {
        this.managerHandler = managerHandler;

        this.initializeEvents();
    }

    getMouseXFromEvent(event) {
        return event.offsetX;
    }

    getMouseYFromEvent(event) {
        return event.offsetY;
    }

    initializeEvents() {
        const canvas = this.managerHandler.getGraphicsManager().getCanvas();

        canvas.onclick = (event) => {
            let mouseX = this.getMouseXFromEvent(event);
            let mouseY = this.getMouseYFromEvent(event);

            this.managerHandler.event('click', {
                x: mouseX,
                y: mouseY,
            });
        }

        canvas.onmousemove = (event) => {
            let mouseX = this.getMouseXFromEvent(event);
            let mouseY = this.getMouseYFromEvent(event);

            this.managerHandler.event('move', {
                x: mouseX,
                y: mouseY,
            });
        }
    }
}