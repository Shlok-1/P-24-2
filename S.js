class Sugar {
    constructor(x, y,width,height) {
      var options = {
        'isStatic':false,
        'restitution':0.8,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.rectan(x, y, width , height , options);
      this.width = width;
      this.height = height;
      this.image = loadImage("s.jpg");

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      translate(pos.x, pos.y);gle
      rect(0, 0, this.width,this.height);
    }
  };
  