const gameState = {}

function preload() {
  this.load.image('codey', 'https://content.codecademy.com/courses/learn-phaser/codey.png');
}

function create() {
  gameState.codey = this.add.sprite(150, 200, 'codey')
  // Set cursor keys here!
  gameState.cursors = this.input.keyboard.createCursorKeys()
  gameState.speed = 1
}

function update() {
  // Update based on keypress here!
 if(gameState.cursors.right.isDown){
   gameState.speed+=1
   gameState.codey.x+=gameState.speed
 }
 if(gameState.cursors.left.isDown){
   gameState.codey.x-=5
 }
 if(gameState.cursors.up.isDown){
   gameState.codey.y-=5
 }
 if(gameState.cursors.down.isDown){
   gameState.codey.y+=5
 }
}

const config = {
	type: Phaser.AUTO,
	width: 400,
	height: 500,
	backgroundColor: "#5f2a55",
	scene: {
    preload,
    create,
    update
	}
}

const game = new Phaser.Game(config)
