class button {
  constructor() {
    this.width = width / 4;
    this.height = this.width / 3;
    this.pos = createVector(width / 2, height / 2);
  }
  display() {
    fill(255);
    rectMode(CENTER);
    rect(this.pos.x, this.pos.y, this.width, this.height);
    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Start", this.pos.x, this.pos.y);
    textAlign(LEFT, BOTTOM);
  }
  click() {
    if (
      (mouseX) =>
        this.pos.x - this.width / 2 && mouseX <= this.pos.x + this.width / 2
    ) {
      if (
        (mouseY) =>
          this.pos.x - this.height / 2 && mouseY <= this.pos.x + this.height / 2
      ) {
        if (gameRun == false) {
          player.push(new snake());
          object.push(new fruit());
          for (var i = 0; i < enemies; i++) {
            ghost.push(new enemy());
          }
          gameRun = true;
        }
      }
    }
  }
}
