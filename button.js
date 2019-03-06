class Button {

    constructor(x, y, width, height, color, text, on_click) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._color = color;
        this._text = text;
        this._onClick = on_click;
    }

    register(scene) {
        this._object_id = scene.addObject(this);
    }

    unregister(scene) {
        scene.removeObject(this._object_id);
    }

    draw(view) {
        const margin = 10,
              font = (this.height - margin * 2) + "px sans-serif";

        view.drawRectangle(
            this._x, this._y, this._width, this._height, this._color, this._onClick);

        view.drawText(
            this._x + margin,
            this._y + this._height - margin,
            'white',
            font,
            this._text);
    }

    zIndex() {
        return 0;
    }
}
