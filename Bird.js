class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
  }
  keyPressed(){
    if(keyCode === 32) {
        this.body.position.x = 200;
        this.body.position.y = 50;
    }
} 
}
