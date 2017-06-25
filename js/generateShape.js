
function IncShapeArea(square) {
  SHAPES_AREA += square;
  changeArea();
}

function DecShapeArea(square) {
  SHAPES_AREA -= square;
  changeArea();
}

function IncCalcCout() {
  SHAPE_COUNT += 1;
  changeCount();
}

function DecCalcCout() {
  SHAPE_COUNT -= 1;
  changeCount();
}

function generateShape(stage, shapes, x, y) {
  const shapeType = Math.floor(Math.random()*6);
  let shape = new SHAPES[shapeType](x, y);

  IncShapeArea(shape.square);
  IncCalcCout();
  
  shapes.push(shape);
  stage.addChild(shape);

  shape.click = () => {
    stage.removeChild(shape);
    const index = shapes.findIndex((tempShape) => tempShape === shape);
    shapes.splice(index, 1);

    DecShapeArea(shape.square);
    DecCalcCout();

    shape.clear();
    delete shape;
  };
}

function genShapesBySpeed(stage, shapes) {
  if (new Date().getTime() - tempTime  >= SPEED_VALUE) {
    tempTime = new Date().getTime();
    const x = Math.floor(Math.random() * STAGE_WIDRH);
    generateShape(stage, shapes, x, START_SHAPE_HEIGTH);
  }
}