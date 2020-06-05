window.onload =function(){
	let game = new Phaser.Game(640, 320,Phaser.AUTO);
	game.state.add("Preload",Preload);
	game.state.add("Menu",Menu);
	game.state.add("Video",Video);
	game.state.start("Preload");
}