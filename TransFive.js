class TransFive {
  // motion() {
  //   //shaking
  //   this.positionX = this.positionX + random(-1, 1);
  //   this.positionY = this.positionY + random(-1, 1);
  // }

  drawTransFive() {
    //Hip------------------------------------------------------------------------------------------
    push();
    fill("#CECDE6");
    beginShape();
    vertex(399,509);
    vertex(371,544);
    vertex(591,586);
    vertex(617,505);
    endShape(CLOSE);

    beginShape();
    vertex(371,544);
    vertex(591,586);
    vertex(597,651);
    vertex(513,670);
    vertex(445,662);
    vertex(368,600);
    endShape(CLOSE);

    quad(591,586,597,651,628,607,617,505);
    pop();

    push();
    fill("#5E5D74");
    quad(445,662,513,670,500,705,459,701);
    pop();

    //Hip lights
    push();
    fill("#D4A743");
    quad(445,590,513,595,508,638,445,632);
    quad(396,576,399,592,434,603,434,584);
    triangle(409,603,436,612,434,628);
    quad(524,598,568,600,567,608,523,614);
    triangle(517,625,516,638,550,621);
    pop();

    //Body-----------------------------------------------------------------------------------------
    push();
    fill("#7F1C1F");
    beginShape();
    vertex(414, 269);
    vertex(359, 341);
    vertex(472, 364);
    vertex(591, 370);
    vertex(641, 278);
    endShape(CLOSE);
    quad(359, 341, 472, 364, 467, 456, 364, 437);
    quad(472, 364, 467, 456, 584, 474, 591, 370);
    quad(591, 370, 584, 474, 631, 430, 641, 278);
    beginShape();
    vertex(399, 478);
    vertex(400, 548);
    vertex(419, 552);
    vertex(418, 472);
    vertex(415, 479);
    endShape(CLOSE);
    beginShape();
    vertex(531, 500);
    vertex(526, 563);
    vertex(562, 566);
    vertex(607, 506);
    vertex(610, 473);
    vertex(574, 500);
    vertex(531, 500);
    endShape(CLOSE);
    line(574,500,562,566)
    pop();

    push();
    fill("#7A799A");
    quad(364, 437, 389, 477, 415, 479, 427, 450);
    quad(524, 464, 529, 500, 574, 500, 584, 474);
    quad(631, 430, 623, 464, 574, 500, 584, 474);
    pop();

    //Radiator Grill
    push();
    fill("#CECDE6");
    beginShape();
    vertex(418,472)
    vertex(419,552)
    vertex(467,559)
    vertex(526,563)
    vertex(531,500)
    vertex(524,464)
    vertex(427,450)
    endShape(CLOSE);
    quad(432,467,467,469,467,559,428,553)
    quad(467,469,467,559,515,562,513,476)
    pop();

    //window
    push();
    fill("#10131C");
    quad(369, 363, 369, 426, 448, 441, 450, 377);
    fill("#CECDE6");
    quad(381, 365, 381, 420, 447, 432, 450, 377);
    fill("#10131C");
    quad(486, 379, 488, 445, 573, 454, 576, 392);
    fill("#CECDE6");
    quad(496, 381, 495, 436, 573, 447, 576, 392);
    pop();
    //Body end ----------------------------------------------------------------------------------------------

    //Right leg------------------------------------------------------------------------------------
    push();
    fill("#CECDE6");
    beginShape();
    vertex(368,600)
    vertex(342,710)
    vertex(337,798)
    vertex(409,803)
    vertex(445,662)
    endShape(CLOSE);
    quad(382,613,421,643,419,705,372,699)
    quad(445,662,459,701,428,779,409,803);
    quad(376,737,393,737,385,802,362,800)
    pop();

    push();
    fill("#37387B");
    beginShape();
    vertex(346,800)
    vertex(359,809)
    vertex(359,833)
    vertex(360,867)
    vertex(425,872)
    vertex(441,791)
    vertex(440,749)
    vertex(428,779)
    vertex(409,803)
    endShape(CLOSE);
    quad(359,833,415,835,415,863,360,861)
    pop();
    //-----------------------------------------------------------------------------------------------

    //Left Leg--------------------------------------------------------------------------------
    push();
    fill("#37387B");
    beginShape();
    vertex(513,806)
    vertex(504,831)
    vertex(505,839)
    vertex(501,1000)
    vertex(600,1000)
    vertex(622,803)
    vertex(596,770)
    endShape(CLOSE);
    beginShape()
    vertex(522,854)
    vertex(523,907)
    vertex(572,910)
    vertex(571,854)
    vertex(561,901)
    vertex(529,900)
    endShape(CLOSE)
    quad(530,927,518,1000,564,1000,560,927)
    line(505,839,591,845)
    line(591,845,617,798)
    line(591,845,581,1000)
    pop();

    push();
    fill("#CECDE6");
    beginShape();
    vertex(513,670)
    vertex(521,823)
    vertex(554,829)
    vertex(585,826)
    vertex(601,743)
    vertex(607,637)
    vertex(597,651)
    endShape(CLOSE);
    quad(513,670,500,705,513,806,521,823)
    quad(539,664,585,653,581,749,542,752)
    quad(554,772,567,772,567,828,554,829)
    beginShape();
    vertex(622,803)
    vertex(597,843)
    vertex(600,890)
    vertex(612,890)
    vertex(628,867)
    vertex(642,819)
    endShape(CLOSE);
    line(628,867,625,843)
    line(625,843,597,843)
    line(625,843,642,819)
    pop();
    
    //-----------------------------------------------------------------------------------------------------

    //Right arm
    push();
    fill("#CECDE6");
    quad(383,221,383,225,297,305,298,286);
    pop();
    push();
    fill("#7F1C1F");
    quad(342,309,377,232,414,269,362,337);
    beginShape();
    vertex(342,309)
    vertex(262,383)
    vertex(308,392)
    vertex(359,363)
    vertex(359,341)
    vertex(362,337)
    endShape(CLOSE);
    quad(377,232,218,377,262,383,342,309)
    beginShape();
    vertex(218,377)
    vertex(199,496)
    vertex(216,502)
    vertex(258,525)
    vertex(280,498)
    vertex(308,392)
    endShape(CLOSE);
    line(262,381,254,480)
    pop();
    push();
    fill("#10131C");
    beginShape();
    vertex(235,477)
    vertex(254,480)
    vertex(258,525)
    vertex(227,672)
    vertex(211,672)
    vertex(216,502)
    endShape(CLOSE);
    pop();

    //left Arm

    push();
    fill("#7F1C1F");
    quad(645,303,694,301,681,366,605,366);
    beginShape();
    vertex(605,366);
    vertex(681,366);
    vertex(694,301);
    vertex(797,432);
    vertex(705,567);
    vertex(703,510);
    vertex(661,490);
    vertex(692,456);
    vertex(631,430)
    endShape(CLOSE);
    quad(692,456,745,437,703,511,661,490)
    line(745,437,681,366)
    pop();

    push();
    fill("#37387B");
    quad(703,511,703,566,674,584,653,512);
    quad(687,511,672,498,638,498,625,512);
    quad(617,513,617,534,656,528,651,512);
    quad(612,536,656,528,662,548,616,552);
    quad(663,550,618,552,626,566,668,564);
    quad(628,566,668,567,664,581,636,575)
    pop();
    
    push();
    fill("#CECDE6");
    quad(694,326,690,338,748,411,753,400);
    pop();


    //head Start---------------------------------------------------------------------------------------------
    //head Shape
    push();
    fill("#37387B");
    beginShape();
    vertex(471, 218);
    vertex(466, 264);
    vertex(541, 265);
    vertex(541, 218);
    vertex(519, 208);
    vertex(512, 186);
    vertex(507, 181);
    vertex(489, 206);
    endShape(CLOSE);
    quad(507, 181, 495, 213, 510, 213, 512, 186);
    quad(500, 256, 510, 256, 541, 265, 466, 264);
    pop();

    push();
    fill("#5E5D74");
    beginShape();
    vertex(495, 213);
    vertex(495, 248);
    vertex(503, 256);
    vertex(509, 249);
    vertex(510, 213);
    endShape(CLOSE);
    beginShape();
    vertex(466, 264);
    vertex(466, 282);
    vertex(474, 293);
    vertex(474, 324);
    vertex(498, 336);
    vertex(527, 321);
    vertex(529, 290);
    vertex(538, 281);
    vertex(541, 265);
    endShape(CLOSE);
    beginShape();
    vertex(499, 272);
    vertex(492, 295);
    vertex(500, 296);
    vertex(509, 294);
    vertex(506, 272);
    endShape(CLOSE);
    line(474, 292, 500, 296);
    line(500, 296, 529, 290);
    line(500, 296, 500, 336);
    pop();

    //ear
    push();
    fill("#37387B");
    beginShape();
    vertex(446, 187);
    vertex(454, 298);
    vertex(474, 324);
    vertex(474, 293);
    vertex(466, 282);
    vertex(466, 264);
    vertex(470, 225);
    vertex(457, 224);
    endShape(CLOSE);
    beginShape();
    vertex(541, 223);
    vertex(541, 265);
    vertex(538, 281);
    vertex(529, 290);
    vertex(527, 321);
    vertex(546, 309);
    vertex(556, 260);
    vertex(561, 190);
    vertex(552, 224);
    endShape(CLOSE);
    pop();
    //eye
    push();
    fill("#24D4F8");
    beginShape();
    vertex(491, 272);
    vertex(474, 269);
    vertex(470, 273);
    vertex(484, 280);
    vertex(492, 278);
    endShape(CLOSE);
    beginShape();
    vertex(517, 272);
    vertex(512, 278);
    vertex(523, 282);
    vertex(536, 276);
    vertex(534, 270);
    endShape(CLOSE);
    pop();
    //Head end----------------------------------------------------------------------------------
  }
}
