class Mango
{
	constructor(x,y,width,height)
	{
		var options={
			isStatic:true,
			restitution:0,
			friction:1,
			

			
			}
		
        this.image=loadImage("sprites/mango.png")
		this.body=Bodies.rectangle(x,y,width,height, options)
		this.width=width
		this.height=height
		World.add(world, this.body);

	}
	display()
	{
			
			var position=this.body.position;		
            var angle=this.body.angle
			push()
			
			translate(position.x,position.y);
			rotate(angle)
			image(this.image,this.body.position.x,this.body.position.y,100,100)
			pop()
			
	}

}