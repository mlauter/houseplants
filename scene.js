class Scene {

    constructor(view) {
        this._view = view;
        this._objects = [];
    }

    addObject(object) {
        this._objects.push(object);

        return this._objects.length - 1;
    }

    removeObject(id) {
        this._objects.splice(id, 1);
    }

    render() {
        const self = this;

        this._objects.sort((a, b) => {
            return a.zIndex() - b.zIndex();
        });

        this._objects.forEach(object => {
            object.draw(self._view);
        });
    }
}
