class Image {

    constructor(width, height, image) {
        this.width = width;
        this.height = height;
        this.image = document.querySelector('[src="' + image + '"]');
    }

    draw(view, x, y, onClick) {
        view.drawImage(x, y, this.width, this.height, this.image, onClick);
    }
}
