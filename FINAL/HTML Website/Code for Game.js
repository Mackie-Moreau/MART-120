//VARIABLES

//character setup
var charX = 100;
var charY = 100;

//player movement
var W = 87;
var A = 65;
var S = 83;
var D = 68;

//obstacle setup
var obstacleXs = [];
var obstacleYs = [];
var obstacleWs = []; 
var obstacleMovementX = [];
var obstacleMovementY = []; 

//exit setup
var exitX = 250;
var exitY = 580;

//mouseclick add
var mousex;
var mousey;

//borders creation
var canvasW = 600;
var canvasH = 600;

//color stuff
var R;
var G;
var B;

function setup()
{
    createCanvas(canvasW, canvasH);
    var x = 50; 
    var y = 50;
    var diameter = 25; 
    
    for(var i = 0; i < 5; i++)
      {
          obstacleMovementX[i]= floor(random()*10) + 1;
          obstacleMovementY[i] = floor(random()*10) + 1;
          obstacleXs[i] = x;
          obstacleYs[i] = y;
          obstacleWs[i] = diameter;
          x += floor(random()*175) + 1;;
          y += floor(random()*175) + 1;;
          diameter += floor(random()*15) + 1;;
      }
}


function draw()
{
    background(255, 215, 126);
    
    //borders
    createBorders();

    //character: Player
    createPLayer();

    //obstacles
    for(var i = 0; i < obstacleXs.length; i++)
      {
        fill 
        (
          //r
          R = Math.floor(Math.random() * 256),
          //g
          G = Math.floor(Math.random() * 256),
          //b
          B = Math.floor(Math.random() * 256)
        );

        square(obstacleXs[i], obstacleYs[i], obstacleWs[i]);

        obstacleXs[i] += obstacleMovementX[i];
        obstacleYs[i] += obstacleMovementY[i];

        if(obstacleXs[i] > canvasW)
          {
            obstacleXs[i] = 0
         }
        else if (obstacleXs[i] < 0)
          {
           obstacleXs[i] = canvasW
          }
        if(obstacleYs[i] > canvasH)
          {
            obstacleYs[i] = 0
          }
        else if (obstacleYs[i] < 0)
          {
           obstacleYs[i] = canvasH
          }
      }

    //exit
    exitSign();

    //mouseclick circle
    mouseCircle();

    //player movement
    movePlayer();

    //wincon
    winCon();
  
}



//EXTRA FUNCTIONS

//player creation
function createPLayer()
{
  fill(122, 206, 223);
  circle(charX, charY, 50);
}

//player movement
function movePlayer()
{
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
}

//mouseclick circle
function mouseCircle()
{
  fill(51, 160, 182);
  circle(mousex, mousey, 15);
}

//mouse click to add obstacle
function mouseClicked()
{
  mousex = mouseX
  mousey = mouseY
}

//borders
function createBorders()
{
  rect(0, 0, canvasW, 10);
  rect(0, 590, canvasW, 10);
  rect(0, 0, 10, canvasH);
  rect(590, 0, 10, canvasH);
}

//exit
 function exitSign()
 {
  fill(51, 160, 182);
  rect(exitX, exitY, 100, 20); 
  fill(255, 215, 126);
  textSize(15);
  text('EXIT', 284, 595);
 }

//wincon
function winCon()
{
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

 
