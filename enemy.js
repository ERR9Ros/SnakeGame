class enemy {
  constructor() {
    this.r = 7;
    this.width = this.r * 2;
    this.pos = createVector(
      random(this.r, width - this.r),
      random(20 + this.r, height - this.r)
    );
    this.vel = createVector(0, 0);
    this.speed = random(0.9, 1.4);
    this.pause = createVector(0, 0);
  }
  display() {
    noStroke();
    fill(255, 0, 0);
    ellipse(this.pos.x, this.pos.y, this.width, this.width);
  }
  attack() {
    if (length > 0) {
      // dtp (Distance To Player)
      let dtp = p5.Vector.dist(this.pos, player[0].pos);

      if (dtp <= this.r + player[0].r) {
        trail.shift();
        length -= 1;
      }
    }
  }
  move() {
    if (ghostPause == false) {
      for (let p of player) {
        let dtp = p5.Vector.dist(this.pos, player[0].pos);
        if (dtp < width / 2) {
          this.vel = createVector(p.pos.x - this.pos.x, p.pos.y - this.pos.y);
          this.vel.limit(this.speed);
          this.pos.add(this.vel);
        }
      }
    }
  }
  intersects(other) {
    for (var i = 0; i < ghost.length; i++) {
      if (
        this.pos != ghost[i].pos &&
        this.pos.dist(ghost[i].pos) < this.width
      ) {
        this.vel = createVector(
          ghost[i].pos.x - this.pos.x,
          ghost[i].pos.y - this.pos.y
        );
        ghost[i].vel.limit(ghost[i].speed);
        ghost[i].pos.sub(ghost[i].vel);
      }
    }
  }
}
