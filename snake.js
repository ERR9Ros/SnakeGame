let trail = [];

class snake {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.r = 10;
    this.width = this.r * 2;
    this.vel = createVector(0, 0);
  }
  display() {
    noStroke();
    fill(0, 150, 0);
    ellipse(this.pos.x, this.pos.y, this.width, this.width);
  }
  move() {
    this.pos.add(this.vel);
  }
  control() {
    if (keyCode == UP_ARROW || keyCode == 87) {
      this.vel.x = 0;
      this.vel.y = -1.5;
      ghostPause = false;
    }
    if (keyCode == DOWN_ARROW || keyCode == 83) {
      this.vel.x = 0;
      this.vel.y = 1.5;
      ghostPause = false;
    }
    if (keyCode == LEFT_ARROW || keyCode == 65) {
      this.vel.x = -1.5;
      this.vel.y = 0;
      ghostPause = false;
    }
    if (keyCode == RIGHT_ARROW || keyCode == 68) {
      this.vel.x = 1.5;
      this.vel.y = 0;
      ghostPause = false;
    }
  }
  borders() {
    if (this.pos.x + this.r >= width || this.pos.x - this.r <= 0) {
      this.vel.x = 0;
    }
    if (this.pos.y + this.r >= height || this.pos.y - this.r <= 20) {
      this.vel.y = 0;
    }
  }
  body() {
    trail.push({ x: this.pos.x, y: this.pos.y });

    for (var i = 0; i < trail.length; i++) {
      fill(0, random(200, 255), 0);
      ellipse(trail[i].x, trail[i].y, this.r * 2, this.r * 2);
    }
  }
  intersects(object) {
    let d = this.pos.dist(object.pos);
    if (d <= this.r + object.width / 2) {
    }
  }
  death() {
    if (length <= 0) {
      player.shift();
    }
  }
}
