class Ball {
    constructor(x,y,r,width,height)
      {
          var options = { 
            'restitution': 0.8,  
            'density': 0.04, 
            'friction': 1,
          };
          this.x=x;
          this.y=y;
          this.r=r;
          this.width = width;
        this.height = height;
          this.image=loadImage("balon_0.png");
          this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
          World.add(world, this.body);
  
      }
      
      display()
      {
              
              var ballPos=this.body.position;		
              push()
              translate(ballPos.x, ballPos.y-100);
              rectMode(CENTER)
              fill(255,0,255)            
              imageMode(CENTER);
              image(this.image, 0,0,this.r+0.5, this.r)
              pop()
              
      }
  }
  