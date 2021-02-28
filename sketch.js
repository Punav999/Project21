var bullet,wall;
var speed,weight;
var t;

function setup(){
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52); 
  t = random(22,83);

bullet = createSprite(10,200,70,70);
bullet.velocityX = speed;

wall = createSprite(1100,200,t,height/2);
wall.shapeColor = color(80,80,80);
}

function draw() {
  background("yellow"); 
  
  if(wall.x - bullet.x < bullet.width/2 + wall.width/2)
  {

    bullet.velocityX = 0;
    var deformation = (0.5 * weight * speed * speed)/(t*t*t);
    if(deformation > 10)
      {
        bullet.shapeColor = "red";
      }
      
     
    
      if(deformation < 10)
  
  {
    bullet.shapeColor = color(0,255,0);
  }
}
  drawSprites();

}