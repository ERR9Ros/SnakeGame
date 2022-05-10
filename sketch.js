let player = [];
let object = [];
let ghost = [];
let length = 50;

function setup() {
  enemies = 5;
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);

  background(0);
  player.push(new snake());
  object.push(new fruit());
  for (var i = 0; i < enemies; i++) {
    ghost.push(new enemy());
  }

  highScore = getItem("highScore");
  score = 0;

  stars = 50;
}

function windowResized() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
}

function draw() {
  let lvl = round(score / PI + 1);

  if (lvl > enemies) {
    ghost.push(new enemy());
    enemies += 1;
  }

  background(0);
  for (var i = 0; i < 50; i++) {
    stroke(255);
    point(random(width), random(height));
    noStroke();
  }

  for (let p of player) {
    p.move();
    p.borders();
    p.body();
    p.display();
    p.death();
    if (trail.length > length) {
      trail.shift();
    }

    for (let o of object) {
      o.display();

      if (o.pos.dist(p.pos) <= o.width / 2 + p.r) {
        object.shift();
        object.push(new fruit());
        length += 10;
        print("Trail:" + length);
        score += 1;
        if (score > highScore) {
          storeItem("highScore", score);
        }
      }
    }
  }
  for (let g of ghost) {
    g.display();
    g.move();
    g.intersects();
    g.attack();
  }

  //UI stuffs
  rectMode(CENTER);
  fill(255);
  rect(width / 2, 10, width, 20);
  fill(0);
  textSize(15);
  text("Score:" + score, 0, 15);
  text("HighScore:" + highScore, (width / 4) * 3, 15);
  text("Health:" + length, (width / 4) * 2, 15);
  text("Ghosts: " + enemies, width / 5, 15);
  if (length == 0) {
    rectMode(CENTER);
    rect(width / 2, height / 2, 220, 220);
    fill(255);
    rect(width / 2, height / 2, 210, 210);
    fill(0);
    text("Score:" + score, width / 2 - 70, height / 2);
    text("HighScore:" + highScore, width / 2 - 70, height / 2 + 20);
    text("Hit SPACE to play again", width / 2 - 80, height / 2 + 50);
    textSize(20);
    text("GAME OVER!", width / 2 - 70, height / 2 - 25);
  }
  if (score > highScore) {
    highScore += 1;
    storeItem("highScore", score);
  }
}
function keyPressed() {
  for (let p of player) {
    p.control();
  }
  if (length == 0 && keyCode == 32) {
    player.push(new snake());
    score = 0;
    length = 50;
    ghost = [];
    for (var i = 0; i < 5; i++) {
      ghost.push(new enemy());
    }
  }
}
