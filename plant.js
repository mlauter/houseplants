class Plant {

    constructor(width, height, x_center, y_bottom, color) {
        this._width = width;
        this._height = height;
        this._xCenter = x_center;
        this._yBottom = y_bottom;
        this._color = color;
    }

    draw(view, onClick) {
        view.drawRectangle(
            this._xCenter - this._width / 2,
            this._yBottom + this._height,
            this._width,
            this._height,
            this._color);
    }
}
