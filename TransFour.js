class TransFour {
  // motion() {
  //   //shaking
  //   this.positionX = this.positionX + random(-1, 1);
  //   this.positionY = this.positionY + random(-1, 1);
  // }

  drawTransFour() {
    //Hip------------------------------------------------------------------------------------------
    push();
    fill("#CECDE6");
    beginShape();
    vertex(340, 627);
    vertex(637, 643);
    vertex(664, 588);
    vertex(643, 568);
    vertex(376, 571);
    vertex(340, 624);
    endShape(CLOSE);

    beginShape();
    vertex(340, 624);
    vertex(637, 643);
    vertex(638, 703);
    vertex(519, 752);
    vertex(447, 751);
    vertex(395, 707);
    vertex(333, 672);
    endShape(CLOSE);

    quad(664, 588, 637, 643, 639, 702, 665, 660);
    pop();

    push();
    fill("#5E5D74");
    quad(447, 751, 519, 752, 514, 772, 468, 774);
    pop();

    //Hip lights
    push();
    fill("#D4A743");
    quad(437, 659, 534, 667, 531, 717, 439, 715);
    quad(427, 660, 373, 655, 374, 663, 427, 682);
    triangle(427, 688, 380, 673, 427, 707);
    quad(541, 668, 608, 668, 605, 680, 545, 691);
    triangle(545, 699, 593, 691, 545, 714);
    pop();

    //Body-----------------------------------------------------------------------------------------
    push();
    fill("#7F1C1F");
    beginShape();
    vertex(382, 295);
    vertex(634, 298);
    vertex(637, 380);
    vertex(475, 379);
    vertex(344, 360);
    vertex(382, 295);
    endShape(CLOSE);
    quad(345, 360, 345, 465, 479, 475, 475, 379);
    quad(475, 379, 479, 475, 629, 487, 637, 380);
    quad(637, 380, 629, 487, 647, 461, 649, 422);
    quad(378, 523, 429, 525, 424, 609, 381, 606);
    quad(556, 528, 555, 615, 609, 617, 609, 531);
    quad(633, 508, 609, 531, 609, 617, 637, 574);
    pop();

    push();
    fill("#7A799A");
    quad(345, 465, 374, 523, 609, 531, 629, 487);
    quad(629, 487, 609, 531, 633, 508, 647, 461);
    pop();

    //Radiator Grill
    push();
    fill("#CECDE6");
    beginShape();
    vertex(441, 473);
    vertex(434, 484);
    vertex(429, 525);
    vertex(424, 609);
    vertex(429, 617);
    vertex(538, 622);
    vertex(555, 614);
    vertex(556, 528);
    vertex(552, 528);
    vertex(552, 495);
    vertex(545, 480);
    endShape(CLOSE);
    beginShape();
    vertex(429, 617);
    vertex(441, 487);
    vertex(543, 489);
    vertex(546, 497);
    vertex(538, 622);
    endShape(CLOSE);
    quad(441, 617, 453, 495, 536, 497, 532, 622);
    line(488, 495, 482, 619);
    pop();

    //window
    push();
    fill("#10131C");
    beginShape();
    vertex(368, 386);
    vertex(359, 389);
    vertex(359, 452);
    vertex(461, 463);
    vertex(461, 395);
    endShape(CLOSE);
    fill("#CECDE6");
    quad(368, 386, 368, 445, 461, 456, 461, 395);
    fill("#10131C");
    beginShape();
    vertex(497, 395);
    vertex(500, 468);
    vertex(619, 475);
    vertex(615, 402);
    vertex(607, 397);
    endShape(CLOSE);
    fill("#CECDE6");
    beginShape();
    vertex(512, 395);
    vertex(512, 460);
    vertex(619, 465);
    vertex(615, 402);
    vertex(607, 397);
    endShape(CLOSE);
    pop();
    //Body end ----------------------------------------------------------------------------------------------

    //head Start---------------------------------------------------------------------------------------------
    push();
    fill("#5E5D74");
    beginShape();
    vertex(482, 281);
    vertex(493, 281);
    vertex(494, 311);
    vertex(486, 319);
    vertex(480, 309);
    endShape(CLOSE);
    beginShape();
    vertex(455, 329);
    vertex(481, 326);
    vertex(494, 326);
    vertex(526, 333);
    vertex(523, 356);
    vertex(455, 353);
    endShape(CLOSE);
    quad(482, 340, 490, 340, 497, 355, 476, 353);
    pop();
    //eye
    push();
    fill("#24D4F8");
    beginShape();
    vertex(455, 329);
    vertex(476, 327);
    vertex(479, 336);
    vertex(478, 341);
    vertex(456, 340);
    endShape(CLOSE);
    beginShape();
    vertex(504, 330);
    vertex(500, 336);
    vertex(503, 342);
    vertex(525, 344);
    vertex(526, 333);
    endShape(CLOSE);
    pop();
    //ear
    push();
    fill("#37387B");
    beginShape();
    vertex(551, 251);
    vertex(540, 357);
    vertex(523, 356);
    vertex(533, 290);
    vertex(539, 285);
    endShape(CLOSE);
    beginShape();
    vertex(455, 353);
    vertex(454, 287);
    vertex(446, 282);
    vertex(440, 256);
    vertex(430, 351);
    endShape(CLOSE);
    pop();
    //head Shape
    push();
    fill("#37387B");
    quad(482, 281, 488, 250, 497, 250, 493, 281);
    beginShape();
    vertex(486, 319);
    vertex(494, 311);
    vertex(493, 281);
    vertex(497, 250);
    vertex(506, 272);
    vertex(533, 290);
    vertex(529, 333);
    vertex(494, 326);
    vertex(481, 326);
    vertex(454, 329);
    vertex(454, 287);
    vertex(476, 275);
    vertex(486, 262);
    vertex(482, 281);
    vertex(480, 309);
    endShape(CLOSE);
    pop();
    //Head end----------------------------------------------------------------------------------

    //Right leg------------------------------------------------------------------------------------
    push();
    fill("#CECDE6");
    beginShape();
    vertex(345, 678);
    vertex(332, 787);
    vertex(338, 918);
    vertex(417, 922);
    vertex(432, 901);
    vertex(443, 843);
    vertex(468, 774);
    vertex(447, 751);
    vertex(395, 707);
    endShape(CLOSE);
    line(447, 751, 428, 836);
    line(428, 836, 417, 922);
    line(371, 694, 366, 814);
    line(366, 814, 416, 815);
    line(416, 815, 427, 733);
    quad(375, 864, 402, 865, 396, 921, 363, 919);
    pop();

    push()
    fill("#37387B");
    beginShape();
    vertex(337, 909);
    vertex(334, 924);
    vertex(345, 938);
    vertex(345, 974);
    vertex(347, 1000);
    vertex(413, 1000);
    vertex(412, 974);
    vertex(417, 947);
    vertex(417, 923);
    endShape(CLOSE);
    beginShape();
    vertex(435, 887);
    vertex(432, 901);
    vertex(417, 922);
    vertex(415, 927);
    vertex(417, 947);
    vertex(412, 974);
    vertex(413, 1000);
    vertex(424, 1000);
    vertex(443, 899);
    endShape(CLOSE);
    line(345,938,417,947)
    line(345,977,412,973)
    pop()
    //-----------------------------------------------------------------------------------------------
    
    //Left Leg--------------------------------------------------------------------------------
    push()
    fill("#37387B");
    beginShape()
    vertex(523,908)
    vertex(514,925)
    vertex(520,1000)
    vertex(621,1000)
    vertex(630,958)
    vertex(617,936)
    vertex(638,889)
    vertex(624,875)
    endShape(CLOSE)
    line(514,925,529,936)
    line(529,936,617,936)
    pop()
    
    push()
    beginShape()
    fill("#CECDE6");
    vertex(519,752)
    vertex(514,772)
    vertex(523,908)
    vertex(534,923)
    vertex(617,922)
    vertex(638,703)
    endShape(CLOSE)
    quad(546,741,550,841,595,841,609,715)
    quad(566,878,583,878,589,922,564,922)
    beginShape()
    vertex(638,889)
    vertex(617,936)
    vertex(614,960)
    vertex(630,958)
    vertex(639,955)
    vertex(654,932)
    vertex(657,903)
    endShape(CLOSE)
    line(617,934,652,935)
    line(616,942,648,941)
    line(539,950,542,983)
    line(542,983,588,986)
    line(588,986,593,947)
    line(541,975,589,976)
    pop()
    //-----------------------------------------------------------------------------------------------------
    
    //Right arm
    push()
    fill("#CECDE6");
    quad(309,248,247,347,255,353,319,255)
    pop()
    push()
    fill("#10131C");
    beginShape()
    vertex(223,568)
    vertex(239,615)
    vertex(254,711)
    vertex(276,705)
    vertex(276,601)
    vertex(295,576)
    endShape(CLOSE)
    pop()
    push()
    fill("#7F1C1F");
    quad(376,300,315,276,271,330,346,356)
    beginShape()
    vertex(346,356)
    vertex(271,330)
    vertex(232,386)
    vertex(233,416)
    vertex(211,440)
    vertex(211,561)
    vertex(260,585)
    vertex(259,457)
    vertex(280,400)
    vertex(341,405)
    endShape(CLOSE)
    beginShape()
    vertex(260,585)
    vertex(259,457)
    vertex(280,400)
    vertex(341,405)
    vertex(316,435)
    vertex(306,573)
    endShape(CLOSE)
    pop()
    
    
    //left Arm
    push()
    fill("#CECDE6");
    quad(700,281,777,404,782,394,709,276)
    pop()
    
    push()
    fill("#7F1C1F");
    quad(635,315,637,380,711,363,715,304)
    beginShape()
    vertex(637,380)
    vertex(649,422)
    vertex(679,458)
    vertex(704,470)
    vertex(728,508)
    vertex(782,487)
    vertex(711,363)
    endShape(CLOSE)
    quad(715,304,711,363,782,487,815,475)
    beginShape()
    vertex(260,585)
    vertex(259,457)
    vertex(280,400)
    vertex(341,405)
    vertex(316,435)
    vertex(306,573)
    endShape(CLOSE)
    quad(728,508,782,487,755,578,678,578)
    quad(782,487,755,578,766,647,815,475)
    triangle(678,578,755,578,766,647)
    pop()
    
    push()
    fill("#37387B");
    quad(713,585,752,585,762,648,738,663,713,585)
    quad(674,593,714,588,719,607,676,615)
    quad(720,609,728,634,677,633,672,616)
    quad(728,634,731,645,691,652,683,633)
    quad(697,652,732,646,737,661,707,663)
    pop()



  }
}
