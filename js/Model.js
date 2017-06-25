let Model = {
  shapes: [],
  updateShapes: function(stage) {
    this.shapes.forEach((shape, index, shaps) => {
      shape.fallDown();
      if (shape.checkDestroy()) {
        stage.removeChild(shape);
        shaps.splice(index, 1);
        shape.clear();
        delete shape;
      }
    });
  },
  genShapesBySpeed: function(stage) {
    if (new Date().getTime() - tempTime  >= SPEED_VALUE) {
      tempTime = new Date().getTime();
      const x = Math.floor(Math.random() * STAGE_WIDTH);
      this.generateShape(stage, this.shapes, x, START_SHAPE_HEIGTH);
    }
  },
  generateShape: function(stage, shapes, x, y) {
    const shapeType = Math.floor(Math.random()*6);
    let shape = new SHAPES[shapeType](x, y);

    this.IncShapeArea(shape.square);
    this.IncCalcCout();
  
    shapes.push(shape);
    stage.addChild(shape);

    shape.click = () => {
      stage.removeChild(shape);
      const index = shapes.findIndex((tempShape) => tempShape === shape);
      shapes.splice(index, 1);

      this.DecShapeArea(shape.square);
      this.DecCalcCout();

      shape.clear();
      delete shape;
    };
  },
  IncShapeArea: function(square) {
    SHAPES_AREA += square;
    View.changeArea();
  },

  DecShapeArea: function(square) {
    SHAPES_AREA -= square;
    View.changeArea();
  },

  IncCalcCout: function() {
    SHAPE_COUNT += 1;
    View.changeCount();
  },

  DecCalcCout: function() {
    SHAPE_COUNT -= 1;
    View.changeCount();
  },
  getRandomColor: function() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  },

  convertToHex: function(str) {
    var hex = '';
    for(var i=0;i<str.length;i++) {
        hex += ''+str.charCodeAt(i).toString(16);
    }
    return hex;
  },
  findShapeCollision: function(shape, index, shapes) {
    if(shape.x <= this.x+this.rad && shape.x >= this.x-this.rad) {
      if(shape.y <= this.y+this.rad && shape.y >= this.y-this.rad) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
};