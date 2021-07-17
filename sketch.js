var ballimage,ball;
var leftWall,rightWall,topWall;
var leftWallGroup,rightWallGroup;
var invisibleLeftEdge,invisibleRightEdge;
var PLAY=1;
var END=0;
var gameState=PLAY;
var wallSpeed=-2;
var score=0;

function preload(){
 redball=loadImage ("redBall.png");

}

function setup(){
    createCanvas(400,500);

    ball=createSprite(200,100,10,10);
    ball.addImage(redball);
    ball.scale=0.14;

    topWall=createSprite(200,0,10,10);
    topWall.visible=false;

    invisibleLeftEdge=createSprite(0,200,2,700);
    invisibleLeftEdge.visible=false;

    invisibleRightEdge=createSprite(400,200,2,700);
    invisibleRightEdge.visible=false;

    leftWallGroup=new Group();
    rightWallGroup=new Group();

    ball.setCollider("circle",0,0,90);
}

function draw(){
    background ("white");

    drawSprites();
    
}