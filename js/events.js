
function clickOnStage() {
  let { x, y } = renderer.plugins.interaction.mouse.global;
  let found = shapes.find(findShapeCollision, { rad: SHAPE_RADIUS, x, y });

  if(!found) {
    generateShape(stage, shapes, x, y);
  }
}