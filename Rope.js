class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    var options={
    bodyA:bodyA,
    bodyB:bodyB,
    pointB:{x:this.offsetX,y:this.offsetY},
    }
     this.Rope=Constraint.create(options)
    World.add(world,this.Rope)
    }
    display(){
    var posA=this.Rope.bodyA.position;
    var posB=this.Rope.bodyB.position;
    
    var Anchor1X = posA.x;
    var Anchor1Y = posA.y-13;
    
    var Anchor2X = posB.x + this.offsetX;
    var Anchor2Y = posB.y + this.offsetY;
    stroke("black");
    strokeWeight(3);
    line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);
    }
    }