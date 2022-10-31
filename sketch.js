let Truck1;
let OP2;
let TransTwo1;
let TransThree1;
let TransFour1;
let TransFive1;
let TransSix1;
let TransSeven1;
let TransEight1;
let TransNine1;
let Background1;
var song; //(background music)
var Rollout;
var utils = new p5.Utils();//(library ruler)



function preload() {
  song = loadSound("op.aac"); //(load music)
  Rollout = loadSound("rollout.mp3");
}

function setup() {
  createCanvas(1000, 1000);

  utils.enableRuler();//(library ruler)

  
  song.play(); //(play music)
  Rollout.play();

  //setup truck
  Truck1 = new Truck(502, 322);
  OP2 = new OP(504, 323); //373
  TransTwo1 = new TransTwo();
  TransThree1 = new TransThree();
  TransFour1 = new TransFour();
  TransFive1 = new TransFive();
  TransSix1 = new TransSix();
  TransSeven1 = new TransSeven();
  TransEight1 = new TransEight();
  TransNine1 = new TransNine();
  Background1 = new Background();
}

function draw() {
  background("#1E245B");

  //mouse Position reference
  push();
  fill(0);
  text(mouseX + "," + mouseY, 20, 20);
  pop();

  //TimeLine
  for (var px = 10; px <= width; px += 53) {
    rect(px, 31, 31, 31);
  }

  //color set up
  let red = color(126, 28, 31);
  let blue = color(56, 56, 123);
  let yellow = color(213, 168, 68);
  let black = color(16, 19, 28);
  let gray = color(187, 178, 210);
  let darkgray = color(92, 93, 119);
  let lightgray = color(206, 206, 206);

  // //Frame Truck Running

  Background1.drawBackground();
  Truck1.drawTruck();
  Truck1.motion();
  //Frame 1 (&& mouseY > 48 && mouseY < 154)
  if (mouseX > 25 && mouseX < 52) {
    //Frame 1
    background("#1E245B");
    Background1.drawBackground();
    OP2.drawOP();
    //TimeLine
    fill(yellow)
    for (var px = 10; px <= width; px += 53) {
      rect(px, 31, 31, 31);
      ellipse(26,48,15,15)
    }
  } else if (mouseX > 52 && mouseX < 105) {
    //Frame 2
    background("#1E245B");
    Background1.drawBackground();
    TransTwo1.drawTransTwo();
    //TimeLine
    fill(yellow)
    for (var px = 10; px <= width; px += 53) {
      rect(px, 31, 31, 31);
      ellipse(80,48,15,15)
    }
  } else if (mouseX > 105 && mouseX < 157) {
    //Frame 3
    background("#1E245B");
    Background1.drawBackground();
    TransThree1.drawTransThree();
    //TimeLine
    fill(yellow)
    for (var px = 10; px <= width; px += 53) {
      rect(px, 31, 31, 31);
      ellipse(131,48,15,15)
    }
  } else if (mouseX > 157 && mouseX < 210) {
    //Frame 4
    background("#1E245B");
    Background1.drawBackground();
    TransFour1.drawTransFour();
    //TimeLine
    fill(yellow)
    for (var px = 10; px <= width; px += 53) {
      rect(px, 31, 31, 31);
      ellipse(185,48,15,15)
    }
  } else if (mouseX > 210 && mouseX < 263) {
    //Frame 5
    background("#1E245B");
    Background1.drawBackground();
    TransFive1.drawTransFive();
    //TimeLine
    fill(yellow)
    for (var px = 10; px <= width; px += 53) {
      rect(px, 31, 31, 31);
      ellipse(239,48,15,15)
    }
  } else if (mouseX > 263 && mouseX < 315) {
    //Frame 6
    background("#1E245B");
    Background1.drawBackground();
    TransSix1.drawTransSix();
    //TimeLine
    fill(yellow)
    for (var px = 10; px <= width; px += 53) {
      rect(px, 31, 31, 31);
      ellipse(291,48,15,15)
    }
  } else if (mouseX > 315 && mouseX < 368) {
    //Frame 7
    background("#1E245B");
    Background1.drawBackground();
    TransSeven1.drawTransSeven();
    //TimeLine
    fill(yellow)
    for (var px = 10; px <= width; px += 53) {
      rect(px, 31, 31, 31);
      ellipse(345,48,15,15)
    }
  } else if (mouseX > 368 && mouseX < 421) {
    //Frame 8
    background("#1E245B");
    Background1.drawBackground();
    TransEight1.drawTransEight();
    //TimeLine
    fill(yellow)
    for (var px = 10; px <= width; px += 53) {
      rect(px, 31, 31, 31);
      ellipse(399,48,15,15)
    }
  } else if (mouseX > 421 && mouseX < 473) {
    //Frame 9
    background("#1E245B");
    Background1.drawBackground();
    TransNine1.drawTransNine();
    //TimeLine
    fill(yellow)
    for (var px = 10; px <= width; px += 53) {
      rect(px, 31, 31, 31);
      ellipse(451,48,15,15)
    }
  } else if (mouseX > 473 && mouseX < 526) {
    //Frame 10
    background("#1E245B");
    Background1.drawBackground();
    TransEight1.drawTransEight();
    //TimeLine
    fill(yellow)
    for (var px = 10; px <= width; px += 53) {
      rect(px, 31, 31, 31);
      ellipse(504,48,15,15)
    }
  } else if (mouseX > 526 && mouseX < 578) {
    //Frame 11
    background("#1E245B");
    Background1.drawBackground();
    TransSeven1.drawTransSeven();
    //TimeLine
    fill(yellow)
    for (var px = 10; px <= width; px += 53) {
      rect(px, 31, 31, 31);
      ellipse(556,48,15,15)
    }
  } else if (mouseX > 578 && mouseX < 631) {
    //Frame 12
    background("#1E245B");
    Background1.drawBackground();
    TransSix1.drawTransSix();
    //TimeLine
    fill(yellow)
    for (var px = 10; px <= width; px += 53) {
      rect(px, 31, 31, 31);
      ellipse(608,48,15,15)
    }
  } else if (mouseX > 631 && mouseX < 684) {
    //Frame 13
    background("#1E245B");
    Background1.drawBackground();
    TransSeven1.drawTransSeven();
    //TimeLine
    fill(yellow)
    for (var px = 10; px <= width; px += 53) {
      rect(px, 31, 31, 31);
      ellipse(662,48,15,15)
    }
  } else if (mouseX > 684 && mouseX < 736) {
    //Frame 14
    background("#1E245B");
    Background1.drawBackground();
    TransEight1.drawTransEight();
    //TimeLine
    fill(yellow)
    for (var px = 10; px <= width; px += 53) {
      rect(px, 31, 31, 31);
      ellipse(715,48,15,15)
    }
  } else if (mouseX > 736 && mouseX < 789) {
    //Frame 15
    background("#1E245B");
    Background1.drawBackground();
    TransNine1.drawTransNine();
    //TimeLine
    fill(yellow)
    for (var px = 10; px <= width; px += 53) {
      rect(px, 31, 31, 31);
      ellipse(769,48,15,15)
    }
  } else if (mouseX > 789 && mouseX < 842) {
    //Frame 16
    background("#1E245B");
    Background1.drawBackground();
    TransFive1.drawTransFive();
    //TimeLine
    fill(yellow)
    for (var px = 10; px <= width; px += 53) {
      rect(px, 31, 31, 31);
      ellipse(819,48,15,15)
    }
  } else if (mouseX > 842 && mouseX < 894) {
    //Frame 17
    background("#1E245B");
    Background1.drawBackground();
    TransFour1.drawTransFour();
    //TimeLine
    fill(yellow)
    for (var px = 10; px <= width; px += 53) {
      rect(px, 31, 31, 31);
      ellipse(872,48,15,15)
    }
  } else if (mouseX > 894 && mouseX < 947) {
    //Frame 18
    background("#1E245B");
    Background1.drawBackground();
    TransThree1.drawTransThree();
    //TimeLine
    fill(yellow)
    for (var px = 10; px <= width; px += 53) {
      rect(px, 31, 31, 31);
      ellipse(927,48,15,15)
    }
  } else if (mouseX > 947 && mouseX < 975) {
    //Frame 19
    background("#1E245B");
    Background1.drawBackground();
    TransTwo1.drawTransTwo();
    //TimeLine
    fill(yellow)
    for (var px = 10; px <= width; px += 53) {
      rect(px, 31, 31, 31);
      ellipse(978,48,15,15)
    }
  }
}
