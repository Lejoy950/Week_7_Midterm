class TransTwo {
  // motion() {
  //   //shaking
  //   this.positionX = this.positionX + random(-1, 1);
  //   this.positionY = this.positionY + random(-1, 1);
  // }

  drawTransTwo() {
    //Right Cargo
    push();
    fill(94, 93, 116);
    beginShape();
    vertex(284, 800);
    vertex(263, 779);
    vertex(276, 418);
    vertex(300, 414);
    vertex(312, 418);
    vertex(284, 800);
    endShape(CLOSE);
    //Left Cargo
    beginShape();
    vertex(703, 800);
    vertex(734, 779);
    vertex(719, 423);
    vertex(686, 421);
    vertex(703, 800);
    endShape(CLOSE);
    pop();
    
    //arm pipe
    push()
    fill(122, 121, 154);
    beginShape();
    vertex(311, 325);
    vertex(308, 406);
    vertex(312, 418);
    vertex(325, 379);
    vertex(322, 328);
    endShape(CLOSE);
    
    beginShape();
    vertex(689, 333);
    vertex(690, 408);
    vertex(689, 414);
    vertex(689, 421);
    vertex(674, 388);
    vertex(677, 337);
    endShape(CLOSE);
    pop()
    
    //Arms
    //R
    push()
    fill(127, 28, 31);
    beginShape();
    vertex(317, 380);
    vertex(471, 377);
    vertex(495, 396);
    vertex(492, 414);
    vertex(311, 426);
    endShape(CLOSE);
    //L
    beginShape();
    vertex(503, 414);
    vertex(509, 397);
    vertex(596, 381);
    vertex(685, 389);
    vertex(686, 427);
    endShape(CLOSE);
    pop()
    
    //Front MainBody
    fill(127, 28, 31);
    beginShape();
    vertex(298, 428);
    vertex(289, 482);
    vertex(284, 800);
    vertex(703, 800);
    vertex(709, 481);
    vertex(693, 428);
    vertex(572, 414);
    vertex(430, 414);
    endShape(CLOSE);
    rect(316, 699, 63, 75);
    rect(619, 692, 67, 88);

    //Radiator Grill
    fill(122, 121, 154);
    beginShape();
    vertex(285, 575);
    vertex(285, 674);
    vertex(289, 670);
    vertex(298, 670);
    vertex(402, 672);
    vertex(401, 800);
    vertex(606, 800);
    vertex(607, 672);
    vertex(707, 672);
    vertex(710, 576);
    vertex(622, 569);
    vertex(417, 568);
    vertex(294, 571);
    endShape(CLOSE);

    line(285, 606, 410, 603);
    line(410, 603, 410, 672);
    line(410, 672, 402, 672);

    line(709, 603, 587, 605);
    line(587, 672, 707, 672);

    push();
    fill(206, 205, 230);
    quad(412, 787, 401, 800, 606, 800, 599, 787);
    beginShape();
    vertex(421, 787);
    vertex(420, 586);
    vertex(438, 579);
    vertex(501, 575);
    vertex(568, 579);
    vertex(587, 589);
    vertex(587, 787);
    endShape(CLOSE);
    beginShape();
    vertex(432, 787);
    vertex(429, 596);
    vertex(441, 586);
    vertex(489, 584);
    vertex(565, 587);
    vertex(575, 596);
    vertex(575, 787);
    endShape(CLOSE);
    rect(499, 585, 6, 201);
    pop();

    //Left leg
    fill(206, 205, 230)
    quad(269, 856, 444, 884, 444, 1000, 305, 1000);
    quad(444, 884, 480, 888, 489, 1000, 444, 1000);
    quad(300, 871, 326, 985, 408, 989, 398, 800);
    //Right leg
    quad(563, 883, 728, 851, 693, 1000, 549, 1000);
    quad(599, 880, 694, 870, 667, 989, 582, 989);
    quad(499, 889, 563, 883, 549, 1000, 496, 1000);

    //Bumper
    fill(206, 205, 230)
    quad(263, 779, 284, 800, 284, 869, 264, 849);
    quad(703, 800, 734, 779, 733, 847, 703, 869);
    beginShape();
    vertex(284, 800);
    vertex(703, 800);
    vertex(703, 869);
    vertex(503, 889);
    vertex(284, 869);
    endShape(CLOSE);

    //Light
    fill(212, 167, 67);
    rect(427, 819, 139, 54);
    quad(359, 823, 408, 823, 408, 864, 359, 849);
    quad(598, 829, 647, 821, 649, 849, 598, 864);

    //Right Window
    fill(16, 19, 28);
    beginShape();
    vertex(320, 437);
    vertex(315, 461);
    vertex(311, 536);
    vertex(378, 539);
    vertex(476, 539);
    vertex(478, 449);
    vertex(475, 436);
    endShape(CLOSE);
    fill(206.205, 230);
    beginShape();
    vertex(478, 453);
    vertex(337, 446);
    vertex(327, 464);
    vertex(328, 536);
    vertex(378, 539);
    vertex(476, 539);
    endShape(CLOSE);
    //Left Window
    fill(16, 19, 28);
    beginShape();
    vertex(519, 436);
    vertex(517, 538);
    vertex(600, 542);
    vertex(672, 541);
    vertex(680, 529);
    vertex(677, 449);
    vertex(670, 444);
    vertex(519, 436);
    endShape(CLOSE);
    fill(206.205, 230);
    beginShape();
    vertex(518, 455);
    vertex(517, 538);
    vertex(600, 542);
    vertex(665, 541);
    vertex(668, 468);
    vertex(660, 457);
    vertex(518, 455);
    endShape(CLOSE);
  }
}
