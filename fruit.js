class fruit {
  constructor() {
    this.width = 15;
    this.pos = createVector(
      random(this.width, width - this.width),
      random(20 + this.width, height - this.width)
    );
  }
  display() {
    fill(0, 200, 255);
    ellipse(this.pos.x, this.pos.y, this.width, this.width);
  }
}
