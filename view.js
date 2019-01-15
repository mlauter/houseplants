class View {

    constructor(canvas, clicker) {
        this._canvas = canvas;
        this._clicker = clicker;
        // Todo in some browsers getContext may fail
        this._ctx = this._canvas.getContext("2d");
        this._clickerCtx = this._clicker.getContext("2d");
        this._elements = new Map();

        this.initClickHandlers();
    }

    initClickHandlers() {
        var self = this;
        this._canvas.addEventListener('click', function(e) {
            var mouseX, mouseY;

            if (e.offsetX) {
                mouseX = e.offsetX;
                mouseY = e.offsetY;
            } else if (e.layerX) {
                mouseX = e.layerX;
                mouseY = e.layerY;
            }

            var d = self._clickerCtx.getImageData(mouseX, mouseY, 1, 1).data,
                r = d[0],
                g = d[1],
                b = d[2],
                colorKey = "#" + r.toString(16) + g.toString(16) + b.toString(16);

            var clickHandler = self._elements.get(colorKey);
            if (clickHandler) {
                clickHandler();
            }
        });
    }

    drawRectangle(x_left, y_top, width, height, color, clickHandler) {

        // Draw on screen
        View.drawRectangleImpl(this._ctx, x_left, y_top, width, height, color);

        // Draw on click map
        if (clickHandler) {
            const colorKey = this._getUnusedRandomColor();

            View.drawRectangleImpl(this._clickerCtx, x_left, y_top, width, height, colorKey);
            this._elements.set(colorKey, clickHandler);
        }
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
            colorMin = 1, // #000000 is reserved
            color = (Math.floor(Math.random() * (colorMax - colorMin)) + colorMin).toString(16);

        return "#" + color;
    }
}
