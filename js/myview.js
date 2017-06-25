var myView = document.getElementById('myCanvas');
var renderer = PIXI.autoDetectRenderer(400, 400, {view:document.getElementById("myCanvas")});
  
let shapes = [];
let stage = new PIXI.Container();

stage.buttonMode = true;
stage.interactive = true;
stage.hitArea = new PIXI.Rectangle(0, 0, 800, STAGE_HEIGTH);
stage.click = clickOnStage;

animate();

function animate() {
  requestAnimationFrame(animate);
  shapes.forEach((shape, index, shaps) => {
    shape.fallDown();
    if (shape.checkDestroy()) {
      stage.removeChild(shape);
      shaps.splice(index, 1);
      shape.clear();
      delete shape;
    }
  });
  genShapesBySpeed(stage, shapes);
  renderer.render(stage);
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function convertToHex(str) {
  var hex = '';
  for(var i=0;i<str.length;i++) {
      hex += ''+str.charCodeAt(i).toString(16);
  }
  return hex;
}
