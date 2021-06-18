class Box{
    constructor(x, y, width,height){
        var options={
            // 'restitution' : 1.2,
            'friction' :1.1,
            'density' :1.4,
            'isStatic' :false
        }
        this.Body = Bodies.rectangle(x, y, width, height, options);
        this.width=width;
        this.height=height;
        World.add(world, this.Body);
        
    }
    display(){
        push();
        translate(this.Body.position.x, this.Body.position.y);
        rectMode(CENTER);
        fill("purple");
        rect(0,0,this.width,this.height);
        pop();
       }
   }