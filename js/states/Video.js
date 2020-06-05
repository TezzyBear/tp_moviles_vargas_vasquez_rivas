Video = function(game){}

Video.prototype = {
    init:function(prevData){
		this.videoKey = prevData.videoKey;
    },
    create:function(){

        this.playSpeed = 0;
        this.maxPlaySpeed = 2;

        this.video = this.game.add.video(this.videoKey);        
        this.video.addToWorld((this.world.width - this.video.width)/ 2);
        this.video.play(false,this.playSpeed);  

        this.spaceBar = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.spaceBarCoolDown = 100; 
        this.canPressSpaceBar = true;
        this.spaceBarTimer = 0;      
        
        this.slowSpeedWindow = 300;
        this.slowSpeedTimer = 0;
        
    },
    update:function(){

        this.slowSpeedTimer += this.game.time.elapsed;
        //console.log(this.slowSpeedTimer);
        if(this.slowSpeedTimer >= this.slowSpeedWindow){

            this.slowSpeedTimer = 0;
            
            if(this.playSpeed > 0.1){
                this.playSpeed -= 0.1;
                this.playSpeed = Number(this.playSpeed.toFixed(1));
            }else{
                this.playSpeed = 0;               
            }
            console.log(this.playSpeed);
            this.video.playbackRate = this.playSpeed; 
        }

        this.spaceBarTimer += this.game.time.elapsed;        
        if(this.spaceBarTimer >= this.spaceBarCoolDown){
            this.spaceBarTimer = this.spaceBarCoolDown;
            this.canPressSpaceBar = true;            
        }

        if(this.spaceBar.isDown){
            this.speedUp();
        }

        if(this.video.progress == 1){
            this.goMenu();
        }     
    },
    goMenu:function(){
        this.state.start("Menu");
    },
    speedUp:function(){
        if(this.canPressSpaceBar){
            this.canPressSpaceBar = false;
            this.spaceBarTimer = 0;
            this.playSpeed += 0.1;  
            if(this.playSpeed >= 2){
                this.playSpeed = 2;
            }
            this.video.playbackRate = this.playSpeed;          
        }           
    },
}