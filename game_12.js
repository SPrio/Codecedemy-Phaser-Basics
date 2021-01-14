const gameState = {};

function preload() {
  this.load.image(
    "codey",
    "https://content.codecademy.com/courses/learn-phaser/codey.png"
  );
}

function create() {
  gameState.codey = this.add.sprite(100, 100, "codey");
}

const config = {
  width: 400,
  height: 400,
  backgroundColor: 0xdda0dd,
};

const game = new Phaser.Game(config);
