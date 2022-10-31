class TransSix {
  // motion() {
  //   //shaking
  //   this.positionX = this.positionX + random(-1, 1);
  //   this.positionY = this.positionY + random(-1, 1);
  // }

  drawTransSix() {
    //Hip------------------------------------------------------------------------------------------
    push();
    fill("#CECDE6");
    beginShape();
    vertex(396, 504);
    vertex(394, 546);
    vertex(412, 552);
    vertex(449, 582);
    vertex(474, 606);
    vertex(526, 613);
    vertex(593, 582);
    vertex(593, 539);
    vertex(585, 541);
    endShape(CLOSE);

    beginShape();
    vertex(593, 539);
    vertex(585, 541);
    vertex(396, 504);
    vertex(427, 465);
    vertex(610, 466);
    endShape(CLOSE);

    quad(593, 539, 597, 533, 627, 531, 593, 582);
    pop();

    push();
    fill("#5E5D74");
    quad(474, 606, 483, 643, 513, 648, 526, 613);
    pop();

    //Hip lights
    push();
    fill("#D4A743");
    quad(456, 533, 526, 545, 523, 575, 455, 566);
    quad(416, 523, 448, 530, 448, 547, 416, 534);
    triangle(416, 539, 445, 547, 442, 561);
    quad(532, 549, 569, 545, 565, 556, 531, 560);
    triangle(532, 565, 565, 560, 531, 577);
    pop();

    //Body-----------------------------------------------------------------------------------------
    push();
    fill("#7F1C1F");
    beginShape();
    vertex(445, 260);
    vertex(380, 332);
    vertex(562, 383);
    vertex(636, 335);
    vertex(559, 265);
    endShape(CLOSE);
    quad(380, 332, 385, 418, 558, 457, 562, 383);
    quad(562, 383, 558, 457, 631, 376, 635,335);

    beginShape();

    endShape(CLOSE);
    quad(427, 457, 442, 460, 443, 495, 427, 490);
    quad(517, 476, 513, 514, 554, 512, 555, 476);
    quad(555, 476, 554, 512, 602, 452, 613, 422);
    pop();

    push();
    fill("#7A799A");
    quad(389, 419, 427, 457, 442, 460, 443, 431);
    quad(516, 448, 558, 457, 555, 476, 517, 476);
    quad(558, 457, 555, 476, 618, 419, 600, 412);
    pop();

    //Radiator Grill
    push();
    fill("#CECDE6");
    beginShape();
    vertex(443, 431);
    vertex(442, 460);
    vertex(443, 496);
    vertex(513, 515);
    vertex(517, 476);
    vertex(516, 448);
    endShape(CLOSE);
    quad(452, 440, 479, 445, 477, 505, 449, 498);
    quad(479, 445, 477, 505, 509, 514, 510, 451);
    pop();

    //window
    push();
    fill("#10131C");
    quad(392, 353, 392, 405, 457, 419, 455, 366);
    fill("#CECDE6");
    quad(396, 354, 398, 399, 457, 413, 455, 366);
    fill("#10131C");
    quad(483, 372, 483, 425, 548, 445, 548, 394);
    fill("#CECDE6");
    quad(490, 374, 491, 421, 548, 440, 548, 394);
    pop();
    //Body end ----------------------------------------------------------------------------------------------

    //Right leg------------------------------------------------------------------------------------
    push();
    fill("#CECDE6");
    beginShape();
    vertex(394, 546);
    vertex(363, 610);
    vertex(330, 720);
    vertex(333, 745);
    vertex(417, 750);
    vertex(483, 643);
    vertex(473, 620);
    vertex(474, 606);
    vertex(449, 582);
    vertex(412, 552);
    endShape(CLOSE);
    quad(411, 555, 375, 646, 415, 652, 449, 582);
    quad(378, 694, 394, 695, 379, 747, 360, 746);
    line(417, 750, 473, 620);

    push();
    fill("#37387B");
    beginShape();
    vertex(330, 734);
    vertex(330, 758);
    vertex(343, 797);
    vertex(343, 838);
    vertex(335, 879);
    vertex(405, 879);
    vertex(437, 791);
    vertex(445, 726);
    vertex(442, 709);
    vertex(417, 750);
    vertex(333, 745);
    endShape(CLOSE);
    quad(343, 797, 420, 797, 403, 841, 343, 838);
    quad(343, 838, 403, 841, 405, 879, 335, 879);
    line(330, 734, 335, 756);
    line(335, 756, 418, 760);
    line(418, 760, 445, 726);
    line(418, 760, 420, 797);
    line(345, 765, 351, 777);
    line(351, 777, 403, 777);
    line(403, 777, 409, 765);
    pop();
    //-----------------------------------------------------------------------------------------------

    //Left Leg--------------------------------------------------------------------------------
    push();
    fill("#37387B");
    beginShape();
    vertex(512, 750);
    vertex(518, 782);
    vertex(601, 783);
    vertex(615, 735);
    vertex(602, 726);
    endShape(CLOSE);
    beginShape();
    vertex(518, 782);
    vertex(536, 1000);
    vertex(587, 1000);
    vertex(594, 966);
    vertex(601, 783);
    endShape(CLOSE);
    beginShape();
    vertex(615, 735);
    vertex(601, 783);
    vertex(594, 966);
    vertex(587, 1000);
    vertex(598, 1000);
    vertex(621, 895);
    vertex(632, 761);
    endShape(CLOSE);
    line(535, 801, 542, 851);
    line(542, 851, 578, 851);
    line(578, 851, 585, 799);
    line(540, 959, 548, 881);
    line(548, 881, 576, 879);
    line(576, 879, 587, 962);
    pop();

    push();
    fill("#CECDE6");
    beginShape();
    vertex(526, 613);
    vertex(523, 767);
    vertex(561, 771);
    vertex(594, 769);
    vertex(618, 602);
    vertex(619, 547);
    vertex(593, 582);
    endShape(CLOSE);
    quad(526, 613, 513, 648, 518, 743, 523, 767);
    beginShape();
    vertex(624, 753);
    vertex(615, 788);
    vertex(614, 821);
    vertex(627, 810);
    vertex(628, 787);
    vertex(635, 764);
    endShape(CLOSE);
    beginShape();
    vertex(542, 605);
    vertex(545, 688);
    vertex(586, 688);
    vertex(596, 634);
    vertex(593, 582);
    endShape(CLOSE);
    beginShape();
    vertex(555, 730);
    vertex(550, 770);
    vertex(570, 770);
    vertex(571, 731);
    endShape(CLOSE);
    pop();

    //-----------------------------------------------------------------------------------------------------

    //Right arm

    push();
    fill("#7F1C1F");
    quad(420,245,367,301,385,321,436,265);
    beginShape();
    vertex(420,245);
    vertex(318,273);
    vertex(229,321);
    vertex(166,394);
    vertex(176,402);
    vertex(206,451);
    vertex(299,369);
    vertex(382,369);
    vertex(380,332);
    vertex(436,265);
    endShape(CLOSE);
    line(420,245,367,301)
    line(367,301,385,321)
    line(367,301,245,354)
    line(245,354,229,321)
    line(245,354,299,369)
    line(245,354,210,399)
    pop();
    push();
    fill("#10131C");
    beginShape();
    vertex(199,384);
    vertex(176,402);
    vertex(89,579);
    vertex(113,591);
    vertex(206,451);
    vertex(210,399);
    endShape(CLOSE);
    pop();
    
    push();
    fill("#CECDE6");
    quad(394,260,392,267,328,279,323,275);
    pop();

    //left Arm

    push();
    fill("#7F1C1F");
    beginShape();
    vertex(594,407);
    vertex(662,441);
    vertex(639,462);
    vertex(671,492);
    vertex(658,536);
    vertex(764,448);
    vertex(685,332);
    vertex(636,334);
    endShape(CLOSE);
    
    
    pop();

    push();
    fill("#37387B");
    beginShape()
    vertex(639,462)
    vertex(611,463)
    vertex(629,514)
    vertex(625,539)
    vertex(658,536)
    vertex(663,492)
    vertex(657,478)
    endShape(CLOSE)
    quad(612,466,579,477,582,489,616,479);
    quad(578,492,617,483,621,500,582,508);
    quad(586,507,624,502,625,515,588,519);
    quad(595,523,626,520,627,531,596,535);
    quad();
    pop();

    push();
    fill("#CECDE6");
    quad(625,305,629,300,688,361,685,369);
    pop();
    
    line(662,441,764,448)
    line(636,334,721,442)
    line(721,442,671,492)
    //head Start---------------------------------------------------------------------------------------------
    //head Shape
    push();
    fill("#37387B");
    beginShape();
    vertex(471, 231);
    vertex(468, 267);
    vertex(465, 270);
    vertex(490, 275);
    vertex(529, 275);
    vertex(529, 269);
    vertex(535, 231);
    vertex(510, 215);
    vertex(501, 200);
    vertex(497, 200);
    vertex(492, 215);
    endShape(CLOSE);
    quad(497, 200, 491, 220, 497, 220, 501, 200);
    beginShape();
    vertex(468, 267);
    vertex(465, 270);
    vertex(490, 275);
    vertex(529, 275);
    vertex(529, 269);
    vertex(491, 265);
    endShape(CLOSE);
    pop();

    push();
    fill("#5E5D74");
    beginShape();
    vertex(468, 271);
    vertex(468, 287);
    vertex(473, 292);
    vertex(471, 321);
    vertex(491, 330);
    vertex(521, 326);
    vertex(521, 290);
    vertex(529, 275);
    vertex(490, 275);
    endShape(CLOSE);
    beginShape();
    vertex(491, 220);
    vertex(497, 220);
    vertex(498, 253);
    vertex(491, 265);
    vertex(485, 254);
    endShape(CLOSE);
    line(473, 292, 491, 287);
    line(491, 287, 491, 330);
    line(491, 287, 521, 295);
    pop();

    //ear
    push();
    fill("#37387B");
    beginShape();
    vertex(535, 231);
    vertex(529, 269);
    vertex(529, 275);
    vertex(521, 290);
    vertex(521, 326);
    vertex(527, 312);
    vertex(538, 312);
    vertex(550, 195);
    vertex(541, 228);
    endShape(CLOSE);
    beginShape();
    vertex(455, 196);
    vertex(457, 304);
    vertex(463, 303);
    vertex(471, 321);
    vertex(473, 292);
    vertex(468, 287);
    vertex(468, 271);
    vertex(465, 270);
    vertex(468, 267);
    vertex(471, 231);
    vertex(464, 226);
    endShape(CLOSE);
    pop();
    //eye
    push();
    fill("#24D4F8");
    beginShape();
    vertex(487, 284);
    vertex(485, 279);
    vertex(472, 276);
    vertex(471, 281);
    vertex(479, 287);
    endShape(CLOSE);
    beginShape();
    vertex(498, 285);
    vertex(503, 289);
    vertex(519, 286);
    vertex(521, 279);
    vertex(501, 279);
    endShape(CLOSE);
    pop();
    //Head end----------------------------------------------------------------------------------
  }
}
