class button {
  constructor() {
    this.width = width / 4;
    this.height = this.width / 3;
    this.pos = createVector(width / 2 - this.width / 2, height / 2);
  }
  display() {
    fill(255);
    rectMode(CENTER);
    rect(
      this.pos.x + this.width / 2,
      this.pos.y + this.height / 2,
      this.width,
      this.height
    );
    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Start", this.pos.x + this.width / 2, this.pos.y + this.height / 2);
    textAlign(LEFT, BOTTOM);
  }
  click() {
    if ((mouseX) => this.pos.x) {
      if (mouseX <= this.pos.x + this.width) {
        if ((mouseY) => this.pos.y) {
          if (mouseY <= this.pos.y + this.height) {
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
  }
}
