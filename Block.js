class Block {
  constructor (x,y,width,height) {
      var options = {
          restitution:0.4,
          friction:1,
          isStatic:false
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visiblity =255;
      World.add(world, this.body);
  }

display() {
  var position = this.body.position;
  var angle = this.body.angle;
  if (this.body.speed<3) {
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0, this.width, this.height)
      pop ();
  } else {
      push ();
          World.remove(world,this.body);
          this.visiblity = this.visiblity-5
          tint(255,this.visiblity)
      pop();
      
  }

}


}