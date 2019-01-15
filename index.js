const canvas = document.getElementsByTagName('canvas')[0],
      clicker = document.getElementsByTagName('clicker')[0];

const view = new View(canvas, clicker),
      input = new Input(canvas);

const controller = new Controller(view, input);

controller.start();
