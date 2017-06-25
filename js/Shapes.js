class Shape extends PIXI.Graphics {
  constructor() {
    super();
    this.destroy = false;
    this.gravity = GRAVITY_VALUE;
    this.speed = 0.1;
    this.radius = SHAPE_RADIUS;

    this.interactive = true;
    this.buttonMode = true;
    this.hitArea = new PIXI.Rectangle(-25, -25, 50, 50);
  }

  fillShape(cords, x, y) {
    this.beginFill(convertToHex(getRandomColor()),1);
    this.drawPolygon(cords);
    this.x = x;
    this.y = y;
    this.endFill();
  }

  fallDown() {
    this.y += this.speed;
    this.speed = this.speed * this.gravity; 
  }

  checkDestroy(stage) {
    return this.y > STAGE_HEIGTH+ this.radius*2;
  }
}

class ThreeSideShape extends Shape {
  constructor(x, y) {
    super();
    const rad = this.radius;

    this.fillShape([
      -rad, rad, 
      rad, rad, 
      0, -rad,
    ], x, y);

    this.square = Math.pow(rad, 2) * 2;
  }
}

class RectSideShape extends Shape {
  constructor(x, y) {
    super();
    let rad = this.radius;

    this.fillShape([
      -rad, rad,
      rad, rad,
      rad, -rad,
      -rad, -rad,
    ], x, y);

    this.square = Math.pow(rad, 2) * 2;
  }
}

class FiveSideShape extends Shape {
  constructor(x, y) {
    super();
    const rad = this.radius;
    const halfR = rad/2;

    this.fillShape([
      -rad, 0, 
      0, -rad, 
      rad, 0,
      halfR,rad,
      -halfR,rad,
    ], x, y);

    this.square = Math.pow(rad, 2) * 2;
  }
}

class SixSideShape extends Shape {
  constructor(x, y) {
    super();
    const rad = this.radius;
    const halfR = rad/2;

    this.beginFill(convertToHex(getRandomColor()),1);
    this.drawPolygon([
      -rad, 0, 
      -halfR, -rad,
      halfR, -rad,
      rad, 0,
      halfR, rad,
      -halfR, rad,
    ]);
    this.x = x;
    this.y = y;
    this.endFill();
    this.square = Math.pow(rad, 2) * 3;
  }
}

class CircleSideShape extends Shape {
  constructor(x, y) {
    super();
    this.beginFill(convertToHex(getRandomColor()),1);
    this.drawCircle(0, 0, this.radius);
    this.endFill();
    this.x = x;
    this.y = y;
    this.interactive = true;
    this.buttonMode = true;
    this.square = Math.PI * Math.pow(this.radius, 2) * 2;
  }
}

class ElipsSideShape extends Shape {
  constructor(x, y) {
    super();
    this.beginFill(convertToHex(getRandomColor()),1);
    this.drawEllipse(0, 0, this.radius/2, this.radius);
    this.x = x;
    this.y = y;
    this.endFill();
    this.square = Math.PI * Math.pow(this.radius, 2) / 2;
  }
}