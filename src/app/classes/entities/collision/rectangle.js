export class Rectangle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    intersects(rectangle) {
        return (
            this.x < rectangle.x + rectangle.width
            && this.x + this.width > rectangle.x
            && this.y < rectangle.y + rectangle.height
            && this.y + this.height > rectangle.y
        );
    }
}