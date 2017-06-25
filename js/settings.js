const STAGE_HEIGTH = 600;       // game window height
const STAGE_WIDRH = 400;

let GRAVITY_VALUE = 1.03;      // gravity power
const MIN_GRAVITY_VALUE = 1.01;
const GRAVITY_CHANGE = 0.01;

let tempTime = new Date().getTime();
let SPEED_VALUE = 1000;          // 1 per second
const CHANGE_SPEED = 100;
const MIN_SPEED_VALUE = 200;

const START_SHAPE_HEIGTH = -50; // start falling position
const SHAPE_RADIUS = 25;        // shape size is SHAPE_RADIUS*2

let SHAPES_AREA = 0;

let SHAPE_COUNT = 0;

let SHAPES = [
  ThreeSideShape,
  RectSideShape,
  FiveSideShape,
  SixSideShape,
  CircleSideShape,
  ElipsSideShape,
];