class TransThree {
  // motion() {
  //   //shaking
  //   this.positionX = this.positionX + random(-1, 1);
  //   this.positionY = this.positionY + random(-1, 1);
  // }

  drawTransThree() {

    //arm pipe
    push()
    fill(122, 121, 154);
    beginShape();
    vertex(224, 270);
    vertex(221, 429);
    vertex(227, 435);
    vertex(238, 344);
    vertex(238, 330);
    vertex(231, 333);
    vertex(232, 270);
    endShape(CLOSE);
    
    beginShape();
    vertex(757, 356);
    vertex(768, 278);
    vertex(778, 282);
    vertex(775, 440);
    vertex(769, 443);
    endShape(CLOSE);
    pop()
    
    //Arms
    //R
    push()
    fill(127, 28, 31);
    beginShape();
    vertex(315, 653);
    vertex(240, 650);
    vertex(243, 454);
    vertex(227, 440);
    vertex(227, 354);
    vertex(329, 354);
    endShape(CLOSE);
    quad(329,354,227,354,261,321,340,320)
    //L
    beginShape();
    vertex(658, 371);
    vertex(772, 369);
    vertex(769, 446);
    vertex(747, 486);
    vertex(741, 670);
    vertex(676, 670);
    endShape(CLOSE);
    quad(658,371,632,330,726,330,772,369)
    pop()
    
    //Bumper (hide)
    push()
    fill(206, 205, 230)
    beginShape();
    vertex(686, 705);
    vertex(647, 712);
    vertex(458, 715);
    vertex(306, 702);
    vertex(294, 686);
    vertex(310, 660);
    vertex(673, 664);
    endShape(CLOSE);
    pop()
    
    //Radiator Grill
    fill(122, 121, 154);
    beginShape();
    vertex(306, 501);
    vertex(306, 598);
    vertex(430, 605);
    vertex(435, 565);
    vertex(447, 556);
    vertex(556, 556);
    vertex(559, 605);
    vertex(667, 602);
    vertex(676, 600);
    vertex(681, 523);
    vertex(681, 500);
    vertex(334, 512);
    endShape(CLOSE);

    line(315, 541, 435, 548);
    line(435, 548, 665, 548);
    line(665, 548, 680, 533);
    
    //Front MainBody
    fill(127, 28, 31);
    beginShape();
    vertex(320, 383);
    vertex(307, 436);
    vertex(303,500);
    vertex(334, 512);
    vertex(494, 516);
    vertex(673, 516);
    vertex(683, 494);
    vertex(667, 386);
    endShape(CLOSE);
    
    beginShape();
    vertex(315, 598);
    vertex(315, 682);
    vertex(332,694);
    vertex(660, 697);
    vertex(672, 689);
    vertex(676, 600);
    endShape(CLOSE);
    
    quad(320,383,340,320,627,323,667,386)


    //Radiator Grill
    push();
    fill(206, 205, 230);
    beginShape();
    vertex(432, 699);
    vertex(430, 605);
    vertex(435, 565);
    vertex(447, 556);
    vertex(556, 556);
    vertex(559, 605);
    vertex(559, 605);
    vertex(560, 699);
    endShape(CLOSE);
    beginShape();
    vertex(439, 699);
    vertex(442, 568);
    vertex(498, 564);
    vertex(551, 565);
    vertex(552, 699);
    endShape(CLOSE);
    rect(493, 565, 10, 134);
    pop();

    //Left leg
    fill(206, 205, 230)
    quad(318, 760, 456, 821, 453, 1000, 333, 1000);
    quad(352, 779, 421, 807, 418, 945, 366, 943);
    quad(379, 975, 412, 975, 416, 1000, 375, 1000);
    quad(456,821,481,821,474,1000,453,1000)
    //Right leg
    quad(530, 821, 523, 1000, 638, 1000, 659, 772);
    quad(554, 817, 620, 793, 600, 947, 552, 945);
    quad(567, 975, 598, 979, 598, 1000, 561, 1000);
    quad(530,821,507,821,507,1000,523,1000)

    //Bumper
    fill(206, 205, 230)
    beginShape();
    vertex(294, 686);
    vertex(296, 747);
    vertex(345, 777);
    vertex(456, 821);
    vertex(549, 819);
    vertex(620, 793);
    vertex(686, 757);
    vertex(686, 705);
    vertex(647, 712);
    vertex(458, 715);
    vertex(306, 702);
    endShape(CLOSE);


    //Light
    fill(212, 167, 67);
    quad(428, 732, 547, 736, 547, 799, 431, 799);
    quad(420, 732, 421, 758, 354, 745, 349, 734);
    quad(560, 735, 629, 732, 629, 742, 560, 760);
    triangle(375,766,421,769,421,792)
    triangle(558,768,608,760,557,790)


    //Right Window
    fill(16, 19, 28);
    beginShape();
    vertex(339, 402);
    vertex(325, 472);
    vertex(329, 486);
    vertex(364, 490);
    vertex(470, 491);
    vertex(475, 421);
    vertex(470, 406);
    endShape(CLOSE);
    fill(206.205, 230);
    beginShape();
    vertex(349, 402);
    vertex(336, 466);
    vertex(337, 477);
    vertex(470, 483);
    vertex(475, 421);
    vertex(470, 406);
    endShape(CLOSE);
    //Left Window
    fill(16, 19, 28);
    beginShape();
    vertex(513, 408);
    vertex(509, 419);
    vertex(509, 490);
    vertex(513, 495);
    vertex(652, 495);
    vertex(659, 478);
    vertex(651, 406);
    vertex(513, 408);
    endShape(CLOSE);
    fill(206.205, 230);
    beginShape();
    vertex(509, 483);
    vertex(640, 486);
    vertex(649, 473);
    vertex(640, 406);
    vertex(513, 408);
    vertex(509, 419);
    endShape(CLOSE);
  }
}
