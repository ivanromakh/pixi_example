function findShapeCollision(shape, index, shapes) {
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