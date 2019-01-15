class Plant {

    constructor(width, height, x_center, y_bottom, color) {
        this._width = width;
        this._height = height;
        this._color = color;
    }

    draw(view) {
        view.drawRectangle(
            this.x_center - this._width / 2,
            this.y_bottom + this._height,
            this._width,
            this._height,
            this._color);
    }
}
