// Define "gameState" here


function create() {
  // Create a circle and assign it to gameState.circle here

}

function update() {
  // Update the circle in gameState.circle here

}

const config = {
	type: Phaser.AUTO,
	width: 450,
	height: 600,
	backgroundColor: "#99ff99",
	scene: {
    create,
    update
	}
}

const game = new Phaser.Game(config)
