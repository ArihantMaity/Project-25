class Balls{
    constructor(x,y){
        var balloptions ={
            isStatic:false,
            restitution: 0.3,
            friction:0,
            density:1.6
        

        }
       
        this.body =  Bodies.rectangle(x,y,80,80,balloptions);
        
       this.width=80;
       this.height=80;
       this.image=loadImage("paper ball.png");
      
        
       
        World.add(world,this.body);
    }

    display(){
        var pose=this.body.position;
        var ang=this.body.angle;
        push()
        translate(pose.x,pose.y);
        rotate(ang);
        imageMode(CENTER);
        
       
        image(this.image,0, 0,this.width,this.height);
    
        pop();

    }
}