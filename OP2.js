class OP {
  constructor(positionX, positionY) {
    this.positionX = positionX;
    this.positionY = positionY;
  }
  // motion() {
  //   //shaking
  //   this.positionX = this.positionX + random(-1, 1);
  //   this.positionY = this.positionY + random(-1, 1);
  // }

  drawOP() {
    //Cargo
    fill(94, 93, 116);
    beginShape();
    vertex(this.positionX - 248, this.positionY + 522);
    vertex(this.positionX - 248, this.positionY + 60);
    vertex(this.positionX - 218, this.positionY + 51);
    vertex(this.positionX + 229, this.positionY + 52);
    vertex(this.positionX + 252, this.positionY + 68);
    vertex(this.positionX + 245, this.positionY + 523);
    endShape(CLOSE);
    line(
      this.positionX + 5,
      this.positionY + 51,
      this.positionX + 5,
      this.positionY + 102
    );

    //Front MainBody
    fill(127, 28, 31);
    beginShape();
    vertex(this.positionX - 222, this.positionY + 528);
    vertex(this.positionX - 228, this.positionY + 287);
    vertex(this.positionX - 199, this.positionY + 117);
    vertex(this.positionX - 66, this.positionY + 102);
    vertex(this.positionX + 78, this.positionY + 102);
    vertex(this.positionX + 201, this.positionY + 117);
    vertex(this.positionX + 218, this.positionY + 176);
    vertex(this.positionX + 229, this.positionY + 286);
    vertex(this.positionX + 216, this.positionY + 528);
    endShape(CLOSE);
    rect(this.positionX - 205, this.positionY + 403, 84, 107);
    rect(this.positionX + 129, this.positionY + 402, 77, 107);
    //Radiator Grill
    fill(122, 121, 154);
    beginShape();
    vertex(this.positionX - 228, this.positionY + 291);
    vertex(this.positionX - 224, this.positionY + 383);
    vertex(this.positionX - 202, this.positionY + 377);
    vertex(this.positionX - 98, this.positionY + 379);
    vertex(this.positionX - 97, this.positionY + 528);
    vertex(this.positionX + 107, this.positionY + 528);
    vertex(this.positionX + 113, this.positionY + 379);
    vertex(this.positionX + 202, this.positionY + 379);
    vertex(this.positionX + 221, this.positionY + 385);
    vertex(this.positionX + 229, this.positionY + 294);
    vertex(this.positionX + 207, this.positionY + 289);
    vertex(this.positionX + 130, this.positionY + 284);
    vertex(this.positionX - 79, this.positionY + 282);
    vertex(this.positionX - 203, this.positionY + 286);
    endShape(CLOSE);
    line(
      this.positionX - 224,
      this.positionY + 310,
      this.positionX - 205,
      this.positionY + 307
    );
    line(
      this.positionX - 205,
      this.positionY + 307,
      this.positionX - 90,
      this.positionY + 307
    );
    line(
      this.positionX - 90,
      this.positionY + 307,
      this.positionX - 90,
      this.positionY + 380
    );
    line(
      this.positionX - 90,
      this.positionY + 380,
      this.positionX - 202,
      this.positionY + 377
    );
    line(
      this.positionX + 224,
      this.positionY + 313,
      this.positionX + 182,
      this.positionY + 309
    );
    line(
      this.positionX + 182,
      this.positionY + 309,
      this.positionX + 98,
      this.positionY + 307
    );
    line(
      this.positionX + 98,
      this.positionY + 307,
      this.positionX + 98,
      this.positionY + 357
    );
    line(
      this.positionX + 98,
      this.positionY + 357,
      this.positionX + 102,
      this.positionY + 379
    );
    line(
      this.positionX + 102,
      this.positionY + 379,
      this.positionX + 202,
      this.positionY + 379
    );

    fill(206, 205, 230);
    quad(
      this.positionX - 97,
      this.positionY + 528,
      this.positionX - 86,
      this.positionY + 513,
      this.positionX + 100,
      this.positionY + 513,
      this.positionX + 107,
      this.positionY + 528
    );
    beginShape();
    vertex(this.positionX - 77, this.positionY + 513);
    vertex(this.positionX - 78, this.positionY + 302);
    vertex(this.positionX - 60, this.positionY + 294);
    vertex(this.positionX + 2, this.positionY + 290);
    vertex(this.positionX + 69, this.positionY + 294);
    vertex(this.positionX + 88, this.positionY + 305);
    vertex(this.positionX + 88, this.positionY + 513);
    endShape(CLOSE);
    beginShape();
    vertex(this.positionX - 66, this.positionY + 513);
    vertex(this.positionX - 69, this.positionY + 312);
    vertex(this.positionX - 57, this.positionY + 302);
    vertex(this.positionX - 0, this.positionY + 300);
    vertex(this.positionX + 66, this.positionY + 303);
    vertex(this.positionX + 76, this.positionY + 312);
    vertex(this.positionX + 76, this.positionY + 513);
    endShape(CLOSE);
    rect(this.positionX + 1, this.positionY + 300, 7, 212);

    //Leg
    push();
    fill(206, 205, 230);
    //Left Leg
    beginShape();
    vertex(this.positionX - 229, this.positionY + 593);
    vertex(this.positionX - 193, this.positionY + 678);
    vertex(this.positionX - 54, this.positionY + 678);
    vertex(this.positionX - 54, this.positionY + 616);
    vertex(this.positionX - 214, this.positionY + 601);
    vertex(this.positionX - 229, this.positionY + 593);
    endShape(CLOSE);
    quad(
      this.positionX - 198,
      this.positionY + 602,
      this.positionX - 172,
      this.positionY + 670,
      this.positionX - 90,
      this.positionY + 672,
      this.positionX - 100,
      this.positionY + 612
    );
    //Right Leg
    beginShape();
    vertex(this.positionX + 74, this.positionY + 614);
    vertex(this.positionX + 50, this.positionY + 678);
    vertex(this.positionX + 194, this.positionY + 678);
    vertex(this.positionX + 242, this.positionY + 586);
    vertex(this.positionX + 204, this.positionY + 601);
    vertex(this.positionX + 74, this.positionY + 614);
    endShape(CLOSE);
    quad(
      this.positionX + 109,
      this.positionY + 611,
      this.positionX + 83,
      this.positionY + 667,
      this.positionX + 168,
      this.positionY + 667,
      this.positionX + 204,
      this.positionY + 601
    );
    quad(
      this.positionX + 74,
      this.positionY + 614,
      this.positionX + 50,
      this.positionY + 678,
      this.positionX + -2,
      this.positionY + 678,
      this.positionX + 4,
      this.positionY + 622
    );
        quad(
      this.positionX - 54,
      this.positionY + 616,
      this.positionX - 54,
      this.positionY + 678,
      this.positionX - 9,
      this.positionY + 678,
      this.positionX - 14,
      this.positionY + 620
    );
    pop();

    //Bumper
    quad(
      this.positionX - 255,
      this.positionY + 521,
      this.positionX - 254,
      this.positionY + 583,
      this.positionX - 214,
      this.positionY + 601,
      this.positionX - 214,
      this.positionY + 528
    );
    quad(
      this.positionX + 204,
      this.positionY + 528,
      this.positionX + 204,
      this.positionY + 601,
      this.positionX + 253,
      this.positionY + 581,
      this.positionX + 255,
      this.positionY + 522
    );
    beginShape();
    vertex(this.positionX - 214, this.positionY + 528);
    vertex(this.positionX - 214, this.positionY + 601);
    vertex(this.positionX + 4, this.positionY + 622);
    vertex(this.positionX + 204, this.positionY + 601);
    vertex(this.positionX + 204, this.positionY + 528);
    endShape(CLOSE);

    //Light
    fill(212, 167, 67);
    rect(this.positionX - 71, this.positionY + 548, 151, 50);
    quad(
      this.positionX - 139,
      this.positionY + 552,
      this.positionX - 90,
      this.positionY + 552,
      this.positionX - 90,
      this.positionY + 595,
      this.positionX - 139,
      this.positionY + 579
    );
    quad(
      this.positionX + 106,
      this.positionY + 549,
      this.positionX + 106,
      this.positionY + 586,
      this.positionX + 156,
      this.positionY + 579,
      this.positionX + 154,
      this.positionY + 549
    );

    //Left Window
    push();
    fill(16, 19, 28);
    beginShape();
    vertex(this.positionX - 202, this.positionY + 243);
    vertex(this.positionX - 194, this.positionY + 163);
    vertex(this.positionX - 186, this.positionY + 139);
    vertex(this.positionX - 101, this.positionY + 125);
    vertex(this.positionX - 19, this.positionY + 125);
    vertex(this.positionX - 16, this.positionY + 139);
    vertex(this.positionX - 27, this.positionY + 234);
    vertex(this.positionX - 120, this.positionY + 243);
    endShape(CLOSE);
    fill(206.205, 230);
    beginShape();
    vertex(this.positionX - 172, this.positionY + 153);
    vertex(this.positionX - 181, this.positionY + 171);
    vertex(this.positionX - 185, this.positionY + 243);
    vertex(this.positionX - 120, this.positionY + 243);
    vertex(this.positionX - 27, this.positionY + 234);
    vertex(this.positionX - 16, this.positionY + 144);
    endShape(CLOSE);
    pop();

    //Right Window
    push();
    fill(16, 19, 28);
    beginShape();
    vertex(this.positionX + 22, this.positionY + 128);
    vertex(this.positionX + 67, this.positionY + 128);
    vertex(this.positionX + 187, this.positionY + 139);
    vertex(this.positionX + 195, this.positionY + 145);
    vertex(this.positionX + 197, this.positionY + 233);
    vertex(this.positionX + 189, this.positionY + 246);
    vertex(this.positionX + 101, this.positionY + 243);
    vertex(this.positionX + 26, this.positionY + 230);
    vertex(this.positionX + 22, this.positionY + 193);
    endShape(CLOSE);
    fill(206.205, 230);
    beginShape();
    vertex(this.positionX + 22, this.positionY + 142);
    vertex(this.positionX + 177, this.positionY + 153);
    vertex(this.positionX + 185, this.positionY + 166);
    vertex(this.positionX + 182, this.positionY + 246);
    vertex(this.positionX + 101, this.positionY + 243);
    vertex(this.positionX + 26, this.positionY + 230);
    endShape(CLOSE);
    pop();

    line(
      this.positionX + 1,
      this.positionY + 102,
      this.positionX + 1,
      this.positionY + 282
    );
  }
}
