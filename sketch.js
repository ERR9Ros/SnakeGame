let player = [];
let object = [];
let ghost = [];
let startButton = [];
let ghostPause = true;
let length = 50;
let gameRun = false;
let enemies = 5;

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);

  background(0);
  startButton.push(new button());

  highScore = getItem("highScore");
  if (highScore == null) {
    highScore = 0;
  }
  score = 0;

  stars = 50;
}

function windowResized() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
}

function draw() {
  if (gameRun == true) {
    let lvl = round(score / PI + 1);

    if (lvl > enemies) {
      ghost.push(new enemy());
      enemies += 1;
    }

    background(0);
    for (var i = 0; i < (width / height) * 50; i++) {
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
    rectMode(CORNER);
    fill(255);
    rect(0, -10, width*2, 25);
    fill(0);
    textSize(15);
    textAlign(LEFT, TOP);
    text("Score:" + score, 0, 0);
    text("HighScore:" + highScore, width * 0.75, 0);
    text("Health:" + length, width / 2, 0);
    text("Ghosts: " + enemies, width * 0.2, 0);
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
  } else if (gameRun == false) {
    background(0, 0, 120);
    for (let b of startButton) {
      b.display();
    }
  }
}
function keyPressed() {
  for (let p of player) {
    p.control();
    if (length == 0 && keyCode == 32) {
      p.push(new snake());
      score = 0;
      length = 50;
      ghost = [];
      for (var i = 0; i < 5; i++) {
        ghost.push(new enemy());
      }
      ghostPause = true;
    }
  }

  if (gameRun == true && keyCode == 27) {
    gameRun = false;
    player = [];
    object = [];
    ghost = [];
    trail = [];
    score = 0;
    ghostPause = true;
  }
}
function mouseClicked() {
  for (let b of startButton) {
    b.click();
  }
}
