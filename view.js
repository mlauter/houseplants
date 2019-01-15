class View {

    constructor(canvas, clicker) {
        this._canvas = canvas;
        this._clicker = clicker;
        // Todo in some browsers getContext may fail
        this._ctx = this._canvas.getContext("2d");
    }

    drawRectangle(x_center, y_bottom, width, height, color) {
        var x_left = Math.max(x_center - Math.floor(width/2), 0),
            y_top = Math.max(y_bottom - height, 0);

        this._ctx.clearRect(x_left, y_top, width, height);
        this._ctx.fillStyle = color;
        this._ctx.fillRect(x_left, y_top, width, height);
    }

    fillBackground(color) {
        this._ctx.fillStyle = color;
        this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
    }
}
