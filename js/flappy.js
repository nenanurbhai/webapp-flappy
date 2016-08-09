// the Game object used by the phaser.io library
var stateActions = { preload: preload, create: create, update: update };

// Phaser parameters:
// - game width
// - game height
// - renderer (go for Phaser.AUTO)
// - element where the game will be drawn ('game')
// - actions on the game state (or null for nothing)
var game = new Phaser.Game(750, 400, Phaser.AUTO, 'game', stateActions);

var score = 0;
var labelScore;

var score = 0;

var labelScore;

var player;

/*
 * Loads all resources for the game and gives them names.
 */
function preload() {
game.load.image("playerImg","../assets/whale.png");

game.load.audio("score", "../assets/point.ogg");

game.load.image("pipeBlock", "../assets/bubbles.jpg.png");

game.load.image("sea", "../assets/sea.jpg");

}

/*
 * Initialises the game. This function is only called once.
 */
function create() {
game.stage.setBackgroundColor("#FFFFFF");

game.add.text(50,20,"Welcome to Flappy Whale!",{font:"30px Helvetica", fill:"#FFFFFF"});
game.input
.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
.onDown.add(playerJump);
labelScore = game.add.text(20, 20, "0");
changeScore();
changeScore();
player = game.add.sprite(100, 200, "playerImg");
game.input
.keyboard.addKey(Phaser.Keyboard.RIGHT)
.onDown.add(moveRight);
game.input
.keyboard.addKey(Phaser.Keyboard.LEFT)
.onDown.add(moveLeft);
game.input
.keyboard.addKey(Phaser.Keyboard.UP)
.onDown.add(moveUp);
game.input
.keyboard.addKey(Phaser.Keyboard.DOWN)
.onDown.add(moveDown);
generatePipe();
game.physics.startSystem(Phaser.Physics.ARCADE);
game.physics.arcade.enable(player);
player.body.gravity.y = 300;
player.body.velocity.y = -3;
var pipeInterval = 1.75 * Phaser.Timer.SECOND;
game.time.events.loop( pipeInterval, generatePipe);

}

/*
 * This function updates the scene. It is called for every new frame.
 */
function update() {
game.physics.arcade.overlap(player, pipes, game0ver);
}

function game0ver(){
  registerScore(score);
  
}

function clickHandler(event) {
game.add.sprite(400, 100, "playerImg");
}

function spaceHandler() {
game.sound.play("score");
}


function changeScore(){
  score = score + 1;
  labelScore.setText(score.toString());
}

function moveRight(){
player.x = player.x + 30;
}

function moveLeft(){
  player.x = player.x + -30;
}

function moveUp(){
  player.y +=-30;
}

function moveDown(){
  player.y +=30;
}

function generatePipe(){
  var gap = game.rnd.integerInRange(1,6);
  for(var count=0; count<8; count++){
    if(count !=gap && count !=gap + 1){
addPipeBlock(750, count*50);
}
}
changeScore();
}

var pipes = [];

function addPipeBlock(x,y){
var pipeBlock = game.add.sprite(x,y,"pipeBlock");
pipes.push(pipeBlock);
game.physics.arcade.enable(pipeBlock);
pipeBlock.body.velocity.x = -200;

}

function playerJump(){
player.body.velocity.y = -150;
}
