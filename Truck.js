class Truck {
  constructor(positionX, positionY) {
    this.positionX = positionX;
    this.positionY = positionY;
  }

  motion() {
    //shaking
    this.positionX = this.positionX + random(-1, 1);
    this.positionY = this.positionY + random(-1, 1);
  }

  drawTruck() {
    //Cargo
    fill(94, 93, 116);
    beginShape();
    vertex(this.positionX - 263, this.positionY + 585);
    vertex(this.positionX - 263, this.positionY + 11);
    vertex(this.positionX - 231, this.positionY + 0);
    vertex(this.positionX + 244, this.positionY + 2);
    vertex(this.positionX + 268, this.positionY + 21);
    vertex(this.positionX + 266, this.positionY + 586);
    endShape(CLOSE);
    line(
      this.positionX + 6,
      this.positionY + 1,
      this.positionX + 6,
      this.positionY + 128
    );

    //Front MainBody
    fill(127, 28, 31);
    beginShape();
    vertex(this.positionX - 235, this.positionY + 574);
    vertex(this.positionX - 242, this.positionY + 326);
    vertex(this.positionX - 230, this.positionY + 204);
    vertex(this.positionX - 211, this.positionY + 144);
    vertex(this.positionX - 70, this.positionY + 128);
    vertex(this.positionX + 84, this.positionY + 128);
    vertex(this.positionX + 214, this.positionY + 144);
    vertex(this.positionX + 232, this.positionY + 205);
    vertex(this.positionX + 244, this.positionY + 321);
    vertex(this.positionX + 230, this.positionY + 574);
    endShape(CLOSE);
    rect(this.positionX - 216, this.positionY + 444, 89, 112);
    rect(this.positionX + 138, this.positionY + 442, 82, 112);
    //Radiator Grill
    fill(122, 121, 154);
    beginShape();
    vertex(this.positionX - 242, this.positionY + 326);
    vertex(this.positionX - 237, this.positionY + 422);
    vertex(this.positionX - 213, this.positionY + 417);
    vertex(this.positionX - 103, this.positionY + 419);
    vertex(this.positionX - 102, this.positionY + 574);
    vertex(this.positionX + 115, this.positionY + 574);
    vertex(this.positionX + 120, this.positionY + 419);
    vertex(this.positionX + 215, this.positionY + 419);
    vertex(this.positionX + 236, this.positionY + 425);
    vertex(this.positionX + 244, this.positionY + 330);
    vertex(this.positionX + 220, this.positionY + 324);
    vertex(this.positionX + 138, this.positionY + 319);
    vertex(this.positionX - 83, this.positionY + 317);
    vertex(this.positionX - 215, this.positionY + 321);
    endShape(CLOSE);
    line(
      this.positionX - 237,
      this.positionY + 346,
      this.positionX - 217,
      this.positionY + 343
    );
    line(
      this.positionX - 217,
      this.positionY + 343,
      this.positionX - 95,
      this.positionY + 343
    );
    line(
      this.positionX - 95,
      this.positionY + 419,
      this.positionX - 95,
      this.positionY + 343
    );
    line(
      this.positionX - 213,
      this.positionY + 417,
      this.positionX - 95,
      this.positionY + 419
    );
    line(
      this.positionX + 239,
      this.positionY + 349,
      this.positionX + 194,
      this.positionY + 345
    );
    line(
      this.positionX + 194,
      this.positionY + 345,
      this.positionX + 105,
      this.positionY + 343
    );
    line(
      this.positionX + 105,
      this.positionY + 343,
      this.positionX + 105,
      this.positionY + 396
    );
    line(
      this.positionX + 109,
      this.positionY + 419,
      this.positionX + 105,
      this.positionY + 396
    );
    line(
      this.positionX + 109,
      this.positionY + 419,
      this.positionX + 215,
      this.positionY + 419
    );

    fill(206, 205, 230);
    quad(
      this.positionX - 102,
      this.positionY + 574,
      this.positionX - 90,
      this.positionY + 559,
      this.positionX + 107,
      this.positionY + 559,
      this.positionX + 115,
      this.positionY + 574
    );
    beginShape();
    vertex(this.positionX - 81, this.positionY + 559);
    vertex(this.positionX - 82, this.positionY + 338);
    vertex(this.positionX - 63, this.positionY + 330);
    vertex(this.positionX + 3, this.positionY + 325);
    vertex(this.positionX + 74, this.positionY + 330);
    vertex(this.positionX + 94, this.positionY + 341);
    vertex(this.positionX + 94, this.positionY + 559);
    endShape(CLOSE);
    beginShape();
    vertex(this.positionX - 69, this.positionY + 559);
    vertex(this.positionX - 73, this.positionY + 348);
    vertex(this.positionX - 60, this.positionY + 338);
    vertex(this.positionX - 9, this.positionY + 336);
    vertex(this.positionX + 71, this.positionY + 338);
    vertex(this.positionX + 81, this.positionY + 348);
    vertex(this.positionX + 81, this.positionY + 559);
    endShape(CLOSE);
    rect(this.positionX + 1, this.positionY + 336, 7, 223);

    //wheel
    push();
    fill(16, 19, 28);
    rect(this.positionX - 265, this.positionY + 643, 74, 41);
    rect(this.positionX + 190, this.positionY + 643, 74, 41);
    pop();

    //Bumper
    quad(
      this.positionX - 272,
      this.positionY + 587,
      this.positionX - 226,
      this.positionY + 574,
      this.positionX - 226,
      this.positionY + 661,
      this.positionX - 269,
      this.positionY + 641
    );
    quad(
      this.positionX + 218,
      this.positionY + 574,
      this.positionX + 272,
      this.positionY + 588,
      this.positionX + 269,
      this.positionY + 639,
      this.positionX + 218,
      this.positionY + 663
    );
    rect(this.positionX - 226, this.positionY + 574, 445, 88);

    //Light
    fill(212, 167, 67);
    rect(this.positionX - 146, this.positionY + 603, 51, 33);
    rect(this.positionX - 75, this.positionY + 598, 160, 40);
    rect(this.positionX + 113, this.positionY + 601, 51, 30);

    //Left Window
    push();
    fill(16, 19, 28);
    beginShape();
    vertex(this.positionX - 213, this.positionY + 276);
    vertex(this.positionX - 206, this.positionY + 192);
    vertex(this.positionX - 197, this.positionY + 167);
    vertex(this.positionX - 106, this.positionY + 152);
    vertex(this.positionX - 19, this.positionY + 152);
    vertex(this.positionX - 16, this.positionY + 167);
    vertex(this.positionX - 28, this.positionY + 267);
    vertex(this.positionX - 126, this.positionY + 276);
    endShape(CLOSE);
    fill(206.205, 230);
    beginShape();
    vertex(this.positionX - 182, this.positionY + 181);
    vertex(this.positionX - 192, this.positionY + 201);
    vertex(this.positionX - 195, this.positionY + 276);
    vertex(this.positionX - 126, this.positionY + 276);
    vertex(this.positionX - 28, this.positionY + 267);
    vertex(this.positionX - 16, this.positionY + 172);
    endShape(CLOSE);
    pop();

    //Right Window
    push();
    fill(16, 19, 28);
    beginShape();
    vertex(this.positionX + 24, this.positionY + 155);
    vertex(this.positionX + 72, this.positionY + 155);
    vertex(this.positionX + 199, this.positionY + 167);
    vertex(this.positionX + 207, this.positionY + 173);
    vertex(this.positionX + 210, this.positionY + 265);
    vertex(this.positionX + 202, this.positionY + 279);
    vertex(this.positionX + 106, this.positionY + 276);
    vertex(this.positionX + 28, this.positionY + 264);
    vertex(this.positionX + 24, this.positionY + 223);
    endShape(CLOSE);
    fill(206.205, 230);
    beginShape();
    vertex(this.positionX + 24, this.positionY + 170);
    vertex(this.positionX + 188, this.positionY + 182);
    vertex(this.positionX + 197, this.positionY + 195);
    vertex(this.positionX + 194, this.positionY + 279);
    vertex(this.positionX + 108, this.positionY + 276);
    vertex(this.positionX + 28, this.positionY + 262);
    endShape(CLOSE);
    pop();
  }
}
