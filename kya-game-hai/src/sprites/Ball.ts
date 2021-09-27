import { Vector } from '../types';

export class Ball {
  private speed: Vector;
  private ballImage: HTMLImageElement = new Image();

  constructor(
    private ballSize: number,
    private position: Vector,
    speed: number,
    image: string
  ) {
    this.ballSize = ballSize;
    this.position = position;
    this.speed = {
      x: speed,
      y: -speed
    };
    this.ballImage.src = image;
  }
  get width(): number {
    return this.ballSize;
  }
  get height(): number {
    return this.ballSize;
  }
  get pos(): Vector {
    return this.position;
  }
  get image(): HTMLImageElement {
    return this.ballImage;
  }
  //Methods
  changeYDirection(): void {
    this.speed.y = -this.speed.y;
  }
  changeXDirection(): void {
    this.speed.x = -this.speed.x;
  }
  moveBall(): void {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
  }
}
