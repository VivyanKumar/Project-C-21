var bullet, wall;
var speed, weight;
var damage;
var thickness;
function setup() {
  createCanvas(1600,400);
  bullet = createSprite(100,200,50,20);
  bullet.shapeColor=color(255,255,255);
  thickness = Math.round(random(22,83));
  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52));
  wall = createSprite(1200, 200, thickness, 200);
  bullet.velocityX = speed;
}

function draw() {
  background(0,0,0);  
  
  if (Collide(bullet,wall)) {
    bullet.velocityX = 0;
    damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
    console.log(damage);
  
    if (damage > 10) {
      wall.shapeColor=color(255,0,0);        
    }   
  if (damage < 10) {
      wall.shapeColor = color(0,255,0);
    }
  }
  

  //console.log(Deformation);

  drawSprites();
}

