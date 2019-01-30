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
            console.log("aloe 1");
        });

        const aloe2 = new Plant(Data.Plants.Aloe, 400, 330, () => {
            console.log("aloe 2");
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

        // Clear menu background
        this._view.drawRectangle(0, 400, 640, 80, 'orange');

        // Draw base-level menu buttons
        (new Button(150, 40, 'blue', 'I like plants')).draw(this._view, 20, 420, () => {
            console.log("I LIKE PLANTS");
        });
    }

    plantMenu(plant) {
        console.log("plantMenu", plant.data.name);

        // Clear menu background
        this._view.drawRectangle(0, 400, 640, 80, 'orange');

        // Draw plant-level menu buttons
    }

    endDay() {
        console.log("endDay");
    }
}
