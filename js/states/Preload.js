Preload = function(game){}

Preload.prototype = {
	preload : function(){	
		this.game.load.image('iconCamaron', 'assets/dibujos/camaroncito.jpg');
		this.game.load.image('iconBob', 'assets/dibujos/bobesponja.png');	
		this.game.load.image('bg', 'assets/dibujos/bg.jpg');	
		this.game.load.video('bobEsponja', 'assets/videos/spongebob.mp4');
		this.game.load.video('flamingo', 'assets/videos/flamingo.mp4');
	},
	create:function(){
		this.state.start("Menu",true,false);
	}
}