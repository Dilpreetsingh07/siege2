class Block1 {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution:0.1,
          density:0.5
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.x=x
      this.y=y
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){ if(this.body.speed<3){
      push();
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
         }
       
       else{
         
         World.remove(world,this.body)
        push();
         this.visibilty=this.visibilty-5
         tint(255,this.visibilty);
         pop();
       }
        push();
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };
