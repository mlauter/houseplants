class Scene {

    constructor(view) {
        this._view = view;
        this._objects = new Map();
    }

    addObject(object) {
        const key = this.getId();
        this._objects.set(key, object);

        return key;
    }

    removeObject(id) {
        this._objects.delete(id);
    }

    render() {
        const self = this;

        let objects = [ ...this._objects.values() ];
        objects.sort((a, b) => {
            return a.zIndex() - b.zIndex();
        });

        objects.forEach(object => {
            object.draw(self._view);
        });
    }

    getId() {
        return Math.floor(Math.random() * Math.floor(Number.MAX_SAFE_INTEGER));
    }
}
