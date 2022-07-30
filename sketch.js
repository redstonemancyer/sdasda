var citybackground
var background
var shooter
var shooting
var zombie
var heart1
var heart2
var heart3
var heart 

function preload(){
citybackground = loadImage("CityBackground.jpeg")
zombieImg = loadImage("Zombie.png")
shooterImg = loadImage("shooter_1.png")
shootingImg = loadImage("shooter_2.png")
heart1 = loadImage("heart1.png")
heart2 = loadImage("heart2.png")
heart3 = loadImage("heart3.png")
}


function setup() {
  createCanvas(windowWidth,windowHeight);
 background = createSprite(windowWidth/2,windowHeight/2)
 background.addImage(citybackground)
 background.scale = 1.4

 shooter = createSprite(250,800)
 shooter.addImage(shooterImg)
 shooter.scale = .7

 heart = createSprite(1600,100)
 heart.addImage(heart3)
 heart.scale = .2

 zombie = createSprite(1600,800)
 zombie.addImage(zombieImg)
zombie.scale = 1.6

}

function draw() {
  drawSprites();

  if(keyWentDown("space")){
    shooter.addImage(shootingImg)
  }
  else if(keyWentUp("space")){
    shooter.addImage(shooterImg)
  }

  if(keyDown("left_arrow")){
    shooter.x = shooter.x-2
  }

  if(keyDown("right_arrow")){
    shooter.x = shooter.x+2
  }
}