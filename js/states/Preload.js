Preload = function(game){}

Preload.prototype = {
	preload : function(){		
		this.game.load.video('bob_esponja', 'assets/video/spongebob.mp4');
		this.game.load.video('flamingo', 'assets/video/flamingo.mp4');
	},
	create:function(){
		this.state.start("Game",true,false);
	}
}