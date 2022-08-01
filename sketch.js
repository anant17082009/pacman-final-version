var background,backgroundimg
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,
wall20,wall21,wall22,wall23,wall24,wall25,wall26


var player,playerimg,playerleftimg
var food1,foodimg,food2img
var food2,food3,food4,food5
var enemyimg
var enemy1,enemy2,enemy3,enemy4,enemy5,enemy6,enemy7
var door,doorimg
var walls
var score = 0
var life = 3

function preload(){
  playerimg = loadImage("./img/player.png")
  foodimg = loadImage("./img/food.png")
  enemyimg = loadImage("./img/ghost.png")
  doorimg = loadImage("./img/door.png")
  food2img = loadImage("./img/food2.png")
}

function setup(){
  createCanvas(400,400)

  player = createSprite(260,214,20,20)
  player.addImage(playerimg)
  player.scale = 0.03

  food1 = createSprite(200,200,20,20)
  food1.addImage(foodimg)
  food1.scale = 0.05

  food2 = createSprite(50,370,20,20)
  food2.addImage(foodimg)
  food2.scale = 0.05

  food3 = createSprite(350,370,20,20)
  food3.addImage(foodimg)
  food3.scale = 0.05

  food4 = createSprite(70,200,20,20)
  food4.addImage(foodimg)
  food4.scale = 0.05

  food5 = createSprite(50,140,20,20)
  food5.addImage(food2img)
  food5.scale = 0.05

  food6 = createSprite(350,140,20,20)
  food6.addImage(food2img)
  food6.scale = 0.05

  food7 = createSprite(380,300,20,20)
  food7.addImage(food2img)
  food7.scale = 0.05

  food8 = createSprite(333,68,20,20)
  food8.addImage(food2img)
  food8.scale = 0.05

  

  //enemy

  enemy1 = createSprite(200,124,20,20)
  enemy1.addImage(enemyimg)
  enemy1.scale =0.04

  enemy2 = createSprite(320,267,20,20)
  enemy2.addImage(enemyimg)
  enemy2.scale = 0.04

  enemy3 = createSprite(365,114,20,20)
  enemy3.addImage(enemyimg)
  enemy3.scale = 0.04

  enemy4 = createSprite(115,232,20,20)
  enemy4.addImage(enemyimg)
  enemy4.scale = 0.04

  enemy5 = createSprite(275,361,20,20)
  enemy5.addImage(enemyimg)
  enemy5.scale = 0.04

  enemy6 = createSprite(157,317,20,20)
  enemy6.addImage(enemyimg)
  enemy6.scale = 0.04

  enemy7 = createSprite(26,88,20,20)
  enemy7.addImage(enemyimg)
  enemy7.scale = 0.04

  //door
  door = createSprite(313,29,30,30)
  door.addImage(doorimg)
  door.scale = 0.50
  door.visible = false

  walls = new Group()

 
wall1 = createSprite(200,250,110,10);
wall2 = createSprite(250,200,10,110);
wall3 = createSprite(150,200,10,110);
wall4 = createSprite(200,0,400,20);
wall5 = createSprite(200,400,400,20);
wall6 = createSprite(0,200,20,400);
wall7 = createSprite(400,200,20,400);
wall8 = createSprite(160,150,30,10);
wall9 = createSprite(240,150,30,10);
wall10 = createSprite(200,50,400,10);
wall11 = createSprite(200,300,10,100);
wall12 = createSprite(150,375,10,50);
wall13 = createSprite(250,375,10,50);
wall14 = createSprite(125,300,150,10);
wall15 = createSprite(275,300,150,10);
wall16 = createSprite(50,350,100,10);
wall17 = createSprite(350,350,100,10);
wall18 = createSprite(350,250,100,10);
wall19 = createSprite(50,250,100,10);
wall20 = createSprite(200,100,300,10);
wall21 = createSprite(100,150,10,100);
wall22 = createSprite(300,150,10,100);
wall23 = createSprite(50,200,10,100);
wall24 = createSprite(350,200,10,100);
wall25 = createSprite(255,275,10,10);


console.log(windowWidth , windowHeight)
//wall1 = createSprite(853.5,517.5,10,260)
walls.add(wall1)
//wall2 = createSprite(1066.5,414,10,260)
walls.add(wall2)
//wall3 = createSprite(640.2,414,260,10)
walls.add(wall3)
//wall4 = createSprite(853.5,0,260,10)
walls.add(wall4)
//wall5 = createSprite(853.5,828,160,10)
walls.add(wall5)
//wall6 = createSprite(0,414,10,100)
walls.add(wall6)
//wall7 = createSprite(828,414,10,200)
walls.add(wall7)
//wall8 = createSprite(682.8,310.5,200,10)
walls.add(wall8)
//wall9 = createSprite(1024.2,310.5,10,260)
walls.add(wall9)
//wall10 = createSprite(853.5,130.5,10,200)
walls.add(wall10)
//wall11 = createSprite(853.5,651,150,10)
walls.add(wall11)
//wall12 = createSprite(639.9,776.2,10,160)
walls.add(wall12)
//wall13 = createSprite(1066.5,775.5,10,10)
walls.add(wall13)
//wall14 = createSprite(533,1449,260,10)
walls.add(wall14)
//wall15 = createSprite(1172.6,1449,10,260) 
walls.add(wall15)
//wall16 = createSprite(207.7,723.1,10,260) 
walls.add(wall16)
//wall17 = createSprite(1950.4,723.1,1449,10,260) 
walls.add(wall17)
//wall18 = createSprite(1950.4,516.6,10,260) 
walls.add(wall18)
//wall19 = createSprite(207.7,516.5,10,260) 
walls.add(wall19)
//wall20 = createSprite(853.5,207,10,260) 
walls.add(wall20)
//wall21 = createSprite(426.7,310.5,10,260) 
walls.add(wall21)
//w//all22 = createSprite(1280.1,310.5,10,260) 
walls.add(wall22)
//wall23 = createSprite(207.7,414,10,260) 
walls.add(wall23)
//wall24 = createSprite(1950.4,414,10,260) 
walls.add(wall24)
//wall25 = createSprite(1088.2,569.2,10,260) 
walls.add(wall25)

enemy1.velocityX = Math.round(random(1,4))
enemy2.velocityX = Math.round(random(-1,-4))
enemy3.velocityY = Math.round(random(3,6))
enemy4.velocityY = Math.round(random(1,4))
enemy5.velocityY = Math.round(random(-1,-4))
enemy6.velocityX = Math.round(random(1,4))
enemy7.velocityX = Math.round(random(1,4))

}

