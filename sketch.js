var sceneImg,scene,brushing,cleaning,eating,exercise,floating,sleeping;


function preload(){

sceneImg = loadImage("background.png");
brushing = loadAnimation("Brushing.png");
cleaning = loadAnimation("clean.png", "clean2.png");
eating = loadAnimation("eating.png", "eating2.png");
exercise = loadAnimation("exercise.png");
floating = loadAnimation("floating.png", "floating2.png");
sleeping = loadAnimation("sleeping.png");

}

function setup(){
  createCanvas(807,460);

  scene = createSprite(400, 230, 50, 50);
  scene.addImage(sceneImg);
  scene.scale = 1.3;

  astronaut = createSprite(400, 230, 50, 50);
  astronaut.addAnimation("eat", eating);
  astronaut.scale = 0.1;




  //createSprite(400, 200, 50, 50);
}

function draw(){
  background("blue");  





  drawSprites();

}