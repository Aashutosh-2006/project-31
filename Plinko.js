class Plinko
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,


			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position;		

		
			
			rectMode(CENTER)
	
			fill(255,0,255)
			ellipse(0,0,this.r, this.r);
			
            for(var j=40;j<width; j=j+50)
            {
                plinko.push(new Plinko(j,75));
            }
            for (var j=15; j<=width-10;j=j+50)
            {
                plinko.push(new plinko(j,175));
            }

            if(frameCount%90===0){
                particle.push(new Particle(random(width/2-10,width/2+10),10,10));
            }
    }
    

}