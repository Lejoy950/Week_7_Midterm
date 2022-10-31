class TransNine {
  // motion() {
  //   //shaking
  //   this.positionX = this.positionX + random(-1, 1);
  //   this.positionY = this.positionY + random(-1, 1);
  // }

  drawTransNine() {
    //Hip------------------------------------------------------------------------------------------
    push();
    fill("#CECDE6");
    beginShape();
    vertex(550,405)
    vertex(554,405)
    vertex(569,417)
    vertex(550,418)
    endShape(CLOSE);

    beginShape();
    vertex(581,442)
    vertex(586,470)
    vertex(541,494)
    vertex(510,525)
    vertex(453,531)
    vertex(409,503)
    endShape(CLOSE);
    pop();

    push();
    fill("#5E5D74");
    quad(453,531,510,525,504,549,464,547);
    pop();

    //Hip lights
    push();
    fill("#D4A743");
    quad(536,457,566,446,563,457,536,468);
    quad(469,482,470,500,529,489,528,460);
    quad(464,486,460,484,449,489,465,497)
    pop();

    //Body-----------------------------------------------------------------------------------------
    push();
    fill("#7F1C1F");
    beginShape();
    vertex(451,341)
    vertex(451,408)
    vertex(456,416)
    vertex(591,357)
    vertex(589,284)
    endShape(CLOSE);

    beginShape();
    vertex()
    endShape(CLOSE);
    quad(386,270,384,343,451,408,451,341);
     
    beginShape()
    vertex(550,395)
    vertex(541,400)
    vertex(534,403)
    vertex(534,418)
    vertex(550,418)
    endShape(CLOSE)
    
    beginShape()
    vertex(419,391)
    vertex(417,394)
    vertex(408,402)
    vertex(409,422)
    vertex(451,421)
    endShape(CLOSE)
    
    beginShape()
    vertex(432,239)
    vertex(386,270)
    vertex(452,341)
    vertex(589,284)
    vertex(517,222)
    endShape(CLOSE)
    pop();
    
    push();
    fill("#7A799A");
    beginShape()
    vertex(419,379)
    vertex(419,391)
    vertex(451,421)
    vertex(474,420)
    vertex(474,410)
    vertex(456,416)
    vertex(451,408)
    endShape(CLOSE)
    
    beginShape()
    vertex(584,361)
    vertex(536,383)
    vertex(534,403)
    vertex(564,386)
    endShape(CLOSE)

    pop();
    
    // //Radiator Grill
    push();
    fill("#CECDE6");
    quad(474,410,474,420,534,418,536,383)
    line(530,385,529,418)
    line(508,394,509,419)
    line(483,405,483,420)
    pop();

//     //window
    push();
    fill("#10131C");
    quad(515,334,517,379,464,402,465,359);
    fill("#CECDE6");
    quad(465,359,464,396,510,375,508,337);
    fill("#10131C");
    quad(536,326,537,371,584,350,584,306);
    fill("#CECDE6");
    quad(576,309,576,345,537,363,537,326);
    pop();
    //Body end ----------------------------------------------------------------------------------------------

    //Right leg------------------------------------------------------------------------------------
    push();
    fill("#CECDE6");
    beginShape();
    vertex(464,547)
    vertex(453,531)
    vertex(391,493)
    vertex(371,500)
    vertex(387,681)
    vertex(443,681)
    endShape(CLOSE);
    quad(394,511,435,527,431,596,401,596);
    quad(410,641,408,681,419,679,416,641);
    quad(366,682,369,716,377,730,373,683);
    push();
    fill("#37387B");
    beginShape()
    vertex(385,658)
    vertex(374,670)
    vertex(379,695)
    vertex(451,697)
    vertex(457,686)
    vertex(446,665)
    vertex(443,681)
    vertex(387,681)
    endShape(CLOSE)
    beginShape()
    vertex(379,695)
    vertex(386,813)
    vertex(439,813)
    vertex(445,797)
    vertex(451,748)
    vertex(451,697)
    endShape(CLOSE)
    quad(386,813,439,813,438,827,391,829)
    quad(438,827,391,829,394,858,437,857)
    pop();


    //-----------------------------------------------------------------------------------------------

    //Left Leg--------------------------------------------------------------------------------
    push();
    fill("#37387B");
    beginShape();
    vertex(553,592)
    vertex(545,601)
    vertex(541,613)
    vertex(538,797)
    vertex(545,983)
    vertex(723,983)
    vertex(731,975)
    vertex(686,739)
    vertex(631,588)
    vertex(625,586)
    endShape(CLOSE);
    beginShape();
    vertex(553,603)
    vertex(566,677)
    vertex(635,677)
    vertex(629,599)
    vertex(625,667)
    vertex(571,668)
    endShape(CLOSE);
    
    quad(586,722,591,891,683,893,645,720)
    beginShape()
    vertex(556,927)
    vertex(545,983)
    vertex(723,983)
    vertex(719,920)
    vertex(690,909)
    vertex(621,907)
    vertex(566,918)
    endShape(CLOSE)
    pop();

    push();
    fill("#CECDE6");
    quad();
    beginShape();
    vertex(584,476)
    vertex(541,496)
    vertex(513,528)
    vertex(504,549)
    vertex(545,601)
    vertex(553,592)
    vertex(625,586)
    vertex(616,548)
    endShape(CLOSE);
    quad(536,508,570,486,591,536,557,545)
    quad(581,563,588,561,599,586,586,588)
    line(513,528,553,592)
    pop();
    
    push()
    fill("#10131C")
    quad(545,983,723,983,705,1000,563,1000)
    pop()

    //-----------------------------------------------------------------------------------------------------

    //Right arm

    push();
    fill("#7F1C1F");
    quad(380,303,285,422,347,422,418,348);
    quad(418,348,347,422,384,422,417,394)
    beginShape();
    vertex(285,422)
    vertex(274,473)
    vertex(318,499)
    vertex(371,500)
    vertex(391,493)
    vertex(419,422)
    endShape(CLOSE);
    line(280,442,412,445)
    pop();
    push();
    fill("#10131C");
    beginShape();
    vertex(584,416)
    vertex(419,422)
    vertex(391,493)
    vertex(409,503)
    vertex(584,441)
    endShape(CLOSE);
    pop();

    push();
    fill("#CECDE6");
    quad(386,283,394,287,335,358,329,345);
    pop();

    //left Arm

    push();
    fill("#7F1C1F");
    beginShape();
    vertex(538,237)
    vertex(618,219)
    vertex(623,228)
    vertex(667,222)
    vertex(762,247)
    vertex(749,276)
    vertex(749,309)
    vertex(678,300)
    vertex(591,325)
    vertex(589,284)
    endShape(CLOSE);
    line(667,222,678,300)
    line(589,284,677,267)
    line(677,267,749,276)
    pop();

    push();
    fill("#37387B");
    beginShape();
    vertex(757,281)
    vertex(757,309)
    vertex(780,318)
    vertex(790,313)
    vertex(790,305)
    vertex(775,304)
    vertex(780,292)
    endShape(CLOSE);
    beginShape();
    vertex(784,289)
    vertex(798,301)
    vertex(792,318)
    vertex(784,322)
    vertex(789,329)
    vertex(813,315)
    vertex(813,272)
    endShape(CLOSE);
    
    quad(773,250,757,278,778,288,806,265)
 
    pop();

    push();
    fill("#CECDE6");
    quad(566,252,569,255,634,231,623,228);
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
