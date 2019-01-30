class Controller {

    constructor(view) {
        this._view = view;

        this._plants = [
            new Plant(Data.Plants.Aloe, 100, 120),
            new Plant(Data.Plants.Aloe, 400, 330),
        ];
    }

    start() {
        console.log("start");

        this.startDay();
    }

    startDay() {
        console.log("startDay");

        const self = this;

        // Draw background
        this._view.drawRectangle(0, 0, 640, 400, 'brown');

        this._plants.forEach(plant => {
            plant.draw(view, () => {
                self.plantMenu(plant);
            });
        });

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
