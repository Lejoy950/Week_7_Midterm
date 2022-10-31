class TransSeven {
  // motion() {
  //   //shaking
  //   this.positionX = this.positionX + random(-1, 1);
  //   this.positionY = this.positionY + random(-1, 1);
  // }

  drawTransSeven() {
    //Hip------------------------------------------------------------------------------------------
    push();
    fill("#CECDE6");
    beginShape();
    vertex(414, 429);
    vertex(407, 470);
    vertex(452, 496);
    vertex(480, 528);
    vertex(505, 529);
    vertex(540, 531);
    vertex(584, 502);
    vertex(559, 496);
    vertex(552, 460);
    vertex(452, 443);
    endShape(CLOSE);

    beginShape();
    vertex(443, 405);
    vertex(439, 405);
    vertex(414, 425);
    vertex(414, 429);
    vertex(452, 443);
    vertex(545, 459);
    vertex(538, 441);
    vertex(505, 441);
    vertex(443, 419);
    endShape(CLOSE);
    pop();

    push();
    fill("#5E5D74");
    quad(480, 528, 540, 531, 529, 547, 489, 549);
    pop();

    //Hip lights
    push();
    fill("#D4A743");
    quad(466, 460, 524, 470, 523, 500, 465, 489);
    quad(427, 446, 457, 457, 457, 468, 430, 457);
    triangle(433, 463, 455, 470, 455, 483);
    quad(529, 471, 529, 483, 552, 481, 556, 471);
    triangle(529, 486, 554, 484, 528, 497);
    pop();

    //Body-----------------------------------------------------------------------------------------
    push();
    fill("#7F1C1F");
    beginShape();
    vertex(562,239)
    vertex(607,270)
    vertex(541,341)
    vertex(403,284)
    vertex(476,221)
    endShape(CLOSE);

    beginShape();
    vertex(403,284)
    vertex(402,357)
    vertex(537,416)
    vertex(542,408)
    vertex(541,341)
    endShape(CLOSE);
    quad(541,341,607,270,607,350,542,408);
    quad(443,395,443,419,459,427,459,403)
    
    beginShape()
    vertex(516,407)
    vertex(517,441)
    vertex(538,441)
    vertex(544,445)
    vertex(569,423)
    vertex(574,422)
    vertex(584,422)
    vertex(585,402)
    vertex(576,394)
    vertex(574,391)
    vertex(541,423)
    endShape(CLOSE)
    pop();

    push();
    fill("#7A799A");
    beginShape()
    vertex(409,361)
    vertex(429,386)
    vertex(452,400)
    vertex(459,403)
    vertex(457,383)
    endShape(CLOSE)
    beginShape()
    vertex(520,410)
    vertex(521,425)
    vertex(541,423)
    vertex(574,391)
    vertex(574,379)
    vertex(542,408)
    vertex(537,416)
    endShape(CLOSE)
    pop();

    //Radiator Grill
    push();
    fill("#CECDE6");
    beginShape();
    vertex(457,383)
    vertex(459,427)
    vertex(505,441)
    vertex(517,441)
    vertex(516,407)
    endShape(CLOSE);
    line(463,385,467,429)
    line(485,394,483,434)
    line(510,405,510,442)
    pop();

    //window
    push();
    fill("#10131C");
    quad(409,306,409,350,456,371,457,326);
    fill("#CECDE6");
    quad(417,309,417,345,456,363,457,326);
    fill("#10131C");
    quad(478,334,476,379,529,402,529,359);
    fill("#CECDE6");
    quad(485,337,483,375,529,396,529,359);
    pop();
    //Body end ----------------------------------------------------------------------------------------------

    //Right leg------------------------------------------------------------------------------------
    push();
    fill("#CECDE6");
    beginShape();
    vertex(409,476)
    vertex(377,548)
    vertex(368,586)
    vertex(440,592)
    vertex(480,528)
    vertex(452,496)
    endShape(CLOSE);
    quad(480,528,440,592,449,601,489,549);
    quad(423,486,402,536,436,545,457,508);
    quad(405,561,394,586,407,588,412,563);
    push();
    fill("#37387B");
    beginShape()
    vertex(368,586)
    vertex(362,588)
    vertex(307,739)
    vertex(262,975)
    vertex(270,983)
    vertex(448,983)
    vertex(455,797)
    vertex(452,613)
    vertex(449,601)
    vertex(440,592)
    endShape(CLOSE)
    beginShape()
    vertex(364,599)
    vertex(358,677)
    vertex(427,677)
    vertex(440,603)
    vertex(422,668)
    vertex(368,666)
    endShape(CLOSE)
    beginShape()
    vertex(348,720)
    vertex(310,893)
    vertex(418,897)
    vertex(416,728)
    vertex(407,722)
    endShape(CLOSE)
    
    beginShape()
    vertex(274,920)
    vertex(270,983)
    vertex(448,983)
    vertex(437,927)
    vertex(427,918)
    vertex(372,907)
    vertex(303,909)
    endShape(CLOSE)
    pop();
    push()
    fill("#10131C")
    quad(270,983,448,983,430,1000,288,1000)
    pop()
    
    push()
    fill("#CECDE6");
    beginShape()
    vertex(361,591)
    vertex(317,596)
    vertex(299,663)
    vertex(327,684)
    endShape(CLOSE)
    line(299,663,336,659)
    pop()
    //-----------------------------------------------------------------------------------------------

    //Left Leg--------------------------------------------------------------------------------
    push();
    fill("#37387B");
    beginShape();
    vertex(547,665)
    vertex(536,686)
    vertex(542,697)
    vertex(614,695)
    vertex(619,670)
    vertex(608,658)
    vertex(606,681)
    vertex(550,681)
    endShape(CLOSE);
    beginShape();
    vertex(542,697)
    vertex(548,797)
    vertex(554,813)
    vertex(607,813)
    vertex(614,695)
    endShape(CLOSE);
    
    quad(554,813,555,827,602,829,607,813)
    quad(555,827,602,829,600,858,556,857)
    pop();

    push();
    fill("#CECDE6");
    quad(620,683,627,682,624,716,616,730);
    beginShape();
    vertex(602,493)
    vertex(540,531)
    vertex(529,547)
    vertex(550,681)
    vertex(571,684)
    vertex(606,681)
    vertex(622,500)
    endShape(CLOSE);
    quad(558,527,562,596,592,596,599,511)
    quad(577,641,574,679,585,681,583,641)
    pop();

    //-----------------------------------------------------------------------------------------------------

    //Right arm

    push();
    fill("#7F1C1F");
    quad(403,284,316,267,315,300,402,325);
    quad(231,247,245,276,316,267,325,222)
    quad(214,318,245,276,316,267,315,300)
    beginShape();
    vertex(436,254)
    vertex(430,231)
    vertex(326,222)
    vertex(316,267)
    vertex(403,284)
    endShape(CLOSE);

    pop();
    push();
    fill("#10131C");
    beginShape();
    vertex(225,245)
    vertex(214,251)
    vertex(44,454)
    vertex(60,466)
    vertex(173,356)
    vertex(177,347)
    vertex(201,332)
    vertex(238,273)
    vertex()
    vertex()
    endShape(CLOSE);
    pop();

    push();
    fill("#CECDE6");
    quad(370,228,360,231,424,255,427,252);
    pop();

    //left Arm

    push();
    fill("#7F1C1F");
    beginShape();
    vertex(613,303)
    vertex(575,348)
    vertex(576,394)
    vertex(631,445)
    vertex(629,472)
    vertex(617,492)
    vertex(602,493)
    vertex(622,500)
    vertex(675,499)
    vertex(719,473)
    vertex(709,422)
    vertex()
    vertex()
    endShape(CLOSE);
    line(609,422,709,422)
    line(631,445,713,442)
    line(575,348,646,422)
    pop();

    push();
    fill("#37387B");
    beginShape();
    vertex(609,422)
    vertex(574,422)
    vertex(590,469)
    vertex(619,478)
    vertex(626,478)
    vertex(629,472)
    vertex(631,445)
    endShape(CLOSE);
    beginShape();
    vertex(589,476)
    vertex(574,489)
    vertex(584,502)
    vertex(594,494)
    vertex(585,487)
    vertex(599,490)
    vertex(619,480)
    endShape(CLOSE);
    quad(569,423,545,445,550,454,575,441);
    quad(574,445,552,460,560,470,584,460);
    quad(584,465,560,476,569,486,589,473);
    quad();
    pop();

    push();
    fill("#CECDE6");
    quad(599,287,658,358,664,345,606,282);
    pop();
    //head Start---------------------------------------------------------------------------------------------
    //head Shape
    push();
    fill("#37387B");
    beginShape();
    vertex(469, 213);
    vertex(465, 246);
    vertex(485, 245);
    vertex(517, 248);
    vertex(522, 215);
    vertex(501, 202);
    vertex(493, 189);
    vertex(490, 189);
    vertex(485, 202);
    endShape(CLOSE);
    quad(490, 189, 485, 207, 489, 207, 493, 189);
    beginShape();
    vertex(465, 246);
    vertex(462, 249);
    vertex(484, 253);
    vertex(517, 253);
    vertex(517, 248);
    vertex(485, 245);
    endShape(CLOSE);
    pop();

    push();
    fill("#5E5D74");
    beginShape();
    vertex(465, 249);
    vertex(465, 263);
    vertex(469, 267);
    vertex(468, 292);
    vertex(485, 300);
    vertex(510, 296);
    vertex(510, 266);
    vertex(517, 253);
    endShape(CLOSE);
    beginShape();
    vertex(485, 207);
    vertex(480, 235);
    vertex(485, 245);
    vertex(491, 235);
    vertex(489, 207);
    endShape(CLOSE);
    line(469, 267, 485, 263);
    line(485, 263, 485, 300);
    line(485, 263, 510, 270);
    pop();

    //ear
    push();
    fill("#37387B");
    beginShape();
    vertex(535, 185);
    vertex(527, 213);
    vertex(522, 215);
    vertex(517, 248);
    vertex(517, 253);
    vertex(510, 266);
    vertex(510, 296);
    vertex(515, 284);
    vertex(525, 284);
    endShape(CLOSE);
    beginShape();
    vertex(454, 186);
    vertex(456, 278);
    vertex(461, 277);
    vertex(468, 292);
    vertex(469, 267);
    vertex(465, 263);
    vertex(465, 249);
    vertex(462, 249);
    vertex(465, 246);
    vertex(468, 215);
    vertex(462, 211);
    endShape(CLOSE);
    pop();
    //eye
    push();
    fill("#24D4F8");
    beginShape();
    vertex(491, 261);
    vertex(494, 256);
    vertex(510, 256);
    vertex(509, 262);
    vertex(495, 265);
    endShape(CLOSE);
    beginShape();
    vertex(481, 261);
    vertex(475, 263);
    vertex(468, 258);
    vertex(468, 254);
    vertex(479, 257);
    endShape(CLOSE);
    pop();
    //Head end----------------------------------------------------------------------------------
  }
}
