var tom,jerry;

function preload() {
    //load the images here
    gardenImage = loadImage("images/garden.png");
    catimage = loadImage("images/cat1.png");
    mouseImage = loadAnimation("images/mouse1.png");
    mouseAnimation = loadAnimation("images/mouse2.png","images/mouse3.png");
    catAnimation = loadAnimation("images/cat2.png","images/cat3.png");
    tomAnimation = loadAnimation("images/cat4.png");
    jerryAnimation = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(850,650,50,50);
    jerry = createSprite(200,650,60,60);
    tom.debug = true
    tom.setCollider("rectangle",0,0,30,30)
    jerry.shapeColor = "brown"
    tom.addImage(catimage);
    jerry.addAnimation("image1",mouseImage);
    tom.scale = 0.2
    jerry.scale = 0.2


}

function draw() {

    background(gardenImage);
    //Write condition here to evalute if tom and jerry collide
    if (tom.x+100-jerry.x<tom.width/2+jerry.width/2)  {
        console.log("collided")
        tom.velocityX = 0
        tom.addAnimation("catcollided",tomAnimation)
        tom.changeAnimation("catcollided")
        jerry.addAnimation("jerryCollided",jerryAnimation)
        jerry.changeAnimation("jerryCollided")


    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode===LEFT_ARROW)  {
      jerry.addAnimation("teasing",mouseAnimation)
      jerry.changeAnimation("teasing")
      tom.velocityX = -5;
      tom.addAnimation("running",catAnimation)
      tom.changeAnimation("running")

  }


}
