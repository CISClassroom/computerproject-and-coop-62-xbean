// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        player:{
          default:null,
          type:cc.Node
        },
        hitbox:100
        
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
        this.Oldplayerx=this.player.x;
        this.Oldplayery=this.player.y;
        this.timeP=0;
     },
   

     update (dt) {
        //  this.timeP++;
        //  this.Oldplayerx=this.player.x;
        //  this.Oldplayery=this.player.y;
        //  console.log("time"+this.timeP);
        //  if(this.timeP==10){
         if(this.player.x<=this.node.x+this.hitbox&&
            this.player.y<=this.node.y+this.hitbox&&
            this.player.x>=this.node.x-this.hitbox&&
            this.player.y>=this.node.y-this.hitbox){
                if(this.player<=this.node.x+this.hitbox){
                this.player.x=this.node.x+this.hitbox;
                }
                if(this.player.x>=this.node.x-this.hitbox){
                this.player.x=this.node.x-this.hitbox;
                }
                if(this.player.y<=this.node.y+this.hitbox){
                    this.player.y=this.node.y+this.hitbox;
                }
                if(this.player.y>=this.node.y-this.hitbox){
                    this.player.y=this.node.y-this.hitbox;
                }
                console.log("Player hit!!!");
            }
        //  this.timeP=0;
        // }
     },
});
