class Plant {

    constructor(data, x_center, y_bottom, on_click) {
        this._xCenter = x_center;
        this._yBottom = y_bottom;
        this._onClick = on_click;

        this.data = data;
    }

    register(scene) {
        this._object_id = scene.addObject(this);
    }

    draw(view) {
        this.data.image.draw(
            view,
            this._xCenter - Math.floor(this.data.image.width / 2),
            this._yBottom - this.data.image.height,
            this._onClick
        );
    }

    zIndex() {
        return 0;
    }
}
