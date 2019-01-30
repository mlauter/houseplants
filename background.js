class Background {

    register(scene) {
        this._object_id = scene.addObject(this);
    }

    draw(view) {
        view.drawRectangle(0, 0, 640, 400, 'brown');
    }

    zIndex() {
        return -1;
    }
}
