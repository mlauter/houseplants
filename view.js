class View {

    constructor(canvas, clicker) {
        this._canvas = canvas;
        this._clicker = clicker;
        // Todo in some browsers getContext may fail
        this._ctx = this._canvas.getContext("2d");
        this._clickerCtx = this._clicker.getContext("2d");
        this._elements = new Map();
    }

    drawRectangle(x_left, y_top, width, height, color, clickHandler) {
        var colorKey = this._getUnusedRandomColor();

        View.drawRectangleImpl(this._ctx, x_left, y_top, width, height, color);
        View.drawRectangleImpl(this._clickerCtx, x_left, y_top, width, height, colorKey);
        this._elements.set(colorKey, clickHandler);
    }

    fillBackground(color) {
        this._ctx.fillStyle = color;
        this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
    }

    static drawRectangleImpl(ctx, x, y, width, height, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, width, height);
    }

    _getUnusedRandomColor() {
        // this is gross but hopefully good enough for now
        var retries = 10,
            color = this._getRandomColor();

        while (this._elements.has(color) && retries > 0) {
            color = this._getRandomColor();
            retries--;
        }

        return color;
    }

    _getRandomColor() {
        var colorMax = 16777215, // #ffffff
            color = Math.floor(Math.random() * colorMax).toString(16);

        return "#" + color;
    }
}
