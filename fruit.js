class fruit {
  constructor() {
    this.width = 15;
    this.pos = createVector(
      random(this.width / 2, width - this.width / 2),
      random(20 + this.width / 2, height - this.width / 2)
    );
  }
  display() {
    fill(0, 200, 255);
    ellipse(this.pos.x, this.pos.y, this.width, this.width);
  }
}
