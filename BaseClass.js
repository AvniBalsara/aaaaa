class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
        
            'friction':2.0,
            'density':2.0,
            'isStatic':true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        
        pop();
      }
}