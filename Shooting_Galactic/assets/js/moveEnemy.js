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
       
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
         this.notmoveL=true;
         this.notmoveR=false;
     },



     update (dt) {

         if(this.node.x>662.863){
            this.notmoveL=false;
            this.notmoveR=true;
         }
         else if(this.node.x<62.983){
            this.notmoveL=true;
            this.notmoveR=false;
        }
        if(this.notmoveL==true){
            this.node.x++;
        }
        else if(this.notmoveR==true){
            this.node.x--;
        }
     },
});
