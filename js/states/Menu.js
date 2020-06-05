Menu = function(game){}

Menu.prototype = {
	create:function(){

        this.iconBob = this.game.add.sprite(0,0,"iconBob");
        this.iconBob.anchor.setTo(0.5);
        this.iconBob.x = 100;
        this.iconBob.y = this.world.centerY;
        this.iconBob.videoKey = "bobEsponja";

        this.iconFlamingo = this.game.add.sprite(0,0,"iconCamaron");
        this.iconFlamingo.anchor.setTo(0.5);
        this.iconFlamingo.x = this.world.width-100;
        this.iconFlamingo.y = this.world.centerY;
        this.iconFlamingo.videoKey = "flamingo";

        this.iconBob.inputEnabled = true;
        this.iconFlamingo.inputEnabled = true;
        this.iconBob.events.onInputDown.add(this.goVideo, this);
        this.iconFlamingo.events.onInputDown.add(this.goVideo, this);
    },
    goVideo:function(sprite){
        this.state.start("Video",true,false,{videoKey:sprite.videoKey});
    }   
}