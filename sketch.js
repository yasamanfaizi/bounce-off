var count = 78

function setup() {
  createCanvas(displayWidth, displayHeight);
  blockgroup = createGroup()
  blockgroup1 = createGroup()
  blockgroup2 = createGroup()
  for (var i=30; i<displayWidth; i+=55){
    block = createSprite(i,50,50,50)
    blockgroup.add(block)
  }
  for (var i=30; i<displayWidth; i+=55){
    block1 = createSprite(i,105,50,50)
    blockgroup1.add(block1)
  }
  for (var i=30; i<displayWidth; i+=55){
    block2 = createSprite(i,160,50,50)
    blockgroup2.add(block2)
  }
  paddle = createSprite(displayWidth/2,displayHeight-150,150,20)
  ball = createSprite(displayWidth/2,displayHeight-200,20,20)
  paddle.shapeColor="black"
    ball.shapeColor="black"
    ball.velocityX = 5
    ball.velocityY = -8
    edges = createEdgeSprites()
}

function draw() {
  background(255,255,255); 
  if(mouseX>60 && mouseX<displayWidth-60){
  paddle.x = mouseX
  }
  ball.bounceOff(edges[0])
  ball.bounceOff(edges[1])
  ball.bounceOff(edges[2])
  ball.bounceOff(paddle)
  for (var i = 0; i<blockgroup.length; i++){
    if (ball.isTouching(blockgroup.get(i))){
      ball.bounceOff(blockgroup.get(i))
     blockgroup.get(i).destroy()
     count--
    }
  }
  
  for (var i = 0; i<blockgroup1.length; i++){
    if (ball.isTouching(blockgroup1.get(i))){
      ball.bounceOff(blockgroup1.get(i))
     blockgroup1.get(i).destroy()
     count--
    }
  }

  for (var i = 0; i<blockgroup2.length; i++){
    if (ball.isTouching(blockgroup2.get(i))){
      ball.bounceOff(blockgroup2.get(i))
     blockgroup2.get(i).destroy()
     count--
    }
  }

  if (ball.y>displayHeight-100){
    textSize(40)
    fill("black")
    text("Game Over",displayWidth/2-100,displayHeight/2)
  }

  if (count<=0){
    textSize(40)
    fill("black")
    text("You Win", displayWidth/2-100, displayHeight/2)
  }
  drawSprites();
}