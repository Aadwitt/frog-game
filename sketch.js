var     player
var worm
var wormgroup
var score=0
function preload() {
  //load game assets
 
}


function setup() {
  createCanvas(600,600);
 player=createSprite(200,200,20,20)
 wormgroup=new Group ()
}

function draw() {
  background("black");  
  player.x=mouseX
  player.y=mouseY
  player.shapeColor="red"
  ellipse(300,300,30,30)
  enemy()
  if(player.x>250 && player.x<350 && player.y>250 && player.y <350){
    text("cheating!!!!!!!!!",200,150)
    player.x=50
    player.y=50
  }

  for(var i=0;i<(wormgroup).length;i++){
    var temp=wormgroup.get(i)
    if(player.isTouching(temp)){
      temp.destroy()
      temp=null
      score++
    }
  }
 drawSprites() 
 fill("white")
 text("Your score is"+score,200,70)

}
function enemy() {
  if(frameCount%30===0){
    worm=createSprite(300,300,10,4)
    worm.velocityX=random(-4,4)
    worm.velocityY=random(-4,4)
    wormgroup.add(worm)
  }

}
