let View = {
  changeCount: function() {
    document.getElementById("count").value = SHAPE_COUNT;
  },
  changeArea: function() {
    document.getElementById("area").value = (SHAPES_AREA/1000).toFixed(2);
  },
  changeGravity: function() {
    document.getElementById("gravity").value = (GRAVITY_VALUE).toFixed(2);
  },
  changeSpeed: function() {
    document.getElementById("speed").value = (SPEED_VALUE/1000).toFixed(2);
  },
  IncreaseGravity: function() {
    GRAVITY_VALUE += GRAVITY_CHANGE;
    this.changeGravity();
  },
  DecreasyGravity: function() {
    if (GRAVITY_VALUE > MIN_GRAVITY_VALUE) {
      GRAVITY_VALUE -= GRAVITY_CHANGE;
      this.changeGravity();
    }
  },
  IncreaseSpeed: function () {
    if (SPEED_VALUE > MIN_SPEED_VALUE) {
      SPEED_VALUE -= CHANGE_SPEED;
      this.changeSpeed();
    }
  },
  DecreaseSpeed: function() {
    SPEED_VALUE += CHANGE_SPEED;
    this.changeSpeed();
  }
};
