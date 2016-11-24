var game = new Phaser.Game(800, 600, Phaser.AUTO, '',
	{ preload: preload, create: create, update: update});

function preload() {
	game.load.image('sky','assets/sky.png');
	game.load.image('ground','assets/platform.png');
	game.load.image('star','assets/star.png');
	game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
	game.load.spritesheet('baddie', 'assets/baddie.png', 32, 32);
}

function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);
	
	//add sky as background
	game.add.sprite(0, 0, 'sky');
	
	//Making a group of platforms
 	platforms = game.add.physicsGroup();
	platforms.enableBody = true;

	//Ground
	var ground =  platforms.create(0, game.world.height - 64, 'ground');
	ground.scale.setTo(2,2);
	ground.body.immovable = true;
	
	//Ledges
	var ledge =  platforms.create(400,400, 'ground');
	ledge.body.immovable = true;
	var ledge =  platforms.create(-150, 250, 'ground');
	ledge.body.immovable = true;

	//Player
	player = game.add.sprite(32, game.world.height - 150, 'dude');
		//animate
		player.animations.add('left', [0, 1, 2, 3], 10, true);
		player.animations.add('right', [6, 7, 8, 9], 10, true);
		//physics
		game.physics.arcade.enable(player);
		player.body.bounce.y = 0.2;
		player.body.gravity.y = 300;
		player.body.collideWorldBounds = true;

	enemy = game.add.sprite(750, 20, 'baddie');
		//animate
		enemy.animations.add('left', [0, 1], 10, true);
		enemy.animations.add('right', [3, 4], 10, true);
		//physics
		game.physics.arcade.enable(enemy);
		enemy.body.bounce.y = 1;
		enemy.body.gravity.y = 500;
		enemy.body.collideWorldBounds = true;

	//keyboard inputs
	cursors = game.input.keyboard.createCursorKeys();
}

function update() {
	
}