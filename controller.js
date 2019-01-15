class Controller {

    constructor(view, input) {
        this._view = view;
        this._input = input;

        this._plants = [
            new Plant(50, 50, 100, 100, 'green'),
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

            });
        });
    }

    endDay() {
        // ...
    }
}
