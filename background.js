class Background {

    register(scene) {
        this._object_id = scene.addObject(this);
    }

    draw(view) {
        view.drawRectangle(0, 0, 640, 480, '#f8efef');
    }

    zIndex() {
        return -1;
    }
}
