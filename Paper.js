class Paper
{
    constructor(x, y, r){
var options={
isStatic: false,
restitution: 0.3,
friction: 0.5,
desity: 1.2


}

this.body = Bodies.circle(this.x, this.y, this.r/2, options);
this.x = x;
this.y = y;
this.r = r;  
World.add(world, this.body);

}

display()
{
    var paperpos= this.body.position;

    push()
    translate(paperpos.x, paperpos.y);
    rectMode(CENTER);
    strokeWeight(3);
    stroke("white");
    fill("white");
    ellipse(0, 0, this.r, this.r);
    pop();

}
}