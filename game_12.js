const gameState = {};

preload = () => {
  this.load.image(
    "codey",
    "https://content.codecademy.com/courses/learn-phaser/codey.png"
  );
};

const config = {
  width: 400,
  height: 400,
  backgroundColor: 0xdda0dd,
};

const game = new Phaser.Game(config);
