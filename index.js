let canvas = document.getElementsByTagName('canvas')[0];

let view = new View(canvas);
let input = new Input(canvas);

let controller = new Controller(view, input);

controller.start();
