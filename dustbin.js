class Dustbin {
    constructor(x,y){
        var option={
            isStatic : true
        }
        this.x = x;
        this.y = y;
        this.width = 200;
        this.height = 100;
        this.thickness = 20;
        this.angle = 0;
        this.image = loadImage("dustbingreen.png");
        this.bottombody = Bodies.rectangle(this.x,this.y,this.width,this.thickness,option)
        this.leftbody = Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.thickness,this.height,option)
        this.rightbody = Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness,this.height,option)
        Matter.Body.setAngle(this.leftbody,this.angle)
        Matter.Body.setAngle(this.rightbody,this.angle)
        World.add(world,this.bottombody)
        World.add(world,this.leftbody)
        World.add(world,this.rightbody)

    
    }
    display(){
        var left = this.leftbody.position;
        var right = this.rightbody.position;
        var bottom = this.bottombody.position;

        push ()
        translate (left.x,left.y)
        rectMode(CENTER)
        stroke(255)
        fill(255)
        rotate(this.angle)
        rect(0,0,this.thickness,this.height)
        image(this.image, 0, 0, this.width, this.height);
        pop ()


        push ()
         translate (right.x,right.y)
         rectMode(CENTER)
         stroke(255)
         fill(255)
         rotate(-1*this.angle)
         rect(0,0,this.thickness,this.height)
         pop ()


         push ()
         translate (bottom.x,bottom.y)
         rectMode(CENTER)
         stroke(255)
         fill(255)
         rect(0,0,this.width,this.thickness)
         pop ()
    }
}