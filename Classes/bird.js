class Bird extends Parent{
constructor(x, y) {
super(x,y,50,50);
this.image = loadImage('Images/bird.png');
}

show(){
        let pos = this.body.position;
        pos.x = mouseX;
pos.y = mouseY;
super.show();

}
}