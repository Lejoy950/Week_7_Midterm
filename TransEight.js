class TransEight {
  // motion() {
  //   //shaking
  //   this.positionX = this.positionX + random(-1, 1);
  //   this.positionY = this.positionY + random(-1, 1);
  // }

  drawTransEight() {
    //Hip------------------------------------------------------------------------------------------
    push();
    fill("#CECDE6");
    beginShape();
    vertex(602, 497);
    vertex(601, 504);
    vertex(413, 541);
    vertex(404, 539);
    vertex(405, 582);
    vertex(472, 613);
    vertex(524, 606);
    vertex(549, 582);
    vertex(585, 552);
    vertex(611, 543);
    endShape(CLOSE);

    beginShape();
    vertex(571, 465);
    vertex(602, 497);
    vertex(601, 504);
    vertex(412, 541);
    vertex(404, 539);
    vertex(387, 466);
    endShape(CLOSE);

    quad(404, 539, 405, 582, 370, 531, 400, 533);
    pop();

    push();
    fill("#5E5D74");
    quad(524, 606, 514, 643, 484, 648, 472, 612);
    pop();

    //Hip lights
    push();
    fill("#D4A743");
    quad(471, 545, 542, 533, 543, 566, 475, 575);
    quad(429, 545, 465, 549, 467, 560, 433, 556);
    triangle(466, 565, 467, 577, 432, 560);
    quad(550, 530, 582, 523, 582, 534, 550, 547);
    triangle(553, 547, 582, 539, 555, 561);
    pop();

    //Body-----------------------------------------------------------------------------------------
    push();
    fill("#7F1C1F");
    beginShape();
    vertex(617, 332);
    vertex(435, 383);
    vertex(368, 295);
    vertex(438, 265);
    vertex(544, 260);
    endShape(CLOSE);
    quad(617, 332, 435, 383, 439, 457, 612, 418);
    quad(435, 383, 439, 457, 370, 398, 368, 295);

    beginShape();

    endShape(CLOSE);
    quad(571, 457, 571, 490, 555, 495, 555, 460);
    quad(443, 476, 481, 476, 484, 514, 443, 512);
    quad(443, 476, 443, 512, 389, 488, 384, 422);
    pop();

    push();
    fill("#7A799A");
    quad(609, 419, 555, 431, 555, 460, 571, 457);
    quad(439, 457, 482, 448, 481, 476, 443, 476);
    quad(439, 457, 443, 476, 380, 419, 394, 412);
    pop();

    //Radiator Grill
    push();
    fill("#CECDE6");
    beginShape();
    vertex(482, 448);
    vertex(481, 476);
    vertex(484, 514);
    vertex(555, 496);
    vertex(555, 431);
    endShape(CLOSE);
    quad(487, 451, 545, 440, 549, 498, 489, 514);
    line(519, 445, 521, 505);
    pop();

    //window
    push();
    fill("#10131C");
    quad(514, 372, 449, 394, 449, 445, 514, 425);
    fill("#CECDE6");
    quad(508, 374, 507, 421, 449, 440, 449, 394);
    fill("#10131C");
    quad(542, 366, 606, 353, 606, 405, 540, 419);
    fill("#CECDE6");
    quad(601, 354, 600, 399, 540, 413, 542, 366);
    pop();
    //Body end ----------------------------------------------------------------------------------------------

    //Right leg------------------------------------------------------------------------------------
    push();
    fill("#CECDE6");
    beginShape();
    vertex(484, 648);
    vertex(472, 613);
    vertex(405, 582);
    vertex(378, 547);
    vertex(380, 602);
    vertex(403, 769);
    vertex(474, 767);
    vertex(479, 741);
    endShape(CLOSE);
    quad(400, 575, 412, 688, 453, 688, 455, 605);
    quad(426, 731, 443, 730, 448, 770, 428, 770);
  

    push();
    fill("#37387B");
    beginShape();
    vertex(395, 726);
    vertex(382, 735);
    vertex(366, 761);
    vertex(376, 895);
    vertex(400, 1000);
    vertex(461, 1000);
    vertex(479, 782);
    vertex(485, 751);
    vertex(479, 743);
    vertex(474, 767);
    vertex(403, 769);
    endShape(CLOSE);
    line(396, 783, 382, 735);
    line(396, 783, 479, 782);
    line(396, 783, 403, 966);
    line(403, 966, 411, 1000);
    line(412, 799, 420, 851);
    line(420, 851, 455, 851);
    line(455, 851, 463, 801);
    line(421, 879, 411, 962);
    line(421, 879, 449, 881);
    line(449, 881, 458, 959);

    push();
    fill("#CECDE6");
    beginShape();
    vertex(362, 764);
    vertex(370, 787);
    vertex(371, 810);
    vertex(384, 821);
    vertex(382, 788);
    vertex(374, 753);
    endShape(CLOSE);
    pop();

    pop();
    //-----------------------------------------------------------------------------------------------

    //Left Leg--------------------------------------------------------------------------------
    push();
    fill("#37387B");
    beginShape();
    vertex(555,709)
    vertex(553,726)
    vertex(560,791)
    vertex(593,879)
    vertex(663,879)
    vertex(654,838)
    vertex(654,797)
    vertex(667,758)
    vertex(667,734)
    endShape(CLOSE);
    
    quad(579,760,577,797,654,797,667,758)
    quad(577,797,595,841,654,838,654,797)
    quad(595,841,654,838,663,879,593,879)
    line(589,765,595,777)
    line(595,777,646,777)
    line(646,777,653,765)
    pop();
    
    push();
    fill("#CECDE6");
    beginShape();
    vertex(603,546)
    vertex(587,555)
    vertex(549,582)
    vertex(524,606)
    vertex(524,620)
    vertex(514,643)
    vertex(581,750)
    vertex(665,745)
    vertex(667,720)
    vertex(634,610)
    endShape(CLOSE);
    quad(549,582,587,555,622,638,583,643)
    quad(603,695,620,694,637,746,619,747)
    line(526,612,584,740)
    line(584,740,581,750)
    pop();

    //-----------------------------------------------------------------------------------------------------

    //Right arm

    push();
    fill("#7F1C1F");
    beginShape();
    vertex(403,407)
    vertex(368,295)
    vertex(312,332)
    vertex(233,448)
    vertex(296,534)
    vertex(340,536)
    vertex(327,492)
    vertex(358,479)
    vertex(336,441)
    endShape(CLOSE);
    line(276,442,368,295);
    line(276,442,233,448);
    line(276,442,327,492);
    line(276,442,336,441)

    pop();
    push();
    fill("#10131C");
    beginShape();
    vertex(358,479);
    vertex(331,490)
    vertex(340,536)
    vertex(553,521)
    vertex(554,494)
    vertex(539,490)
    endShape(CLOSE);
    pop();

    push();
    fill("#CECDE6");
    quad(368,300,309,361,312,369,372,305);
    pop();

    //left Arm

    push();
    fill("#7F1C1F");
    beginShape();
    vertex(561,280)
    vertex(609,326)
    vertex(617,332)
    vertex(615,369)
    vertex(690,369)
    vertex(695,448)
    vertex(739,440)
    vertex(782,464)
    vertex(787,326)
    vertex(578,245)
    endShape(CLOSE);
    line(690,369,787,326)
    line(630,301,739,347)
    line(739,347,739,440 )
    quad(578,245,630,301,613,321,561,265)
    pop();

    push();
    fill("#37387B");
    beginShape();
    vertex(776,461)
    vertex(739,440)
    vertex(700,447)
    vertex(697,478)
    vertex(751,482)
    vertex(772,495)
    endShape(CLOSE);
    quad(700,479,697,514,710,515,713,480);
    quad(718,481,710,520,727,523,735,484);
    quad(738,482,728,519,740,522,750,485);
    quad(755,487,746,517,757,520,766,490);
    pop();

    push();
    fill("#CECDE6");
    quad(591,257,593,265,670,279,675,275);
    pop();


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
