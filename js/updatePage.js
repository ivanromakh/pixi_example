var changeCount;
(changeCount = function() {
  document.getElementById("count").value = SHAPE_COUNT;
})();

var changeArea;
(changeArea = function() {
  document.getElementById("area").value = (SHAPES_AREA/1000).toFixed(2);
})();

var changeGravity;
(changeGravity = function() {
  document.getElementById("gravity").value = (GRAVITY_VALUE).toFixed(2);
})();

var changeSpeed;
(changeSpeed = function() {
  document.getElementById("speed").value = (SPEED_VALUE/1000).toFixed(2);
})();

function IncreaseGravity() {
  GRAVITY_VALUE += GRAVITY_CHANGE;
  changeGravity();
}

function DecreasyGravity() {
  if (GRAVITY_VALUE > MIN_GRAVITY_VALUE) {
    GRAVITY_VALUE -= GRAVITY_CHANGE;
    changeGravity();
  }
}

function IncreaseSpeed() {
  if (SPEED_VALUE > MIN_SPEED_VALUE) {
    SPEED_VALUE -= CHANGE_SPEED;
    changeSpeed();
  }
}

function DecreaseSpeed() {
  SPEED_VALUE += CHANGE_SPEED;
  changeSpeed();
}