function draw(){
  background("black")
textSize(10)
fill("yellow")
  text("Score : "+score ,100,25)

  textSize(10)
fill("yellow")
  text("Life : "+life ,200,25)

  //UP
  if(keyWentDown(UP_ARROW)){
    player.velocityY = -5
  }
  if(keyWentUp(UP_ARROW)){
    player.velocityY = 0
  }

  //DOWN

  if(keyWentDown(DOWN_ARROW)){
    player.velocityY = 5
  }
  if(keyWentUp(DOWN_ARROW)){
    player.velocityY = 0
  }
 

  //LEFT

  if(keyWentDown(LEFT_ARROW)){
    player.velocityX = -4

  }
  if(keyWentUp(LEFT_ARROW)){
    player.velocityX = 0
  }

  //RIGHT

  if(keyWentDown(RIGHT_ARROW)){
    player.velocityX = 5
  }
  if(keyWentUp(RIGHT_ARROW)){
    player.velocityX = 0
  }

  if(player.isTouching(door) && score===5){
    gameOver2()
}

  if(life<=0){
    life = 0
    gameOver()
  }
  if(score<=0){
    score = 0
  }
  if(score===7){
      door.visible = true
  }

  if(player.isTouching(food1)){
    food1.destroy()  
    score+=1
  }
  if(player.isTouching(food2)){
    food2.destroy()  
    score+=1
  }
  if(player.isTouching(food3)){
    food3.destroy()  
    score+=1
  }
  if(player.isTouching(food4)){
    food4.destroy()  
    score+=1
  }
  if(player.isTouching(food5)){
    food5.destroy()
    score+=1  
  }

  if(player.isTouching(food6)){
    food6.destroy()
    score+=1  
  }
  if(player.isTouching(food7)){
    food7.destroy()
    score+=1  
  }
  if(player.isTouching(food8)){
    food8.destroy()
    score+=1  
  }

  if(player.isTouching(enemy1)){
      score-=1
      life -= 1
  }

  if(player.isTouching(enemy2)){
    score-=1
    life -= 1
}

if(player.isTouching(enemy3)){
  score-=1
  life -= 1
}

if(player.isTouching(enemy4)){
  score-=1
  life -= 1
}

if(player.isTouching(enemy5)){
  score-=1
  life -= 1
}

if(player.isTouching(enemy6)){
  score-=1
  life -= 1
}

if(player.isTouching(enemy7)){
  score-=1
  life -= 1
}


  
  player.collide(walls)
  



enemy1.bounceOff(walls)
enemy2.bounceOff(walls)
enemy3.bounceOff(walls)
enemy4.bounceOff(walls)
enemy5.bounceOff(walls)
enemy6.bounceOff(walls)
enemy7.bounceOff(walls)
  
  drawSprites()
  
  fill("white")
  text(mouseX+","+mouseY,mouseX,mouseY)
}


  function gameOver() {
    swal(
      {
        title: `Game Over , You Lose!!!`,
        text: "Thanks for playing!!",
        imageUrl:
          "https://png.pngtree.com/png-clipart/20210310/original/pngtree-sad-mood-face-expression-boy-student-png-image_5950485.jpg",
        imageSize: "150x150",
        confirmButtonText: "Play Again !!"
      },
      function(isConfirm) {
        if (isConfirm) {
          location.reload();
        }
      }
    );
    
  }



  function gameOver2() {
   
  
      wall1.visible = false
      wall2.visible = false
      wall3.visible = false
      wall4.visible = false
      wall5.visible = false
      wall6.visible = false
      wall7.visible = false
      wall8.visible = false
      wall9.visible = false
      wall10.visible = false
      wall11.visible = false
      wall12.visible = false
      wall13.visible = false
      wall14.visible = false
      wall15.visible = false
      wall16.visible = false
      wall17.visible = false
      wall18.visible = false
      wall19.visible = false
      wall20.visible = false
      wall21.visible = false
      wall22.visible = false
      wall23.visible = false
      wall24.visible = false
      wall25.visible = false
      enemy1.visible = false
      enemy2.visible = false
      enemy3.visible = false
      enemy4.visible = false
      enemy5.visible = false
      enemy6.visible = false
      enemy7.visible = false
      food1.visible = false
      food2.visible = false
      food3.visible = false
      food4.visible = false
      food5.visible = false
      food6.visible = false
      food7.visible = false
      food8.visible = false
      
  

      fill("white")
      textSize(20)
      text("You Win !!! RELOAD THIS PAGE TO PLAY AGAIN. " , 14,326)
     
     
  }


