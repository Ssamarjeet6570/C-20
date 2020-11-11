var fixedRect,movingRect;








function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  fixedRect = createSprite(400,200,70,50);
  fixedRect.shapeColor = "red";
  movingRect = createSprite(700,50,50,70);
  movingRect.shapeColor = "red";




}


function draw() {
  background(255,255,255);  
movingRect.x = World.mouseX;
movingRect.y = World.mouseY;



console.log(movingRect.x-fixedRect.x);

if(movingRect.x-fixedRect.x< fixedRect.width/2+movingRect.width/2 
  && fixedRect.x-movingRect.x <fixedRect.width/2+movingRect.width/2
&& fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2
&& movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2

  ){
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
}
else{
fixedRect.shapeColor = "red";
movingRect.shapeColor = "red";

}




  drawSprites();
}



