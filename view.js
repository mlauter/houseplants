class View {

    constructor(canvas, clicker) {
        this._canvas = canvas;
        this._clicker = clicker;
        // Todo in some browsers getContext may fail
        this._ctx = this._canvas.getContext("2d");
    }

    drawRectangle(x_left, y_top, width, height, color) {
        View.drawRectangleImpl(this._ctx, x_left, y_top, width, height, color);
    }

    fillBackground(color) {
        this._ctx.fillStyle = color;
        this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
    }

    static drawRectangleImpl(ctx, x, y, width, height, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, width, height);
    }
}
