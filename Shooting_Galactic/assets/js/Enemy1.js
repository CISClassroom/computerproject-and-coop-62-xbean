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
        Enemy: cc.Node,
        hpEnemy:cc.Node,
        bulletEnemy:cc.Node,
        damageEnemy1Text:cc.Node,
        player:cc.Node,
        HpPlayer:cc.Node,
        EnemyHP:100,
        EnemySpeed:10,
        EnemyDamage:10
    },

    

    onLoad () {
         this.bulletEnemy.x=this.Enemy.x;
         this.bulletEnemy.y=this.Enemy.y;
         this.timeEnemyBullet=0;
         this.hitbox=100
    },
    // onCollisionEnter: function (other, self) {

    // },

    update (dt) {
        this.timeEnemy++;
        this.timeEnemyBullet++;
         //เงื่อนไข เมื่อ กระสุนของ Enemy 1 โดน Player
         if(this.bulletEnemy.x<=this.player.x+this.hitbox&&
            this.bulletEnemy.y<=this.player.y+this.hitbox&&
            this.bulletEnemy.x>=this.player.x-this.hitbox&&
            this.bulletEnemy.y>=this.player.y-this.hitbox&&
            this.Enemy1.active==true){
            console.log("Player hit!!!");
            //คำนวนดาเมจ
            this.HpPlayer-=this.EnemyDamage;
            this.hpPlayer.setScale(this.HpPlayer,1);
            this.damageEnemy1Text.string="Hitt!! -"+this.EnemyDamage;
             //เช็คHPถ้าน้อยกว่า=0
            if(this.HpPlayer<=0){
                this.player.active=false;
                this.bullet.active=false;
                this.gameover.active=true;
            }
            console.log("HPPlayer="+this.HpEnemy);
             //รีเซ็ตกระสุน
            this.bulletEnemy.x=this.Enemy.x;
            this.bulletEnemy.y=this.Enemy.y;
            this.timeEnemy=0;
         }
            //รีเซ็ตกระสุน
         if(this.timeEnemy==(300-(this.EnemySpeed*10))){
            this.bulletEnemy.x=this.Enemy.x;
            this.bulletEnemy.y=this.Enemy.y;
            this.timeEnemy=0;
         } 
    },
});
