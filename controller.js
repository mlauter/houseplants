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

        const self = this;

        // Draw plant-level menu buttons
        const buttons = [
            new Button(20, 420, 150, 40, 'purple', 'Water', () => {
                self.waterMenu(plant);
            }),
            new Button(190, 420, 150, 40, 'purple', 'Food', () => {
                self.foodMenu(plant);
            }),
            new Button(360, 420, 150, 40, 'purple', 'Done', () => {
                self.dayMenu();
            }),
        ];

        buttons.forEach(button => {
            button.register(self._scene);
        });

        this._scene.render();

        buttons.forEach(button => {
            button.unregister(self._scene);
        });
    }

    waterMenu(plant) {
        console.log("waterMenu", plant.data.name);

        const self = this;

        const buttons = [
            new Button(20, 440, 45, 20, 'blue', '', () => {
                self.plantMenu(plant);
            }),
            new Button(70, 420, 45, 40, 'blue', '', () => {
                self.plantMenu(plant);
            }),
            new Button(120, 400, 45, 60, 'blue', '', () => {
                self.plantMenu(plant);
            }),
        ];

        buttons.forEach(button => {
            button.register(self._scene);
        });

        this._scene.render();

        buttons.forEach(button => {
            button.unregister(self._scene);
        });
    }

    foodMenu(plant) {
        console.log("foodMenu", plant.data.name);

        const self = this;

        const buttons = [
            new Button(190, 440, 70, 20, 'orange', '', () => {
                self.plantMenu(plant);
            }),
            new Button(270, 420, 70, 40, 'orange', '', () => {
                self.plantMenu(plant);
            }),
        ];

        buttons.forEach(button => {
            button.register(self._scene);
        });

        this._scene.render();

        buttons.forEach(button => {
            button.unregister(self._scene);
        });
    }

    endDay() {
        console.log("endDay");
    }
}
