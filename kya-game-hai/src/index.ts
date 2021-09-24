// Start here
import { CanvasView } from './view/CanvasView';
import { Ball } from './sprites/Ball';
import { Brick } from './sprites/Brick';
import { Paddle } from './sprites/Paddle';
//images
import PADDLE_IMAE from './images/paddle.png';
import BALL_IMAGE from './images/ball.png';
// level colors
import {
  PADDLE_SPEED,
  PADDLE_WIDTH,
  PADDLE_HEIGHT,
  PADDLE_STARTX,
  BALL_SPEED,
  BALL_SIZE,
  BALL_STARTX,
  BALL_STARTY
} from './setup';

let gameOver = false;
let score = 0;

function setGameOver(view: CanvasView) {
  view.drawInfo('Game Over!!');
  gameOver = false;
}
function setGameWin(view: CanvasView) {
  view.drawInfo('Game Won!!');
  gameOver = false;
}
function gameLoop(
  view: CanvasView,
  bricks: Brick[],
  paddle: Paddle,
  ball: Ball
) {}

function startGame(view: CanvasView) {}

const view = new CanvasView('#playField');
view.initStartButton(startGame);