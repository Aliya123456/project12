var jake,jakeImg,pathImg,path,left_boundary,right_boundary


function preload(){
  //pre-load images
  jake_running = loadAnimation("Jake1.png","Jake2.png","Jake3.png","Jake4.png","Jake5.png");
 pathImg=loadImage("path.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here

  //moving background
  path=createSprite(200,200)
  path.addImage(pathImg);
  path.velocityY=4;
  path.scale=1.2;
  
  // jake
  jake=createSprite(180,340,50,170);
  jake.addAnimation("running",jakeImg);

  //boundaries
  left_boundary=createSprite(0,300,100,600);
  left_boundary.visible=false;

right_boundary=createSprite(390,300,80,600);
right_boundary.visible=false;
}

function draw() {
  background(0);

  if(path.y>400){
    path.y=height/2;
  }
  jake.x=world.mouseX;
}

jake.collide(left_boundary);
jake.collide(right_boundary)
jake.collide(edges);

drawSprites();


}
