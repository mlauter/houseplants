class Plant {

    constructor(data, x_center, y_bottom) {
        this._xCenter = x_center;
        this._yBottom = y_bottom;

        this.data = data;
    }

    draw(view, onClick) {
        this.data.image.draw(
            view,
            this._xCenter - Math.floor(this.data.image.width / 2),
            this._yBottom + this.data.image.height,
            onClick
        );
    }
}
