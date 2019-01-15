class Controller {

    constructor(view) {
        this._view = view;

        this._plants = [
            new Plant(Data.Plants.Aloe, 100, 120),
            new Plant(Data.Plants.Aloe, 400, 330),
        ];
    }

    start() {
        this.startDay();
    }

    startDay() {

        // Draw room
        this._view.fillBackground('brown');

        // Draw plants
        this._plants.forEach(plant => {
            plant.draw(view, () => {
                console.log("You clicked " + plant.data.name);
            });
        });
    }

    endDay() {
        // ...
    }
}
