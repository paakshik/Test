class Ground  {

    constructor(x,y,width,height){


    this.width = width;
    this.height =  height;

    this.body = Bodies.rectangle(x,y,this.width,this.height,{isStatic: true});
    World.add(world,this.body)
}

    show(){
  
        let Angle = this.body.angle;
    push();
  
    rectMode(CENTER);
    fill('saddlebrown');
        translate(this.body.position.x,this.body.position.y);
        rotate(Angle)
rect(0,0, this.width, this.height);
    pop();

    }
    }