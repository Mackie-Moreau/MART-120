//character setup
var charX = 100;
var charY = 100;

//player movement
var W = 87;
var A = 65;
var S = 83;
var D = 68;

//obstacle setup
var obstacleXA = 250;
var obstacleYA = 250;
var obstacleXB = 325;
var obstacleYB = 400;

//obstacle movement
var movementA;
var movementB;

//exit setup
var exitX = 250;
var exitY = 580;

//mouseclick add
var mousex;
var mousey;

function setup()
{
    createCanvas(600, 600);
    movementA = floor(random()*10) + 1;
    movementB = floor(random()*10) + 1;
}


function draw()
{
    background(255, 215, 126);

    //character: Player
    
    fill(122, 206, 223);
    circle(charX, charY, 50);

    //obstacles
    fill(205, 67, 91);
    square(obstacleXA, obstacleYA, 50);
    fill(168, 23, 52);
    square(obstacleXB, obstacleYB, 25);

    //exit
    fill(51, 160, 182);
    rect(exitX, exitY, 100, 20); 
    fill(255, 215, 126);
    textSize(15);
    text('EXIT', 284, 595);

    //mouseclick circle
    fill(51, 160, 182);
    circle(mousex, mousey, 15);

    //player movement
    if (keyIsDown(W))
      {
        charY-=3
      }
    if(keyIsDown(S))
      {
        charY+=3
      }
    if(keyIsDown(A))
      {
        charX-=3
      }
   if(keyIsDown(D))
      {
        charX+=3
      }

  //obstacle movement
  if(obstacleXA > 0 || obstacleXA < 600)
  {
    movementA*=-1;
  }
  obstacleXA -= movementA;

  if(obstacleYA > 0 || obstacleYA < 600)
    {
      movementA*=-1;
    }
    obstacleYA -= movementA;

    //B
  if(obstacleXB > 0 || obstacleXB < 600)
    {
      movementB*=-1;
    }
    obstacleXB -= movementB;
    
    if(obstacleYB > 0 || obstacleYB < 600)
       {
        movementB*=-1;
      }
      obstacleYB -= movementB;

  //reset back to canvas
  //A
  if(obstacleXA > 600)
    {
      obstacleXA = 0
    }
  else if (obstacleXA < 0)
    {
      obstacleXA = 600
    }
  if(obstacleYA > 600)
    {
    obstacleYA = 0
    }
  else if (obstacleYA < 0)
    {
      obstacleYA = 600
    }

  //B
  if(obstacleXB > 600)
    {
      obstacleXB = 0
    }
  else if (obstacleXB < 0)
    {
      obstacleXB = 600
    }
  if(obstacleYB > 600)
    {
    obstacleYB = 0
    }
  else if (obstacleYB < 0)
    {
      obstacleYB = 600
    }

  //wincon
  if(charY >= 600 && charX > 275 && charX < 325)
    {
      textSize(40);
      fill(5, 91, 51);
      text('You Won! Congrats!', 120, 350); 
    }
  else
  {
    textSize(25);
    fill(51, 160, 182);
    text('Use WASD to Move', 25, 50);
  }
}

 //mouse click to add obstacle
 function mouseClicked()
 {
  mousex = mouseX
  mousey = mouseY
 }