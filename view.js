class View {

    constructor(canvas, clicker) {
        this._canvas = canvas;
        this._clicker = clicker;
        // Todo in some browsers getContext may fail
        this._ctx = this._canvas.getContext("2d");
    }

    drawRectangle(x_left, y_top, width, height, color) {
        this._ctx.clearRect(x_left, y_top, width, height);
        this._ctx.fillStyle = color;
        this._ctx.fillRect(x_left, y_top, width, height);
    }

    fillBackground(color) {
        this._ctx.fillStyle = color;
        this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
    }

    drawClickRectangle(x_center, y_bottom, width, height, color) {
        // todo this is going away
    }

}
