class Ball{
    constructor(x,y){
        var options = {
            friction: 0.3,
            
            density : 2          
        }
        this.rain = Bodies.circle(x,y,10,options)
        this.radius = 25;
        World.add(world, this.rain);
    }

    update(){     
        if(this.rain.position.y > height){

            Matter.Body.setPosition(this.rain, {x:random(0,800), y:random(0,800)})
        }
    }

    Display(){
        fill('red')
        ellipseMode(CENTER);
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
    }
}