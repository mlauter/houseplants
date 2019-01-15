const canvas = document.getElementById('screen'),
      clicker = document.getElementById('clicker');

const view = new View(canvas, clicker);

const controller = new Controller(view);

controller.start();
