    class Blocks  extends Parent{
constructor(x, y, width, height) {
super(x,y,width,height);
this.image = loadImage('Images/wood1.png');
}
}
    class Pig extends Parent{
    
        constructor(x, y) {
            super(x,y,50,50);
            this.image = loadImage('Images/enemy.png');
       
        }
 
        
        }

        class Logs extends Parent{
    
            constructor(x, y,width, height,angle) {
        
                super(x,y,width,height,angle);
                this.image = loadImage('Images/wood2.png');
Matter.Body.setAngle(this.body,angle)
             
            }
        
          
            
            }
        