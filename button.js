class Button {

    constructor(width, height, color, text) {
        this.width = width;
        this.height = height;
        this.margin = 5;
        this.color = color;
        this.text = text;
    }

    draw(view, x, y, onClick) {
        const margin = 10,
              font = (this.height - margin * 2) + "px sans-serif";

        view.drawRectangle(x, y, this.width, this.height, this.color, onClick);
        view.drawText(x + margin, y + this.height - margin, 'white', font, this.text);
    }
}
