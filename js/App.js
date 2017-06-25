
$(function () {
  var myView = document.getElementById('myCanvas');
  var renderer = PIXI.autoDetectRenderer(400, 400, {view:document.getElementById("myCanvas")});
  
  let stage = new PIXI.Container();

  stage.buttonMode = true;
  stage.interactive = true;
  stage.hitArea = new PIXI.Rectangle(0, 0, 800, STAGE_HEIGTH);

  stage.click = function() {
    let { x, y } = renderer.plugins.interaction.mouse.global;
    let found = Model.shapes.find(
      Model.findShapeCollision, { rad: SHAPE_RADIUS, x, y }
    );

    if(!found) {
      Model.generateShape(stage, Model.shapes, x, y);
    };
  }

  animate();

  function animate() {
    requestAnimationFrame(animate);
    Model.updateShapes(stage);
    Model.genShapesBySpeed(stage);
    renderer.render(stage);
  }
});
