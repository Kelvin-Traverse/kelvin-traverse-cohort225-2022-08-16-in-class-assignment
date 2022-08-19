'use strict';

class Ring {
    constructor(element) {
        this.element = element;
        this.size = 0;
        this.sizeVelocity = 2;
    }

    update() {
        this.size += this.sizeVelocity;
        this.element.style.width = this.size + 'px';
        this.element.style.height = this.size + 'px';
        if (this.size >= 200) {
            this.sizeVelocity *= -1;
        } else if (this.size <= 0) {
            this.sizeVelocity *= -1;
            this.changeColor();
        }
    }

    changeColor() {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        this.element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
}

const ring = new Ring(document.createElement('div'));

ring.element.style.position = 'absolute';
ring.element.style.top = '50%';
ring.element.style.left = '50%';
ring.element.style.border = '10px solid #000';
ring.element.style.borderRadius = '100%';
ring.element.style.transform = 'translate(-50%, -50%)';

document.querySelector('body').appendChild(ring.element);

setInterval(() => {
    ring.update();
}, 25)