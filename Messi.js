class Messi {
    constructor(x,y,r)
      {
          var options = { 
              density: 1, 
              frictionAir: 1
          };
          this.x=x;
          this.y=y;
          this.r=r;
          this.image=loadImage("messi_0.png");
          this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
          World.add(world, this.body);
  
      }
      
      display()
      {
              
              var messiPos =this.body.position;		
              push()
              translate(messiPos.x, messiPos.y-100);
              rectMode(CENTER)
              fill(255,0,255)
              imageMode(CENTER);
              image(this.image, 0,0,270, this.r)
              pop()
              
      }
  }
  