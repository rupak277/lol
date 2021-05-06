var ball,img,paddle,img2,up,left,down,score,pod;
function preload() {
  img = loadAnimation("ball.png");
  img2 = loadAnimation("paddle.png");
}
function setup() {
  createCanvas(400, 400); 
  ball = createSprite(50,200,10,10);
  ball.addAnimation("B",img); 
  
  score = 0;
  pod = createSprite(327,200,1,90);
  pod.visible = false;
  
  paddle = createSprite(350,200,10,10);
  paddle.addAnimation("P",img2);
  
  ball.setVelocity(9,0);
  
   left = createSprite(0,200,1,1000);
   down = createSprite(200,400,1000,1);
   up = createSprite(200,0,1000,1);

}

function draw() {
  background(205,153,0);
  createEdgeSprites();
  
  ball.bounceOff(paddle);
  ball.bounceOff(up);
  ball.bounceOff(left);
  ball.bounceOff(down);
  
  pod.y = paddle.y
  
  paddle.bounceOff(up);
  paddle.bounceOff(down);
  
  
  paddle.bounceOff
  if(keyDown(UP_ARROW))
  {
     paddle.y = paddle.y - 4;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y = paddle.y + 4;
  }
  drawSprites();
  randomVelocity();
  fill("red");
  textSize(24);
  text("Score : " + score,1,23);
  
}

function randomVelocity()
{
  if(ball.isTouching(pod))
    {
      ball.velocityX= randomNumber = (+3,-9);
      ball.velocityY= randomNumber = (0,-8)
    }
}

