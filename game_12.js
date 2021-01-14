const gameState = {};

function preload() {
  this.load.image(
    "codey",
    "https://content.codecademy.com/courses/learn-phaser/codey.png"
  );
}

function create() {
  gameState.codey = this.add.sprite(100, 100, "codey");
  gameState.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  if (gameState.cursors.down.isDown) {
    gameState.codey.y += 1;
  }
}

const config = {
  width: 400,
  height: 400,
  backgroundColor: 0xdda0dd,
};

const game = new Phaser.Game(config);
