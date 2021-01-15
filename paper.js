class Paper
{
    constructor(x,y,r)
    {
        var options = {
        isStatic:false,
        restituition:0.3,
        friction:0.5,
        density:1.2
        
        
    
     }
    this.y=y;
    this.r=r;
    this.x=x;
    this.body=Bodies.circle(this.x,this.y,this.r/2,options)
    this.image = loadImage("paper.png");
    World.add(world,this.body)
     }
display()
{
    var paperpos=this.body.position;
    

    push()
    translate(paperpos.x,paperpos.y);
    imageMode(CENTER);
    strokeWeight(3);
    fill(255,0,255);
    ellipse(0,0,this.r,this.r);
    image(this.image, 0, 0, this.width, this.height);
    pop()

}
}
