class Parent{

constructor(x,y,width,height,angle){
var describer = {
density: 1,
restitution: 0.5,
friction: 1,
isStatic:false
}
this.width = width;
this.height =  height;
this.body = Bodies.rectangle(x,y, width,height,describer);
this.image = loadImage('Images/base.png');
World.add(world, this.body)
}
show() {
    let Angle = this.body.angle;
push(); 
 translate(this.body.position.x,this.body.position.y);
 imageMode(CENTER);
 rotate(Angle)
 image(this.image,0,0, this.width, this.height);
pop();

}

}