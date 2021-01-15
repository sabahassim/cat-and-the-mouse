var jerry, jerryteasing;
var tom, tommoving,tomlaststage;
function preload() {
    //load the images here
jerry = loadAnimation("jerryOne.png")
jerryteasing = loadAnimation("jerryTwo.png,jerryThree.png,jerryFour.png");

tom = loadAnimation("tomOne.png");
tommoving = loadAnimation("tomTwo.png","tomThree.png");
tomlaststage = loadAnimation("tomFour.png");

music = loadsound("p5.sound.min.js")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
jerry = createSprite(100,780,20,50);
jerry.addAnimation("moving",jerry);
jerry.addAnimation("collided",jerryteasing);
jerry.scale = 1;

tom = createSprite(150,780,20,50);
tom.addAnimation("firststage",tom)
tom.addAnimation("moving",tommoving);
tom.addAnimation("collided",tomlaststage);
tom.scale = 1;
}

function draw() {

    background(255);

    //Write condition here to evalute if tom and jerry collide
Text(mouseX + "," + mouseY,10,45);

playsound();

if(keyDown(LEFT_ARROW)){
    tom.x = tom.x-5;
}

if(tom.isTouching(jerry)){
    tom.changeAnimation("collided",tomlaststage);
    tom.scale = 1;

    jerry.changeAnimation("collided",jerryteasing);
    jerry.scale = 1;
}

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("catRunning", catImg2);
      cat.changeAnimation("catRunning");
  }


}
