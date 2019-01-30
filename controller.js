class Controller {

    constructor(view) {
        this._view = view;
        this._scene = new Scene(this._view);

        this._plants = [];
    }

    start() {
        console.log("start");

        const self = this;

        const background = new Background();

        const aloe1 = new Plant(Data.Plants.Aloe, 100, 120, () => {
            self.plantMenu(aloe1);
        });

        const aloe2 = new Plant(Data.Plants.Aloe, 400, 330, () => {
            self.plantMenu(aloe2);
        });

        background.register(this._scene);
        aloe1.register(this._scene);
        aloe2.register(this._scene);

        this._plants.push(aloe1);
        this._plants.push(aloe2);

        this.startDay();
    }

    startDay() {
        console.log("startDay");

        const self = this;

        this._scene.render();

        this.dayMenu();
    }

    dayMenu() {
        console.log("dayMenu");

        // Draw base-level menu buttons
        const button = new Button(20, 420, 150, 40, 'blue', 'I like plants');

        button.register(this._scene);

        this._scene.render();

        button.unregister(this._scene);
    }

    plantMenu(plant) {
        console.log("plantMenu", plant.data.name);

        // Draw plant-level menu buttons
        const button = new Button(200, 420, 150, 40, 'yellow', 'i AM A PLTN');

        button.register(this._scene);

        this._scene.render();

        button.unregister(this._scene);
    }

    endDay() {
        console.log("endDay");
    }
}
