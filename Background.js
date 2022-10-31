class Background {
  // motion() {
  //   //shaking
  //   this.positionX = this.positionX + random(-1, 1);
  //   this.positionY = this.positionY + random(-1, 1);
  // }

  drawBackground() {
    //Grass
    fill("#1A231B")
    beginShape()
    vertex(0,869)
    vertex(73,904)
    vertex(41,900)
    vertex(154,932)
    vertex(89,924)
    vertex(211,950)
    vertex(198,964)
    vertex(0,964)
    endShape(CLOSE)
    
    beginShape()
    vertex(1000,861)
    vertex(938,852)
    vertex(949,866)
    vertex(918,866)
    vertex(931,884)
    vertex(866,908)
    vertex(821,910)
    vertex(839,916)
    vertex(766,933)
    vertex(786,945)
    vertex(745,953)
    vertex(1000,947)
    endShape(CLOSE)
    
  //GROUND
    fill("#472C2A")
    beginShape()
    vertex(0,946)
    vertex(256,954)
    vertex(502,954)
    vertex(887,946)
    vertex(1000,937)
    vertex(1000,1000)
    vertex(0,1000)
    endShape(CLOSE)
    

  }
}
