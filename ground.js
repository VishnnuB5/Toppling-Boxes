class Ground
{
constructor(x,y,width,height)
{
var options=
{
    IsStatice:true
}

    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);

}
display()
{
    var pos=this.body.position;
    rectMode(CENTRE);
    fill=rgb(255,0,0);
    rect(pos.x,pos.y,this.width,this.height);
}
}