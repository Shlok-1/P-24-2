class Milk {
    constructor(x, y,width,height) {
      var options = {
        'isStatic':false,
        'restitution':0.8,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, width , height , options);
      this.width = width;
      this.height = height;
      this.image = loadImage("milk.jpg");

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      translate(pos.x, pos.y);
      rect(0, 0, this.width,this.height);
    }
  };
  