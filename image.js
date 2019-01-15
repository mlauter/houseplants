class Image {

    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(view, x, y, onClick) {
        view.drawRectangle(x, y, this.width, this.height, this.color, onClick);
    }
}
