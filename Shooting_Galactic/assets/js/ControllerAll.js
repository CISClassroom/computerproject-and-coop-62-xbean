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
        //System All
        nextlvDoor: cc.Node,
        BGM:cc.AudioSource,
        gameover:cc.Node,
        Home:cc.Node,
        skill:cc.Node,
        DornHelp:cc.Node,
        victory:cc.Node,
        lvlabel:cc.Label,
        skill1label:cc.Label,
        skill2label:cc.Label,
        skill3label:cc.Label,
        Sgun1:cc.AudioSource,
        Sgun2:cc.AudioSource,
        Sgun3:cc.AudioSource,
        D1:cc.AudioSource,
        D2:cc.AudioSource,
        Break:cc.AudioSource,
        //Level
        lv1:cc.Node,
        lv2:cc.Node,
        lv3:cc.Node,
        lv4:cc.Node,
        lv5:cc.Node,
        lv6:cc.Node,
        lv7:cc.Node,
        lv8:cc.Node,
        lv9:cc.Node,
        lv10:cc.Node,
        //skill
        skill1_1:cc.Node,
        skill1_2:cc.Node,
        skill1_3:cc.Node,
        skill1_4:cc.Node,
        skill2_1:cc.Node,
        skill2_2:cc.Node,
        skill2_3:cc.Node,
        skill2_4:cc.Node,
        skill3_1:cc.Node,
        skill3_2:cc.Node,
        skill3_3:cc.Node,
        skill3_4:cc.Node,
        //--Player Seting-- 
        bullet: cc.Node,
        bullet2: cc.Node,
        bulletD: cc.Node,
        bulletR: cc.Node,
        player: cc.Node,
        arm2: cc.Node,
        hpPlayer: cc.Node,
        damageText: cc.Label,
        //--Enemy1 Seting(Level1)-- 
        Enemy1: cc.Node,
        hpEnemy1: cc.Node,
        BodyEnemy1: cc.Animation,
        bulletEnemy1: cc.Node,
        damageEnemy1Text:cc.Label,
        //--Enemy2 Seting(Level1)-- 
        Enemy2: cc.Node,
        hpEnemy2: cc.Node,
        BodyEnemy2: cc.Animation,
        bulletEnemy2: cc.Node,
        damageEnemy2Text:cc.Label,
        //--Enemy2_1 Seting(Level2)-- 
        Enemy2_1: cc.Node,
        hpEnemy2_1: cc.Node,
        damageEnemy2_1Text:cc.Label,
         //--Enemy2_2 Seting(Level2)-- 
         Enemy2_2: cc.Node,
         hpEnemy2_2: cc.Node,
         damageEnemy2_2Text:cc.Label,
         //--Enemy3_1 Seting(Level3)-- 
         Enemy3_1: cc.Node,
         hpEnemy3_1: cc.Node,
         BodyEnemy3_1: cc.Animation,
         bulletEnemy3_1: cc.Node,
         damageEnemy3_1Text:cc.Label,
         //--Enemy3_2 Seting(Level3)-- 
         Enemy3_2: cc.Node,
         hpEnemy3_2: cc.Node,
         BodyEnemy3_2: cc.Animation,
         bulletEnemy3_2: cc.Node,
         damageEnemy3_2Text:cc.Label,
         //--Enemy4_1 Seting(Level4)-- 
         Enemy4_1: cc.Node,
         hpEnemy4_1: cc.Node,
         bulletEnemy4_1: cc.Node,
         damageEnemy4_1Text:cc.Label,
        //--Enemy5_1 Seting(Level5)-- 
        Enemy5_1: cc.Node,
        hpEnemy5_1: cc.Node,
        BodyEnemy5_1: cc.Animation,
        bulletEnemy5_1_1: cc.Node,
        bulletEnemy5_1_2: cc.Node,
        damageEnemy5_1Text:cc.Label,
        //--Enemy5_2 Seting(Level5)-- 
        Enemy5_2: cc.Node,
        hpEnemy5_2: cc.Node,
        BodyEnemy5_2: cc.Animation,
        bulletEnemy5_2_1: cc.Node,
        bulletEnemy5_2_2: cc.Node,
        damageEnemy5_2Text:cc.Label,
        //--Enemy5_3 Seting(Level5)-- 
        Enemy5_3: cc.Node,
        hpEnemy5_3: cc.Node,
        BodyEnemy5_3: cc.Animation,
        bulletEnemy5_3_1: cc.Node,
        bulletEnemy5_3_2: cc.Node,
        damageEnemy5_3Text:cc.Label,
         //--Enemy6_1 Seting(Level6)-- 
         Enemy6_1: cc.Node,
         hpEnemy6_1: cc.Node,
         bulletEnemy6_1: cc.Node,
         damageEnemy6_1Text:cc.Label,
          //--Enemy6_2 Seting(Level6)-- 
          Enemy6_2: cc.Node,
          hpEnemy6_2: cc.Node,
          bulletEnemy6_2: cc.Node,
          damageEnemy6_2Text:cc.Label,
          //--Enemy7_1 Seting(Level7)-- 
          Enemy7_1: cc.Node,
          hpEnemy7_1: cc.Node,
          bulletEnemy7_1_1: cc.Node,
          bulletEnemy7_1_2: cc.Node,
          bulletEnemy7_1_3: cc.Node,
          damageEnemy7_1Text:cc.Label,
           //--Enemy7_2 Seting(Level7)-- 
           Enemy7_2: cc.Node,
           hpEnemy7_2: cc.Node,
           bulletEnemy7_2_1: cc.Node,
           bulletEnemy7_2_2: cc.Node,
           bulletEnemy7_2_3: cc.Node,
           damageEnemy7_2Text:cc.Label,
           //--Enemy8_1 Seting(Level8)-- 
           Enemy8_1: cc.Node,
           hpEnemy8_1: cc.Node,
           bulletEnemy8_1_1: cc.Node,
           bulletEnemy8_1_2: cc.Node,
           damageEnemy8_1Text:cc.Label,
            //--Enemy9_1 Seting(Level9)-- 
            Enemy9_1: cc.Node,
            hpEnemy9_1: cc.Node,
            bulletEnemy9_1_1: cc.Node,
            bulletEnemy9_1_2: cc.Node,
            damageEnemy9_1Text:cc.Label,
             //--Enemy9_2 Seting(Level9)-- 
             Enemy9_2: cc.Node,
             hpEnemy9_2: cc.Node,
             bulletEnemy9_2_1: cc.Node,
             bulletEnemy9_2_2: cc.Node,
             damageEnemy9_2Text:cc.Label,
              //--Enemy9_3 Seting(Level9)-- 
              Enemy9_3: cc.Node,
              hpEnemy9_3: cc.Node,
              bulletEnemy9_3_1: cc.Node,
              bulletEnemy9_3_2: cc.Node,
              damageEnemy9_3Text:cc.Label,
               //--Enemy10_1 Seting(Level10)-- 
               Enemy10_1: cc.Node,
               hpEnemy10_1: cc.Node,
               BodyEnemy10_1: cc.Animation,
               bulletEnemy10_1_1: cc.Node,
               bulletEnemy10_1_2: cc.Node,
               bulletEnemy10_1_3: cc.Node,
               damageEnemy10_1Text:cc.Label,
                //--Enemy10_2 Seting(Level10)-- 
                Enemy10_2: cc.Node,
                hpEnemy10_2: cc.Node,
                BodyEnemy10_2: cc.Animation,
                bulletEnemy10_2_1: cc.Node,
                bulletEnemy10_2_2: cc.Node,
                bulletEnemy10_2_3: cc.Node,
                damageEnemy10_2Text:cc.Label,
               //--Enemy10_2 Seting(Level10)-- 
               Enemy10_3: cc.Node,
               hpEnemy10_3: cc.Node,
               BodyEnemy10_3: cc.Animation,
               bulletEnemy10_3_1: cc.Node,
               bulletEnemy10_3_2: cc.Node,
               bulletEnemy10_3_3: cc.Node,
               damageEnemy10_3Text:cc.Label,
               //--Enemy4_1 Seting(Level4)-- 
                Enemy11_1: cc.Node,
                hpEnemy11_1: cc.Node,
                bulletEnemy11_1: cc.Node,
                damageEnemy11_1Text:cc.Label,
                  //--Enemy4_1 Seting(Level4)-- 
                  Enemy11_2: cc.Node,
                  hpEnemy11_2: cc.Node,
                  bulletEnemy11_2: cc.Node,
                  damageEnemy11_2Text:cc.Label,
                  //--Enemy12_2 Seting(Level7)-- 
                  Enemy12_1: cc.Node,
                  hpEnemy12_1: cc.Node,
                  damageEnemy12_1Text:cc.Label,
                  //--Enemy12_2 Seting(Level7)-- 
                  Enemy12_2: cc.Node,
                  hpEnemy12_2: cc.Node,
                  damageEnemy12_2Text:cc.Label,

                
                 //--EnemyX Seting(Boss)-- 
                 EnemyX: cc.Node,
                 hpEnemyX: cc.Node,
                 bulletEnemyX_1: cc.Node,
                 bulletEnemyX_2: cc.Node,
                 bulletEnemyX_3: cc.Node,
                 bulletEnemyX_4: cc.Node,
                 damageEnemyXText:cc.Label,
        
    },

    // LIFE-CYCLE CALLBACKS:
    
     onLoad () {
         //System game
         
         this.hitbox=100;
         this.speedbulletEnemy=3;
         this.LV=1;
         this.lvlabel.string="Level : "+this.LV;
         //Player 
         this.PlayerX=this.player.x;
         this.PlayerY=this.player.y;
         this.timePlayer=0;
         this.timePlayerBullet=100;
         this.speedbullet=10;
         this.damagebullet=10;
         this.maxHpplayer=100;
         this.HpPlayer=100;
         this.hand=20;
         this.hand2=125;
         this.bullet.x=this.player.x+this.hand;
         this.bullet.y=this.player.y;
         this.bullet2.x=this.player.x-this.hand;
         this.bullet2.y=this.player.y;
         this.bulletD.x=this.player.x-this.hand2;
         this.bulletD.y=this.player.y;
         this.bulletR.x=this.player.x+this.hand;
         this.bulletR.y=this.player.y;
         this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
         this.skill5=false;
         this.skill6=false;
         this.skill7=false;
         this.skill8=false;
         //Enemy1
         this.HpEnemy1=25;
         this.bulletEnemy1.x=this.Enemy1.x;
         this.bulletEnemy1.y=this.Enemy1.y;
         this.damagebulletEnemy1=3;
         this.timeEnemy1=0;
         this.Enemy1Skill=false; 
         //Enemy2
         this.HpEnemy2=25;
         this.bulletEnemy2.x=this.Enemy2.x;
         this.bulletEnemy2.y=this.Enemy2.y;
         this.damagebulletEnemy2=3;
         this.timeEnemy2=0;
         this.Enemy2Skill=false; 
         //Enemy2_1
         this.HpEnemy2_1=45;
         this.damagebulletEnemy2_1=5;
         this.timeEnemy2_1=0;
         this.oldE2_1x=this.Enemy2_1.x;
         this.oldE2_1y=this.Enemy2_1.y;
         this.Enemy2_1Skill=false; 
         this.Enemy2_1Lock=false; 
        //Enemy2_2
          this.HpEnemy2_2=45;
          this.damagebulletEnemy2_2=5;
          this.timeEnemy2_2=0;
          this.oldE2_1x=this.Enemy2_2.x;
          this.oldE2_1y=this.Enemy2_2.y;
          this.Enemy2_2Skill=false; 
          this.Enemy2_2Lock=false; 
        //Enemy3_1
         this.HpEnemy3_1=20;
         this.bulletEnemy3_1.x=this.Enemy3_1.x;
         this.bulletEnemy3_1.y=this.Enemy3_1.y;
         this.bulletEnemy3_1.x-=5;
         this.damagebulletEnemy3_1=10;
         
         this.timeEnemy3_1=0;
         this.Enemy3_1Skill=false; 
           //Enemy3_2
           this.HpEnemy3_2=20;
           this.bulletEnemy3_2.x=this.Enemy3_2.x;
           this.bulletEnemy3_2.y=this.Enemy3_2.y;
           this.bulletEnemy3_2.x-=20;
           this.damagebulletEnemy3_2=5;
           this.timeEnemy3_2=0;
          
           this.Enemy3_2Skill=false; 
           //Enemy4_1_Boss
           this.boos4_1=false;
           this.HpEnemy4_1=100;
           this.bulletEnemy4_1.x=this.Enemy4_1.x;
           this.bulletEnemy4_1.y=this.Enemy4_1.y;
           this.damagebulletEnemy4_1=10;
           this.timeEnemy4_1=0;
           this.Enemy4_1Skill=false; 
         //Enemy5
         this.HpEnemy5_1=50;
         this.bulletEnemy5_1_1.x=this.Enemy5_1.x+30;
         this.bulletEnemy5_1_1.y=this.Enemy5_1.y;
         this.bulletEnemy5_1_2.x=this.Enemy5_1.x-30;
         this.bulletEnemy5_1_2.y=this.Enemy5_1.y;
         this.damagebulletEnemy5_1=8;
         this.timeEnemy5_1=0;
         this.Enemy5_1Skill=false; 
          //Enemy5
          this.HpEnemy5_2=50;
          this.bulletEnemy5_2_1.x=this.Enemy5_2.x+30;
          this.bulletEnemy5_2_1.y=this.Enemy5_2.y;
          this.bulletEnemy5_2_2.x=this.Enemy5_2.x-30;
          this.bulletEnemy5_2_2.y=this.Enemy5_2.y;
          this.damagebulletEnemy5_2=8;
          this.timeEnemy5_2=0;
          this.Enemy5_2Skill=false;
           //Enemy5
         this.HpEnemy5_3=50;
         this.bulletEnemy5_3_1.x=this.Enemy5_3.x+30;
         this.bulletEnemy5_3_1.y=this.Enemy5_3.y;
         this.bulletEnemy5_3_2.x=this.Enemy5_3.x-30;
         this.bulletEnemy5_3_2.y=this.Enemy5_3.y;
         this.damagebulletEnemy5_3=8;
         this.timeEnemy5_3=0;
         this.Enemy5_3Skill=false;
         //Enemy6_1
         this.HpEnemy6_1=25;
         this.bulletEnemy6_1.x=this.Enemy6_1.x;
         this.bulletEnemy6_1.y=this.Enemy6_1.y;
         this.bulletEnemy6_1.x-=20;
         this.damagebulletEnemy6_1=8;
         this.timeEnemy6_1=0;
         this.Enemy6_1Skill=false; 
         //Enemy6_2
         this.HpEnemy6_2=25;
         this.bulletEnemy6_2.x=this.Enemy6_2.x;
         this.bulletEnemy6_2.y=this.Enemy6_2.y;
         this.bulletEnemy6_2.x-=20;
         this.damagebulletEnemy6_2=8;
         this.timeEnemy6_2=0;
         this.Enemy6_2Skill=false; 
         //Enemy7
         this.HpEnemy7_1=90;
         this.bulletEnemy7_1_1.x=this.Enemy7_1.x-40;
         this.bulletEnemy7_1_1.y=this.Enemy7_1.y;
         this.bulletEnemy7_1_2.x=this.Enemy7_1.x-40;
         this.bulletEnemy7_1_2.y=this.Enemy7_1.y;
         this.bulletEnemy7_1_3.x=this.Enemy7_1.x-40;
         this.bulletEnemy7_1_3.y=this.Enemy7_1.y;
         this.damagebulletEnemy7_1=6;
         this.timeEnemy7_1=0;
         this.Enemy7_1Skill=false;
         //Enemy7
         this.HpEnemy7_2=90;
         this.bulletEnemy7_2_1.x=this.Enemy7_2.x-40;
         this.bulletEnemy7_2_1.y=this.Enemy7_2.y;
         this.bulletEnemy7_2_2.x=this.Enemy7_2.x-40;
         this.bulletEnemy7_2_2.y=this.Enemy7_2.y;
         this.bulletEnemy7_2_3.x=this.Enemy7_2.x-40;
         this.bulletEnemy7_2_3.y=this.Enemy7_2.y;
         this.damagebulletEnemy7_2=6;
         this.timeEnemy7_2=0;
         this.Enemy7_2Skill=false;
         //Enemy8
         this.HpEnemy8_1=120;
         this.bulletEnemy8_1_1.x=this.Enemy8_1.x+100;
         this.bulletEnemy8_1_1.y=this.Enemy8_1.y;
         this.bulletEnemy8_1_2.x=this.Enemy8_1.x-100;
         this.bulletEnemy8_1_2.y=this.Enemy8_1.y;
         this.damagebulletEnemy8_1=12;
         this.timeEnemy8_1=0;
         this.Enemy8_1Skill=false;
          //Enemy9
          this.HpEnemy9_1=80;
          this.bulletEnemy9_1_1.x=this.Enemy9_1.x+100;
          this.bulletEnemy9_1_1.y=this.Enemy9_1.y;
          this.bulletEnemy9_1_2.x=this.Enemy9_1.x-100;
          this.bulletEnemy9_1_2.y=this.Enemy9_1.y;
          this.damagebulletEnemy9_1=10;
          this.timeEnemy9_1=0;
          this.Enemy9_1Skill=false;
           //Enemy9
           this.HpEnemy9_2=80;
           this.bulletEnemy9_2_1.x=this.Enemy9_2.x+100;
           this.bulletEnemy9_2_1.y=this.Enemy9_2.y;
           this.bulletEnemy9_2_2.x=this.Enemy9_2.x-100;
           this.bulletEnemy9_2_2.y=this.Enemy9_2.y;
           this.damagebulletEnemy9_2=10;
           this.timeEnemy9_2=0;
           this.Enemy9_2Skill=false;
           //Enemy9
           this.HpEnemy9_3=80;
           this.bulletEnemy9_3_1.x=this.Enemy9_3.x+100;
           this.bulletEnemy9_3_1.y=this.Enemy9_3.y;
           this.bulletEnemy9_3_2.x=this.Enemy9_3.x-100;
           this.bulletEnemy9_3_2.y=this.Enemy9_3.y;
           this.damagebulletEnemy9_3=10;
           this.timeEnemy9_3=0;
           this.Enemy9_3Skill=false;
           //Enemy10
         this.HpEnemy10_1=110;
         this.bulletEnemy10_1_1.x=this.Enemy10_1.x;
         this.bulletEnemy10_1_1.y=this.Enemy10_1.y;
         this.bulletEnemy10_1_2.x=this.Enemy10_1.x;
         this.bulletEnemy10_1_2.y=this.Enemy10_1.y;
         this.bulletEnemy10_1_3.x=this.Enemy10_1.x;
         this.bulletEnemy10_1_3.y=this.Enemy10_1.y;
         this.damagebulletEnemy10_1=8;
         this.timeEnemy10_1=0;
         this.Enemy10_1Skill=false;
         //Enemy10
         this.HpEnemy10_2=110;
         this.bulletEnemy10_2_1.x=this.Enemy10_2.x;
         this.bulletEnemy10_2_1.y=this.Enemy10_2.y;
         this.bulletEnemy10_2_2.x=this.Enemy10_2.x;
         this.bulletEnemy10_2_2.y=this.Enemy10_2.y;
         this.bulletEnemy10_2_3.x=this.Enemy10_2.x;
         this.bulletEnemy10_2_3.y=this.Enemy10_2.y;
         this.damagebulletEnemy10_2=8;
         this.timeEnemy10_2=0;
         this.Enemy10_2Skill=false;
         //Enemy10
         this.HpEnemy10_3=110;
         this.bulletEnemy10_3_1.x=this.Enemy10_3.x;
         this.bulletEnemy10_3_1.y=this.Enemy10_3.y;
         this.bulletEnemy10_3_2.x=this.Enemy10_3.x;
         this.bulletEnemy10_3_2.y=this.Enemy10_3.y;
         this.bulletEnemy10_3_3.x=this.Enemy10_3.x;
         this.bulletEnemy10_3_3.y=this.Enemy10_3.y;
         this.damagebulletEnemy10_3=8;
         this.timeEnemy10_3=0;
         this.Enemy10_3Skill=false;
           //Enemy11_1
           this.HpEnemy11_1=60;
           this.bulletEnemy11_1.x=this.Enemy11_1.x;
           this.bulletEnemy11_1.y=this.Enemy11_1.y;
           this.bulletEnemy11_1.x-=10;
           this.damagebulletEnemy11_1=10;
           this.timeEnemy11_1=0;
             //Enemy11_2
         this.HpEnemy11_2=60;
         this.bulletEnemy11_2.x=this.Enemy11_2.x;
         this.bulletEnemy11_2.y=this.Enemy11_2.y;
         this.bulletEnemy11_2.x-=10;
         this.damagebulletEnemy11_2=10;
         this.timeEnemy11_2=0;
         //Enemy12_1
         this.HpEnemy12_1=80;
         this.damagebulletEnemy12_1=8;
         this.timeEnemy12_1=0;
         this.Enemy12_1Skill=false; 
         this.Enemy12_1Lock=false; 
         //Enemy12_2
         this.HpEnemy12_2=80;
         this.damagebulletEnemy12_2=8;
         this.timeEnemy12_2=0;
         this.Enemy12_2Skill=false; 
         this.Enemy12_2Lock=false; 
          //EnemX
          this.HpEnemyX=230;
          this.bulletEnemyX_1.x=this.EnemyX.x;
          this.bulletEnemyX_1.y=this.EnemyX.y;
          this.bulletEnemyX_2.x=this.EnemyX.x;
          this.bulletEnemyX_2.y=this.EnemyX.y;
          this.bulletEnemyX_3.x=this.EnemyX.x;
          this.bulletEnemyX_3.y=this.EnemyX.y;
          this.bulletEnemyX_4.x=this.EnemyX.x;
          this.bulletEnemyX_4.y=this.EnemyX.y;
          this.damagebulletEnemyX=15;
          this.timeEnemyX=0;
          this.EnemyXSkill=false;
         //check Player move
         this.notmovetime=0;
         this.NotmoveX=this.player.x;
         this.NotmoveY=this.player.y;
     },
     randomskill(){
        var skill1 = Math.floor((Math.random() * 4) + 1);
        var skill2 = Math.floor((Math.random() * 4) + 1);
        var skill3 = Math.floor((Math.random() * 4) + 1);
        if(skill1==1){ this.skill1_1.active=true; this.skill1label.string="+ Health 25%";}
        else if(skill1==2){ this.skill1_2.active=true; this.skill1label.string="+ Damage 25%";}
        else if(skill1==3){ this.skill1_3.active=true; this.skill1label.string="+ Atk Speed 25%";}
        else if(skill1==4){ this.skill1_4.active=true; this.skill1label.string="Fully restore health";}
        if(skill2==1){ this.skill2_1.active=true; this.skill2label.string="+ Health 25%";}
        else if(skill2==2){ this.skill2_2.active=true; this.skill2label.string="+ Damage 25%";}
        else if(skill2==3){ this.skill2_3.active=true; this.skill2label.string="+ Atk Speed 25%";}
        else if(skill2==4){ this.skill2_4.active=true; this.skill2label.string="Fully restore health";}
        if(skill3==1){ this.skill3_1.active=true; this.skill3label.string="+ Health 25%";}
        else if(skill3==2){ this.skill3_2.active=true; this.skill3label.string="+ Damage 25%";}
        else if(skill3==3){ this.skill3_3.active=true; this.skill3label.string="+ Atk Speed 25%";}
        else if(skill3==4){ this.skill3_4.active=true; this.skill3label.string="Fully restore health";}
     },
     offallskill(){
        this.skill1_1.active=false;
        this.skill1_2.active=false;
        this.skill1_3.active=false;
        this.skill1_4.active=false;
        this.skill2_1.active=false;
        this.skill2_2.active=false;
        this.skill2_3.active=false;
        this.skill2_4.active=false;
        this.skill3_1.active=false;
        this.skill3_2.active=false;
        this.skill3_3.active=false;
        this.skill3_4.active=false;


     },
     onskill1(){
        this.maxHpplayer+=(this.maxHpplayer*25)/100;
        this.HpPlayer+=(this.maxHpplayer*25)/100;
        this.skill.active=false;
        this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
        this.loadLv();
     },
     onskill2(){
        this.damagebullet+=(this.damagebullet*25)/100;
        this.skill.active=false;
        this.loadLv();
     },
     onskill3(){
        this.speedbullet+=(this.speedbullet*25)/100;
        this.skill.active=false;
        this.loadLv();
     },
     onskill4(){
        this.HpPlayer=this.maxHpplayer;
        this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
        this.skill.active=false;
        this.loadLv();
     },
     lv1Seting(){
         this.bulletEnemy1.active=true;
         this.bulletEnemy2.active=true;
         this.Enemy1.active=true;
         this.Enemy2.active=true;
         this.Home.active=false;
     },
     lv2Seting(){
        this.player.x=this.PlayerX;
        this.player.y=this.PlayerY;
        this.Enemy2_1.active=true;
        this.Enemy2_2.active=true;
        this.HpEnemy1=25;
        this.bulletEnemy1.x=this.Enemy1.x;
        this.bulletEnemy1.y=this.Enemy1.y;
        this.hpEnemy1.setScale(this.HpEnemy1,1);
        this.Enemy1.active=true;
        this.HpEnemy2=25;
        this.bulletEnemy2.x=this.Enemy2.x;
        this.bulletEnemy2.y=this.Enemy2.y;
        this.hpEnemy2.setScale(this.HpEnemy2,1);
        this.Enemy2.active=true;
        this.bulletEnemy1.active=true;
        this.bulletEnemy2.active=true;
     },
     lv3Seting(){
        this.player.x=this.PlayerX;
        this.player.y=this.PlayerY;
        this.Enemy3_1.active=true;
        this.Enemy3_2.active=true;
        this.HpEnemy2_1=45;
        this.hpEnemy2_1.setScale(this.HpEnemy2_1,1);
        this.Enemy2_1.x=this.oldE2_1x;
        this.Enemy2_1.y=this.oldE2_1y;
        this.Enemy2_1.active=true;
        this.HpEnemy2_2=45;
        this.hpEnemy2_2.setScale(this.HpEnemy2_2,1);
        // this.Enemy2_2.x=this.oldE2_2x;
        // this.Enemy2_2.y=this.oldE2_2y;
        this.Enemy2_2.active=true;
        this.bulletEnemy3_1.active=true;
        this.bulletEnemy3_2.active=true;
     },
     lv4Seting(){
        this.player.x=this.PlayerX;
        this.player.y=this.PlayerY;
        this.Enemy5_1.active=true;
        this.Enemy5_2.active=true;
        this.Enemy5_3.active=true;
        this.bulletEnemy5_1_1.active=true;
        this.bulletEnemy5_1_2.active=true;
        this.bulletEnemy5_2_1.active=true;
        this.bulletEnemy5_2_2.active=true;
        this.bulletEnemy5_3_1.active=true;
        this.bulletEnemy5_3_2.active=true;
        this.skill7=true;
     },
     lv5Seting(){
        this.player.x=this.PlayerX;
        this.player.y=this.PlayerY;
        this.Enemy6_1.active=true;
        this.Enemy6_2.active=true;
        this.bulletEnemy6_1.active=true;
        this.bulletEnemy6_2.active=true;
        this.Enemy7_1.active=true;
        this.Enemy7_2.active=true;
        this.bulletEnemy7_1_1.active=true;
        this.bulletEnemy7_1_2.active=true;
        this.bulletEnemy7_1_3.active=true;
        this.bulletEnemy7_2_1.active=true;
        this.bulletEnemy7_2_2.active=true;
        this.bulletEnemy7_2_3.active=true;
        this.skill6=true;
        
     },
     lv6Seting(){
        this.player.x=this.PlayerX;
        this.player.y=this.PlayerY;
        this.Enemy8_1.active=true;
        this.bulletEnemy8_1_1.active=true;
        this.bulletEnemy8_1_2.active=true;
        this.Enemy11_1.active=true;
        this.bulletEnemy11_1.active=true;
        this.Enemy11_2.active=true;
        this.bulletEnemy11_2.active=true;
        this.skill5=true;
     },
     lv7Seting(){
        this.player.x=this.PlayerX;
        this.player.y=this.PlayerY;
        this.Enemy12_1.active=true;
        this.Enemy12_2.active=true;
        this.bulletEnemy12_1.active=true;
        this.bulletEnemy12_2.active=true;
     },
     lv8Seting(){
        this.player.x=this.PlayerX;
        this.player.y=this.PlayerY;
        this.Enemy10_1.active=true;
        this.Enemy10_2.active=true;
        this.Enemy10_3.active=true;
        this.bulletEnemy10_1_1.active=true;
        this.bulletEnemy10_1_2.active=true;
        this.bulletEnemy10_1_3.active=true;
        this.bulletEnemy10_2_1.active=true;
        this.bulletEnemy10_2_2.active=true;
        this.bulletEnemy10_2_3.active=true;
        this.bulletEnemy10_3_1.active=true;
        this.bulletEnemy10_3_2.active=true;
        this.bulletEnemy10_3_3.active=true;
        this.skill8 =true;
        
     },
     lv9Seting(){
        this.player.x=this.PlayerX;
        this.player.y=this.PlayerY;
        this.Enemy9_1.active=true;
        this.Enemy9_2.active=true;
        this.Enemy9_3.active=true;
        this.bulletEnemy9_1_1.active=true;
        this.bulletEnemy9_1_2.active=true;
        this.bulletEnemy9_2_1.active=true;
        this.bulletEnemy9_2_2.active=true;
        this.bulletEnemy9_3_1.active=true;
        this.bulletEnemy9_3_2.active=true;
     },
     lv10Seting(){
        this.player.x=this.PlayerX;
        this.player.y=this.PlayerY;
        this.EnemyX.active=true;
        this.bulletEnemyX_1.active=true;
        this.bulletEnemyX_1.active=true;
        this.bulletEnemyX_2.active=true;
        this.bulletEnemyX_2.active=true;
        this.bulletEnemyX_3.active=true;
        this.bulletEnemyX_3.active=true;
        this.bulletEnemyX_4.active=true;
        this.bulletEnemyX_4.active=true;
        
     },
     setGrid(){
        //Setขอบ 
       if(this.player.x<62.983){
           this.player.x=62.983;
       }
       else if(this.player.x>662.863){
           this.player.x=662.863;
       }
       else if(this.player.y<28.208){
           this.player.y=28.208;
       }
       else if(this.player.y>1008.952){
           this.player.y=1008.952;
       }
    },
    resetGame(){
       this.victory.active=false;
       cc.director.loadScene('test');
    },
    autolockPlayer(){
       if(this.Enemy1.active==true&&this.player.y<=this.Enemy1.y+this.timePlayerBullet){
          // this.bullet.rotation=this.player.rotation;
               if(this.timePlayer==(this.timePlayer+=1)){
               this.bullet.x=this.Enemy1.x-(this.timePlayerBullet-=this.timePlayer);
               }
       }
      
    },
    checkWin(){
       if(this.LV==1){
           if(this.Enemy1.active==false&&this.Enemy2.active==false&&this.Home.active==false){
               this.nextlvDoor.active=true;
           }
       }
       else if(this.LV==2){
           if(this.Enemy1.active==false&&this.Enemy2.active==false&&
              this.Enemy2_1.active==false&&this.Enemy2_2.active==false){
               this.nextlvDoor.active=true;
           }
       }
       else if(this.LV==3){
           if(this.Enemy3_1.active==false&&this.Enemy3_2.active==false&&
              this.Enemy2_1.active==false&&this.Enemy2_2.active==false&&
              this.Enemy4_1.active==false&&this.boos4_1==false){
               this.Enemy4_1.active=true;
               this.boos4_1=true;
               this.bulletEnemy4_1.active=true;
               this.timeEnemy4_1=0;
           }
           else if(this.Enemy3_1.active==false&&this.Enemy3_2.active==false&&
               this.Enemy2_1.active==false&&this.Enemy2_2.active==false&&
               this.Enemy4_1.active==false&&this.boos4_1==true){
               this.nextlvDoor.active=true;
            }
       }
       else if(this.LV==4){
           if(this.Enemy5_1.active==false&&this.Enemy5_2.active==false&&
              this.Enemy5_3.active==false){
               this.nextlvDoor.active=true;
           }
       }
       else if(this.LV==5){
           if(this.Enemy7_1.active==false&&this.Enemy7_2.active==false&&
              this.Enemy6_1.active==false&&this.Enemy6_2.active==false){
               this.nextlvDoor.active=true;
           }
       }
       else if(this.LV==6){
           if(this.Enemy11_1.active==false&&this.Enemy11_2.active==false&&
              this.Enemy8_1.active==false){
               this.nextlvDoor.active=true;
           }
       }
       else if(this.LV==7){
           if(this.Enemy12_1.active==false&&this.Enemy12_2.active==false){
               this.nextlvDoor.active=true;
           }
       }
       else if(this.LV==8){
           if(this.Enemy10_1.active==false&&this.Enemy10_2.active==false&&
              this.Enemy10_3.active==false){
               this.nextlvDoor.active=true;
           }
       }
       else if(this.LV==9){
           if(this.Enemy9_1.active==false&&this.Enemy9_2.active==false&&
            this.Enemy9_3.active==false){
               this.nextlvDoor.active=true;
           }
       }
       else if(this.LV==10){
           if(this.EnemyX.active==false){
               this.victory.active=true;
           }
       }
       
    },
    loadLv(){
       this.nextlvDoor.active=false;
       if(this.LV==1){
           this.LV++;
           this.lvlabel.string="Level : "+this.LV;
           this.lv2Seting();
       }
       else if(this.LV==2){
           this.LV++;
           this.lvlabel.string="Level : "+this.LV;
           this.lv3Seting();
       }
       else if(this.LV==3){
           this.LV++;
           this.lvlabel.string="Level : "+this.LV;
           this.lv4Seting();
       }
       else if(this.LV==4){
           this.LV++;
           this.lvlabel.string="Level : "+this.LV;
           this.lv5Seting();
       }
       else if(this.LV==5){
           this.LV++;
           this.lvlabel.string="Level : "+this.LV;
           this.lv6Seting();
       }
       else if(this.LV==6){
           this.LV++;
           this.lvlabel.string="Level : "+this.LV;
           this.lv7Seting();
       }
       else if(this.LV==7){
           this.LV++;
           this.lvlabel.string="Level : "+this.LV;
           this.lv8Seting();
       }
       else if(this.LV==8){
           this.LV++;
           this.lvlabel.string="Level : "+this.LV;
           this.lv9Seting();
       }
       else if(this.LV==9){
           this.LV++;
           this.lvlabel.string="Level : "+this.LV;
           this.lv10Seting();
       }
    },
    door(){
       if(this.nextlvDoor.active==true){
           if(this.player.x<=this.nextlvDoor.x+this.hitbox&&
            this.player.y<=this.nextlvDoor.y+this.hitbox&&
            this.player.x>=this.nextlvDoor.x-this.hitbox&&
            this.player.y>=this.nextlvDoor.y-this.hitbox&&
            this.nextlvDoor.active==true&&this.skill.active==false){
               this.offallskill();
                if(this.LV==1){
                    this.lv1.active=false;
                    this.lv2.active=true;
                    this.nextlvDoor.active=false;
                    this.skill.active=true;
                    this.randomskill();
               }
               else if(this.LV==2){
                   this.lv2.active=false;
                   this.lv3.active=true;
                   this.nextlvDoor.active=false;
                   this.skill.active=true;
                   this.randomskill();
              }
              else if(this.LV==3){
               this.lv3.active=false;
               this.lv4.active=true;
               this.nextlvDoor.active=false;
               this.skill.active=true;
               this.randomskill();
               }
               else if(this.LV==4){
                   this.lv4.active=false;
                   this.lv5.active=true;
                   this.nextlvDoor.active=false;
                   this.skill.active=true;
                    this.randomskill();
              }
              else if(this.LV==5){
               this.lv5.active=false;
               this.lv6.active=true;
               this.nextlvDoor.active=false;
               this.skill.active=true;
                    this.randomskill();
              }
              else if(this.LV==6){
               this.lv6.active=false;
               this.lv7.active=true;
               this.nextlvDoor.active=false;
               this.skill.active=true;
                this.randomskill();
               }
              else if(this.LV==7){
               this.lv7.active=false;
               this.lv8.active=true;
               this.nextlvDoor.active=false;
               this.skill.active=true;
                this.randomskill();
               }
               else if(this.LV==8){
                   this.lv8.active=false;
                   this.lv9.active=true;
                   this.nextlvDoor.active=false;
                   this.skill.active=true;
                   this.randomskill();
               }
               else if(this.LV==9){
                   this.lv9.active=false;
                   this.lv10.active=true;
                   this.nextlvDoor.active=false;
                   this.skill.active=true;
                   this.randomskill();
               }

            }
        }
    },
     playerSeting(){
        
        this.player.rotation=0;
        if(this.player.rotation==0){
        this.bullet.y+=this.speedbullet;
        }
        if(this.timePlayer==0&&this.Home.active!=true&&this.skill.active!=true&&this.victory.active!=true){
            this.Sgun1.play();
        }
        this.timePlayer++;
        if(this.skill5==true){
            this.bullet2.active=true;
            this.arm2.active=true;
            this.bullet2.y+=this.speedbullet; 
            if(this.timePlayer==0&&this.Home.active!=true&&this.skill.active!=true&&this.victory.active!=true){
                this.Sgun1.play();
            } 
        }
        if(this.skill7==true){
            this.bulletD.active=true;
            this.DornHelp.active=true;
            this.bulletD.y+=10;
            if(this.timePlayer==0&&this.Home.active!=true&&this.skill.active!=true&&this.victory.active!=true){
                this.Sgun3.play();
            }

        }
        if(this.skill8==true){
            if(this.timePlayer==0&&this.HpPlayer!=this.maxHpplayer){
                this.HpPlayer+=10;
                this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
            }
        }
        if(this.skill6==true){
            if(this.timePlayer==0){
                this.bulletR.x=this.player.x+this.hand;
                this.bulletR.y=this.player.y;
                this.bulletR.active=false;
            var RocketON = Math.floor((Math.random() * 100) + 1);
            }
                if(RocketON<50){
                    this.bulletR.active=true;
                    this.bulletD.y+=10;
                    if(this.timePlayer==0&&this.Home.active!=true&&this.skill.active!=true&&this.victory.active!=true){
                        this.Sgun3.play();
                    }
                }
        }
        // if(this.player.rotation<66&&this.player.rotation>-66){
        // this.bullet.y+=this.speedbullet;
        // }
        // else if(this.player.rotation>180&&this.player.rotation<-180){
        //     this.bullet.y-=this.speedbullet;
        // }
    //    //เคลื่อนที่ไม่ยิง
    //    if(this.player.x==this.NotmoveX&&this.player.y==this.NotmoveY){
    //        this.timePlayer++;
    //    }
    //    else{
    //        this.notmovetime++;
    //        if(this.notmovetime>=10){
    //            this.notmovetime=0;
    //            this.NotmoveX=this.player.x;
    //            this.NotmoveY=this.player.y;
    //        }
    //    }
       //รีเซ็ตกระสุน
       if(this.timePlayer>=150){
           this.bullet.x=this.player.x+this.hand;
           this.bullet.y=this.player.y;
           this.bulletR.x=this.player.x+this.hand;
           this.bulletR.y=this.player.y;
           this.bullet2.x=this.player.x-this.hand;
           this.bullet2.y=this.player.y;
           this.bulletD.x=this.player.x-this.hand2;
           this.bulletD.y=this.player.y;
           this.timePlayer=0;
        } 
     },
    EnemyLv1_1(){
          //Set UP
          this.timeEnemy1++;
          if(this.Enemy1Skill==false){
          this.bulletEnemy1.y-=3;
            if(this.timeEnemy1==0&&this.Home.active!=true&&this.skill.active!=true&&this.victory.active!=true){
                this.Sgun3.play();
            }
          }
           //เงื่อนไข เมื่อ กระสุนของ Enemy 1 โดน Player
        if(this.bulletEnemy1.x<=this.player.x+this.hitbox&&
            this.bulletEnemy1.y<=this.player.y+this.hitbox&&
            this.bulletEnemy1.x>=this.player.x-this.hitbox&&
            this.bulletEnemy1.y>=this.player.y-this.hitbox&&
            this.Enemy1.active==true){
            console.log("Player hit!!!");
            //คำนวนดาเมจ
            this.HpPlayer-=this.damagebulletEnemy1;
            this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
            this.damageText.string="Hitt!! -"+this.damagebulletEnemy1;
             //เช็คHPถ้าน้อยกว่า=0
             this.D1.play();
            if(this.HpPlayer<=0){
                this.player.active=false;
                this.bullet.active=false;
                this.gameover.active=true;
                this.Break.play();
            }
            console.log("HPPlayer="+this.HpEnemy1);
             //รีเซ็ตกระสุน
            this.bulletEnemy1.x=this.Enemy1.x;
            this.bulletEnemy1.y=this.Enemy1.y;
            this.timeEnemy1=0;
         }
         //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
         if(this.bullet.x<=this.Enemy1.x+this.hitbox&&
            this.bullet.y<=this.Enemy1.y+this.hitbox&&
            this.bullet.x>=this.Enemy1.x-this.hitbox&&
            this.bullet.y>=this.Enemy1.y-this.hitbox&&
            this.Enemy1.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
            if(this.Enemy1Skill==false){
            this.HpEnemy1-=this.damagebullet;
            this.hpEnemy1.setScale(this.HpEnemy1,1);
            this.damageEnemy1Text.string="Hitt!! -"+this.damagebullet;
            this.D2.play();
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
                if(this.HpEnemy1<=0){
                this.Enemy1.active=false;
                this.bulletEnemy1.active=false;
                this.Break.play();
                }
            }
            else{
                this.damageEnemy1Text.string="Miss!!";
            }
            console.log("HPE1="+this.HpEnemy1);
            //รีเซ็ตกระสุน
             this.bullet.x=this.player.x+this.hand;
             this.bullet.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
         //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
         if(this.bullet2.x<=this.Enemy1.x+this.hitbox&&
            this.bullet2.y<=this.Enemy1.y+this.hitbox&&
            this.bullet2.x>=this.Enemy1.x-this.hitbox&&
            this.bullet2.y>=this.Enemy1.y-this.hitbox&&
            this.Enemy1.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
            if(this.Enemy1Skill==false){
            this.HpEnemy1-=this.damagebullet;
            this.hpEnemy1.setScale(this.HpEnemy1,1);
            this.damageEnemy1Text.string="Hitt!! -"+this.damagebullet;
            this.D2.play();
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
                if(this.HpEnemy1<=0){
                this.Enemy1.active=false;
                this.bulletEnemy1.active=false;
                this.Break.play();
                }
            }
            else{
                this.damageEnemy1Text.string="Miss!!";
            }
            console.log("HPE1="+this.HpEnemy1);
            //รีเซ็ตกระสุน
             this.bullet2.x=this.player.x-this.hand;
             this.bullet2.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
         //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
         if(this.bulletD.x<=this.Enemy1.x+this.hitbox&&
            this.bulletD.y<=this.Enemy1.y+this.hitbox&&
            this.bulletD.x>=this.Enemy1.x-this.hitbox&&
            this.bulletD.y>=this.Enemy1.y-this.hitbox&&
            this.Enemy1.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
            if(this.Enemy1Skill==false){
            this.HpEnemy1-=this.damagebullet;
            this.hpEnemy1.setScale(this.HpEnemy1,1);
            this.damageEnemy1Text.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
                if(this.HpEnemy1<=0){
                this.Break.play();    
                this.Enemy1.active=false;
                this.bulletEnemy1.active=false;
                
                }
            }
            else{
                this.damageEnemy1Text.string="Miss!!";
            }
            console.log("HPE1="+this.HpEnemy1);
            //รีเซ็ตกระสุน
             this.bulletD.x=this.player.x-this.hand2;
             this.bulletD.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
         //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
         if(this.bulletR.x<=this.Enemy1.x+this.hitbox&&
            this.bulletR.y<=this.Enemy1.y+this.hitbox&&
            this.bulletR.x>=this.Enemy1.x-this.hitbox&&
            this.bulletR.y>=this.Enemy1.y-this.hitbox&&
            this.Enemy1.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
            if(this.Enemy1Skill==false){
            this.HpEnemy1-=this.damagebullet;
            this.hpEnemy1.setScale(this.HpEnemy1,1);
            this.damageEnemy1Text.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
                if(this.HpEnemy1<=0){
                this.Break.play(); 
                this.Enemy1.active=false;
                this.bulletEnemy1.active=false;
                }
            }
            else{
                this.damageEnemy1Text.string="Miss!!";
            }
            console.log("HPE1="+this.HpEnemy1);
            //รีเซ็ตกระสุน
             this.bulletR.x=this.player.x+this.hand;
             this.bulletR.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
         if(this.timeEnemy1>=300){
            //Skill แข็งตัว 
           if(this.Enemy1Skill==false){
           this.Enemy1Skill=true; 
           this.BodyEnemy1.play("close");
           }
           else if(this.Enemy1Skill==true){
            this.Enemy1Skill=false; 
            this.BodyEnemy1.play("Open");
           }
           //this.anim.node.scaleX = 1;
           // this.moveState = MoveState.Up;
           this.bulletEnemy1.x=this.Enemy1.x;
           this.bulletEnemy1.y=this.Enemy1.y;
           this.timeEnemy1=0;
        } 
        if(this.timeEnemy1==10){
            this.damageEnemy1Text.string="";
            this.damageText.string="";
         }
     },
    EnemyLv1_2(){
        //Set UP
        this.timeEnemy2++;
        if(this.Enemy2Skill==false){
        this.bulletEnemy2.y-=3;
            if(this.timeEnemy2==0&&this.Home.active!=true&&this.skill.active!=true&&this.victory.active!=true){
                this.Sgun3.play();
            }
        }
         //เงื่อนไข เมื่อ กระสุนของ Enemy 1 โดน Player
      if(this.bulletEnemy2.x<=this.player.x+this.hitbox&&
          this.bulletEnemy2.y<=this.player.y+this.hitbox&&
          this.bulletEnemy2.x>=this.player.x-this.hitbox&&
          this.bulletEnemy2.y>=this.player.y-this.hitbox&&
          this.Enemy2.active==true){
          console.log("Player hit!!!");
          //คำนวนดาเมจ
          this.HpPlayer-=this.damagebulletEnemy2;
          this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
          this.damageText.string="Hitt!! -"+this.damagebulletEnemy2;
          this.D1.play();
           //เช็คHPถ้าน้อยกว่า=0
          if(this.HpPlayer<=0){
              this.player.active=false;
              this.bullet.active=false;
              this.gameover.active=true;
              this.Break.play();
          }
          console.log("HPPlayer="+this.HpEnemy2);
           //รีเซ็ตกระสุน
          this.bulletEnemy2.x=this.Enemy2.x;
          this.bulletEnemy2.y=this.Enemy2.y;
          this.timeEnemy2=0;
       }
       //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
       if(this.bullet.x<=this.Enemy2.x+this.hitbox&&
          this.bullet.y<=this.Enemy2.y+this.hitbox&&
          this.bullet.x>=this.Enemy2.x-this.hitbox&&
          this.bullet.y>=this.Enemy2.y-this.hitbox&&
          this.Enemy2.active==true){
          console.log("Enemy hit!!!");
          //คำนวนดาเมจ
          if(this.Enemy2Skill==false){
          this.HpEnemy2-=this.damagebullet;
          this.hpEnemy2.setScale(this.HpEnemy2,1);
          this.damageEnemy2Text.string="Hitt!! -"+this.damagebullet;
          this.D2.play();
          //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
              if(this.HpEnemy2<=0){
              this.Enemy2.active=false;
              this.bulletEnemy2.active=false;
              this.Break.play();
              }
          }
          else{
              this.damageEnemy2Text.string="Miss!!";
          }
          console.log("HPE1="+this.HpEnemy1);
          //รีเซ็ตกระสุน
           this.bullet.x=this.player.x+this.hand;
           this.bullet.y=this.player.y
           this.timePlayer=0;
           //Enemy Bullet
       }
       if(this.bullet2.x<=this.Enemy2.x+this.hitbox&&
        this.bullet2.y<=this.Enemy2.y+this.hitbox&&
        this.bullet2.x>=this.Enemy2.x-this.hitbox&&
        this.bullet2.y>=this.Enemy2.y-this.hitbox&&
        this.Enemy2.active==true){
        console.log("Enemy hit!!!");
        //คำนวนดาเมจ
        if(this.Enemy2Skill==false){
        this.HpEnemy2-=this.damagebullet;
        this.hpEnemy2.setScale(this.HpEnemy2,1);
        this.damageEnemy2Text.string="Hitt!! -"+this.damagebullet;
        //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
        this.D2.play();
        if(this.HpEnemy2<=0){
        this.Break.play(); 
            this.Enemy2.active=false;
            this.bulletEnemy2.active=false;
            }
        }
        else{
            this.damageEnemy2Text.string="Miss!!";
        }
        console.log("HPE1="+this.HpEnemy1);
        //รีเซ็ตกระสุน
         this.bullet2.x=this.player.x-this.hand;
         this.bullet2.y=this.player.y
         this.timePlayer=0;
         //Enemy Bullet
     }
     if(this.bulletD.x<=this.Enemy2.x+this.hitbox&&
        this.bulletD.y<=this.Enemy2.y+this.hitbox&&
        this.bulletD.x>=this.Enemy2.x-this.hitbox&&
        this.bulletD.y>=this.Enemy2.y-this.hitbox&&
        this.Enemy2.active==true){
        console.log("Enemy hit!!!");
        //คำนวนดาเมจ
        if(this.Enemy2Skill==false){
        this.HpEnemy2-=this.damagebullet;
        this.hpEnemy2.setScale(this.HpEnemy2,1);
        this.damageEnemy2Text.string="Hitt!! -"+this.damagebullet;
        //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
        this.D2.play();
        if(this.HpEnemy2<=0){
        this.Break.play(); 
            this.Enemy2.active=false;
            this.bulletEnemy2.active=false;
            }
        }
        else{
            this.damageEnemy2Text.string="Miss!!";
        }
        console.log("HPE1="+this.HpEnemy1);
        //รีเซ็ตกระสุน
         this.bulletD.x=this.player.x-this.hand2;
         this.bulletD.y=this.player.y
         this.timePlayer=0;
         //Enemy Bullet
     }
     if(this.bulletR.x<=this.Enemy2.x+this.hitbox&&
        this.bulletR.y<=this.Enemy2.y+this.hitbox&&
        this.bulletR.x>=this.Enemy2.x-this.hitbox&&
        this.bulletR.y>=this.Enemy2.y-this.hitbox&&
        this.Enemy2.active==true){
        console.log("Enemy hit!!!");
        //คำนวนดาเมจ
        if(this.Enemy2Skill==false){
        this.HpEnemy2-=this.damagebullet;
        this.hpEnemy2.setScale(this.HpEnemy2,1);
        this.damageEnemy2Text.string="Hitt!! -"+this.damagebullet;
        //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
        this.D2.play();
        if(this.HpEnemy2<=0){
        this.Break.play(); 
            this.Enemy2.active=false;
            this.bulletEnemy2.active=false;
            }
        }
        else{
            this.damageEnemy2Text.string="Miss!!";
        }
        console.log("HPE1="+this.HpEnemy1);
        //รีเซ็ตกระสุน
         this.bulletR.x=this.player.x+this.hand;
         this.bulletR.y=this.player.y
         this.timePlayer=0;
         //Enemy Bullet
     }
       if(this.timeEnemy2>=300){
          //Skill แข็งตัว 
         if(this.Enemy2Skill==false){
         this.Enemy2Skill=true; 
         this.BodyEnemy2.play("close");
         }
         else if(this.Enemy2Skill==true){
          this.Enemy2Skill=false; 
          this.BodyEnemy2.play("Open");
         }
         //this.anim.node.scaleX = 1;
         // this.moveState = MoveState.Up;
         this.bulletEnemy2.x=this.Enemy2.x;
         this.bulletEnemy2.y=this.Enemy2.y;
         this.timeEnemy2=0;
      } 
      if(this.timeEnemy2==10){
        this.damageEnemy2Text.string="";
        this.damageText.string="";
      }
     },
    EnemyLv2_1(){
        this.timeEnemy2_1++;
        if(this.Enemy2_1Lock==false&&this.Enemy2_1.active==true){
            this.Enemy2_1.x=this.player.x;
            this.Enemy2_1.x-=100;
            this.Enemy2_1Lock=true;
        }
        if(this.Enemy2_1Skill==false&&this.Enemy2_1.active==true){
            if(this.player.y<this.Enemy2_1.y){
                this.Enemy2_1.rotation=0;
                this.Enemy2_1.y-=5;
            }
            else if(this.player.y>this.Enemy2_1.y){
                this.Enemy2_1.rotation=180;
                this.Enemy2_1.y+=5;
            }  
        }
            //เงื่อนไข เมื่อ กระสุนของ Enemy 1 โดน Player
      if(this.Enemy2_1.x<=this.player.x+this.hitbox&&
        this.Enemy2_1.y<=this.player.y+this.hitbox&&
        this.Enemy2_1.x>=this.player.x-this.hitbox&&
        this.Enemy2_1.y>=this.player.y-this.hitbox&&
        this.Enemy2_1.active==true&&this.Enemy2_1Skill==false){
        console.log("Player hit!!!");
        //คำนวนดาเมจ
        this.HpPlayer-=this.damagebulletEnemy2_1;
        this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
        this.damageText.string="Hitt!! -"+this.damagebulletEnemy2_1;
         //เช็คHPถ้าน้อยกว่า=0
         this.D1.play();
        if(this.HpPlayer<=0){
            this.Break.play(); 
            this.player.active=false;
            this.bullet.active=false;
            this.gameover.active=true;
        }
        console.log("HPPlayer="+this.HpEnemy2_1);
         //รีเซ็ตกระสุน
        this.timeEnemy2_1=0;
        this.Enemy2_1Skill=true;
     }
          //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
       if(this.bullet.x<=this.Enemy2_1.x+this.hitbox&&
        this.bullet.y<=this.Enemy2_1.y+this.hitbox&&
        this.bullet.x>=this.Enemy2_1.x-this.hitbox&&
        this.bullet.y>=this.Enemy2_1.y-this.hitbox&&
        this.Enemy2_1.active==true){
        console.log("Enemy hit!!!");
        //คำนวนดาเมจ
        
        this.HpEnemy2_1-=this.damagebullet;
        this.hpEnemy2_1.setScale(this.HpEnemy2_1,1);
        this.damageEnemy2_1Text.string="Hitt!! -"+this.damagebullet;
        //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            if(this.HpEnemy2_1<=0){
            this.Enemy2_1.active=false;
            }
        console.log("HPE1="+this.HpEnemy1);
        //รีเซ็ตกระสุน
         this.bullet.x=this.player.x+this.hand;
         this.bullet.y=this.player.y
         this.timePlayer=0;
         //Enemy Bullet
     }
     if(this.bullet2.x<=this.Enemy2_1.x+this.hitbox&&
        this.bullet2.y<=this.Enemy2_1.y+this.hitbox&&
        this.bullet2.x>=this.Enemy2_1.x-this.hitbox&&
        this.bullet2.y>=this.Enemy2_1.y-this.hitbox&&
        this.Enemy2_1.active==true){
        console.log("Enemy hit!!!");
        //คำนวนดาเมจ
        
        this.HpEnemy2_1-=this.damagebullet;
        this.hpEnemy2_1.setScale(this.HpEnemy2_1,1);
        this.damageEnemy2_1Text.string="Hitt!! -"+this.damagebullet;
        //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
            if(this.HpEnemy2_1<=0){
            this.Break.play(); 
                this.Enemy2_1.active=false;
            }
        console.log("HPE1="+this.HpEnemy1);
        //รีเซ็ตกระสุน
         this.bullet2.x=this.player.x-this.hand;
         this.bullet2.y=this.player.y
         this.timePlayer=0;
         //Enemy Bullet
     }
     if(this.bulletR.x<=this.Enemy2_1.x+this.hitbox&&
        this.bulletR.y<=this.Enemy2_1.y+this.hitbox&&
        this.bulletR.x>=this.Enemy2_1.x-this.hitbox&&
        this.bulletR.y>=this.Enemy2_1.y-this.hitbox&&
        this.Enemy2_1.active==true){
        console.log("Enemy hit!!!");
        //คำนวนดาเมจ
        
        this.HpEnemy2_1-=this.damagebullet;
        this.hpEnemy2_1.setScale(this.HpEnemy2_1,1);
        this.damageEnemy2_1Text.string="Hitt!! -"+this.damagebullet;
        //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
        this.D2.play();
        if(this.HpEnemy2_1<=0){
            this.Break.play();
            this.Enemy2_1.active=false;
            }
        console.log("HPE1="+this.HpEnemy1);
        //รีเซ็ตกระสุน
         this.bulletR.x=this.player.x+this.hand;
         this.bulletR.y=this.player.y
         this.timePlayer=0;
         //Enemy Bullet
     }
     if(this.bulletD.x<=this.Enemy2_1.x+this.hitbox&&
        this.bulletD.y<=this.Enemy2_1.y+this.hitbox&&
        this.bulletD.x>=this.Enemy2_1.x-this.hitbox&&
        this.bulletD.y>=this.Enemy2_1.y-this.hitbox&&
        this.Enemy2_1.active==true){
        console.log("Enemy hit!!!");
        //คำนวนดาเมจ
        
        this.HpEnemy2_1-=this.damagebullet;
        this.hpEnemy2_1.setScale(this.HpEnemy2_1,1);
        this.damageEnemy2_1Text.string="Hitt!! -"+this.damagebullet;
        //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
        this.D2.play();
        if(this.HpEnemy2_1<=0){
            this.Break.play();
            this.Enemy2_1.active=false;
            }
        console.log("HPE1="+this.HpEnemy1);
        //รีเซ็ตกระสุน
         this.bulletD.x=this.player.x-this.hand2;
         this.bulletD.y=this.player.y
         this.timePlayer=0;
         //Enemy Bullet
     }
        if(this.timeEnemy2_1>=300){
            if(this.Enemy2_1Skill==false){
                this.Enemy2_1Skill=true; 
            }
            else if(this.Enemy2_1Skill==true){
                 this.Enemy2_1Skill=false; 
                 this.Enemy2_1Lock=false;
            }
            this.timeEnemy2_1=0;
        }
      
        
     },
    EnemyLv2_2(){
        this.timeEnemy2_2++;
        if(this.Enemy2_2Lock==false&&this.Enemy2_2.active==true){
            this.Enemy2_2.x=this.player.x;
            this.Enemy2_2.x+=100;
            this.Enemy2_2Lock=true;
        }
        if(this.Enemy2_2Skill==false&&this.Enemy2_2.active==true){
            if(this.player.y<this.Enemy2_2.y){
                this.Enemy2_2.rotation=0;
                this.Enemy2_2.y-=5;
            }
            else if(this.player.y>this.Enemy2_2.y){
                this.Enemy2_2.rotation=180;
                this.Enemy2_2.y+=5;
            }  
        }
            //เงื่อนไข เมื่อ กระสุนของ Enemy 1 โดน Player
      if(this.Enemy2_2.x<=this.player.x+this.hitbox&&
        this.Enemy2_2.y<=this.player.y+this.hitbox&&
        this.Enemy2_2.x>=this.player.x-this.hitbox&&
        this.Enemy2_2.y>=this.player.y-this.hitbox&&
        this.Enemy2_2.active==true&&this.Enemy2_2Skill==false){
        console.log("Player hit!!!");
        //คำนวนดาเมจ
        this.HpPlayer-=this.damagebulletEnemy2_2;
        this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
        this.damageText.string="Hitt!! -"+this.damagebulletEnemy2_2;
         //เช็คHPถ้าน้อยกว่า=0
         this.D1.play();
        if(this.HpPlayer<=0){
                this.Break.play();
            this.player.active=false;
            this.bullet.active=false;
            this.gameover.active=true;
        }
        console.log("HPPlayer="+this.HpEnemy2_2);
         //รีเซ็ตกระสุน
        this.timeEnemy2_2=0;
        this.Enemy2_2Skill=true;
     }
          //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
       if(this.bullet.x<=this.Enemy2_2.x+this.hitbox&&
        this.bullet.y<=this.Enemy2_2.y+this.hitbox&&
        this.bullet.x>=this.Enemy2_2.x-this.hitbox&&
        this.bullet.y>=this.Enemy2_2.y-this.hitbox&&
        this.Enemy2_2.active==true){
        console.log("Enemy hit!!!");
        //คำนวนดาเมจ
        
        this.HpEnemy2_2-=this.damagebullet;
        this.hpEnemy2_2.setScale(this.HpEnemy2_2,1);
        this.damageEnemy2_2Text.string="Hitt!! -"+this.damagebullet;
        //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
        this.D2.play();
        if(this.HpEnemy2_2<=0){
            this.Break.play();
            this.Enemy2_2.active=false;
            }
        console.log("HPE1="+this.HpEnemy2_2);
        //รีเซ็ตกระสุน
         this.bullet.x=this.player.x+this.hand;
         this.bullet.y=this.player.y
         this.timePlayer=0;
         //Enemy Bullet
     }
          //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
          if(this.bullet2.x<=this.Enemy2_2.x+this.hitbox&&
            this.bullet2.y<=this.Enemy2_2.y+this.hitbox&&
            this.bullet2.x>=this.Enemy2_2.x-this.hitbox&&
            this.bullet2.y>=this.Enemy2_2.y-this.hitbox&&
            this.Enemy2_2.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
            
            this.HpEnemy2_2-=this.damagebullet;
            this.hpEnemy2_2.setScale(this.HpEnemy2_2,1);
            this.damageEnemy2_2Text.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
            if(this.HpEnemy2_2<=0){
                this.Break.play();
                this.Enemy2_2.active=false;
                }
            console.log("HPE1="+this.HpEnemy2_2);
            //รีเซ็ตกระสุน
             this.bullet2.x=this.player.x-this.hand;
             this.bullet2.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
          //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
          if(this.bulletD.x<=this.Enemy2_2.x+this.hitbox&&
            this.bulletD.y<=this.Enemy2_2.y+this.hitbox&&
            this.bulletD.x>=this.Enemy2_2.x-this.hitbox&&
            this.bulletD.y>=this.Enemy2_2.y-this.hitbox&&
            this.Enemy2_2.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
            
            this.HpEnemy2_2-=this.damagebullet;
            this.hpEnemy2_2.setScale(this.HpEnemy2_2,1);
            this.damageEnemy2_2Text.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
            if(this.HpEnemy2_2<=0){
                this.Break.play();
                this.Enemy2_2.active=false;
                }
            console.log("HPE1="+this.HpEnemy2_2);
            //รีเซ็ตกระสุน
             this.bulletD.x=this.player.x-this.hand2;
             this.bulletD.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
          //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
          if(this.bulletR.x<=this.Enemy2_2.x+this.hitbox&&
            this.bulletR.y<=this.Enemy2_2.y+this.hitbox&&
            this.bulletR.x>=this.Enemy2_2.x-this.hitbox&&
            this.bulletR.y>=this.Enemy2_2.y-this.hitbox&&
            this.Enemy2_2.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
            
            this.HpEnemy2_2-=this.damagebullet;
            this.hpEnemy2_2.setScale(this.HpEnemy2_2,1);
            this.damageEnemy2_2Text.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
            if(this.HpEnemy2_2<=0){
                this.Break.play();
                this.Enemy2_2.active=false;
                }
            console.log("HPE1="+this.HpEnemy2_2);
            //รีเซ็ตกระสุน
             this.bulletR.x=this.player.x+this.hand;
             this.bulletR.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
        if(this.timeEnemy2_2>=300){
            if(this.Enemy2_2Skill==false){
                this.Enemy2_2Skill=true; 
            }
            else if(this.Enemy2_2Skill==true){
                 this.Enemy2_2Skill=false; 
                 this.Enemy2_2Lock=false;
            }
            this.timeEnemy2_2=0;
        }
        
        
     },
    EnemyLv3_1(){
        //Set UP
        this.timeEnemy3_1++;
        this.bulletEnemy3_1.y-=10;
         //เงื่อนไข เมื่อ กระสุนของ Enemy 1 โดน Player
      if(this.bulletEnemy3_1.x<=this.player.x+this.hitbox&&
          this.bulletEnemy3_1.y<=this.player.y+this.hitbox&&
          this.bulletEnemy3_1.x>=this.player.x-this.hitbox&&
          this.bulletEnemy3_1.y>=this.player.y-this.hitbox&&
          this.Enemy3_1.active==true){
          console.log("Player hit!!!");
          //คำนวนดาเมจ
          this.HpPlayer-=this.damagebulletEnemy3_1;
          this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
          this.damageText.string="Hitt!! -"+this.damagebulletEnemy3_1;
           //เช็คHPถ้าน้อยกว่า=0
           this.D1.play();
          if(this.HpPlayer<=0){
                this.Break.play();
              this.player.active=false;
              this.bullet.active=false;
              this.gameover.active=true;
          }
          console.log("HPPlayer="+this.HpEnemy3_1);
           //รีเซ็ตกระสุน
          this.bulletEnemy3_1.x=this.Enemy3_1.x;
          this.bulletEnemy3_1.y=this.Enemy3_1.y;
          this.bulletEnemy3_1.x-=20;
          this.timeEnemy3_1=0;
       }
       //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
       if(this.bullet.x<=this.Enemy3_1.x+this.hitbox&&
          this.bullet.y<=this.Enemy3_1.y+this.hitbox&&
          this.bullet.x>=this.Enemy3_1.x-this.hitbox&&
          this.bullet.y>=this.Enemy3_1.y-this.hitbox&&
          this.Enemy3_1.active==true){
          console.log("Enemy hit!!!");
          //คำนวนดาเมจ
         
          this.HpEnemy3_1-=this.damagebullet;
          this.hpEnemy3_1.setScale(this.HpEnemy3_1,1);
          this.damageEnemy3_1Text.string="Hitt!! -"+this.damagebullet;
          //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
          this.D2.play();
          if(this.HpEnemy3_1<=0){
              this.Break.play();
              this.Enemy3_1.active=false;
              this.bulletEnemy3_1.active=false;
              }
          console.log("HPE1="+this.HpEnemy3_1);
          //รีเซ็ตกระสุน
           this.bullet.x=this.player.x+this.hand;
           this.bullet.y=this.player.y
           this.timePlayer=0;
           //Enemy Bullet
       }
       if(this.bullet2.x<=this.Enemy3_1.x+this.hitbox&&
        this.bullet2.y<=this.Enemy3_1.y+this.hitbox&&
        this.bullet2.x>=this.Enemy3_1.x-this.hitbox&&
        this.bullet2.y>=this.Enemy3_1.y-this.hitbox&&
        this.Enemy3_1.active==true){
        console.log("Enemy hit!!!");
        //คำนวนดาเมจ
       
        this.HpEnemy3_1-=this.damagebullet;
        this.hpEnemy3_1.setScale(this.HpEnemy3_1,1);
        this.damageEnemy3_1Text.string="Hitt!! -"+this.damagebullet;
        //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
        this.D2.play();
        if(this.HpEnemy3_1<=0){
            this.Break.play();
            this.Enemy3_1.active=false;
            this.bulletEnemy3_1.active=false;
            }
        console.log("HPE1="+this.HpEnemy3_1);
        //รีเซ็ตกระสุน
         this.bullet2.x=this.player.x-this.hand;
         this.bullet2.y=this.player.y
         this.timePlayer=0;
         //Enemy Bullet
     }
     if(this.bulletD.x<=this.Enemy3_1.x+this.hitbox&&
        this.bulletD.y<=this.Enemy3_1.y+this.hitbox&&
        this.bulletD.x>=this.Enemy3_1.x-this.hitbox&&
        this.bulletD.y>=this.Enemy3_1.y-this.hitbox&&
        this.Enemy3_1.active==true){
        console.log("Enemy hit!!!");
        //คำนวนดาเมจ
       
        this.HpEnemy3_1-=this.damagebullet;
        this.hpEnemy3_1.setScale(this.HpEnemy3_1,1);
        this.damageEnemy3_1Text.string="Hitt!! -"+this.damagebullet;
        //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
        this.D2.play();
        if(this.HpEnemy3_1<=0){
            this.Break.play();
            this.Enemy3_1.active=false;
            this.bulletEnemy3_1.active=false;
            }
        console.log("HPE1="+this.HpEnemy3_1);
        //รีเซ็ตกระสุน
         this.bulletD.x=this.player.x-this.hand2;
         this.bulletD.y=this.player.y
         this.timePlayer=0;
         //Enemy Bullet
     }
     if(this.bulletR.x<=this.Enemy3_1.x+this.hitbox&&
        this.bulletR.y<=this.Enemy3_1.y+this.hitbox&&
        this.bulletR.x>=this.Enemy3_1.x-this.hitbox&&
        this.bulletR.y>=this.Enemy3_1.y-this.hitbox&&
        this.Enemy3_1.active==true){
        console.log("Enemy hit!!!");
        //คำนวนดาเมจ
       
        this.HpEnemy3_1-=this.damagebullet;
        this.hpEnemy3_1.setScale(this.HpEnemy3_1,1);
        this.damageEnemy3_1Text.string="Hitt!! -"+this.damagebullet;
        //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
        this.D2.play();
        if(this.HpEnemy3_1<=0){
            this.Break.play();
            this.Enemy3_1.active=false;
            this.bulletEnemy3_1.active=false;
            }
        console.log("HPE1="+this.HpEnemy3_1);
        //รีเซ็ตกระสุน
         this.bulletR.x=this.player.x+this.hand;
         this.bulletR.y=this.player.y
         this.timePlayer=0;
         //Enemy Bullet
     }
       if(this.timeEnemy3_1>=200){
         // this.moveState = MoveState.Up;
         this.bulletEnemy3_1.x=this.Enemy3_1.x;
         this.bulletEnemy3_1.y=this.Enemy3_1.y;
         this.bulletEnemy3_1.x-=20;
         this.timeEnemy3_1=0;
      } 
      if(this.timeEnemy3_1==10){
          this.damageEnemy3_1Text.string="";
          this.damageText.string="";
       }
    },
    EnemyLv3_2(){
        //Set UP
        this.timeEnemy3_2++;
        this.bulletEnemy3_2.y-=10;
         //เงื่อนไข เมื่อ กระสุนของ Enemy 1 โดน Player
      if(this.bulletEnemy3_2.x<=this.player.x+this.hitbox&&
          this.bulletEnemy3_2.y<=this.player.y+this.hitbox&&
          this.bulletEnemy3_2.x>=this.player.x-this.hitbox&&
          this.bulletEnemy3_2.y>=this.player.y-this.hitbox&&
          this.Enemy3_2.active==true){
          console.log("Player hit!!!");
          //คำนวนดาเมจ
          this.HpPlayer-=this.damagebulletEnemy3_2;
          this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
          this.damageText.string="Hitt!! -"+this.damagebulletEnemy3_2;
           //เช็คHPถ้าน้อยกว่า=0
           this.D1.play();
          if(this.HpPlayer<=0){
                this.Break.play();
              this.player.active=false;
              this.bullet.active=false;
              this.gameover.active=true;
          }
          console.log("HPPlayer="+this.HpEnemy3_2);
           //รีเซ็ตกระสุน
          this.bulletEnemy3_2.x=this.Enemy3_2.x;
          this.bulletEnemy3_2.y=this.Enemy3_2.y;
          this.bulletEnemy3_2.x-=20;
          this.timeEnemy3_2=0;
       }
       //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
       if(this.bullet.x<=this.Enemy3_2.x+this.hitbox&&
          this.bullet.y<=this.Enemy3_2.y+this.hitbox&&
          this.bullet.x>=this.Enemy3_2.x-this.hitbox&&
          this.bullet.y>=this.Enemy3_2.y-this.hitbox&&
          this.Enemy3_2.active==true){
          console.log("Enemy hit!!!");
          //คำนวนดาเมจ
         
          this.HpEnemy3_2-=this.damagebullet;
          this.hpEnemy3_2.setScale(this.HpEnemy3_2,1);
          this.damageEnemy3_2Text.string="Hitt!! -"+this.damagebullet;
          //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
          this.D2.play();
          if(this.HpEnemy3_2<=0){
              this.Break.play();
              this.Enemy3_2.active=false;
              this.bulletEnemy3_2.active=false;
              }
          console.log("HPE1="+this.HpEnemy3_2);
          //รีเซ็ตกระสุน
           this.bullet.x=this.player.x+this.hand;
           this.bullet.y=this.player.y
           this.timePlayer=0;
           //Enemy Bullet
       }
        //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
        if(this.bullet2.x<=this.Enemy3_2.x+this.hitbox&&
            this.bullet2.y<=this.Enemy3_2.y+this.hitbox&&
            this.bullet2.x>=this.Enemy3_2.x-this.hitbox&&
            this.bullet2.y>=this.Enemy3_2.y-this.hitbox&&
            this.Enemy3_2.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
           
            this.HpEnemy3_2-=this.damagebullet;
            this.hpEnemy3_2.setScale(this.HpEnemy3_2,1);
            this.damageEnemy3_2Text.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
            if(this.HpEnemy3_2<=0){
                this.Break.play();
                this.Enemy3_2.active=false;
                this.bulletEnemy3_2.active=false;
                }
            console.log("HPE1="+this.HpEnemy3_2);
            //รีเซ็ตกระสุน
             this.bullet2.x=this.player.x-this.hand;
             this.bullet2.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
          //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
        if(this.bulletD.x<=this.Enemy3_2.x+this.hitbox&&
            this.bulletD.y<=this.Enemy3_2.y+this.hitbox&&
            this.bulletD.x>=this.Enemy3_2.x-this.hitbox&&
            this.bulletD.y>=this.Enemy3_2.y-this.hitbox&&
            this.Enemy3_2.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
           
            this.HpEnemy3_2-=this.damagebullet;
            this.hpEnemy3_2.setScale(this.HpEnemy3_2,1);
            this.damageEnemy3_2Text.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
            if(this.HpEnemy3_2<=0){
                this.Break.play();
                this.Enemy3_2.active=false;
                this.bulletEnemy3_2.active=false;
                }
            console.log("HPE1="+this.HpEnemy3_2);
            //รีเซ็ตกระสุน
             this.bulletD.x=this.player.x-this.hand2;
             this.bulletD.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
          //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
        if(this.bulletR.x<=this.Enemy3_2.x+this.hitbox&&
            this.bulletR.y<=this.Enemy3_2.y+this.hitbox&&
            this.bulletR.x>=this.Enemy3_2.x-this.hitbox&&
            this.bulletR.y>=this.Enemy3_2.y-this.hitbox&&
            this.Enemy3_2.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
           
            this.HpEnemy3_2-=this.damagebullet;
            this.hpEnemy3_2.setScale(this.HpEnemy3_2,1);
            this.damageEnemy3_2Text.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
            if(this.HpEnemy3_2<=0){
                this.Break.play();
                this.Enemy3_2.active=false;
                this.bulletEnemy3_2.active=false;
                }
            console.log("HPE1="+this.HpEnemy3_2);
            //รีเซ็ตกระสุน
             this.bulletR.x=this.player.x+this.hand;
             this.bulletR.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
       if(this.timeEnemy3_2>=200){
         // this.moveState = MoveState.Up;
         this.bulletEnemy3_2.x=this.Enemy3_2.x;
         this.bulletEnemy3_2.y=this.Enemy3_2.y;
         this.bulletEnemy3_2.x-=20;
         this.timeEnemy3_2=0;
      } 
      if(this.timeEnemy3_2==10){
          this.damageEnemy3_2Text.string="";
          this.damageText.string="";
       }
    },
    EnemyLv4_1(){
        //Set UP
        this.timeEnemy4_1++;
        this.bulletEnemy4_1.y-=10;
         //เงื่อนไข เมื่อ กระสุนของ Enemy 1 โดน Player
        if(this.Enemy4_1Skill==false && this.EnemyLv4_1.active==true){
            if(this.timeEnemy4_1==10){
                this.HpEnemy1=100;
                this.bulletEnemy1.x=this.Enemy1.x;
                this.bulletEnemy1.y=this.Enemy1.y;
                this.hpEnemy1.setScale(this.HpEnemy1,1);
                this.Enemy1.active=true;
                this.bulletEnemy1.active=true;
            }
            else if(this.timeEnemy4_1==20){
                this.HpEnemy2=100;
                this.bulletEnemy2.x=this.Enemy2.x;
                this.bulletEnemy2.y=this.Enemy2.y;
                this.hpEnemy2.setScale(this.HpEnemy2,1);
                this.Enemy2.active=true;
                this.bulletEnemy2.active=true;
            }
            else if(this.timeEnemy4_1==30){
                this.HpEnemy2_1=100;
                this.hpEnemy2_1.setScale(this.HpEnemy2_1,1);
                this.Enemy2_1.active=true;
            }
            else if(this.timeEnemy4_1==40){
                this.HpEnemy2_2=100;
                this.hpEnemy2_2.setScale(this.HpEnemy2_2,1);
                this.Enemy2_2.active=true;
            }
            else if(this.timeEnemy4_1==50){
                this.HpEnemy3_1=100;
                this.bulletEnemy3_1.x=this.Enemy3_1.x;
                this.bulletEnemy3_1.y=this.Enemy3_1.y;
                this.bulletEnemy3_1.x-=20;
                this.hpEnemy3_1.setScale(this.HpEnemy3_1,1);
                this.Enemy3_1.active=true;
                this.bulletEnemy3_1.active=true;
            }
            else if(this.timeEnemy4_1==60){
                this.HpEnemy3_2=100;
                this.bulletEnemy3_2.x=this.Enemy3_2.x;
                this.bulletEnemy3_2.y=this.Enemy3_2.y;
                this.bulletEnemy3_2.x-=20;
                this.hpEnemy3_2.setScale(this.HpEnemy3_2,1);
                this.Enemy3_2.active=true;
                this.bulletEnemy3_2.active=true;
                this.Enemy4_1Skill=true;
            }
        }
      if(this.bulletEnemy4_1.x<=this.player.x+this.hitbox&&
          this.bulletEnemy4_1.y<=this.player.y+this.hitbox&&
          this.bulletEnemy4_1.x>=this.player.x-this.hitbox&&
          this.bulletEnemy4_1.y>=this.player.y-this.hitbox&&
          this.Enemy4_1.active==true){
          console.log("Player hit!!!");
          //คำนวนดาเมจ
          this.HpPlayer-=this.damagebulletEnemy4_1;
          this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
          this.damageText.string="Hitt!! -"+this.damagebulletEnemy4_1;
           //เช็คHPถ้าน้อยกว่า=0
           this.D1.play();
          if(this.HpPlayer<=0){
                this.Break.play();
              this.player.active=false;
              this.bullet.active=false;
              this.gameover.active=true;
          }
          console.log("HPPlayer="+this.HpEnemy4_1);
           //รีเซ็ตกระสุน
          this.bulletEnemy4_1.x=this.Enemy4_1.x;
          this.bulletEnemy4_1.y=this.Enemy4_1.y;
          this.timeEnemy4_1=0;
       }
       //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
       if(this.bullet.x<=this.Enemy4_1.x+this.hitbox&&
          this.bullet.y<=this.Enemy4_1.y+this.hitbox&&
          this.bullet.x>=this.Enemy4_1.x-this.hitbox&&
          this.bullet.y>=this.Enemy4_1.y-this.hitbox&&
          this.Enemy4_1.active==true){
          console.log("Enemy hit!!!");
          //คำนวนดาเมจ
         
          this.HpEnemy4_1-=this.damagebullet;
          this.hpEnemy4_1.setScale(this.HpEnemy4_1,1);
          this.damageEnemy4_1Text.string="Hitt!! -"+this.damagebullet;
          //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
          this.D2.play();
          if(this.HpEnemy4_1<=0){
              this.Break.play();
              this.Enemy4_1.active=false;
              this.bulletEnemy4_1.active=false;
              }
          console.log("HPE1="+this.HpEnemy4_1);
          //รีเซ็ตกระสุน
           this.bullet.x=this.player.x+this.hand;
           this.bullet.y=this.player.y
           this.timePlayer=0;
           //Enemy Bullet
       }
         //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
         if(this.bullet2.x<=this.Enemy4_1.x+this.hitbox&&
            this.bullet2.y<=this.Enemy4_1.y+this.hitbox&&
            this.bullet2.x>=this.Enemy4_1.x-this.hitbox&&
            this.bullet2.y>=this.Enemy4_1.y-this.hitbox&&
            this.Enemy4_1.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
           
            this.HpEnemy4_1-=this.damagebullet;
            this.hpEnemy4_1.setScale(this.HpEnemy4_1,1);
            this.damageEnemy4_1Text.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
          if(this.HpEnemy4_1<=0){
              this.Break.play();
                this.Enemy4_1.active=false;
                this.bulletEnemy4_1.active=false;
                }
            console.log("HPE1="+this.HpEnemy4_1);
            //รีเซ็ตกระสุน
             this.bullet2.x=this.player.x-this.hand;
             this.bullet2.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
         //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
         if(this.bulletD.x<=this.Enemy4_1.x+this.hitbox&&
            this.bulletD.y<=this.Enemy4_1.y+this.hitbox&&
            this.bulletD.x>=this.Enemy4_1.x-this.hitbox&&
            this.bulletD.y>=this.Enemy4_1.y-this.hitbox&&
            this.Enemy4_1.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
           
            this.HpEnemy4_1-=this.damagebullet;
            this.hpEnemy4_1.setScale(this.HpEnemy4_1,1);
            this.damageEnemy4_1Text.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
            if(this.HpEnemy4_1<=0){
                this.Break.play();
                this.Enemy4_1.active=false;
                this.bulletEnemy4_1.active=false;
                }
            console.log("HPE1="+this.HpEnemy4_1);
            //รีเซ็ตกระสุน
             this.bulletD.x=this.player.x-this.hand2;
             this.bulletD.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
         //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
         if(this.bulletR.x<=this.Enemy4_1.x+this.hitbox&&
            this.bulletR.y<=this.Enemy4_1.y+this.hitbox&&
            this.bulletR.x>=this.Enemy4_1.x-this.hitbox&&
            this.bulletR.y>=this.Enemy4_1.y-this.hitbox&&
            this.Enemy4_1.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
           
            this.HpEnemy4_1-=this.damagebullet;
            this.hpEnemy4_1.setScale(this.HpEnemy4_1,1);
            this.damageEnemy4_1Text.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
            if(this.HpEnemy4_1<=0){
                this.Break.play();
                this.Enemy4_1.active=false;
                this.bulletEnemy4_1.active=false;
                }
            console.log("HPE1="+this.HpEnemy4_1);
            //รีเซ็ตกระสุน
             this.bulletR.x=this.player.x+this.hand;
             this.bulletR.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
       if(this.timeEnemy4_1>=200){
         // this.moveState = MoveState.Up;
         this.bulletEnemy4_1.x=this.Enemy4_1.x;
         this.bulletEnemy4_1.y=this.Enemy4_1.y;
         this.timeEnemy4_1=0;
      } 
      if(this.timeEnemy4_1==10){
          this.damageEnemy4_1Text.string="";
          this.damageText.string="";
       }
    },
    EnemyLv5_1(){
        //Set UP
        this.timeEnemy5_1++;
        if(this.Enemy5_1Skill==false){
        this.bulletEnemy5_1_1.y-=3;
        this.bulletEnemy5_1_2.y-=3;
        }
         //เงื่อนไข เมื่อ กระสุนของ 1 Enemy 1 โดน Player
      if(this.bulletEnemy5_1_1.x<=this.player.x+this.hitbox&&
          this.bulletEnemy5_1_1.y<=this.player.y+this.hitbox&&
          this.bulletEnemy5_1_1.x>=this.player.x-this.hitbox&&
          this.bulletEnemy5_1_1.y>=this.player.y-this.hitbox&&
          this.Enemy5_1.active==true){
          console.log("Player hit!!!");
          //คำนวนดาเมจ
          this.HpPlayer-=this.damagebulletEnemy5_1;
          this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
          this.damageText.string="Hitt!! -"+this.damagebulletEnemy5_1;
           //เช็คHPถ้าน้อยกว่า=0
           this.D1.play();
          if(this.HpPlayer<=0){
                this.Break.play();
              this.player.active=false;
              this.bullet.active=false;
              this.gameover.active=true;
          }
          console.log("HPPlayer="+this.HpEnemy5_1);
           //รีเซ็ตกระสุน
           this.bulletEnemy5_1_1.x=this.Enemy5_1.x+30;
           this.bulletEnemy5_1_1.y=this.Enemy5_1.y;
          this.timeEnemy5_1=0;
       }
         //เงื่อนไข เมื่อ กระสุนของ 1 Enemy 1 โดน Player
      if(this.bulletEnemy5_1_2.x<=this.player.x+this.hitbox&&
        this.bulletEnemy5_1_2.y<=this.player.y+this.hitbox&&
        this.bulletEnemy5_1_2.x>=this.player.x-this.hitbox&&
        this.bulletEnemy5_1_2.y>=this.player.y-this.hitbox&&
        this.Enemy5_1.active==true){
        console.log("Player hit!!!");
        //คำนวนดาเมจ
        this.HpPlayer-=this.damagebulletEnemy5_1;
        this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
        this.damageText.string="Hitt!! -"+this.damagebulletEnemy5_1;
         //เช็คHPถ้าน้อยกว่า=0
         this.D1.play();
          if(this.HpPlayer<=0){
                this.Break.play();
            this.player.active=false;
            this.bullet.active=false;
            this.gameover.active=true;
        }
        console.log("HPPlayer="+this.HpEnemy5_1);
         //รีเซ็ตกระสุน
         this.bulletEnemy5_1_2.x=this.Enemy5_1.x-30;
         this.bulletEnemy5_1_2.y=this.Enemy5_1.y;
        this.timeEnemy5_1=0;
     }
       //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
       if(this.bullet.x<=this.Enemy5_1.x+this.hitbox&&
          this.bullet.y<=this.Enemy5_1.y+this.hitbox&&
          this.bullet.x>=this.Enemy5_1.x-this.hitbox&&
          this.bullet.y>=this.Enemy5_1.y-this.hitbox&&
          this.Enemy5_1.active==true){
          console.log("Enemy hit!!!");
          //คำนวนดาเมจ
          if(this.Enemy5_1Skill==false){
          this.HpEnemy5_1-=this.damagebullet;
          this.hpEnemy5_1.setScale(this.HpEnemy5_1,1);
          this.damageEnemy5_1Text.string="Hitt!! -"+this.damagebullet;
          //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
          this.D2.play();
          if(this.HpEnemy5_1<=0){
              this.Break.play();
              this.Enemy5_1.active=false;
              this.bulletEnemy5_1_1.active=false;
              this.bulletEnemy5_1_2.active=false;
              }
          }
          else{
              this.damageEnemy2Text.string="Miss!!";
          }
          console.log("HPE1="+this.HpEnemy1);
          //รีเซ็ตกระสุน
           this.bullet.x=this.player.x+this.hand;
           this.bullet.y=this.player.y
           this.timePlayer=0;
           //Enemy Bullet
       }
       //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
       if(this.bullet2.x<=this.Enemy5_1.x+this.hitbox&&
        this.bullet2.y<=this.Enemy5_1.y+this.hitbox&&
        this.bullet2.x>=this.Enemy5_1.x-this.hitbox&&
        this.bullet2.y>=this.Enemy5_1.y-this.hitbox&&
        this.Enemy5_1.active==true){
        console.log("Enemy hit!!!");
        //คำนวนดาเมจ
        if(this.Enemy5_1Skill==false){
        this.HpEnemy5_1-=this.damagebullet;
        this.hpEnemy5_1.setScale(this.HpEnemy5_1,1);
        this.damageEnemy5_1Text.string="Hitt!! -"+this.damagebullet;
        //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
        this.D2.play();
          if(this.HpEnemy5_1<=0){
              this.Break.play();
            this.Enemy5_1.active=false;
            this.bulletEnemy5_1_1.active=false;
            this.bulletEnemy5_1_2.active=false;
            }
        }
        else{
            this.damageEnemy2Text.string="Miss!!";
        }
        console.log("HPE1="+this.HpEnemy1);
        //รีเซ็ตกระสุน
         this.bullet2.x=this.player.x-this.hand;
         this.bullet2.y=this.player.y
         this.timePlayer=0;
         //Enemy Bullet
     }
      //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
      if(this.bulletD.x<=this.Enemy5_1.x+this.hitbox&&
        this.bulletD.y<=this.Enemy5_1.y+this.hitbox&&
        this.bulletD.x>=this.Enemy5_1.x-this.hitbox&&
        this.bulletD.y>=this.Enemy5_1.y-this.hitbox&&
        this.Enemy5_1.active==true){
        console.log("Enemy hit!!!");
        //คำนวนดาเมจ
        if(this.Enemy5_1Skill==false){
        this.HpEnemy5_1-=this.damagebullet;
        this.hpEnemy5_1.setScale(this.HpEnemy5_1,1);
        this.damageEnemy5_1Text.string="Hitt!! -"+this.damagebullet;
        //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
        this.D2.play();
        if(this.HpEnemy5_1<=0){
            this.Break.play();
            this.Enemy5_1.active=false;
            this.bulletEnemy5_1_1.active=false;
            this.bulletEnemy5_1_2.active=false;
            }
        }
        else{
            this.damageEnemy2Text.string="Miss!!";
        }
        console.log("HPE1="+this.HpEnemy1);
        //รีเซ็ตกระสุน
         this.bulletD.x=this.player.x-this.hand2;
         this.bulletD.y=this.player.y
         this.timePlayer=0;
         //Enemy Bullet
     }
      //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
      if(this.bulletR.x<=this.Enemy5_1.x+this.hitbox&&
        this.bulletR.y<=this.Enemy5_1.y+this.hitbox&&
        this.bulletR.x>=this.Enemy5_1.x-this.hitbox&&
        this.bulletR.y>=this.Enemy5_1.y-this.hitbox&&
        this.Enemy5_1.active==true){
        console.log("Enemy hit!!!");
        //คำนวนดาเมจ
        if(this.Enemy5_1Skill==false){
        this.HpEnemy5_1-=this.damagebullet;
        this.hpEnemy5_1.setScale(this.HpEnemy5_1,1);
        this.damageEnemy5_1Text.string="Hitt!! -"+this.damagebullet;
        //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
        this.D2.play();
        if(this.HpEnemy5_1<=0){
            this.Break.play();
            this.Enemy5_1.active=false;
            this.bulletEnemy5_1_1.active=false;
            this.bulletEnemy5_1_2.active=false;
            }
        }
        else{
            this.damageEnemy2Text.string="Miss!!";
        }
        console.log("HPE1="+this.HpEnemy1);
        //รีเซ็ตกระสุน
         this.bulletR.x=this.player.x+this.hand;
         this.bulletR.y=this.player.y
         this.timePlayer=0;
         //Enemy Bullet
     }
       if(this.timeEnemy5_1>=300){
          //Skill แข็งตัว 
         if(this.Enemy5_1Skill==false){
         this.Enemy5_1Skill=true; 
         this.BodyEnemy5_1.play("close");
         }
         else if(this.Enemy5_1Skill==true){
          this.Enemy5_1Skill=false; 
          this.BodyEnemy5_1.play("Open");
         }
         //this.anim.node.scaleX = 1;
         // this.moveState = MoveState.Up;
         this.bulletEnemy5_1_1.x=this.Enemy5_1.x+30;
         this.bulletEnemy5_1_1.y=this.Enemy5_1.y;
         this.bulletEnemy5_1_2.x=this.Enemy5_1.x-30;
         this.bulletEnemy5_1_2.y=this.Enemy5_1.y;
         this.timeEnemy5_1=0;
      } 
      if(this.timeEnemy5_1==10){
        this.damageEnemy5_1Text.string="";
        this.damageText.string="";
      }
     },
    EnemyLv5_2(){
        //Set UP
        this.timeEnemy5_2++;
        if(this.Enemy5_2Skill==false){
        this.bulletEnemy5_2_1.y-=3;
        this.bulletEnemy5_2_2.y-=3;
        }
         //เงื่อนไข เมื่อ กระสุนของ 1 Enemy 1 โดน Player
      if(this.bulletEnemy5_2_1.x<=this.player.x+this.hitbox&&
          this.bulletEnemy5_2_1.y<=this.player.y+this.hitbox&&
          this.bulletEnemy5_2_1.x>=this.player.x-this.hitbox&&
          this.bulletEnemy5_2_1.y>=this.player.y-this.hitbox&&
          this.Enemy5_2.active==true){
          console.log("Player hit!!!");
          //คำนวนดาเมจ
          this.HpPlayer-=this.damagebulletEnemy5_2;
          this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
          this.damageText.string="Hitt!! -"+this.damagebulletEnemy5_2;
           //เช็คHPถ้าน้อยกว่า=0
           this.D1.play();
          if(this.HpPlayer<=0){
                this.Break.play();
              this.player.active=false;
              this.bullet.active=false;
              this.gameover.active=true;
          }
          console.log("HPPlayer="+this.HpEnemy5_2);
           //รีเซ็ตกระสุน
           this.bulletEnemy5_2_1.x=this.Enemy5_2.x+30;
           this.bulletEnemy5_2_1.y=this.Enemy5_2.y;
          this.timeEnemy5_2=0;
       }
         //เงื่อนไข เมื่อ กระสุนของ 1 Enemy 1 โดน Player
      if(this.bulletEnemy5_2_2.x<=this.player.x+this.hitbox&&
        this.bulletEnemy5_2_2.y<=this.player.y+this.hitbox&&
        this.bulletEnemy5_2_2.x>=this.player.x-this.hitbox&&
        this.bulletEnemy5_2_2.y>=this.player.y-this.hitbox&&
        this.Enemy5_2.active==true){
        console.log("Player hit!!!");
        //คำนวนดาเมจ
        this.HpPlayer-=this.damagebulletEnemy5_2;
        this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
        this.damageText.string="Hitt!! -"+this.damagebulletEnemy5_2;
         //เช็คHPถ้าน้อยกว่า=0
         this.D1.play();
         if(this.HpPlayer<=0){
               this.Break.play();
            this.player.active=false;
            this.bullet.active=false;
            this.gameover.active=true;
        }
        console.log("HPPlayer="+this.HpEnemy5_2);
         //รีเซ็ตกระสุน
         this.bulletEnemy5_2_2.x=this.Enemy5_2.x-30;
         this.bulletEnemy5_2_2.y=this.Enemy5_2.y;
        this.timeEnemy5_2=0;
     }
       //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
       if(this.bullet.x<=this.Enemy5_2.x+this.hitbox&&
          this.bullet.y<=this.Enemy5_2.y+this.hitbox&&
          this.bullet.x>=this.Enemy5_2.x-this.hitbox&&
          this.bullet.y>=this.Enemy5_2.y-this.hitbox&&
          this.Enemy5_2.active==true){
          console.log("Enemy hit!!!");
          //คำนวนดาเมจ
          if(this.Enemy5_2Skill==false){
          this.HpEnemy5_2-=this.damagebullet;
          this.hpEnemy5_2.setScale(this.HpEnemy5_2,1);
          this.damageEnemy5_2Text.string="Hitt!! -"+this.damagebullet;
          //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
          this.D2.play();
          if(this.HpEnemy5_2<=0){
              this.Break.play();
              this.Enemy5_2.active=false;
              this.bulletEnemy5_2_1.active=false;
              this.bulletEnemy5_2_2.active=false;
              }
          }
          else{
              this.damageEnemy5_2Text.string="Miss!!";
          }
          console.log("HPE1="+this.HpEnemy5_2);
          //รีเซ็ตกระสุน
           this.bullet.x=this.player.x+this.hand;
           this.bullet.y=this.player.y
           this.timePlayer=0;
           //Enemy Bullet
       }
        //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
        if(this.bullet2.x<=this.Enemy5_2.x+this.hitbox&&
            this.bullet2.y<=this.Enemy5_2.y+this.hitbox&&
            this.bullet2.x>=this.Enemy5_2.x-this.hitbox&&
            this.bullet2.y>=this.Enemy5_2.y-this.hitbox&&
            this.Enemy5_2.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
            if(this.Enemy5_2Skill==false){
            this.HpEnemy5_2-=this.damagebullet;
            this.hpEnemy5_2.setScale(this.HpEnemy5_2,1);
            this.damageEnemy5_2Text.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
            if(this.HpEnemy5_2<=0){
                this.Break.play();
                this.Enemy5_2.active=false;
                this.bulletEnemy5_2_1.active=false;
                this.bulletEnemy5_2_2.active=false;
                }
            }
            else{
                this.damageEnemy5_2Text.string="Miss!!";
            }
            console.log("HPE1="+this.HpEnemy5_2);
            //รีเซ็ตกระสุน
             this.bullet2.x=this.player.x-this.hand;
             this.bullet2.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
           //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
        if(this.bulletD.x<=this.Enemy5_2.x+this.hitbox&&
            this.bulletD.y<=this.Enemy5_2.y+this.hitbox&&
            this.bulletD.x>=this.Enemy5_2.x-this.hitbox&&
            this.bulletD.y>=this.Enemy5_2.y-this.hitbox&&
            this.Enemy5_2.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
            if(this.Enemy5_2Skill==false){
            this.HpEnemy5_2-=this.damagebullet;
            this.hpEnemy5_2.setScale(this.HpEnemy5_2,1);
            this.damageEnemy5_2Text.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
            if(this.HpEnemy5_2<=0){
                this.Break.play();
                this.Enemy5_2.active=false;
                this.bulletEnemy5_2_1.active=false;
                this.bulletEnemy5_2_2.active=false;
                }
            }
            else{
                this.damageEnemy5_2Text.string="Miss!!";
            }
            console.log("HPE1="+this.HpEnemy5_2);
            //รีเซ็ตกระสุน
             this.bulletD.x=this.player.x-this.hand2;
             this.bulletD.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
           //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
        if(this.bulletR.x<=this.Enemy5_2.x+this.hitbox&&
            this.bulletR.y<=this.Enemy5_2.y+this.hitbox&&
            this.bulletR.x>=this.Enemy5_2.x-this.hitbox&&
            this.bulletR.y>=this.Enemy5_2.y-this.hitbox&&
            this.Enemy5_2.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
            if(this.Enemy5_2Skill==false){
            this.HpEnemy5_2-=this.damagebullet;
            this.hpEnemy5_2.setScale(this.HpEnemy5_2,1);
            this.damageEnemy5_2Text.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
            if(this.HpEnemy5_2<=0){
                this.Break.play();
                this.Enemy5_2.active=false;
                this.bulletEnemy5_2_1.active=false;
                this.bulletEnemy5_2_2.active=false;
                }
            }
            else{
                this.damageEnemy5_2Text.string="Miss!!";
            }
            console.log("HPE1="+this.HpEnemy5_2);
            //รีเซ็ตกระสุน
             this.bulletR.x=this.player.x+this.hand;
             this.bulletR.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
       if(this.timeEnemy5_2>=300){
          //Skill แข็งตัว 
         if(this.Enemy5_2Skill==false){
         this.Enemy5_2Skill=true; 
         this.BodyEnemy5_2.play("close");
         }
         else if(this.Enemy5_2Skill==true){
          this.Enemy5_2Skill=false; 
          this.BodyEnemy5_2.play("Open");
         }
         //this.anim.node.scaleX = 1;
         // this.moveState = MoveState.Up;
         this.bulletEnemy5_2_1.x=this.Enemy5_2.x+30;
         this.bulletEnemy5_2_1.y=this.Enemy5_2.y;
         this.bulletEnemy5_2_2.x=this.Enemy5_2.x-30;
         this.bulletEnemy5_2_2.y=this.Enemy5_2.y;
         this.timeEnemy5_2=0;
      } 
      if(this.timeEnemy5_2==10){
        this.damageEnemy5_2Text.string="";
        this.damageText.string="";
      }
     },
    EnemyLv5_3(){
        //Set UP
        this.timeEnemy5_3++;
        if(this.Enemy5_3Skill==false){
        this.bulletEnemy5_3_1.y-=3;
        this.bulletEnemy5_3_2.y-=3;
        }
         //เงื่อนไข เมื่อ กระสุนของ 1 Enemy 1 โดน Player
      if(this.bulletEnemy5_3_1.x<=this.player.x+this.hitbox&&
          this.bulletEnemy5_3_1.y<=this.player.y+this.hitbox&&
          this.bulletEnemy5_3_1.x>=this.player.x-this.hitbox&&
          this.bulletEnemy5_3_1.y>=this.player.y-this.hitbox&&
          this.Enemy5_3.active==true){
          console.log("Player hit!!!");
          //คำนวนดาเมจ
          this.HpPlayer-=this.damagebulletEnemy5_3;
          this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
          this.damageText.string="Hitt!! -"+this.damagebulletEnemy5_3;
           //เช็คHPถ้าน้อยกว่า=0
           this.D1.play();
          if(this.HpPlayer<=0){
              this.Break.play();
              this.player.active=false;
              this.bullet.active=false;
              this.gameover.active=true;
          }
          console.log("HPPlayer="+this.HpEnemy5_3);
           //รีเซ็ตกระสุน
           this.bulletEnemy5_3_1.x=this.Enemy5_3.x+30;
           this.bulletEnemy5_3_1.y=this.Enemy5_3.y;
          this.timeEnemy5_3=0;
       }
         //เงื่อนไข เมื่อ กระสุนของ 1 Enemy 1 โดน Player
      if(this.bulletEnemy5_3_2.x<=this.player.x+this.hitbox&&
        this.bulletEnemy5_3_2.y<=this.player.y+this.hitbox&&
        this.bulletEnemy5_3_2.x>=this.player.x-this.hitbox&&
        this.bulletEnemy5_3_2.y>=this.player.y-this.hitbox&&
        this.Enemy5_3.active==true){
        console.log("Player hit!!!");
        //คำนวนดาเมจ
        this.HpPlayer-=this.damagebulletEnemy5_3;
        this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
        this.damageText.string="Hitt!! -"+this.damagebulletEnemy5_3;
         //เช็คHPถ้าน้อยกว่า=0
         this.D1.play();
          if(this.HpPlayer<=0){
              this.Break.play();
            this.player.active=false;
            this.bullet.active=false;
            this.gameover.active=true;
        }
        console.log("HPPlayer="+this.HpEnemy5_3);
         //รีเซ็ตกระสุน
         this.bulletEnemy5_3_2.x=this.Enemy5_3.x-30;
         this.bulletEnemy5_3_2.y=this.Enemy5_3.y;
        this.timeEnemy5_3=0;
     }
       //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
       if(this.bullet.x<=this.Enemy5_3.x+this.hitbox&&
          this.bullet.y<=this.Enemy5_3.y+this.hitbox&&
          this.bullet.x>=this.Enemy5_3.x-this.hitbox&&
          this.bullet.y>=this.Enemy5_3.y-this.hitbox&&
          this.Enemy5_3.active==true){
          console.log("Enemy hit!!!");
          //คำนวนดาเมจ
          if(this.Enemy5_3Skill==false){
          this.HpEnemy5_3-=this.damagebullet;
          this.hpEnemy5_3.setScale(this.HpEnemy5_3,1);
          this.damageEnemy5_3Text.string="Hitt!! -"+this.damagebullet;
          //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
          this.D2.play();
          if(this.HpEnemy5_3<=0){
              this.Break.play();
              this.Enemy5_3.active=false;
              this.bulletEnemy5_3_1.active=false;
              this.bulletEnemy5_3_2.active=false;
              }
          }
          else{
              this.damageEnemy5_3Text.string="Miss!!";
          }
          console.log("HPE1="+this.HpEnemy1);
          //รีเซ็ตกระสุน
           this.bullet.x=this.player.x+this.hand;
           this.bullet.y=this.player.y
           this.timePlayer=0;
           //Enemy Bullet
       }
        //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
        if(this.bullet2.x<=this.Enemy5_3.x+this.hitbox&&
            this.bullet2.y<=this.Enemy5_3.y+this.hitbox&&
            this.bullet2.x>=this.Enemy5_3.x-this.hitbox&&
            this.bullet2.y>=this.Enemy5_3.y-this.hitbox&&
            this.Enemy5_3.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
            if(this.Enemy5_3Skill==false){
            this.HpEnemy5_3-=this.damagebullet;
            this.hpEnemy5_3.setScale(this.HpEnemy5_3,1);
            this.damageEnemy5_3Text.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
            if(this.HpEnemy5_3<=0){
                this.Break.play();
                this.Enemy5_3.active=false;
                this.bulletEnemy5_3_1.active=false;
                this.bulletEnemy5_3_2.active=false;
                }
            }
            else{
                this.damageEnemy5_3Text.string="Miss!!";
            }
            console.log("HPE1="+this.HpEnemy1);
            //รีเซ็ตกระสุน
             this.bullet2.x=this.player.x-this.hand;
             this.bullet2.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
       if(this.timeEnemy5_3>=300){
          //Skill แข็งตัว 
         if(this.Enemy5_3Skill==false){
         this.Enemy5_3Skill=true; 
         this.BodyEnemy5_3.play("close");
         }
         else if(this.Enemy5_3Skill==true){
          this.Enemy5_3Skill=false; 
          this.BodyEnemy5_3.play("Open");
         }
         //this.anim.node.scaleX = 1;
         // this.moveState = MoveState.Up;
         this.bulletEnemy5_3_1.x=this.Enemy5_3.x+30;
         this.bulletEnemy5_3_1.y=this.Enemy5_3.y;
         this.bulletEnemy5_3_2.x=this.Enemy5_3.x-30;
         this.bulletEnemy5_3_2.y=this.Enemy5_3.y;
         this.timeEnemy5_3=0;
      } 
      if(this.timeEnemy5_3==10){
        this.damageEnemy5_3Text.string="";
        this.damageText.string="";
      }
     },
    EnemyLv6_1(){
        //Set UP
        this.timeEnemy6_1++;
        this.bulletEnemy6_1.y-=12;
         //เงื่อนไข เมื่อ กระสุนของ Enemy 1 โดน Player
      if(this.bulletEnemy6_1.x<=this.player.x+this.hitbox&&
          this.bulletEnemy6_1.y<=this.player.y+this.hitbox&&
          this.bulletEnemy6_1.x>=this.player.x-this.hitbox&&
          this.bulletEnemy6_1.y>=this.player.y-this.hitbox&&
          this.Enemy6_1.active==true){
          console.log("Player hit!!!");
          //คำนวนดาเมจ
          this.HpPlayer-=this.damagebulletEnemy6_1;
          this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
          this.damageText.string="Hitt!! -"+this.damagebulletEnemy6_1;
           //เช็คHPถ้าน้อยกว่า=0
           this.D1.play();
          if(this.HpPlayer<=0){
                this.Break.play();
              this.player.active=false;
              this.bullet.active=false;
              this.gameover.active=true;
          }
          console.log("HPPlayer="+this.HpEnemy6_1);
           //รีเซ็ตกระสุน
          this.bulletEnemy6_1.x=this.Enemy6_1.x;
          this.bulletEnemy6_1.y=this.Enemy6_1.y;
          this.timeEnemy6_1=0;
       }
       //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
       if(this.bullet.x<=this.Enemy6_1.x+this.hitbox&&
          this.bullet.y<=this.Enemy6_1.y+this.hitbox&&
          this.bullet.x>=this.Enemy6_1.x-this.hitbox&&
          this.bullet.y>=this.Enemy6_1.y-this.hitbox&&
          this.Enemy6_1.active==true){
          console.log("Enemy hit!!!");
          //คำนวนดาเมจ
         
          this.HpEnemy6_1-=this.damagebullet;
          this.hpEnemy6_1.setScale(this.HpEnemy6_1,1);
          this.damageEnemy6_1Text.string="Hitt!! -"+this.damagebullet;
          //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
          this.D2.play();
          if(this.HpEnemy6_1<=0){
              this.Break.play();
              this.Enemy6_1.active=false;
              this.bulletEnemy6_1.active=false;
              }
          console.log("HPE1="+this.HpEnemy6_1);
          //รีเซ็ตกระสุน
           this.bullet.x=this.player.x+this.hand;
           this.bullet.y=this.player.y
           this.timePlayer=0;
           //Enemy Bullet
       }
        //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
        if(this.bullet2.x<=this.Enemy6_1.x+this.hitbox&&
            this.bullet2.y<=this.Enemy6_1.y+this.hitbox&&
            this.bullet2.x>=this.Enemy6_1.x-this.hitbox&&
            this.bullet2.y>=this.Enemy6_1.y-this.hitbox&&
            this.Enemy6_1.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
           
            this.HpEnemy6_1-=this.damagebullet;
            this.hpEnemy6_1.setScale(this.HpEnemy6_1,1);
            this.damageEnemy6_1Text.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
            if(this.HpEnemy6_1<=0){
                this.Break.play();
                this.Enemy6_1.active=false;
                this.bulletEnemy6_1.active=false;
                }
            console.log("HPE1="+this.HpEnemy6_1);
            //รีเซ็ตกระสุน
             this.bullet2.x=this.player.x-this.hand;
             this.bullet2.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
         
        //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
        if(this.bulletD.x<=this.Enemy6_1.x+this.hitbox&&
            this.bulletD.y<=this.Enemy6_1.y+this.hitbox&&
            this.bulletD.x>=this.Enemy6_1.x-this.hitbox&&
            this.bulletD.y>=this.Enemy6_1.y-this.hitbox&&
            this.Enemy6_1.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
           
            this.HpEnemy6_1-=this.damagebullet;
            this.hpEnemy6_1.setScale(this.HpEnemy6_1,1);
            this.damageEnemy6_1Text.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
            if(this.HpEnemy6_1<=0){
                this.Break.play();
                this.Enemy6_1.active=false;
                this.bulletEnemy6_1.active=false;
                }
            console.log("HPE1="+this.HpEnemy6_1);
            //รีเซ็ตกระสุน
             this.bulletD.x=this.player.x-this.hand2;
             this.bulletD.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
         
        //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
        if(this.bulletR.x<=this.Enemy6_1.x+this.hitbox&&
            this.bulletR.y<=this.Enemy6_1.y+this.hitbox&&
            this.bulletR.x>=this.Enemy6_1.x-this.hitbox&&
            this.bulletR.y>=this.Enemy6_1.y-this.hitbox&&
            this.Enemy6_1.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
           
            this.HpEnemy6_1-=this.damagebullet;
            this.hpEnemy6_1.setScale(this.HpEnemy6_1,1);
            this.damageEnemy6_1Text.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
            if(this.HpEnemy6_1<=0){
                this.Break.play();
                this.Enemy6_1.active=false;
                this.bulletEnemy6_1.active=false;
                }
            console.log("HPE1="+this.HpEnemy6_1);
            //รีเซ็ตกระสุน
             this.bulletR.x=this.player.x+this.hand;
             this.bulletR.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
       if(this.timeEnemy6_1>=200){
         // this.moveState = MoveState.Up;
         this.bulletEnemy6_1.x=this.Enemy6_1.x;
         this.bulletEnemy6_1.y=this.Enemy6_1.y;
         this.timeEnemy6_1=0;
      } 
      if(this.timeEnemy6_1==10){
          this.damageEnemy6_1Text.string="";
          this.damageText.string="";
       }
    },
    EnemyLv6_2(){
        //Set UP
        this.timeEnemy6_2++;
        this.bulletEnemy6_2.y-=12;
         //เงื่อนไข เมื่อ กระสุนของ Enemy 1 โดน Player
      if(this.bulletEnemy6_2.x<=this.player.x+this.hitbox&&
          this.bulletEnemy6_2.y<=this.player.y+this.hitbox&&
          this.bulletEnemy6_2.x>=this.player.x-this.hitbox&&
          this.bulletEnemy6_2.y>=this.player.y-this.hitbox&&
          this.Enemy6_2.active==true){
          console.log("Player hit!!!");
          //คำนวนดาเมจ
          this.HpPlayer-=this.damagebulletEnemy6_2;
          this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
          this.damageText.string="Hitt!! -"+this.damagebulletEnemy6_2;
           //เช็คHPถ้าน้อยกว่า=0
           this.D1.play();
          if(this.HpPlayer<=0){
                this.Break.play();
              this.player.active=false;
              this.bullet.active=false;
              this.gameover.active=true;
          }
          console.log("HPPlayer="+this.HpEnemy6_2);
           //รีเซ็ตกระสุน
          this.bulletEnemy6_2.x=this.Enemy6_2.x;
          this.bulletEnemy6_2.y=this.Enemy6_2.y;
          this.timeEnemy6_2=0;
       }
       //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
       if(this.bullet.x<=this.Enemy6_2.x+this.hitbox&&
          this.bullet.y<=this.Enemy6_2.y+this.hitbox&&
          this.bullet.x>=this.Enemy6_2.x-this.hitbox&&
          this.bullet.y>=this.Enemy6_2.y-this.hitbox&&
          this.Enemy6_2.active==true){
          console.log("Enemy hit!!!");
          //คำนวนดาเมจ
         
          this.HpEnemy6_2-=this.damagebullet;
          this.hpEnemy6_2.setScale(this.HpEnemy6_2,1);
          this.damageEnemy6_2Text.string="Hitt!! -"+this.damagebullet;
          //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
          this.D2.play();
          if(this.HpEnemy6_2<=0){
              this.Break.play();
              this.Enemy6_2.active=false;
              this.bulletEnemy6_2.active=false;
              }
          console.log("HPE1="+this.HpEnemy6_2);
          //รีเซ็ตกระสุน
           this.bullet.x=this.player.x+this.hand;
           this.bullet.y=this.player.y
           this.timePlayer=0;
           //Enemy Bullet
       }
        //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
        if(this.bullet2.x<=this.Enemy6_2.x+this.hitbox&&
            this.bullet2.y<=this.Enemy6_2.y+this.hitbox&&
            this.bullet2.x>=this.Enemy6_2.x-this.hitbox&&
            this.bullet2.y>=this.Enemy6_2.y-this.hitbox&&
            this.Enemy6_2.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
           
            this.HpEnemy6_2-=this.damagebullet;
            this.hpEnemy6_2.setScale(this.HpEnemy6_2,1);
            this.damageEnemy6_2Text.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
            if(this.HpEnemy6_2<=0){
                this.Break.play();
                this.Enemy6_2.active=false;
                this.bulletEnemy6_2.active=false;
                }
            console.log("HPE1="+this.HpEnemy6_2);
            //รีเซ็ตกระสุน
             this.bullet2.x=this.player.x-this.hand;
             this.bullet2.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
          //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
        if(this.bulletD.x<=this.Enemy6_2.x+this.hitbox&&
            this.bulletD.y<=this.Enemy6_2.y+this.hitbox&&
            this.bulletD.x>=this.Enemy6_2.x-this.hitbox&&
            this.bulletD.y>=this.Enemy6_2.y-this.hitbox&&
            this.Enemy6_2.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
           
            this.HpEnemy6_2-=this.damagebullet;
            this.hpEnemy6_2.setScale(this.HpEnemy6_2,1);
            this.damageEnemy6_2Text.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
            if(this.HpEnemy6_2<=0){
                this.Break.play();
                this.Enemy6_2.active=false;
                this.bulletEnemy6_2.active=false;
                }
            console.log("HPE1="+this.HpEnemy6_2);
            //รีเซ็ตกระสุน
             this.bulletD.x=this.player.x-this.hand2;
             this.bulletD.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
          //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
        if(this.bulletR.x<=this.Enemy6_2.x+this.hitbox&&
            this.bulletR.y<=this.Enemy6_2.y+this.hitbox&&
            this.bulletR.x>=this.Enemy6_2.x-this.hitbox&&
            this.bulletR.y>=this.Enemy6_2.y-this.hitbox&&
            this.Enemy6_2.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
           
            this.HpEnemy6_2-=this.damagebullet;
            this.hpEnemy6_2.setScale(this.HpEnemy6_2,1);
            this.damageEnemy6_2Text.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
            if(this.HpEnemy6_2<=0){
                this.Break.play();
                this.Enemy6_2.active=false;
                this.bulletEnemy6_2.active=false;
                }
            console.log("HPE1="+this.HpEnemy6_2);
            //รีเซ็ตกระสุน
             this.bulletR.x=this.player.x+this.hand;
             this.bulletR.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
       if(this.timeEnemy6_2>=200){
         // this.moveState = MoveState.Up;
         this.bulletEnemy6_2.x=this.Enemy6_2.x;
         this.bulletEnemy6_2.y=this.Enemy6_2.y;
         this.timeEnemy6_2=0;
      } 
      if(this.timeEnemy6_2==10){
          this.damageEnemy6_2Text.string="";
          this.damageText.string="";
       }
    },
    EnemyLv7_1(){
        //Set UP
        this.timeEnemy7_1++;
        this.bulletEnemy7_1_1.y-=5;
        this.bulletEnemy7_1_2.y-=10;
        this.bulletEnemy7_1_3.y-=15;
         //เงื่อนไข เมื่อ กระสุนของ Enemy 1 โดน Player
      if(this.bulletEnemy7_1_1.x<=this.player.x+this.hitbox&&
          this.bulletEnemy7_1_1.y<=this.player.y+this.hitbox&&
          this.bulletEnemy7_1_1.x>=this.player.x-this.hitbox&&
          this.bulletEnemy7_1_1.y>=this.player.y-this.hitbox&&
          this.Enemy7_1.active==true){
          console.log("Player hit!!!");
          //คำนวนดาเมจ
          this.HpPlayer-=this.damagebulletEnemy7_1;
          this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
          this.damageText.string="Hitt!! -"+this.damagebulletEnemy7_1;
           //เช็คHPถ้าน้อยกว่า=0
           this.D1.play();
          if(this.HpPlayer<=0){
                this.Break.play();
              this.player.active=false;
              this.bullet.active=false;
              this.gameover.active=true;
          }
          console.log("HPPlayer="+this.HpEnemy7_1);
           //รีเซ็ตกระสุน
          this.bulletEnemy7_1_1.x=this.Enemy7_1.x;
          this.bulletEnemy7_1_1.y=this.Enemy7_1.y;
          this.bulletEnemy7_1_1.x-=40;
          this.timeEnemy7_1_1=0;
       }
       if(this.bulletEnemy7_1_2.x<=this.player.x+this.hitbox&&
        this.bulletEnemy7_1_2.y<=this.player.y+this.hitbox&&
        this.bulletEnemy7_1_2.x>=this.player.x-this.hitbox&&
        this.bulletEnemy7_1_2.y>=this.player.y-this.hitbox&&
        this.Enemy7_1.active==true){
        console.log("Player hit!!!");
        //คำนวนดาเมจ
        this.HpPlayer-=this.damagebulletEnemy7_1;
        this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
        this.damageText.string="Hitt!! -"+this.damagebulletEnemy7_1;
         //เช็คHPถ้าน้อยกว่า=0
         this.D1.play();
          if(this.HpPlayer<=0){
                this.Break.play();
            this.player.active=false;
            this.bullet.active=false;
            this.gameover.active=true;
        }
        console.log("HPPlayer="+this.HpEnemy7_1);
         //รีเซ็ตกระสุน
        this.bulletEnemy7_1_2.x=this.Enemy7_1.x;
        this.bulletEnemy7_1_2.y=this.Enemy7_1.y;
        this.bulletEnemy7_1_2.x-=40;
        this.timeEnemy7_1=0;
     }
     if(this.bulletEnemy7_1_3.x<=this.player.x+this.hitbox&&
        this.bulletEnemy7_1_3.y<=this.player.y+this.hitbox&&
        this.bulletEnemy7_1_3.x>=this.player.x-this.hitbox&&
        this.bulletEnemy7_1_3.y>=this.player.y-this.hitbox&&
        this.Enemy7_1.active==true){
        console.log("Player hit!!!");
        //คำนวนดาเมจ
        this.HpPlayer-=this.damagebulletEnemy7_1;
        this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
        this.damageText.string="Hitt!! -"+this.damagebulletEnemy7_1;
         //เช็คHPถ้าน้อยกว่า=0
         this.D1.play();
          if(this.HpPlayer<=0){
                this.Break.play();
            this.player.active=false;
            this.bullet.active=false;
            this.gameover.active=true;
        }
        console.log("HPPlayer="+this.HpEnemy7_1);
         //รีเซ็ตกระสุน
        this.bulletEnemy7_1_3.x=this.Enemy7_1.x;
        this.bulletEnemy7_1_3.y=this.Enemy7_1.y;
        this.bulletEnemy7_1_3.x-=40;
        this.timeEnemy7_1=0;
     }
       //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
       if(this.bullet.x<=this.Enemy7_1.x+this.hitbox&&
          this.bullet.y<=this.Enemy7_1.y+this.hitbox&&
          this.bullet.x>=this.Enemy7_1.x-this.hitbox&&
          this.bullet.y>=this.Enemy7_1.y-this.hitbox&&
          this.Enemy7_1.active==true){
          console.log("Enemy hit!!!");
          //คำนวนดาเมจ
         
          this.HpEnemy7_1-=this.damagebullet;
          this.hpEnemy7_1.setScale(this.HpEnemy7_1,1);
          this.damageEnemy7_1Text.string="Hitt!! -"+this.damagebullet;
          //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
          this.D2.play();
          if(this.HpEnemy7_1<=0){
              this.Break.play();
              this.Enemy7_1.active=false;
              this.bulletEnemy7_1_1.active=false;
              this.bulletEnemy7_1_2.active=false;
              this.bulletEnemy7_1_3.active=false;
              }
          console.log("HPE1="+this.HpEnemy7_1);
          //รีเซ็ตกระสุน
           this.bullet.x=this.player.x+this.hand;
           this.bullet.y=this.player.y
           this.timePlayer=0;
           //Enemy Bullet
       }
         //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
         if(this.bullet2.x<=this.Enemy7_1.x+this.hitbox&&
            this.bullet2.y<=this.Enemy7_1.y+this.hitbox&&
            this.bullet2.x>=this.Enemy7_1.x-this.hitbox&&
            this.bullet2.y>=this.Enemy7_1.y-this.hitbox&&
            this.Enemy7_1.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
           
            this.HpEnemy7_1-=this.damagebullet;
            this.hpEnemy7_1.setScale(this.HpEnemy7_1,1);
            this.damageEnemy7_1Text.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
            if(this.HpEnemy7_1<=0){
                this.Break.play();
                this.Enemy7_1.active=false;
                this.bulletEnemy7_1_1.active=false;
                this.bulletEnemy7_1_2.active=false;
                this.bulletEnemy7_1_3.active=false;
                }
            console.log("HPE1="+this.HpEnemy7_1);
            //รีเซ็ตกระสุน
             this.bullet2.x=this.player.x-this.hand;
             this.bullet2.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
         //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
         if(this.bulletD.x<=this.Enemy7_1.x+this.hitbox&&
            this.bulletD.y<=this.Enemy7_1.y+this.hitbox&&
            this.bulletD.x>=this.Enemy7_1.x-this.hitbox&&
            this.bulletD.y>=this.Enemy7_1.y-this.hitbox&&
            this.Enemy7_1.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
           
            this.HpEnemy7_1-=this.damagebullet;
            this.hpEnemy7_1.setScale(this.HpEnemy7_1,1);
            this.damageEnemy7_1Text.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
            if(this.HpEnemy7_1<=0){
                this.Break.play();
                this.Enemy7_1.active=false;
                this.bulletEnemy7_1_1.active=false;
                this.bulletEnemy7_1_2.active=false;
                this.bulletEnemy7_1_3.active=false;
                }
            console.log("HPE1="+this.HpEnemy7_1);
            //รีเซ็ตกระสุน
             this.bulletD.x=this.player.x-this.hand2;
             this.bulletD.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
         //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
         if(this.bulletR.x<=this.Enemy7_1.x+this.hitbox&&
            this.bulletR.y<=this.Enemy7_1.y+this.hitbox&&
            this.bulletR.x>=this.Enemy7_1.x-this.hitbox&&
            this.bulletR.y>=this.Enemy7_1.y-this.hitbox&&
            this.Enemy7_1.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
           
            this.HpEnemy7_1-=this.damagebullet;
            this.hpEnemy7_1.setScale(this.HpEnemy7_1,1);
            this.damageEnemy7_1Text.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
            if(this.HpEnemy7_1<=0){
                this.Break.play();
                this.Enemy7_1.active=false;
                this.bulletEnemy7_1_1.active=false;
                this.bulletEnemy7_1_2.active=false;
                this.bulletEnemy7_1_3.active=false;
                }
            console.log("HPE1="+this.HpEnemy7_1);
            //รีเซ็ตกระสุน
             this.bulletR.x=this.player.x+this.hand;
             this.bulletR.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
       if(this.timeEnemy7_1>=300){
         // this.moveState = MoveState.Up;
         this.bulletEnemy7_1_1.x=this.Enemy7_1.x;
         this.bulletEnemy7_1_1.y=this.Enemy7_1.y;
         this.bulletEnemy7_1_1.x-=40;
         this.bulletEnemy7_1_2.x=this.Enemy7_1.x;
        this.bulletEnemy7_1_2.y=this.Enemy7_1.y;
        this.bulletEnemy7_1_2.x-=40;
        this.bulletEnemy7_1_3.x=this.Enemy7_1.x;
        this.bulletEnemy7_1_3.y=this.Enemy7_1.y;
        this.bulletEnemy7_1_3.x-=40;
         this.timeEnemy7_1=0;
      } 

      if(this.timeEnemy7_1==10){
          this.damageEnemy7_1Text.string="";
          this.damageText.string="";
       }
    },
    EnemyLv7_2(){
        //Set UP
        this.timeEnemy7_2++;
        this.bulletEnemy7_2_1.y-=5;
        this.bulletEnemy7_2_2.y-=10;
        this.bulletEnemy7_2_3.y-=15;
         //เงื่อนไข เมื่อ กระสุนของ Enemy 1 โดน Player
      if(this.bulletEnemy7_2_1.x<=this.player.x+this.hitbox&&
          this.bulletEnemy7_2_1.y<=this.player.y+this.hitbox&&
          this.bulletEnemy7_2_1.x>=this.player.x-this.hitbox&&
          this.bulletEnemy7_2_1.y>=this.player.y-this.hitbox&&
          this.Enemy7_2.active==true){
          console.log("Player hit!!!");
          //คำนวนดาเมจ
          this.HpPlayer-=this.damagebulletEnemy7_2;
          this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
          this.damageText.string="Hitt!! -"+this.damagebulletEnemy7_2;
           //เช็คHPถ้าน้อยกว่า=0
           this.D1.play();
          if(this.HpPlayer<=0){
                this.Break.play();
              this.player.active=false;
              this.bullet.active=false;
              this.gameover.active=true;
          }
          console.log("HPPlayer="+this.HpEnemy7_2);
           //รีเซ็ตกระสุน
          this.bulletEnemy7_2_1.x=this.Enemy7_2.x;
          this.bulletEnemy7_2_1.y=this.Enemy7_2.y;
          this.bulletEnemy7_2_1.x-=40;
          this.timeEnemy7_2_1=0;
       }
       if(this.bulletEnemy7_2_2.x<=this.player.x+this.hitbox&&
        this.bulletEnemy7_2_2.y<=this.player.y+this.hitbox&&
        this.bulletEnemy7_2_2.x>=this.player.x-this.hitbox&&
        this.bulletEnemy7_2_2.y>=this.player.y-this.hitbox&&
        this.Enemy7_2.active==true){
        console.log("Player hit!!!");
        //คำนวนดาเมจ
        this.HpPlayer-=this.damagebulletEnemy7_2;
        this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
        this.damageText.string="Hitt!! -"+this.damagebulletEnemy7_2;
         //เช็คHPถ้าน้อยกว่า=0
         this.D1.play();
         if(this.HpPlayer<=0){
               this.Break.play();
            this.player.active=false;
            this.bullet.active=false;
            this.gameover.active=true;
        }
        console.log("HPPlayer="+this.HpEnemy7_2);
         //รีเซ็ตกระสุน
        this.bulletEnemy7_2_2.x=this.Enemy7_2.x;
        this.bulletEnemy7_2_2.y=this.Enemy7_2.y;
        this.bulletEnemy7_2_2.x-=40;
        this.timeEnemy7_2=0;
     }
     if(this.bulletEnemy7_2_3.x<=this.player.x+this.hitbox&&
        this.bulletEnemy7_2_3.y<=this.player.y+this.hitbox&&
        this.bulletEnemy7_2_3.x>=this.player.x-this.hitbox&&
        this.bulletEnemy7_2_3.y>=this.player.y-this.hitbox&&
        this.Enemy7_2.active==true){
        console.log("Player hit!!!");
        //คำนวนดาเมจ
        this.HpPlayer-=this.damagebulletEnemy7_2;
        this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
        this.damageText.string="Hitt!! -"+this.damagebulletEnemy7_2;
         //เช็คHPถ้าน้อยกว่า=0
         this.D1.play();
         if(this.HpPlayer<=0){
               this.Break.play();
            this.player.active=false;
            this.bullet.active=false;
            this.gameover.active=true;
        }
        console.log("HPPlayer="+this.HpEnemy7_2);
         //รีเซ็ตกระสุน
        this.bulletEnemy7_2_3.x=this.Enemy7_2.x;
        this.bulletEnemy7_2_3.y=this.Enemy7_2.y;
        this.bulletEnemy7_2_3.x-=40;
        this.timeEnemy7_2=0;
     }
       //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
       if(this.bullet.x<=this.Enemy7_2.x+this.hitbox&&
          this.bullet.y<=this.Enemy7_2.y+this.hitbox&&
          this.bullet.x>=this.Enemy7_2.x-this.hitbox&&
          this.bullet.y>=this.Enemy7_2.y-this.hitbox&&
          this.Enemy7_2.active==true){
          console.log("Enemy hit!!!");
          //คำนวนดาเมจ
         
          this.HpEnemy7_2-=this.damagebullet;
          this.hpEnemy7_2.setScale(this.HpEnemy7_2,1);
          this.damageEnemy7_2Text.string="Hitt!! -"+this.damagebullet;
          //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
          this.D2.play();
          if(this.HpEnemy7_2<=0){
              this.Break.play();
              this.Enemy7_2.active=false;
              this.bulletEnemy7_2_1.active=false;
              this.bulletEnemy7_2_2.active=false;
              this.bulletEnemy7_2_3.active=false;
              }
          console.log("HPE1="+this.HpEnemy7_2);
          //รีเซ็ตกระสุน
           this.bullet.x=this.player.x+this.hand;
           this.bullet.y=this.player.y
           this.timePlayer=0;
           //Enemy Bullet
       }
        //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
        if(this.bulletD.x<=this.Enemy7_2.x+this.hitbox&&
            this.bulletD.y<=this.Enemy7_2.y+this.hitbox&&
            this.bulletD.x>=this.Enemy7_2.x-this.hitbox&&
            this.bulletD.y>=this.Enemy7_2.y-this.hitbox&&
            this.Enemy7_2.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
           
            this.HpEnemy7_2-=this.damagebullet;
            this.hpEnemy7_2.setScale(this.HpEnemy7_2,1);
            this.damageEnemy7_2Text.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
            if(this.HpEnemy7_2<=0){
                this.Break.play();
                this.Enemy7_2.active=false;
                this.bulletEnemy7_2_1.active=false;
                this.bulletEnemy7_2_2.active=false;
                this.bulletEnemy7_2_3.active=false;
                }
            console.log("HPE1="+this.HpEnemy7_2);
            //รีเซ็ตกระสุน
             this.bulletD.x=this.player.x-this.hand2;
             this.bulletD.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
          //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
       if(this.bulletR.x<=this.Enemy7_2.x+this.hitbox&&
        this.bulletR.y<=this.Enemy7_2.y+this.hitbox&&
        this.bulletR.x>=this.Enemy7_2.x-this.hitbox&&
        this.bulletR.y>=this.Enemy7_2.y-this.hitbox&&
        this.Enemy7_2.active==true){
        console.log("Enemy hit!!!");
        //คำนวนดาเมจ
       
        this.HpEnemy7_2-=this.damagebullet;
        this.hpEnemy7_2.setScale(this.HpEnemy7_2,1);
        this.damageEnemy7_2Text.string="Hitt!! -"+this.damagebullet;
        //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
        this.D2.play();
        if(this.HpEnemy7_2<=0){
            this.Break.play();
            this.Enemy7_2.active=false;
            this.bulletEnemy7_2_1.active=false;
            this.bulletEnemy7_2_2.active=false;
            this.bulletEnemy7_2_3.active=false;
            }
        console.log("HPE1="+this.HpEnemy7_2);
        //รีเซ็ตกระสุน
         this.bulletR.x=this.player.x+this.hand;
         this.bulletR.y=this.player.y
         this.timePlayer=0;
         //Enemy Bullet
     }
       //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
       if(this.bullet2.x<=this.Enemy7_2.x+this.hitbox&&
        this.bullet2.y<=this.Enemy7_2.y+this.hitbox&&
        this.bullet2.x>=this.Enemy7_2.x-this.hitbox&&
        this.bullet2.y>=this.Enemy7_2.y-this.hitbox&&
        this.Enemy7_2.active==true){
        console.log("Enemy hit!!!");
        //คำนวนดาเมจ
       
        this.HpEnemy7_2-=this.damagebullet;
        this.hpEnemy7_2.setScale(this.HpEnemy7_2,1);
        this.damageEnemy7_2Text.string="Hitt!! -"+this.damagebullet;
        //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
        this.D2.play();
        if(this.HpEnemy7_2<=0){
            this.Break.play();
            this.Enemy7_2.active=false;
            this.bulletEnemy7_2_1.active=false;
            this.bulletEnemy7_2_2.active=false;
            this.bulletEnemy7_2_3.active=false;
            }
        console.log("HPE1="+this.HpEnemy7_2);
        //รีเซ็ตกระสุน
         this.bullet2.x=this.player.x-this.hand;
         this.bullet2.y=this.player.y
         this.timePlayer=0;
         //Enemy Bullet
     }
       if(this.timeEnemy7_2>=300){
         // this.moveState = MoveState.Up;
         this.bulletEnemy7_2_1.x=this.Enemy7_2.x;
         this.bulletEnemy7_2_1.y=this.Enemy7_2.y;
         this.bulletEnemy7_2_1.x-=40;
         this.bulletEnemy7_2_2.x=this.Enemy7_2.x;
        this.bulletEnemy7_2_2.y=this.Enemy7_2.y;
        this.bulletEnemy7_2_2.x-=40;
        this.bulletEnemy7_2_3.x=this.Enemy7_2.x;
        this.bulletEnemy7_2_3.y=this.Enemy7_2.y;
        this.bulletEnemy7_2_3.x-=40;
         this.timeEnemy7_2=0;
      } 

      if(this.timeEnemy7_2==10){
          this.damageEnemy7_2Text.string="";
          this.damageText.string="";
       }
    },
    EnemyLv8_1(){
        //Set UP
        this.timeEnemy8_1++;
        this.bulletEnemy8_1_1.y-=10;
        this.bulletEnemy8_1_2.y-=10;
         //เงื่อนไข เมื่อ กระสุนของ Enemy 1 โดน Player
      if(this.bulletEnemy8_1_1.x<=this.player.x+this.hitbox&&
          this.bulletEnemy8_1_1.y<=this.player.y+this.hitbox&&
          this.bulletEnemy8_1_1.x>=this.player.x-this.hitbox&&
          this.bulletEnemy8_1_1.y>=this.player.y-this.hitbox&&
          this.Enemy8_1.active==true){
          console.log("Player hit!!!");
          //คำนวนดาเมจ
          this.HpPlayer-=this.damagebulletEnemy8_1;
          this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
          this.damageText.string="Hitt!! -"+this.damagebulletEnemy8_1;
           //เช็คHPถ้าน้อยกว่า=0
           this.D1.play();
          if(this.HpPlayer<=0){
                this.Break.play();
              this.player.active=false;
              this.bullet.active=false;
              this.gameover.active=true;
          }
          console.log("HPPlayer="+this.HpEnemy8_1);
           //รีเซ็ตกระสุน
          this.bulletEnemy8_1_1.x=this.Enemy8_1.x+100;
          this.bulletEnemy8_1_1.y=this.Enemy8_1.y;
          this.timeEnemy8_1=0;
       }
       if(this.bulletEnemy8_1_2.x<=this.player.x+this.hitbox&&
        this.bulletEnemy8_1_2.y<=this.player.y+this.hitbox&&
        this.bulletEnemy8_1_2.x>=this.player.x-this.hitbox&&
        this.bulletEnemy8_1_2.y>=this.player.y-this.hitbox&&
        this.Enemy8_1.active==true){
        console.log("Player hit!!!");
        //คำนวนดาเมจ
        this.HpPlayer-=this.damagebulletEnemy8_1;
        this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
        this.damageText.string="Hitt!! -"+this.damagebulletEnemy8_1;
         //เช็คHPถ้าน้อยกว่า=0
         this.D1.play();
         if(this.HpPlayer<=0){
               this.Break.play();
            this.player.active=false;
            this.bullet.active=false;
            this.gameover.active=true;
        }
        console.log("HPPlayer="+this.HpEnemy8_1);
         //รีเซ็ตกระสุน
        this.bulletEnemy8_1_2.x=this.Enemy8_1.x-100;
        this.bulletEnemy8_1_2.y=this.Enemy8_1.y;
        this.timeEnemy8_1=0;
     }
    
       //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
       if(this.bullet.x<=this.Enemy8_1.x+this.hitbox&&
          this.bullet.y<=this.Enemy8_1.y+this.hitbox&&
          this.bullet.x>=this.Enemy8_1.x-this.hitbox&&
          this.bullet.y>=this.Enemy8_1.y-this.hitbox&&
          this.Enemy8_1.active==true){
          console.log("Enemy hit!!!");
          //คำนวนดาเมจ
         
          this.HpEnemy8_1-=this.damagebullet;
          this.hpEnemy8_1.setScale(this.HpEnemy8_1,1);
          this.damageEnemy8_1Text.string="Hitt!! -"+this.damagebullet;
          //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
          this.D2.play();
          if(this.HpEnemy8_1<=0){
              this.Break.play();
              this.Enemy8_1.active=false;
              this.bulletEnemy8_1_1.active=false;
              this.bulletEnemy8_1_2.active=false;
              }
          console.log("HPE1="+this.HpEnemy8_1);
          //รีเซ็ตกระสุน
           this.bullet.x=this.player.x+this.hand;
           this.bullet.y=this.player.y
           this.timePlayer=0;
           //Enemy Bullet
       }
        //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
        if(this.bulletD.x<=this.Enemy8_1.x+this.hitbox&&
            this.bulletD.y<=this.Enemy8_1.y+this.hitbox&&
            this.bulletD.x>=this.Enemy8_1.x-this.hitbox&&
            this.bulletD.y>=this.Enemy8_1.y-this.hitbox&&
            this.Enemy8_1.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
           
            this.HpEnemy8_1-=this.damagebullet;
            this.hpEnemy8_1.setScale(this.HpEnemy8_1,1);
            this.damageEnemy8_1Text.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
            if(this.HpEnemy8_1<=0){
                this.Break.play();
                this.Enemy8_1.active=false;
                this.bulletEnemy8_1_1.active=false;
                this.bulletEnemy8_1_2.active=false;
                }
            console.log("HPE1="+this.HpEnemy8_1);
            //รีเซ็ตกระสุน
             this.bulletD.x=this.player.x-this.hand2;
             this.bulletD.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
          //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
       if(this.bulletR.x<=this.Enemy8_1.x+this.hitbox&&
        this.bulletR.y<=this.Enemy8_1.y+this.hitbox&&
        this.bulletR.x>=this.Enemy8_1.x-this.hitbox&&
        this.bulletR.y>=this.Enemy8_1.y-this.hitbox&&
        this.Enemy8_1.active==true){
        console.log("Enemy hit!!!");
        //คำนวนดาเมจ
       
        this.HpEnemy8_1-=this.damagebullet;
        this.hpEnemy8_1.setScale(this.HpEnemy8_1,1);
        this.damageEnemy8_1Text.string="Hitt!! -"+this.damagebullet;
        //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
        this.D2.play();
        if(this.HpEnemy8_1<=0){
            this.Break.play();
            this.Enemy8_1.active=false;
            this.bulletEnemy8_1_1.active=false;
            this.bulletEnemy8_1_2.active=false;
            }
        console.log("HPE1="+this.HpEnemy8_1);
        //รีเซ็ตกระสุน
         this.bulletR.x=this.player.x+this.hand;
         this.bulletR.y=this.player.y
         this.timePlayer=0;
         //Enemy Bullet
     }
       //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
       if(this.bullet2.x<=this.Enemy8_1.x+this.hitbox&&
        this.bullet2.y<=this.Enemy8_1.y+this.hitbox&&
        this.bullet2.x>=this.Enemy8_1.x-this.hitbox&&
        this.bullet2.y>=this.Enemy8_1.y-this.hitbox&&
        this.Enemy8_1.active==true){
        console.log("Enemy hit!!!");
        //คำนวนดาเมจ
       
        this.HpEnemy8_1-=this.damagebullet;
        this.hpEnemy8_1.setScale(this.HpEnemy8_1,1);
        this.damageEnemy8_1Text.string="Hitt!! -"+this.damagebullet;
        //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
        this.D2.play();
        if(this.HpEnemy8_1<=0){
            this.Break.play();
            this.Enemy8_1.active=false;
            this.bulletEnemy8_1_1.active=false;
            this.bulletEnemy8_1_2.active=false;
            }
        console.log("HPE1="+this.HpEnemy8_1);
        //รีเซ็ตกระสุน
         this.bullet2.x=this.player.x-this.hand;
         this.bullet2.y=this.player.y
         this.timePlayer=0;
         //Enemy Bullet
     }
       if(this.timeEnemy8_1>=150){
         // this.moveState = MoveState.Up;
         this.bulletEnemy8_1_1.x=this.Enemy8_1.x+100;
         this.bulletEnemy8_1_1.y=this.Enemy8_1.y;
         this.bulletEnemy8_1_2.x=this.Enemy8_1.x-100;
        this.bulletEnemy8_1_2.y=this.Enemy8_1.y;
         this.timeEnemy8_1=0;
      } 

      if(this.timeEnemy8_1==10){
          this.damageEnemy8_1Text.string="";
          this.damageText.string="";
       }
    },
    EnemyLv9_1(){
        //Set UP
        this.timeEnemy9_1++;
        this.bulletEnemy9_1_1.y-=10;
        this.bulletEnemy9_1_2.y-=10;
         //เงื่อนไข เมื่อ กระสุนของ Enemy 1 โดน Player
      if(this.bulletEnemy9_1_1.x<=this.player.x+this.hitbox&&
          this.bulletEnemy9_1_1.y<=this.player.y+this.hitbox&&
          this.bulletEnemy9_1_1.x>=this.player.x-this.hitbox&&
          this.bulletEnemy9_1_1.y>=this.player.y-this.hitbox&&
          this.Enemy9_1.active==true){
          console.log("Player hit!!!");
          //คำนวนดาเมจ
          this.HpPlayer-=this.damagebulletEnemy9_1;
          this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
          this.damageText.string="Hitt!! -"+this.damagebulletEnemy9_1;
           //เช็คHPถ้าน้อยกว่า=0
           this.D1.play();
          if(this.HpPlayer<=0){
                this.Break.play();
              this.player.active=false;
              this.bullet.active=false;
              this.gameover.active=true;
          }
          console.log("HPPlayer="+this.HpEnemy9_1);
           //รีเซ็ตกระสุน
          this.bulletEnemy9_1_1.x=this.Enemy9_1.x+100;
          this.bulletEnemy9_1_1.y=this.Enemy9_1.y;
          this.timeEnemy9_1=0;
       }
       if(this.bulletEnemy9_1_2.x<=this.player.x+this.hitbox&&
        this.bulletEnemy9_1_2.y<=this.player.y+this.hitbox&&
        this.bulletEnemy9_1_2.x>=this.player.x-this.hitbox&&
        this.bulletEnemy9_1_2.y>=this.player.y-this.hitbox&&
        this.Enemy9_1.active==true){
        console.log("Player hit!!!");
        //คำนวนดาเมจ
        this.HpPlayer-=this.damagebulletEnemy9_1;
        this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
        this.damageText.string="Hitt!! -"+this.damagebulletEnemy9_1;
         //เช็คHPถ้าน้อยกว่า=0
         this.D1.play();
          if(this.HpPlayer<=0){
                this.Break.play();
            this.player.active=false;
            this.bullet.active=false;
            this.gameover.active=true;
        }
        console.log("HPPlayer="+this.HpEnemy9_1);
         //รีเซ็ตกระสุน
        this.bulletEnemy9_1_2.x=this.Enemy9_1.x-100;
        this.bulletEnemy9_1_2.y=this.Enemy9_1.y;
        this.timeEnemy9_1=0;
     }
    
       //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
       if(this.bullet.x<=this.Enemy9_1.x+this.hitbox&&
          this.bullet.y<=this.Enemy9_1.y+this.hitbox&&
          this.bullet.x>=this.Enemy9_1.x-this.hitbox&&
          this.bullet.y>=this.Enemy9_1.y-this.hitbox&&
          this.Enemy9_1.active==true){
          console.log("Enemy hit!!!");
          //คำนวนดาเมจ
         
          this.HpEnemy9_1-=this.damagebullet;
          this.hpEnemy9_1.setScale(this.HpEnemy9_1,1);
          this.damageEnemy9_1Text.string="Hitt!! -"+this.damagebullet;
          //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
          this.D2.play();
          if(this.HpEnemy9_1<=0){
              this.Break.play();
              this.Enemy9_1.active=false;
              this.bulletEnemy9_1_1.active=false;
              this.bulletEnemy9_1_2.active=false;
              }
          console.log("HPE1="+this.HpEnemy9_1);
          //รีเซ็ตกระสุน
           this.bullet.x=this.player.x+this.hand;
           this.bullet.y=this.player.y
           this.timePlayer=0;
           //Enemy Bullet
       }
        //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
        if(this.bulletD.x<=this.Enemy9_1.x+this.hitbox&&
            this.bulletD.y<=this.Enemy9_1.y+this.hitbox&&
            this.bulletD.x>=this.Enemy9_1.x-this.hitbox&&
            this.bulletD.y>=this.Enemy9_1.y-this.hitbox&&
            this.Enemy9_1.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
           
            this.HpEnemy9_1-=this.damagebullet;
            this.hpEnemy9_1.setScale(this.HpEnemy9_1,1);
            this.damageEnemy9_1Text.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
                if(this.HpEnemy9_1<=0){
                this.Enemy9_1.active=false;
                this.bulletEnemy9_1_1.active=false;
                this.bulletEnemy9_1_2.active=false;
                }
            console.log("HPE1="+this.HpEnemy9_1);
            //รีเซ็ตกระสุน
             this.bulletD.x=this.player.x-this.hand2;
             this.bulletD.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
         //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
        if(this.bulletR.x<=this.Enemy9_1.x+this.hitbox&&
            this.bulletR.y<=this.Enemy9_1.y+this.hitbox&&
            this.bulletR.x>=this.Enemy9_1.x-this.hitbox&&
            this.bulletR.y>=this.Enemy9_1.y-this.hitbox&&
            this.Enemy9_1.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
           
            this.HpEnemy9_1-=this.damagebullet;
            this.hpEnemy9_1.setScale(this.HpEnemy9_1,1);
            this.damageEnemy9_1Text.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
            if(this.HpEnemy9_1<=0){
                this.Break.play();
                this.Enemy9_1.active=false;
                this.bulletEnemy9_1_1.active=false;
                this.bulletEnemy9_1_2.active=false;
                }
            console.log("HPE1="+this.HpEnemy9_1);
            //รีเซ็ตกระสุน
             this.bulletR.x=this.player.x+this.hand;
             this.bulletR.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
       if(this.timeEnemy9_1>=100){
         // this.moveState = MoveState.Up;
         this.bulletEnemy9_1_1.x=this.Enemy9_1.x+100;
         this.bulletEnemy9_1_1.y=this.Enemy9_1.y;
         this.bulletEnemy9_1_2.x=this.Enemy9_1.x-100;
        this.bulletEnemy9_1_2.y=this.Enemy9_1.y;
         this.timeEnemy9_1=0;
      } 

      if(this.timeEnemy9_1==10){
          this.damageEnemy8_1Text.string="";
          this.damageText.string="";
       }
    },
    EnemyLv9_2(){
        //Set UP
        this.timeEnemy9_2++;
        this.bulletEnemy9_2_1.y-=10;
        this.bulletEnemy9_2_2.y-=10;
         //เงื่อนไข เมื่อ กระสุนของ Enemy 1 โดน Player
      if(this.bulletEnemy9_2_1.x<=this.player.x+this.hitbox&&
          this.bulletEnemy9_2_1.y<=this.player.y+this.hitbox&&
          this.bulletEnemy9_2_1.x>=this.player.x-this.hitbox&&
          this.bulletEnemy9_2_1.y>=this.player.y-this.hitbox&&
          this.Enemy9_2.active==true){
          console.log("Player hit!!!");
          //คำนวนดาเมจ
          this.HpPlayer-=this.damagebulletEnemy9_2;
          this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
          this.damageText.string="Hitt!! -"+this.damagebulletEnemy9_2;
           //เช็คHPถ้าน้อยกว่า=0
           this.D1.play();
          if(this.HpPlayer<=0){
                this.Break.play();
              this.player.active=false;
              this.bullet.active=false;
              this.gameover.active=true;
          }
          console.log("HPPlayer="+this.HpEnemy9_2);
           //รีเซ็ตกระสุน
          this.bulletEnemy9_2_1.x=this.Enemy9_2.x+100;
          this.bulletEnemy9_2_1.y=this.Enemy9_2.y;
          this.timeEnemy9_2=0;
       }
       if(this.bulletEnemy9_2_2.x<=this.player.x+this.hitbox&&
        this.bulletEnemy9_2_2.y<=this.player.y+this.hitbox&&
        this.bulletEnemy9_2_2.x>=this.player.x-this.hitbox&&
        this.bulletEnemy9_2_2.y>=this.player.y-this.hitbox&&
        this.Enemy9_2.active==true){
        console.log("Player hit!!!");
        //คำนวนดาเมจ
        this.HpPlayer-=this.damagebulletEnemy9_2;
        this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
        this.damageText.string="Hitt!! -"+this.damagebulletEnemy9_2;
         //เช็คHPถ้าน้อยกว่า=0
         this.D1.play();
          if(this.HpPlayer<=0){
                this.Break.play();
            this.player.active=false;
            this.bullet.active=false;
            this.gameover.active=true;
        }
        console.log("HPPlayer="+this.HpEnemy9_2);
         //รีเซ็ตกระสุน
        this.bulletEnemy9_2_2.x=this.Enemy9_2.x-100;
        this.bulletEnemy9_2_2.y=this.Enemy9_2.y;
        this.timeEnemy9_2=0;
     }
    
       //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
       if(this.bullet.x<=this.Enemy9_2.x+this.hitbox&&
          this.bullet.y<=this.Enemy9_2.y+this.hitbox&&
          this.bullet.x>=this.Enemy9_2.x-this.hitbox&&
          this.bullet.y>=this.Enemy9_2.y-this.hitbox&&
          this.Enemy9_2.active==true){
          console.log("Enemy hit!!!");
          //คำนวนดาเมจ
         
          this.HpEnemy9_2-=this.damagebullet;
          this.hpEnemy9_2.setScale(this.HpEnemy9_2,1);
          this.damageEnemy9_2Text.string="Hitt!! -"+this.damagebullet;
          //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
          this.D2.play();
          if(this.HpEnemy9_2<=0){
              this.Break.play();
              this.Enemy9_2.active=false;
              this.bulletEnemy9_2_1.active=false;
              this.bulletEnemy9_2_2.active=false;
              }
          console.log("HPE1="+this.HpEnemy9_2);
          //รีเซ็ตกระสุน
           this.bullet.x=this.player.x+this.hand;
           this.bullet.y=this.player.y
           this.timePlayer=0;
           //Enemy Bullet
       }
       //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
       if(this.bulletD.x<=this.Enemy9_2.x+this.hitbox&&
        this.bulletD.y<=this.Enemy9_2.y+this.hitbox&&
        this.bulletD.x>=this.Enemy9_2.x-this.hitbox&&
        this.bulletD.y>=this.Enemy9_2.y-this.hitbox&&
        this.Enemy9_2.active==true){
        console.log("Enemy hit!!!");
        //คำนวนดาเมจ
       
        this.HpEnemy9_2-=this.damagebullet;
        this.hpEnemy9_2.setScale(this.HpEnemy9_2,1);
        this.damageEnemy9_2Text.string="Hitt!! -"+this.damagebullet;
        //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
        this.D2.play();
        if(this.HpEnemy9_2<=0){
            this.Break.play();
            this.Enemy9_2.active=false;
            this.bulletEnemy9_2_1.active=false;
            this.bulletEnemy9_2_2.active=false;
            }
        console.log("HPE1="+this.HpEnemy9_2);
        //รีเซ็ตกระสุน
         this.bulletD.x=this.player.x-this.hand2;
         this.bulletD.y=this.player.y
         this.timePlayer=0;
         //Enemy Bullet
     }
      //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
      if(this.bulletR.x<=this.Enemy9_2.x+this.hitbox&&
        this.bulletR.y<=this.Enemy9_2.y+this.hitbox&&
        this.bulletR.x>=this.Enemy9_2.x-this.hitbox&&
        this.bulletR.y>=this.Enemy9_2.y-this.hitbox&&
        this.Enemy9_2.active==true){
        console.log("Enemy hit!!!");
        //คำนวนดาเมจ
       
        this.HpEnemy9_2-=this.damagebullet;
        this.hpEnemy9_2.setScale(this.HpEnemy9_2,1);
        this.damageEnemy9_2Text.string="Hitt!! -"+this.damagebullet;
        //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
        this.D2.play();
        if(this.HpEnemy9_2<=0){
            this.Break.play();
            this.Enemy9_2.active=false;
            this.bulletEnemy9_2_1.active=false;
            this.bulletEnemy9_2_2.active=false;
            }
        console.log("HPE1="+this.HpEnemy9_2);
        //รีเซ็ตกระสุน
         this.bulletR.x=this.player.x+this.hand;
         this.bulletR.y=this.player.y
         this.timePlayer=0;
         //Enemy Bullet
     }
        //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
        if(this.bullet2.x<=this.Enemy9_2.x+this.hitbox&&
            this.bullet2.y<=this.Enemy9_2.y+this.hitbox&&
            this.bullet2.x>=this.Enemy9_2.x-this.hitbox&&
            this.bullet2.y>=this.Enemy9_2.y-this.hitbox&&
            this.Enemy9_2.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
           
            this.HpEnemy9_2-=this.damagebullet;
            this.hpEnemy9_2.setScale(this.HpEnemy9_2,1);
            this.damageEnemy9_2Text.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
            if(this.HpEnemy9_2<=0){
                this.Break.play();
                this.Enemy9_2.active=false;
                this.bulletEnemy9_2_1.active=false;
                this.bulletEnemy9_2_2.active=false;
                }
            console.log("HPE1="+this.HpEnemy9_2);
            //รีเซ็ตกระสุน
             this.bullet2.x=this.player.x-this.hand;
             this.bullet2.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
       if(this.timeEnemy9_2>=100){
         // this.moveState = MoveState.Up;
         this.bulletEnemy9_2_1.x=this.Enemy9_2.x+100;
         this.bulletEnemy9_2_1.y=this.Enemy9_2.y;
         this.bulletEnemy9_2_2.x=this.Enemy9_2.x-100;
        this.bulletEnemy9_2_2.y=this.Enemy9_2.y;
         this.timeEnemy9_2=0;
      } 

      if(this.timeEnemy9_2==10){
          this.damageEnemy8_1Text.string="";
          this.damageText.string="";
       }
    },
    EnemyLv9_3(){
        //Set UP
        this.timeEnemy9_3++;
        this.bulletEnemy9_3_1.y-=10;
        this.bulletEnemy9_3_2.y-=10;
         //เงื่อนไข เมื่อ กระสุนของ Enemy 1 โดน Player
      if(this.bulletEnemy9_3_1.x<=this.player.x+this.hitbox&&
          this.bulletEnemy9_3_1.y<=this.player.y+this.hitbox&&
          this.bulletEnemy9_3_1.x>=this.player.x-this.hitbox&&
          this.bulletEnemy9_3_1.y>=this.player.y-this.hitbox&&
          this.Enemy9_3.active==true){
          console.log("Player hit!!!");
          //คำนวนดาเมจ
          this.HpPlayer-=this.damagebulletEnemy9_3;
          this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
          this.damageText.string="Hitt!! -"+this.damagebulletEnemy9_3;
           //เช็คHPถ้าน้อยกว่า=0
           this.D1.play();
          if(this.HpPlayer<=0){
                this.Break.play();
              this.player.active=false;
              this.bullet.active=false;
              this.gameover.active=true;
          }
          console.log("HPPlayer="+this.HpEnemy9_3);
           //รีเซ็ตกระสุน
          this.bulletEnemy9_3_1.x=this.Enemy9_3.x+100;
          this.bulletEnemy9_3_1.y=this.Enemy9_3.y;
          this.timeEnemy9_3=0;
       }
       if(this.bulletEnemy9_3_2.x<=this.player.x+this.hitbox&&
        this.bulletEnemy9_3_2.y<=this.player.y+this.hitbox&&
        this.bulletEnemy9_3_2.x>=this.player.x-this.hitbox&&
        this.bulletEnemy9_3_2.y>=this.player.y-this.hitbox&&
        this.Enemy9_3.active==true){
        console.log("Player hit!!!");
        //คำนวนดาเมจ
        this.HpPlayer-=this.damagebulletEnemy9_3;
        this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
        this.damageText.string="Hitt!! -"+this.damagebulletEnemy9_3;
         //เช็คHPถ้าน้อยกว่า=0
         this.D1.play();
          if(this.HpPlayer<=0){
                this.Break.play();
            this.player.active=false;
            this.bullet.active=false;
            this.gameover.active=true;
        }
        console.log("HPPlayer="+this.HpEnemy9_3);
         //รีเซ็ตกระสุน
        this.bulletEnemy9_3_2.x=this.Enemy9_3.x-100;
        this.bulletEnemy9_3_2.y=this.Enemy9_3.y;
        this.timeEnemy9_3=0;
     }
    
       //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
       if(this.bullet.x<=this.Enemy9_3.x+this.hitbox&&
          this.bullet.y<=this.Enemy9_3.y+this.hitbox&&
          this.bullet.x>=this.Enemy9_3.x-this.hitbox&&
          this.bullet.y>=this.Enemy9_3.y-this.hitbox&&
          this.Enemy9_3.active==true){
          console.log("Enemy hit!!!");
          //คำนวนดาเมจ
         
          this.HpEnemy9_3-=this.damagebullet;
          this.hpEnemy9_3.setScale(this.HpEnemy9_3,1);
          this.damageEnemy9_3Text.string="Hitt!! -"+this.damagebullet;
          //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
          this.D2.play();
          if(this.HpEnemy9_3<=0){
              this.Break.play();
              this.Enemy9_3.active=false;
              this.bulletEnemy9_3_1.active=false;
              this.bulletEnemy9_3_2.active=false;
              }
          console.log("HPE1="+this.HpEnemy9_3);
          //รีเซ็ตกระสุน
           this.bullet.x=this.player.x+this.hand;
           this.bullet.y=this.player.y
           this.timePlayer=0;
           //Enemy Bullet
       }
        //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
        if(this.bulletD.x<=this.Enemy9_3.x+this.hitbox&&
            this.bulletD.y<=this.Enemy9_3.y+this.hitbox&&
            this.bulletD.x>=this.Enemy9_3.x-this.hitbox&&
            this.bulletD.y>=this.Enemy9_3.y-this.hitbox&&
            this.Enemy9_3.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
           
            this.HpEnemy9_3-=this.damagebullet;
            this.hpEnemy9_3.setScale(this.HpEnemy9_3,1);
            this.damageEnemy9_3Text.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
            if(this.HpEnemy9_3<=0){
                this.Break.play();
                this.Enemy9_3.active=false;
                this.bulletEnemy9_3_1.active=false;
                this.bulletEnemy9_3_2.active=false;
                }
            console.log("HPE1="+this.HpEnemy9_3);
            //รีเซ็ตกระสุน
             this.bulletD.x=this.player.x-this.hand2;
             this.bulletD.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
          //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
       if(this.bulletR.x<=this.Enemy9_3.x+this.hitbox&&
        this.bulletR.y<=this.Enemy9_3.y+this.hitbox&&
        this.bulletR.x>=this.Enemy9_3.x-this.hitbox&&
        this.bulletR.y>=this.Enemy9_3.y-this.hitbox&&
        this.Enemy9_3.active==true){
        console.log("Enemy hit!!!");
        //คำนวนดาเมจ
       
        this.HpEnemy9_3-=this.damagebullet;
        this.hpEnemy9_3.setScale(this.HpEnemy9_3,1);
        this.damageEnemy9_3Text.string="Hitt!! -"+this.damagebullet;
        //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
        this.D2.play();
        if(this.HpEnemy9_3<=0){
            this.Break.play();
            this.Enemy9_3.active=false;
            this.bulletEnemy9_3_1.active=false;
            this.bulletEnemy9_3_2.active=false;
            }
        console.log("HPE1="+this.HpEnemy9_3);
        //รีเซ็ตกระสุน
         this.bulletR.x=this.player.x+this.hand;
         this.bulletR.y=this.player.y
         this.timePlayer=0;
         //Enemy Bullet
     }
        //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
        if(this.bullet2.x<=this.Enemy9_3.x+this.hitbox&&
            this.bullet2.y<=this.Enemy9_3.y+this.hitbox&&
            this.bullet2.x>=this.Enemy9_3.x-this.hitbox&&
            this.bullet2.y>=this.Enemy9_3.y-this.hitbox&&
            this.Enemy9_3.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
           
            this.HpEnemy9_3-=this.damagebullet;
            this.hpEnemy9_3.setScale(this.HpEnemy9_3,1);
            this.damageEnemy9_3Text.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
            if(this.HpEnemy9_3<=0){
                this.Break.play();
                this.Enemy9_3.active=false;
                this.bulletEnemy9_3_1.active=false;
                this.bulletEnemy9_3_2.active=false;
                }
            console.log("HPE1="+this.HpEnemy9_3);
            //รีเซ็ตกระสุน
             this.bullet2.x=this.player.x-this.hand;
             this.bullet2.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
       if(this.timeEnemy9_3>=100){
         // this.moveState = MoveState.Up;
         this.bulletEnemy9_3_1.x=this.Enemy9_3.x+100;
         this.bulletEnemy9_3_1.y=this.Enemy9_3.y;
         this.bulletEnemy9_3_2.x=this.Enemy9_3.x-100;
         this.bulletEnemy9_3_2.y=this.Enemy9_3.y;
         this.timeEnemy9_3=0;
      } 

      if(this.timeEnemy9_3==10){
          this.damageEnemy8_1Text.string="";
          this.damageText.string="";
       }
    },
    EnemyLv10_1(){
        //Set UP
        this.timeEnemy10_1++;
        if(this.Enemy10_1Skill==false){
        this.bulletEnemy10_1_1.y-=3;
        this.bulletEnemy10_1_2.y-=3;
        this.bulletEnemy10_1_2.x-=3;
        this.bulletEnemy10_1_3.y-=3;
        this.bulletEnemy10_1_3.x+=3;
        }
         //เงื่อนไข เมื่อ กระสุนของ Enemy 1 โดน Player
      if(this.bulletEnemy10_1_1.x<=this.player.x+this.hitbox&&
          this.bulletEnemy10_1_1.y<=this.player.y+this.hitbox&&
          this.bulletEnemy10_1_1.x>=this.player.x-this.hitbox&&
          this.bulletEnemy10_1_1.y>=this.player.y-this.hitbox&&
          this.Enemy10_1.active==true){
          console.log("Player hit!!!");
          //คำนวนดาเมจ
          this.HpPlayer-=this.damagebulletEnemy10_1;
          this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
          this.damageText.string="Hitt!! -"+this.damagebulletEnemy10_1;
           //เช็คHPถ้าน้อยกว่า=0
           this.D1.play();
          if(this.HpPlayer<=0){
            this.Break.play();
              this.player.active=false;
              this.bullet.active=false;
              this.gameover.active=true;
          }
          console.log("HPPlayer="+this.HpEnemy10_1);
           //รีเซ็ตกระสุน
          this.bulletEnemy10_1_1.x=this.Enemy10_1.x;
          this.bulletEnemy10_1_1.y=this.Enemy10_1.y;
          this.timeEnemy10_1=0;
       }
       //เงื่อนไข เมื่อ กระสุนของ Enemy 1 โดน Player
      if(this.bulletEnemy10_1_2.x<=this.player.x+this.hitbox&&
        this.bulletEnemy10_1_2.y<=this.player.y+this.hitbox&&
        this.bulletEnemy10_1_2.x>=this.player.x-this.hitbox&&
        this.bulletEnemy10_1_2.y>=this.player.y-this.hitbox&&
        this.Enemy10_1.active==true){
        console.log("Player hit!!!");
        //คำนวนดาเมจ
        this.HpPlayer-=this.damagebulletEnemy10_1;
        this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
        this.damageText.string="Hitt!! -"+this.damagebulletEnemy10_1;
         //เช็คHPถ้าน้อยกว่า=0
         this.D1.play();
         if(this.HpPlayer<=0){
           this.Break.play();
            this.player.active=false;
            this.bullet.active=false;
            this.gameover.active=true;
        }
        console.log("HPPlayer="+this.HpEnemy10_1);
         //รีเซ็ตกระสุน
        this.bulletEnemy10_1_2.x=this.Enemy10_1.x;
        this.bulletEnemy10_1_2.y=this.Enemy10_1.y;
        this.timeEnemy10_1=0;
     }
     //เงื่อนไข เมื่อ กระสุนของ Enemy 1 โดน Player
     if(this.bulletEnemy10_1_3.x<=this.player.x+this.hitbox&&
        this.bulletEnemy10_1_3.y<=this.player.y+this.hitbox&&
        this.bulletEnemy10_1_3.x>=this.player.x-this.hitbox&&
        this.bulletEnemy10_1_3.y>=this.player.y-this.hitbox&&
        this.Enemy10_1.active==true){
        console.log("Player hit!!!");
        //คำนวนดาเมจ
        this.HpPlayer-=this.damagebulletEnemy10_1;
        this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
        this.damageText.string="Hitt!! -"+this.damagebulletEnemy10_1;
         //เช็คHPถ้าน้อยกว่า=0
         this.D1.play();
          if(this.HpPlayer<=0){
            this.Break.play();
            this.player.active=false;
            this.bullet.active=false;
            this.gameover.active=true;
        }
        console.log("HPPlayer="+this.HpEnemy10_1);
         //รีเซ็ตกระสุน
        this.bulletEnemy10_1_3.x=this.Enemy10_1.x;
        this.bulletEnemy10_1_3.y=this.Enemy10_1.y;
        this.timeEnemy10_1=0;
     }
       //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
       if(this.bullet.x<=this.Enemy10_1.x+this.hitbox&&
          this.bullet.y<=this.Enemy10_1.y+this.hitbox&&
          this.bullet.x>=this.Enemy10_1.x-this.hitbox&&
          this.bullet.y>=this.Enemy10_1.y-this.hitbox&&
          this.Enemy10_1.active==true){
          console.log("Enemy hit!!!");
          //คำนวนดาเมจ
          if(this.Enemy10_1Skill==false){
          this.HpEnemy10_1-=this.damagebullet;
          this.hpEnemy10_1.setScale(this.HpEnemy10_1,1);
          this.damageEnemy2Text.string="Hitt!! -"+this.damagebullet;
          //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
          this.D2.play();
          if(this.HpEnemy10_1<=0){
              this.Break.play();
              this.Enemy10_1.active=false;
              this.bulletEnemy10_1_1.active=false;
              this.bulletEnemy10_1_2.active=false;
              this.bulletEnemy10_1_3.active=false;
              }
          }
          else{
              this.damageEnemy10_1Text.string="Miss!!";
          }
          console.log("HPE1="+this.HpEnemy10_1);
          //รีเซ็ตกระสุน
           this.bullet.x=this.player.x+this.hand;
           this.bullet.y=this.player.y
           this.timePlayer=0;
           //Enemy Bullet
       }
        //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
        if(this.bulletD.x<=this.Enemy10_1.x+this.hitbox&&
            this.bulletD.y<=this.Enemy10_1.y+this.hitbox&&
            this.bulletD.x>=this.Enemy10_1.x-this.hitbox&&
            this.bulletD.y>=this.Enemy10_1.y-this.hitbox&&
            this.Enemy10_1.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
            if(this.Enemy10_1Skill==false){
            this.HpEnemy10_1-=this.damagebullet;
            this.hpEnemy10_1.setScale(this.HpEnemy10_1,1);
            this.damageEnemy2Text.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
            if(this.HpEnemy10_1<=0){
                this.Break.play();
                this.Enemy10_1.active=false;
                this.bulletEnemy10_1_1.active=false;
                this.bulletEnemy10_1_2.active=false;
                this.bulletEnemy10_1_3.active=false;
                }
            }
            else{
                this.damageEnemy10_1Text.string="Miss!!";
            }
            console.log("HPE1="+this.HpEnemy10_1);
            //รีเซ็ตกระสุน
             this.bulletD.x=this.player.x-this.hand2;
             this.bulletD.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
          //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
       if(this.bulletR.x<=this.Enemy10_1.x+this.hitbox&&
        this.bulletR.y<=this.Enemy10_1.y+this.hitbox&&
        this.bulletR.x>=this.Enemy10_1.x-this.hitbox&&
        this.bulletR.y>=this.Enemy10_1.y-this.hitbox&&
        this.Enemy10_1.active==true){
        console.log("Enemy hit!!!");
        //คำนวนดาเมจ
        if(this.Enemy10_1Skill==false){
        this.HpEnemy10_1-=this.damagebullet;
        this.hpEnemy10_1.setScale(this.HpEnemy10_1,1);
        this.damageEnemy2Text.string="Hitt!! -"+this.damagebullet;
        //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
        this.D2.play();
        if(this.HpEnemy10_1<=0){
            this.Break.play();
            this.Enemy10_1.active=false;
            this.bulletEnemy10_1_1.active=false;
              this.bulletEnemy10_1_2.active=false;
              this.bulletEnemy10_1_3.active=false;
            }
        }
        else{
            this.damageEnemy10_1Text.string="Miss!!";
        }
        console.log("HPE1="+this.HpEnemy10_1);
        //รีเซ็ตกระสุน
         this.bulletR.x=this.player.x+this.hand;
         this.bulletR.y=this.player.y
         this.timePlayer=0;
         //Enemy Bullet
     }
        //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
        if(this.bullet2.x<=this.Enemy10_1.x+this.hitbox&&
            this.bullet2.y<=this.Enemy10_1.y+this.hitbox&&
            this.bullet2.x>=this.Enemy10_1.x-this.hitbox&&
            this.bullet2.y>=this.Enemy10_1.y-this.hitbox&&
            this.Enemy10_1.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
            if(this.Enemy10_1Skill==false){
            this.HpEnemy10_1-=this.damagebullet;
            this.hpEnemy10_1.setScale(this.HpEnemy10_1,1);
            this.damageEnemy2Text.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
            if(this.HpEnemy10_1<=0){
                this.Break.play();
                this.Enemy10_1.active=false;
                this.bulletEnemy10_1_1.active=false;
                this.bulletEnemy10_1_2.active=false;
                this.bulletEnemy10_1_3.active=false;
                }
            }
            else{
                this.damageEnemy10_1Text.string="Miss!!";
            }
            console.log("HPE1="+this.HpEnemy10_1);
            //รีเซ็ตกระสุน
             this.bullet2.x=this.player.x-this.hand;
             this.bullet2.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
       if(this.timeEnemy10_1>=300){
          //Skill แข็งตัว 
         if(this.Enemy10_1Skill==false){
         this.Enemy10_1Skill=true; 
         this.BodyEnemy10_1.play("close");
         }
         else if(this.Enemy10_1Skill==true){
          this.Enemy10_1Skill=false; 
          this.BodyEnemy10_1.play("Open");
         }
         //this.anim.node.scaleX = 1;
         // this.moveState = MoveState.Up;
         this.bulletEnemy10_1_1.x=this.Enemy10_1.x;
         this.bulletEnemy10_1_1.y=this.Enemy10_1.y;
         this.bulletEnemy10_1_2.x=this.Enemy10_1.x;
         this.bulletEnemy10_1_2.y=this.Enemy10_1.y;
         this.bulletEnemy10_1_3.x=this.Enemy10_1.x;
         this.bulletEnemy10_1_3.y=this.Enemy10_1.y;
         this.timeEnemy10_1=0;
      } 
      if(this.timeEnemy10_1==10){
        this.damageEnemy2Text.string="";
        this.damageText.string="";
      }
     },
     EnemyLv10_2(){
        //Set UP
        this.timeEnemy10_2++;
        if(this.Enemy2Skill==false){
        this.bulletEnemy10_2_1.y-=3;
        this.bulletEnemy10_2_2.y-=3;
        this.bulletEnemy10_2_2.x-=3;
        this.bulletEnemy10_2_3.y-=3;
        this.bulletEnemy10_2_3.x+=3;
        }
         //เงื่อนไข เมื่อ กระสุนของ Enemy 1 โดน Player
      if(this.bulletEnemy10_2_1.x<=this.player.x+this.hitbox&&
          this.bulletEnemy10_2_1.y<=this.player.y+this.hitbox&&
          this.bulletEnemy10_2_1.x>=this.player.x-this.hitbox&&
          this.bulletEnemy10_2_1.y>=this.player.y-this.hitbox&&
          this.Enemy10_2.active==true){
          console.log("Player hit!!!");
          //คำนวนดาเมจ
          this.HpPlayer-=this.damagebulletEnemy10_2;
          this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
          this.damageText.string="Hitt!! -"+this.damagebulletEnemy10_2;
           //เช็คHPถ้าน้อยกว่า=0
           this.D1.play();
          if(this.HpPlayer<=0){
                this.Break.play();
              this.player.active=false;
              this.bullet.active=false;
              this.gameover.active=true;
          }
          console.log("HPPlayer="+this.HpEnemy10_2);
           //รีเซ็ตกระสุน
          this.bulletEnemy10_2_1.x=this.Enemy10_2.x;
          this.bulletEnemy10_2_1.y=this.Enemy10_2.y;
          this.timeEnemy10_2=0;
       }
       //เงื่อนไข เมื่อ กระสุนของ Enemy 1 โดน Player
      if(this.bulletEnemy10_2_2.x<=this.player.x+this.hitbox&&
        this.bulletEnemy10_2_2.y<=this.player.y+this.hitbox&&
        this.bulletEnemy10_2_2.x>=this.player.x-this.hitbox&&
        this.bulletEnemy10_2_2.y>=this.player.y-this.hitbox&&
        this.Enemy10_2.active==true){
        console.log("Player hit!!!");
        //คำนวนดาเมจ
        this.HpPlayer-=this.damagebulletEnemy10_2;
        this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
        this.damageText.string="Hitt!! -"+this.damagebulletEnemy10_2;
         //เช็คHPถ้าน้อยกว่า=0
         this.D1.play();
         if(this.HpPlayer<=0){
               this.Break.play();
            this.player.active=false;
            this.bullet.active=false;
            this.gameover.active=true;
        }
        console.log("HPPlayer="+this.HpEnemy10_2);
         //รีเซ็ตกระสุน
        this.bulletEnemy10_2_2.x=this.Enemy10_2.x;
        this.bulletEnemy10_2_2.y=this.Enemy10_2.y;
        this.timeEnemy10_2=0;
     }
     //เงื่อนไข เมื่อ กระสุนของ Enemy 1 โดน Player
     if(this.bulletEnemy10_2_3.x<=this.player.x+this.hitbox&&
        this.bulletEnemy10_2_3.y<=this.player.y+this.hitbox&&
        this.bulletEnemy10_2_3.x>=this.player.x-this.hitbox&&
        this.bulletEnemy10_2_3.y>=this.player.y-this.hitbox&&
        this.Enemy10_2.active==true){
        console.log("Player hit!!!");
        //คำนวนดาเมจ
        this.HpPlayer-=this.damagebulletEnemy10_2;
        this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
        this.damageText.string="Hitt!! -"+this.damagebulletEnemy10_2;
         //เช็คHPถ้าน้อยกว่า=0
         this.D1.play();
         if(this.HpPlayer<=0){
               this.Break.play();
            this.player.active=false;
            this.bullet.active=false;
            this.gameover.active=true;
        }
        console.log("HPPlayer="+this.HpEnemy10_2);
         //รีเซ็ตกระสุน
        this.bulletEnemy10_2_3.x=this.Enemy10_2.x;
        this.bulletEnemy10_2_3.y=this.Enemy10_2.y;
        this.timeEnemy10_2=0;
     }
       //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
       if(this.bullet.x<=this.Enemy10_2.x+this.hitbox&&
          this.bullet.y<=this.Enemy10_2.y+this.hitbox&&
          this.bullet.x>=this.Enemy10_2.x-this.hitbox&&
          this.bullet.y>=this.Enemy10_2.y-this.hitbox&&
          this.Enemy10_2.active==true){
          console.log("Enemy hit!!!");
          //คำนวนดาเมจ
          if(this.Enemy10_2Skill==false){
          this.HpEnemy10_2-=this.damagebullet;
          this.hpEnemy10_2.setScale(this.HpEnemy10_2,1);
          this.damageEnemy10_2Text.string="Hitt!! -"+this.damagebullet;
          //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
          this.D2.play();
          if(this.HpEnemy10_2<=0){
              this.Break.play();
              this.Enemy10_2.active=false;
              this.bulletEnemy10_2_1.active=false;
              this.bulletEnemy10_2_2.active=false;
              this.bulletEnemy10_2_3.active=false;
              }
          }
          else{
              this.damageEnemy10_2Text.string="Miss!!";
          }
          console.log("HPE1="+this.HpEnemy10_2);
          //รีเซ็ตกระสุน
           this.bullet.x=this.player.x+this.hand;
           this.bullet.y=this.player.y
           this.timePlayer=0;
           //Enemy Bullet
       }
       //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
       if(this.bulletD.x<=this.Enemy10_2.x+this.hitbox&&
        this.bulletD.y<=this.Enemy10_2.y+this.hitbox&&
        this.bulletD.x>=this.Enemy10_2.x-this.hitbox&&
        this.bulletD.y>=this.Enemy10_2.y-this.hitbox&&
        this.Enemy10_2.active==true){
        console.log("Enemy hit!!!");
        //คำนวนดาเมจ
        if(this.Enemy10_2Skill==false){
        this.HpEnemy10_2-=this.damagebullet;
        this.hpEnemy10_2.setScale(this.HpEnemy10_2,1);
        this.damageEnemy10_2Text.string="Hitt!! -"+this.damagebullet;
        //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
        this.D2.play();
        if(this.HpEnemy10_2<=0){
            this.Break.play();
            this.Enemy10_2.active=false;
            this.bulletEnemy10_2_1.active=false;
            this.bulletEnemy10_2_2.active=false;
            this.bulletEnemy10_2_3.active=false;
            }
        }
        else{
            this.damageEnemy10_2Text.string="Miss!!";
        }
        console.log("HPE1="+this.HpEnemy10_2);
        //รีเซ็ตกระสุน
         this.bulletD.x=this.player.x-this.hand2;
         this.bulletD.y=this.player.y
         this.timePlayer=0;
         //Enemy Bullet
     }
     //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
     if(this.bulletR.x<=this.Enemy10_2.x+this.hitbox&&
        this.bulletR.y<=this.Enemy10_2.y+this.hitbox&&
        this.bulletR.x>=this.Enemy10_2.x-this.hitbox&&
        this.bulletR.y>=this.Enemy10_2.y-this.hitbox&&
        this.Enemy10_2.active==true){
        console.log("Enemy hit!!!");
        //คำนวนดาเมจ
        if(this.Enemy10_2Skill==false){
        this.HpEnemy10_2-=this.damagebullet;
        this.hpEnemy10_2.setScale(this.HpEnemy10_2,1);
        this.damageEnemy10_2Text.string="Hitt!! -"+this.damagebullet;
        //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
        this.D2.play();
        if(this.HpEnemy10_2<=0){
            this.Break.play();
            this.Enemy10_2.active=false;
            this.bulletEnemy10_2_1.active=false;
              this.bulletEnemy10_2_2.active=false;
              this.bulletEnemy10_2_3.active=false;
            }
        }
        else{
            this.damageEnemy10_2Text.string="Miss!!";
        }
        console.log("HPE1="+this.HpEnemy10_2);
        //รีเซ็ตกระสุน
         this.bulletR.x=this.player.x+this.hand;
         this.bulletR.y=this.player.y
         this.timePlayer=0;
         //Enemy Bullet
     }
        //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
        if(this.bullet2.x<=this.Enemy10_2.x+this.hitbox&&
            this.bullet2.y<=this.Enemy10_2.y+this.hitbox&&
            this.bullet2.x>=this.Enemy10_2.x-this.hitbox&&
            this.bullet2.y>=this.Enemy10_2.y-this.hitbox&&
            this.Enemy10_2.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
            if(this.Enemy10_2Skill==false){
            this.HpEnemy10_2-=this.damagebullet;
            this.hpEnemy10_2.setScale(this.HpEnemy10_2,1);
            this.damageEnemy10_2Text.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
            if(this.HpEnemy10_2<=0){
                this.Break.play();
                this.Enemy10_2.active=false;
                this.bulletEnemy10_2_1.active=false;
                this.bulletEnemy10_2_2.active=false;
                this.bulletEnemy10_2_3.active=false;
                }
            }
            else{
                this.damageEnemy10_2Text.string="Miss!!";
            }
            console.log("HPE1="+this.HpEnemy10_2);
            //รีเซ็ตกระสุน
             this.bullet2.x=this.player.x-this.hand;
             this.bullet2.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
       if(this.timeEnemy10_2>=300){
          //Skill แข็งตัว 
         if(this.Enemy10_2Skill==false){
         this.Enemy10_2Skill=true; 
         this.BodyEnemy10_2.play("close");
         }
         else if(this.Enemy10_2Skill==true){
          this.Enemy10_2Skill=false; 
          this.BodyEnemy10_2.play("Open");
         }
         //this.anim.node.scaleX = 1;
         // this.moveState = MoveState.Up;
         this.bulletEnemy10_2_1.x=this.Enemy10_2.x;
         this.bulletEnemy10_2_1.y=this.Enemy10_2.y;
         this.bulletEnemy10_2_2.x=this.Enemy10_2.x;
         this.bulletEnemy10_2_2.y=this.Enemy10_2.y;
         this.bulletEnemy10_2_3.x=this.Enemy10_2.x;
         this.bulletEnemy10_2_3.y=this.Enemy10_2.y;
         this.timeEnemy10_2=0;
      } 
      if(this.timeEnemy10_2==10){
        this.damageEnemy10_2Text.string="";
        this.damageText.string="";
      }
     },
     EnemyLv10_3(){
        //Set UP
        this.timeEnemy10_3++;
        if(this.Enemy10_3Skill==false){
        this.bulletEnemy10_3_1.y-=3;
        this.bulletEnemy10_3_2.y-=3;
        this.bulletEnemy10_3_2.x-=3;
        this.bulletEnemy10_3_3.y-=3;
        this.bulletEnemy10_3_3.x+=3;
        }
         //เงื่อนไข เมื่อ กระสุนของ Enemy 1 โดน Player
      if(this.bulletEnemy10_3_1.x<=this.player.x+this.hitbox&&
          this.bulletEnemy10_3_1.y<=this.player.y+this.hitbox&&
          this.bulletEnemy10_3_1.x>=this.player.x-this.hitbox&&
          this.bulletEnemy10_3_1.y>=this.player.y-this.hitbox&&
          this.Enemy10_3.active==true){
          console.log("Player hit!!!");
          //คำนวนดาเมจ
          this.HpPlayer-=this.damagebulletEnemy10_3;
          this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
          this.damageText.string="Hitt!! -"+this.damagebulletEnemy10_3;
           //เช็คHPถ้าน้อยกว่า=0
           this.D1.play();
          if(this.HpPlayer<=0){
                this.Break.play();
              this.player.active=false;
              this.bullet.active=false;
              this.gameover.active=true;
          }
          console.log("HPPlayer="+this.HpEnemy10_3);
           //รีเซ็ตกระสุน
          this.bulletEnemy10_3_1.x=this.Enemy10_3.x;
          this.bulletEnemy10_3_1.y=this.Enemy10_3.y;
          this.timeEnemy10_3=0;
       }
       //เงื่อนไข เมื่อ กระสุนของ Enemy 1 โดน Player
      if(this.bulletEnemy10_3_2.x<=this.player.x+this.hitbox&&
        this.bulletEnemy10_3_2.y<=this.player.y+this.hitbox&&
        this.bulletEnemy10_3_2.x>=this.player.x-this.hitbox&&
        this.bulletEnemy10_3_2.y>=this.player.y-this.hitbox&&
        this.Enemy10_3.active==true){
        console.log("Player hit!!!");
        //คำนวนดาเมจ
        this.HpPlayer-=this.damagebulletEnemy10_3;
        this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
        this.damageText.string="Hitt!! -"+this.damagebulletEnemy10_3;
         //เช็คHPถ้าน้อยกว่า=0
         this.D1.play();
         if(this.HpPlayer<=0){
               this.Break.play();
            this.player.active=false;
            this.bullet.active=false;
            this.gameover.active=true;
        }
        console.log("HPPlayer="+this.HpEnemy10_3);
         //รีเซ็ตกระสุน
        this.bulletEnemy10_3_2.x=this.Enemy10_2.x;
        this.bulletEnemy10_3_2.y=this.Enemy10_2.y;
        this.timeEnemy10_3=0;
     }
     //เงื่อนไข เมื่อ กระสุนของ Enemy 1 โดน Player
     if(this.bulletEnemy10_3_3.x<=this.player.x+this.hitbox&&
        this.bulletEnemy10_3_3.y<=this.player.y+this.hitbox&&
        this.bulletEnemy10_3_3.x>=this.player.x-this.hitbox&&
        this.bulletEnemy10_3_3.y>=this.player.y-this.hitbox&&
        this.Enemy10_3.active==true){
        console.log("Player hit!!!");
        //คำนวนดาเมจ
        this.HpPlayer-=this.damagebulletEnemy10_3;
        this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
        this.damageText.string="Hitt!! -"+this.damagebulletEnemy10_3;
         //เช็คHPถ้าน้อยกว่า=0
         this.D1.play();
         if(this.HpPlayer<=0){
               this.Break.play();
            this.player.active=false;
            this.bullet.active=false;
            this.gameover.active=true;
        }
        console.log("HPPlayer="+this.HpEnemy10_3);
         //รีเซ็ตกระสุน
        this.bulletEnemy10_3_3.x=this.Enemy10_3.x;
        this.bulletEnemy10_3_3.y=this.Enemy10_3.y;
        this.timeEnemy10_3=0;
     }
       //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
       if(this.bulletD.x<=this.Enemy10_3.x+this.hitbox&&
          this.bulletD.y<=this.Enemy10_3.y+this.hitbox&&
          this.bulletD.x>=this.Enemy10_3.x-this.hitbox&&
          this.bulletD.y>=this.Enemy10_3.y-this.hitbox&&
          this.Enemy10_3.active==true){
          console.log("Enemy hit!!!");
          //คำนวนดาเมจ
          if(this.Enemy10_3Skill==false){
          this.HpEnemy10_3-=this.damagebullet;
          this.hpEnemy10_3.setScale(this.HpEnemy10_3,1);
          this.damageEnemy10_3Text.string="Hitt!! -"+this.damagebullet;
          //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
          this.D2.play();
          if(this.HpEnemy10_3<=0){
              this.Break.play();
              this.Enemy10_3.active=false;
              this.bulletEnemy10_3_1.active=false;
              this.bulletEnemy10_3_2.active=false;
              this.bulletEnemy10_3_3.active=false;
              }
          }
          else{
              this.damageEnemy10_3Text.string="Miss!!";
          }
          console.log("HPE1="+this.HpEnemy10_3);
          //รีเซ็ตกระสุน
           this.bulletD.x=this.player.x-this.hand2;
           this.bulletD.y=this.player.y
           this.timePlayer=0;
           //Enemy Bullet
       }
        //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
        if(this.bulletR.x<=this.Enemy10_3.x+this.hitbox&&
            this.bulletR.y<=this.Enemy10_3.y+this.hitbox&&
            this.bulletR.x>=this.Enemy10_3.x-this.hitbox&&
            this.bulletR.y>=this.Enemy10_3.y-this.hitbox&&
            this.Enemy10_3.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
            if(this.Enemy10_3Skill==false){
            this.HpEnemy10_3-=this.damagebullet;
            this.hpEnemy10_3.setScale(this.HpEnemy10_3,1);
            this.damageEnemy10_3Text.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
            if(this.HpEnemy10_3<=0){
                this.Break.play();
                this.Enemy10_3.active=false;
                this.bulletEnemy10_3_1.active=false;
                this.bulletEnemy10_3_2.active=false;
                this.bulletEnemy10_3_3.active=false;
                }
            }
            else{
                this.damageEnemy10_3Text.string="Miss!!";
            }
            console.log("HPE1="+this.HpEnemy10_3);
            //รีเซ็ตกระสุน
             this.bulletR.x=this.player.x+this.hand;
             this.bulletR.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
         //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
         if(this.bullet2.x<=this.Enemy10_3.x+this.hitbox&&
            this.bullet2.y<=this.Enemy10_3.y+this.hitbox&&
            this.bullet2.x>=this.Enemy10_3.x-this.hitbox&&
            this.bullet2.y>=this.Enemy10_3.y-this.hitbox&&
            this.Enemy10_3.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
            if(this.Enemy10_3Skill==false){
            this.HpEnemy10_3-=this.damagebullet;
            this.hpEnemy10_3.setScale(this.HpEnemy10_3,1);
            this.damageEnemy10_3Text.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
            if(this.HpEnemy10_3<=0){
                this.Break.play();
                this.Enemy10_3.active=false;
                this.bulletEnemy10_3_1.active=false;
                this.bulletEnemy10_3_2.active=false;
                this.bulletEnemy10_3_3.active=false;
                }
            }
            else{
                this.damageEnemy10_3Text.string="Miss!!";
            }
            console.log("HPE1="+this.HpEnemy10_3);
            //รีเซ็ตกระสุน
             this.bullet2.x=this.player.x-this.hand;
             this.bullet2.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
         //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
         if(this.bullet.x<=this.Enemy10_3.x+this.hitbox&&
            this.bullet.y<=this.Enemy10_3.y+this.hitbox&&
            this.bullet.x>=this.Enemy10_3.x-this.hitbox&&
            this.bullet.y>=this.Enemy10_3.y-this.hitbox&&
            this.Enemy10_3.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
            if(this.Enemy10_3Skill==false){
            this.HpEnemy10_3-=this.damagebullet;
            this.hpEnemy10_3.setScale(this.HpEnemy10_3,1);
            this.damageEnemy10_3Text.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
            if(this.HpEnemy10_3<=0){
                this.Break.play();
                this.Enemy10_3.active=false;
                this.bulletEnemy10_3_1.active=false;
                this.bulletEnemy10_3_2.active=false;
                this.bulletEnemy10_3_3.active=false;
                }
            }
            else{
                this.damageEnemy10_3Text.string="Miss!!";
            }
            console.log("HPE1="+this.HpEnemy10_3);
            //รีเซ็ตกระสุน
             this.bullet.x=this.player.x+this.hand;
             this.bullet.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
       if(this.timeEnemy10_3>=300){
          //Skill แข็งตัว 
         if(this.Enemy10_3Skill==false){
         this.Enemy10_3Skill=true; 
         this.BodyEnemy10_3.play("close");
         }
         else if(this.Enemy10_1Skill==true){
          this.Enemy10_3Skill=false; 
          this.BodyEnemy10_3.play("Open");
         }
         //this.anim.node.scaleX = 1;
         // this.moveState = MoveState.Up;
         this.bulletEnemy10_3_1.x=this.Enemy10_3.x;
         this.bulletEnemy10_3_1.y=this.Enemy10_3.y;
         this.bulletEnemy10_3_2.x=this.Enemy10_3.x;
         this.bulletEnemy10_3_2.y=this.Enemy10_3.y;
         this.bulletEnemy10_3_3.x=this.Enemy10_3.x;
         this.bulletEnemy10_3_3.y=this.Enemy10_3.y;
         this.timeEnemy10_3=0;
      } 
      if(this.timeEnemy10_3==10){
        this.damageEnemy10_3Text.string="";
        this.damageText.string="";
      }
     },
     EnemyLv11_1(){
        //Set UP
        this.timeEnemy11_1++;
        this.bulletEnemy11_1.y-=10;
         //เงื่อนไข เมื่อ กระสุนของ Enemy 1 โดน Player
        
      if(this.bulletEnemy11_1.x<=this.player.x+this.hitbox&&
          this.bulletEnemy11_1.y<=this.player.y+this.hitbox&&
          this.bulletEnemy11_1.x>=this.player.x-this.hitbox&&
          this.bulletEnemy11_1.y>=this.player.y-this.hitbox&&
          this.Enemy11_1.active==true){
          console.log("Player hit!!!");
          //คำนวนดาเมจ
          this.HpPlayer-=this.damagebulletEnemy11_1;
          this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
          this.damageText.string="Hitt!! -"+this.damagebulletEnemy11_1;
           //เช็คHPถ้าน้อยกว่า=0
           this.D1.play();
          if(this.HpPlayer<=0){
                this.Break.play();
              this.player.active=false;
              this.bullet.active=false;
              this.gameover.active=true;
          }
          console.log("HPPlayer="+this.HpEnemy11_1);
           //รีเซ็ตกระสุน
          this.bulletEnemy11_1.x=this.Enemy11_1.x;
          this.bulletEnemy11_1.y=this.Enemy11_1.y;
          this.timeEnemy11_1=0;
       }
       //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
       if(this.bullet.x<=this.Enemy11_1.x+this.hitbox&&
          this.bullet.y<=this.Enemy11_1.y+this.hitbox&&
          this.bullet.x>=this.Enemy11_1.x-this.hitbox&&
          this.bullet.y>=this.Enemy11_1.y-this.hitbox&&
          this.Enemy11_1.active==true){
          console.log("Enemy hit!!!");
          //คำนวนดาเมจ
         
          this.HpEnemy11_1-=this.damagebullet;
          this.hpEnemy11_1.setScale(this.HpEnemy11_1,1);
          this.damageEnemy11_1Text.string="Hitt!! -"+this.damagebullet;
          //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
          this.D2.play();
          if(this.HpEnemy11_1<=0){
              this.Break.play();
              this.Enemy11_1.active=false;
              this.bulletEnemy11_1.active=false;
              }
          console.log("HPE1="+this.HpEnemy11_1);
          //รีเซ็ตกระสุน
           this.bullet.x=this.player.x+this.hand;
           this.bullet.y=this.player.y
           this.timePlayer=0;
           //Enemy Bullet
       }
         //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
         if(this.bullet2.x<=this.Enemy11_1.x+this.hitbox&&
            this.bullet2.y<=this.Enemy11_1.y+this.hitbox&&
            this.bullet2.x>=this.Enemy11_1.x-this.hitbox&&
            this.bullet2.y>=this.Enemy11_1.y-this.hitbox&&
            this.Enemy11_1.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
           
            this.HpEnemy11_1-=this.damagebullet;
            this.hpEnemy11_1.setScale(this.HpEnemy11_1,1);
            this.damageEnemy11_1Text.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
          if(this.HpEnemy11_1<=0){
              this.Break.play();
                this.Enemy11_1.active=false;
                this.bulletEnemy11_1.active=false;
                }
            console.log("HPE1="+this.HpEnemy11_1);
            //รีเซ็ตกระสุน
             this.bullet2.x=this.player.x-this.hand;
             this.bullet2.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
         //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
         if(this.bulletD.x<=this.Enemy11_1.x+this.hitbox&&
            this.bulletD.y<=this.Enemy11_1.y+this.hitbox&&
            this.bulletD.x>=this.Enemy11_1.x-this.hitbox&&
            this.bulletD.y>=this.Enemy11_1.y-this.hitbox&&
            this.Enemy11_1.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
           
            this.HpEnemy11_1-=this.damagebullet;
            this.hpEnemy11_1.setScale(this.HpEnemy11_1,1);
            this.damageEnemy11_1Text.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
            if(this.HpEnemy11_1<=0){
                this.Break.play();
                this.Enemy11_1.active=false;
                this.bulletEnemy11_1.active=false;
                }
            console.log("HPE1="+this.HpEnemy11_1);
            //รีเซ็ตกระสุน
             this.bulletD.x=this.player.x-this.hand2;
             this.bulletD.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
         //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
         if(this.bulletR.x<=this.Enemy11_1.x+this.hitbox&&
            this.bulletR.y<=this.Enemy11_1.y+this.hitbox&&
            this.bulletR.x>=this.Enemy11_1.x-this.hitbox&&
            this.bulletR.y>=this.Enemy11_1.y-this.hitbox&&
            this.Enemy11_1.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
           
            this.HpEnemy11_1-=this.damagebullet;
            this.hpEnemy11_1.setScale(this.HpEnemy11_1,1);
            this.damageEnemy11_1Text.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
            if(this.HpEnemy11_1<=0){
                this.Break.play();
                this.Enemy11_1.active=false;
                this.bulletEnemy11_1.active=false;
                }
            console.log("HPE1="+this.HpEnemy4_1);
            //รีเซ็ตกระสุน
             this.bulletR.x=this.player.x+this.hand;
             this.bulletR.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
       if(this.timeEnemy11_1>=200){
         // this.moveState = MoveState.Up;
         this.bulletEnemy11_1.x=this.Enemy11_1.x;
         this.bulletEnemy11_1.y=this.Enemy11_1.y;
         this.timeEnemy11_1=0;
      } 
      if(this.timeEnemy11_1==10){
          this.damageEnemy11_1Text.string="";
          this.damageText.string="";
       }
    },
    EnemyLv11_2(){
        //Set UP
        this.timeEnemy11_2++;
        this.bulletEnemy11_2.y-=10;
         //เงื่อนไข เมื่อ กระสุนของ Enemy 1 โดน Player
        
      if(this.bulletEnemy11_2.x<=this.player.x+this.hitbox&&
          this.bulletEnemy11_2.y<=this.player.y+this.hitbox&&
          this.bulletEnemy11_2.x>=this.player.x-this.hitbox&&
          this.bulletEnemy11_2.y>=this.player.y-this.hitbox&&
          this.Enemy11_2.active==true){
          console.log("Player hit!!!");
          //คำนวนดาเมจ
          this.HpPlayer-=this.damagebulletEnemy11_2;
          this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
          this.damageText.string="Hitt!! -"+this.damagebulletEnemy11_2;
           //เช็คHPถ้าน้อยกว่า=0
           this.D1.play();
          if(this.HpPlayer<=0){
                this.Break.play();
              this.player.active=false;
              this.bullet.active=false;
              this.gameover.active=true;
          }
          console.log("HPPlayer="+this.HpEnemy11_2);
           //รีเซ็ตกระสุน
          this.bulletEnemy11_2.x=this.Enemy11_2.x;
          this.bulletEnemy11_2.y=this.Enemy11_2.y;
          this.timeEnemy11_2=0;
       }
       //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
       if(this.bullet.x<=this.Enemy11_2.x+this.hitbox&&
          this.bullet.y<=this.Enemy11_2.y+this.hitbox&&
          this.bullet.x>=this.Enemy11_2.x-this.hitbox&&
          this.bullet.y>=this.Enemy11_2.y-this.hitbox&&
          this.Enemy11_2.active==true){
          console.log("Enemy hit!!!");
          //คำนวนดาเมจ
         
          this.HpEnemy11_2-=this.damagebullet;
          this.hpEnemy11_2.setScale(this.HpEnemy11_2,1);
          this.damageEnemy11_2Text.string="Hitt!! -"+this.damagebullet;
          //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
          this.D2.play();
          if(this.HpEnemy11_2<=0){
              this.Break.play();
              this.Enemy11_2.active=false;
              this.bulletEnemy11_2.active=false;
              }
          console.log("HPE1="+this.HpEnemy11_2);
          //รีเซ็ตกระสุน
           this.bullet.x=this.player.x+this.hand;
           this.bullet.y=this.player.y
           this.timePlayer=0;
           //Enemy Bullet
       }
         //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
         if(this.bullet2.x<=this.Enemy11_2.x+this.hitbox&&
            this.bullet2.y<=this.Enemy11_2.y+this.hitbox&&
            this.bullet2.x>=this.Enemy11_2.x-this.hitbox&&
            this.bullet2.y>=this.Enemy11_2.y-this.hitbox&&
            this.Enemy11_2.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
           
            this.HpEnemy11_2-=this.damagebullet;
            this.hpEnemy11_2.setScale(this.HpEnemy11_2,1);
            this.damageEnemy11_2Text.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
          if(this.HpEnemy11_2<=0){
              this.Break.play();
                this.Enemy11_2.active=false;
                this.bulletEnemy11_2.active=false;
                }
            console.log("HPE1="+this.HpEnemy11_2);
            //รีเซ็ตกระสุน
             this.bullet2.x=this.player.x-this.hand;
             this.bullet2.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
         //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
         if(this.bulletD.x<=this.Enemy11_2.x+this.hitbox&&
            this.bulletD.y<=this.Enemy11_2.y+this.hitbox&&
            this.bulletD.x>=this.Enemy11_2.x-this.hitbox&&
            this.bulletD.y>=this.Enemy11_2.y-this.hitbox&&
            this.Enemy11_2.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
           
            this.HpEnemy11_2-=this.damagebullet;
            this.hpEnemy11_2.setScale(this.HpEnemy11_2,1);
            this.damageEnemy11_2Text.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
            if(this.HpEnemy11_2<=0){
                this.Break.play();
                this.Enemy11_2.active=false;
                this.bulletEnemy11_2.active=false;
                }
            console.log("HPE1="+this.HpEnemy11_2);
            //รีเซ็ตกระสุน
             this.bulletD.x=this.player.x-this.hand2;
             this.bulletD.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
         //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
         if(this.bulletR.x<=this.Enemy11_2.x+this.hitbox&&
            this.bulletR.y<=this.Enemy11_2.y+this.hitbox&&
            this.bulletR.x>=this.Enemy11_2.x-this.hitbox&&
            this.bulletR.y>=this.Enemy11_2.y-this.hitbox&&
            this.Enemy11_2.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
           
            this.HpEnemy11_2-=this.damagebullet;
            this.hpEnemy11_2.setScale(this.HpEnemy11_2,1);
            this.damageEnemy11_2Text.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
            if(this.HpEnemy11_2<=0){
                this.Break.play();
                this.Enemy11_2.active=false;
                this.bulletEnemy11_2.active=false;
                }
            console.log("HPE1="+this.HpEnemy11_2);
            //รีเซ็ตกระสุน
             this.bulletR.x=this.player.x+this.hand;
             this.bulletR.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
       if(this.timeEnemy11_2>=200){
         // this.moveState = MoveState.Up;
         this.bulletEnemy11_2.x=this.Enemy11_2.x;
         this.bulletEnemy11_2.y=this.Enemy11_2.y;
         this.timeEnemy11_2=0;
      } 
      if(this.timeEnemy11_2==10){
          this.damageEnemy11_2Text.string="";
          this.damageText.string="";
       }
    },
    EnemyLv12_1(){
        this.timeEnemy12_1++;
        if(this.Enemy12_1Lock==false&&this.Enemy12_1.active==true){
            this.Enemy12_1.x=this.player.x;
            this.Enemy12_1.x-=100;
            this.Enemy12_1Lock=true;
        }
        if(this.Enemy12_1Skill==false&&this.Enemy12_1.active==true){
            if(this.player.y<this.Enemy12_1.y){
                this.Enemy12_1.rotation=0;
                this.Enemy12_1.y-=5;
            }
            else if(this.player.y>this.Enemy12_1.y){
                this.Enemy12_1.rotation=180;
                this.Enemy12_1.y+=5;
            }  
        }
            //เงื่อนไข เมื่อ กระสุนของ Enemy 1 โดน Player
      if(this.Enemy12_1.x<=this.player.x+this.hitbox&&
        this.Enemy12_1.y<=this.player.y+this.hitbox&&
        this.Enemy12_1.x>=this.player.x-this.hitbox&&
        this.Enemy12_1.y>=this.player.y-this.hitbox&&
        this.Enemy12_1.active==true&&this.Enemy12_1Skill==false){
        console.log("Player hit!!!");
        //คำนวนดาเมจ
        this.HpPlayer-=this.damagebulletEnemy12_1;
        this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
        this.damageText.string="Hitt!! -"+this.damagebulletEnemy12_1;
         //เช็คHPถ้าน้อยกว่า=0
         this.D1.play();
        if(this.HpPlayer<=0){
            this.Break.play(); 
            this.player.active=false;
            this.bullet.active=false;
            this.gameover.active=true;
        }
        console.log("HPPlayer="+this.HpEnemy12_1);
         //รีเซ็ตกระสุน
        this.timeEnemy12_1=0;
        this.Enemy12_1Skill=true;
     }
          //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
       if(this.bullet.x<=this.Enemy12_1.x+this.hitbox&&
        this.bullet.y<=this.Enemy12_1.y+this.hitbox&&
        this.bullet.x>=this.Enemy12_1.x-this.hitbox&&
        this.bullet.y>=this.Enemy12_1.y-this.hitbox&&
        this.Enemy12_1.active==true){
        console.log("Enemy hit!!!");
        //คำนวนดาเมจ
        
        this.HpEnemy12_1-=this.damagebullet;
        this.hpEnemy12_1.setScale(this.HpEnemy12_1,1);
        this.damageEnemy12_1Text.string="Hitt!! -"+this.damagebullet;
        //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            if(this.HpEnemy12_1<=0){
            this.Enemy12_1.active=false;
            }
        console.log("HPE1="+this.HpEnemy12_1);
        //รีเซ็ตกระสุน
         this.bullet.x=this.player.x+this.hand;
         this.bullet.y=this.player.y
         this.timePlayer=0;
         //Enemy Bullet
     }
     if(this.bullet2.x<=this.Enemy12_1.x+this.hitbox&&
        this.bullet2.y<=this.Enemy12_1.y+this.hitbox&&
        this.bullet2.x>=this.Enemy12_1.x-this.hitbox&&
        this.bullet2.y>=this.Enemy12_1.y-this.hitbox&&
        this.Enemy12_1.active==true){
        console.log("Enemy hit!!!");
        //คำนวนดาเมจ
        
        this.HpEnemy12_1-=this.damagebullet;
        this.hpEnemy12_1.setScale(this.HpEnemy12_1,1);
        this.damageEnemy12_1Text.string="Hitt!! -"+this.damagebullet;
        //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
            if(this.HpEnemy12_1<=0){
            this.Break.play(); 
                this.Enemy12_1.active=false;
            }
        console.log("HPE1="+this.HpEnemy1);
        //รีเซ็ตกระสุน
         this.bullet12.x=this.player.x-this.hand;
         this.bullet12.y=this.player.y
         this.timePlayer=0;
         //Enemy Bullet
     }
     if(this.bulletR.x<=this.Enemy12_1.x+this.hitbox&&
        this.bulletR.y<=this.Enemy12_1.y+this.hitbox&&
        this.bulletR.x>=this.Enemy12_1.x-this.hitbox&&
        this.bulletR.y>=this.Enemy12_1.y-this.hitbox&&
        this.Enemy12_1.active==true){
        console.log("Enemy hit!!!");
        //คำนวนดาเมจ
        
        this.HpEnemy12_1-=this.damagebullet;
        this.hpEnemy12_1.setScale(this.HpEnemy12_1,1);
        this.damageEnemy12_1Text.string="Hitt!! -"+this.damagebullet;
        //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
        this.D2.play();
        if(this.HpEnemy12_1<=0){
            this.Break.play();
            this.Enemy12_1.active=false;
            }
        console.log("HPE1="+this.HpEnemy1);
        //รีเซ็ตกระสุน
         this.bulletR.x=this.player.x+this.hand;
         this.bulletR.y=this.player.y
         this.timePlayer=0;
         //Enemy Bullet
     }
     if(this.bulletD.x<=this.Enemy12_1.x+this.hitbox&&
        this.bulletD.y<=this.Enemy12_1.y+this.hitbox&&
        this.bulletD.x>=this.Enemy12_1.x-this.hitbox&&
        this.bulletD.y>=this.Enemy12_1.y-this.hitbox&&
        this.Enemy12_1.active==true){
        console.log("Enemy hit!!!");
        //คำนวนดาเมจ
        
        this.HpEnemy12_1-=this.damagebullet;
        this.hpEnemy12_1.setScale(this.HpEnemy12_1,1);
        this.damageEnemy12_1Text.string="Hitt!! -"+this.damagebullet;
        //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
        this.D2.play();
        if(this.HpEnemy12_1<=0){
            this.Break.play();
            this.Enemy12_1.active=false;
            }
        console.log("HPE1="+this.HpEnemy1);
        //รีเซ็ตกระสุน
         this.bulletD.x=this.player.x-this.hand2;
         this.bulletD.y=this.player.y
         this.timePlayer=0;
         //Enemy Bullet
     }
        if(this.timeEnemy12_1>=300){
            if(this.Enemy12_1Skill==false){
                this.Enemy12_1Skill=true; 
            }
            else if(this.Enemy12_1Skill==true){
                 this.Enemy12_1Skill=false; 
                 this.Enemy12_1Lock=false;
            }
            this.timeEnemy12_1=0;
        }
      
        
     },
     EnemyLv12_2(){
        this.timeEnemy12_2++;
        if(this.Enemy12_2Lock==false&&this.Enemy12_2.active==true){
            this.Enemy12_2.x=this.player.x;
            this.Enemy12_2.x-=100;
            this.Enemy12_2Lock=true;
        }
        if(this.Enemy12_2Skill==false&&this.Enemy12_2.active==true){
            if(this.player.y<this.Enemy12_2.y){
                this.Enemy12_2.rotation=0;
                this.Enemy12_2.y-=5;
            }
            else if(this.player.y>this.Enemy12_2.y){
                this.Enemy12_2.rotation=180;
                this.Enemy12_2.y+=5;
            }  
        }
            //เงื่อนไข เมื่อ กระสุนของ Enemy 1 โดน Player
      if(this.Enemy12_2.x<=this.player.x+this.hitbox&&
        this.Enemy12_2.y<=this.player.y+this.hitbox&&
        this.Enemy12_2.x>=this.player.x-this.hitbox&&
        this.Enemy12_2.y>=this.player.y-this.hitbox&&
        this.Enemy12_2.active==true&&this.Enemy12_2Skill==false){
        console.log("Player hit!!!");
        //คำนวนดาเมจ
        this.HpPlayer-=this.damagebulletEnemy12_2;
        this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
        this.damageText.string="Hitt!! -"+this.damagebulletEnemy12_2;
         //เช็คHPถ้าน้อยกว่า=0
         this.D1.play();
        if(this.HpPlayer<=0){
            this.Break.play(); 
            this.player.active=false;
            this.bullet.active=false;
            this.gameover.active=true;
        }
        console.log("HPPlayer="+this.HpEnemy12_2);
         //รีเซ็ตกระสุน
        this.timeEnemy12_2=0;
        this.Enemy12_2Skill=true;
     }
          //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
       if(this.bullet.x<=this.Enemy12_2.x+this.hitbox&&
        this.bullet.y<=this.Enemy12_2.y+this.hitbox&&
        this.bullet.x>=this.Enemy12_2.x-this.hitbox&&
        this.bullet.y>=this.Enemy12_2.y-this.hitbox&&
        this.Enemy12_2.active==true){
        console.log("Enemy hit!!!");
        //คำนวนดาเมจ
        
        this.HpEnemy12_2-=this.damagebullet;
        this.hpEnemy12_2.setScale(this.HpEnemy12_2,1);
        this.damageEnemy12_2Text.string="Hitt!! -"+this.damagebullet;
        //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            if(this.HpEnemy12_2<=0){
            this.Enemy12_2.active=false;
            }
        console.log("HPE1="+this.HpEnemy12_2);
        //รีเซ็ตกระสุน
         this.bullet.x=this.player.x+this.hand;
         this.bullet.y=this.player.y
         this.timePlayer=0;
         //Enemy Bullet
     }
     if(this.bullet2.x<=this.Enemy12_2.x+this.hitbox&&
        this.bullet2.y<=this.Enemy12_2.y+this.hitbox&&
        this.bullet2.x>=this.Enemy12_2.x-this.hitbox&&
        this.bullet2.y>=this.Enemy12_2.y-this.hitbox&&
        this.Enemy12_2.active==true){
        console.log("Enemy hit!!!");
        //คำนวนดาเมจ
        
        this.HpEnemy12_2-=this.damagebullet;
        this.hpEnemy12_2.setScale(this.HpEnemy12_2,1);
        this.damageEnemy12_2Text.string="Hitt!! -"+this.damagebullet;
        //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
            if(this.HpEnemy12_2<=0){
            this.Break.play(); 
                this.Enemy12_2.active=false;
            }
        console.log("HPE1="+this.HpEnemy1);
        //รีเซ็ตกระสุน
         this.bullet12.x=this.player.x-this.hand;
         this.bullet12.y=this.player.y
         this.timePlayer=0;
         //Enemy Bullet
     }
     if(this.bulletR.x<=this.Enemy12_2.x+this.hitbox&&
        this.bulletR.y<=this.Enemy12_2.y+this.hitbox&&
        this.bulletR.x>=this.Enemy12_2.x-this.hitbox&&
        this.bulletR.y>=this.Enemy12_2.y-this.hitbox&&
        this.Enemy12_2.active==true){
        console.log("Enemy hit!!!");
        //คำนวนดาเมจ
        
        this.HpEnemy12_2-=this.damagebullet;
        this.hpEnemy12_2.setScale(this.HpEnemy12_2,1);
        this.damageEnemy12_2Text.string="Hitt!! -"+this.damagebullet;
        //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
        this.D2.play();
        if(this.HpEnemy12_2<=0){
            this.Break.play();
            this.Enemy12_2.active=false;
            }
        console.log("HPE1="+this.HpEnemy1);
        //รีเซ็ตกระสุน
         this.bulletR.x=this.player.x+this.hand;
         this.bulletR.y=this.player.y
         this.timePlayer=0;
         //Enemy Bullet
     }
     if(this.bulletD.x<=this.Enemy12_2.x+this.hitbox&&
        this.bulletD.y<=this.Enemy12_2.y+this.hitbox&&
        this.bulletD.x>=this.Enemy12_2.x-this.hitbox&&
        this.bulletD.y>=this.Enemy12_2.y-this.hitbox&&
        this.Enemy12_2.active==true){
        console.log("Enemy hit!!!");
        //คำนวนดาเมจ
        
        this.HpEnemy12_2-=this.damagebullet;
        this.hpEnemy12_2.setScale(this.HpEnemy12_2,1);
        this.damageEnemy12_2Text.string="Hitt!! -"+this.damagebullet;
        //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
        this.D2.play();
        if(this.HpEnemy12_2<=0){
            this.Break.play();
            this.Enemy12_2.active=false;
            }
        console.log("HPE1="+this.HpEnemy1);
        //รีเซ็ตกระสุน
         this.bulletD.x=this.player.x-this.hand2;
         this.bulletD.y=this.player.y
         this.timePlayer=0;
         //Enemy Bullet
     }
        if(this.timeEnemy12_2>=300){
            if(this.Enemy12_2Skill==false){
                this.Enemy12_2Skill=true; 
            }
            else if(this.Enemy12_2Skill==true){
                 this.Enemy12_2Skill=false; 
                 this.Enemy12_2Lock=false;
            }
            this.timeEnemy12_2=0;
        }
      
        
     },
     EnemyBoss(){
        this.timeEnemyX++;
        if(this.EnemyXSkill==false){
            this.bulletEnemyX_1.y-=3;
            this.bulletEnemyX_2.y-=3;
            this.bulletEnemyX_3.y-=3;
            this.bulletEnemyX_4.y-=3;
            }
             //เงื่อนไข เมื่อ กระสุนของ Enemy 1 โดน Player
          if(this.bulletEnemyX_1.x<=this.player.x+this.hitbox&&
              this.bulletEnemyX_1.y<=this.player.y+this.hitbox&&
              this.bulletEnemyX_1.x>=this.player.x-this.hitbox&&
              this.bulletEnemyX_1.y>=this.player.y-this.hitbox&&
              this.EnemyX.active==true){
              console.log("Player hit!!!");
              //คำนวนดาเมจ
              this.HpPlayer-=this.damagebulletEnemyX;
              this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
              this.damageText.string="Hitt!! -"+this.damagebulletEnemyX;
               //เช็คHPถ้าน้อยกว่า=0
               this.D1.play();
              if(this.HpPlayer<=0){
                    this.Break.play();
                  this.player.active=false;
                  this.bullet.active=false;
                  this.gameover.active=true;
              }
              console.log("HPPlayer="+this.HpEnemyX);
               //รีเซ็ตกระสุน
              this.bulletEnemyX_1.x=this.EnemyX.x;
              this.bulletEnemyX_1.y=this.EnemyX.y;
              this.timeEnemyX=0;
           }
           //เงื่อนไข เมื่อ กระสุนของ Enemy 1 โดน Player
          if(this.bulletEnemyX_2.x<=this.player.x+this.hitbox&&
            this.bulletEnemyX_2.y<=this.player.y+this.hitbox&&
            this.bulletEnemyX_2.x>=this.player.x-this.hitbox&&
            this.bulletEnemyX_2.y>=this.player.y-this.hitbox&&
            this.EnemyX.active==true){
            console.log("Player hit!!!");
            //คำนวนดาเมจ
            this.HpPlayer-=this.damagebulletEnemyX;
            this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
            this.damageText.string="Hitt!! -"+this.damagebulletEnemyX;
             //เช็คHPถ้าน้อยกว่า=0
             this.D1.play();
             if(this.HpPlayer<=0){
                   this.Break.play();
                this.player.active=false;
                this.bullet.active=false;
                this.gameover.active=true;
            }
            console.log("HPPlayer="+this.HpEnemyX);
             //รีเซ็ตกระสุน
            this.bulletEnemyX_2.x=this.EnemyX.x;
            this.bulletEnemyX_2.y=this.EnemyX.y;
            this.timeEnemyX=0;
         }
         //เงื่อนไข เมื่อ กระสุนของ Enemy 1 โดน Player
         if(this.bulletEnemyX_3.x<=this.player.x+this.hitbox&&
            this.bulletEnemyX_3.y<=this.player.y+this.hitbox&&
            this.bulletEnemyX_3.x>=this.player.x-this.hitbox&&
            this.bulletEnemyX_3.y>=this.player.y-this.hitbox&&
            this.EnemyX.active==true){
            console.log("Player hit!!!");
            //คำนวนดาเมจ
            this.HpPlayer-=this.damagebulletEnemyX;
            this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
            this.damageText.string="Hitt!! -"+this.damagebulletEnemyX;
             //เช็คHPถ้าน้อยกว่า=0
             this.D1.play();
             if(this.HpPlayer<=0){
                   this.Break.play();
                this.player.active=false;
                this.bullet.active=false;
                this.gameover.active=true;
            }
            console.log("HPPlayer="+this.HpEnemyX);
             //รีเซ็ตกระสุน
            this.bulletEnemyX_3.x=this.EnemyX.x;
            this.bulletEnemyX_3.y=this.EnemyX.y;
            this.timeEnemyX=0;
         }
          //เงื่อนไข เมื่อ กระสุนของ Enemy 1 โดน Player
          if(this.bulletEnemyX_4.x<=this.player.x+this.hitbox&&
            this.bulletEnemyX_4.y<=this.player.y+this.hitbox&&
            this.bulletEnemyX_4.x>=this.player.x-this.hitbox&&
            this.bulletEnemyX_4.y>=this.player.y-this.hitbox&&
            this.EnemyX.active==true){
            console.log("Player hit!!!");
            //คำนวนดาเมจ
            this.HpPlayer-=this.damagebulletEnemyX;
            this.hpPlayer.setScale((this.HpPlayer*100)/this.maxHpplayer,1);
            this.damageText.string="Hitt!! -"+this.damagebulletEnemyX;
             //เช็คHPถ้าน้อยกว่า=0
             this.D1.play();
             if(this.HpPlayer<=0){
                   this.Break.play();
                this.player.active=false;
                this.bullet.active=false;
                this.gameover.active=true;
            }
            console.log("HPPlayer="+this.HpEnemyX);
             //รีเซ็ตกระสุน
            this.bulletEnemyX_4.x=this.EnemyX.x;
            this.bulletEnemyX_4.y=this.EnemyX.y;
            this.timeEnemyX=0;
         }
           //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
           if(this.bullet.x<=this.EnemyX.x+this.hitbox&&
            this.bullet.y<=this.EnemyX.y+this.hitbox&&
            this.bullet.x>=this.EnemyX.x-this.hitbox&&
            this.bullet.y>=this.EnemyX.y-this.hitbox&&
            this.EnemyX.active==true){
            console.log("Enemy hit!!!");
            //คำนวนดาเมจ
            this.HpEnemyX-=this.damagebullet;
            this.hpEnemyX.setScale(this.HpEnemyX,1);
            this.damageEnemyXText.string="Hitt!! -"+this.damagebullet;
            //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
            this.D2.play();
            if(this.HpEnemyX<=0){
                this.Break.play();
                this.EnemyX.active=false;
                this.bulletEnemyX.active=false;
                }
            console.log("HPE1="+this.HpEnemyX);
            //รีเซ็ตกระสุน
             this.bullet.x=this.player.x+this.hand;
             this.bullet.y=this.player.y
             this.timePlayer=0;
             //Enemy Bullet
         }
           //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
           if(this.bulletD.x<=this.EnemyX.x+this.hitbox&&
              this.bulletD.y<=this.EnemyX.y+this.hitbox&&
              this.bulletD.x>=this.EnemyX.x-this.hitbox&&
              this.bulletD.y>=this.EnemyX.y-this.hitbox&&
              this.EnemyX.active==true){
              console.log("Enemy hit!!!");
              //คำนวนดาเมจ
              this.HpEnemyX-=this.damagebullet;
              this.hpEnemyX.setScale(this.HpEnemyX,1);
              this.damageEnemyXText.string="Hitt!! -"+this.damagebullet;
              //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
              this.D2.play();
              if(this.HpEnemyX<=0){
                  this.Break.play();
                  this.EnemyX.active=false;
                  this.bulletEnemyX.active=false;
                  }
              console.log("HPE1="+this.HpEnemyX);
              //รีเซ็ตกระสุน
               this.bulletD.x=this.player.x-this.hand2;
               this.bulletD.y=this.player.y
               this.timePlayer=0;
               //Enemy Bullet
           }
            //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
            if(this.bulletR.x<=this.EnemyX.x+this.hitbox&&
                this.bulletR.y<=this.EnemyX.y+this.hitbox&&
                this.bulletR.x>=this.EnemyX.x-this.hitbox&&
                this.bulletR.y>=this.EnemyX.y-this.hitbox&&
                this.EnemyX.active==true){
                console.log("Enemy hit!!!");
                //คำนวนดาเมจ
                if(this.EnemyXSkill==false){
                this.HpEnemyX-=this.damagebullet;
                this.hpEnemyX.setScale(this.HpEnemyX,1);
                this.damageEnemyXText.string="Hitt!! -"+this.damagebullet;
                //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
                this.D2.play();
                if(this.HpEnemyX<=0){
                    this.Break.play();
                    this.EnemyX.active=false;
                    this.bulletEnemyX.active=false;
                    }
                }
               
                console.log("HPE1="+this.HpEnemyX);
                //รีเซ็ตกระสุน
                 this.bulletR.x=this.player.x+this.hand;
                 this.bulletR.y=this.player.y
                 this.timePlayer=0;
                 //Enemy Bullet
             }
             //เงื่อนไข เมื่อ กระสุนของ Player โดน Enemy 1
             if(this.bullet2.x<=this.EnemyX.x+this.hitbox&&
                this.bullet2.y<=this.EnemyX.y+this.hitbox&&
                this.bullet2.x>=this.EnemyX.x-this.hitbox&&
                this.bullet2.y>=this.EnemyX.y-this.hitbox&&
                this.EnemyX.active==true){
                console.log("Enemy hit!!!");
                //คำนวนดาเมจ
                this.HpEnemyX-=this.damagebullet;
                this.hpEnemyX.setScale(this.HpEnemyX,1);
                this.damageEnemyXText.string="Hitt!! -"+this.damagebullet;
                //เช็คHPถ้าน้อยกว่า=0Enemy1หายไป
                this.D2.play();
                if(this.HpEnemyX<=0){
                    this.Break.play();
                    this.EnemyX.active=false;
                    this.bulletEnemyX.active=false;
                    }
                
                console.log("HPE1="+this.HpEnemyX);
                //รีเซ็ตกระสุน
                 this.bullet2.x=this.player.x-this.hand;
                 this.bullet2.y=this.player.y
                 this.timePlayer=0;
                 //Enemy Bullet
             }
           if(this.timeEnemyX>=300){
              //Skill แข็งตัว 
             if(this.EnemyXSkill==false){
             this.EnemyXSkill=true; 
            
             }
             else if(this.EnemyXSkill==true&&this.EnemyX.active==true){
              
              var skillX = Math.floor((Math.random() * 4) + 1);
              if(skillX==1){
                this.HpEnemy1=25;
                this.Enemy1.y=this.EnemyX.y-100;
                this.bulletEnemy1.x=this.Enemy1.x;
                this.bulletEnemy1.y=this.Enemy1.y;
                this.hpEnemy1.setScale(this.HpEnemy1,1);
                this.bulletEnemy1.active=true;
                this.Enemy1.active=true;
              }
              else if(skillX==2){
                this.HpEnemy2_1=45;
                this.Enemy2_1.y=this.EnemyX.y-100;
                this.hpEnemy2_1.setScale(this.HpEnemy2_1,1);
                this.Enemy2_1.active=true;
              }
              else if(skillX==3){
                this.HpEnemy3_1=20;
                this.Enemy3_1.y=this.EnemyX.y-100;
                this.bulletEnemy3_1.x=this.Enemy3_1.x;
                this.bulletEnemy3_1.y=this.Enemy3_1.y;
                this.hpEnemy3_1.setScale(this.HpEnemy3_1,1);
                this.bulletEnemy3_1.active=true;
                this.Enemy3_1.active=true;
              }
              else if(skillX==4){
                this.HpEnemy4_1=100;
                this.Enemy4_1.y=this.EnemyX.y-100;
                this.bulletEnemy4_1.x=this.Enemy4_1.x;
                this.bulletEnemy4_1.y=this.Enemy4_1.y;
                this.hpEnemy4_1.setScale(this.HpEnemy4_1,1);
                this.bulletEnemy4_1.active=true;
                this.Enemy4_1.active=true;
              }
              else if(skillX==5){
                this.HpEnemy5_1=50;
                this.Enemy5_1.y=this.EnemyX.y-100;
                this.bulletEnemy5_1_1.x=this.Enemy5_1.x;
                this.bulletEnemy5_1_1.y=this.Enemy5_1.y;
                this.bulletEnemy5_1_2.x=this.Enemy5_1.x;
                this.bulletEnemy5_1_2.y=this.Enemy5_1.y;
                this.hpEnemy5_1.setScale(this.HpEnemy5_1,1);
                this.bulletEnemy5_1_1.active=true;
                this.bulletEnemy5_1_2.active=true;
                this.Enemy5_1.active=true;
              }
              else if(skillX==6){
                this.HpEnemy6_1=25;
                this.Enemy6_1.y=this.EnemyX.y-100;
                this.bulletEnemy6_1_1.x=this.Enemy5_1.x;
                this.bulletEnemy6_1_1.y=this.Enemy5_1.y;
                this.bulletEnemy6_1_2.x=this.Enemy5_1.x;
                this.bulletEnemy6_1_2.y=this.Enemy5_1.y;
                this.hpEnemy6_1.setScale(this.HpEnemy6_1,1);
                this.bulletEnemy6_1_1.active=true;
                this.bulletEnemy6_1_2.active=true;
                this.Enemy6_1.active=true;
              }
              else if(skillX==7){
                this.HpEnemy7_1=90;
                this.Enemy7_1.y=this.EnemyX.y-100;
                this.bulletEnemy7_1_1.x=this.Enemy7_1.x;
                this.bulletEnemy7_1_1.y=this.Enemy7_1.y;
                this.bulletEnemy7_1_2.x=this.Enemy7_1.x;
                this.bulletEnemy7_1_2.y=this.Enemy7_1.y;
                this.bulletEnemy7_1_3.x=this.Enemy7_1.x;
                this.bulletEnemy7_1_3.y=this.Enemy7_1.y;
                this.hpEnemy7_1.setScale(this.HpEnemy7_1,1);
                this.bulletEnemy7_1_1.active=true;
                this.bulletEnemy7_1_2.active=true;
                this.bulletEnemy7_1_3.active=true;
                this.Enemy7_1.active=true;
              }
              else if(skillX==8){
                this.HpEnemy8_1=120;
                this.Enemy8_1.y=this.EnemyX.y-100;
                this.bulletEnemy8_1_1.x=this.Enemy8_1.x;
                this.bulletEnemy8_1_1.y=this.Enemy8_1.y;
                this.bulletEnemy8_1_2.x=this.Enemy8_1.x;
                this.bulletEnemy8_1_2.y=this.Enemy8_1.y;
                this.hpEnemy8_1.setScale(this.HpEnemy8_1,1);
                this.bulletEnemy8_1_1.active=true;
                this.bulletEnemy8_1_2.active=true;
                this.Enemy8_1.active=true;
              }
              else if(skillX==9){
                this.HpEnemy9_1=120;
                this.Enemy9_1.y=this.EnemyX.y-100;
                this.bulletEnemy9_1_1.x=this.Enemy9_1.x;
                this.bulletEnemy9_1_1.y=this.Enemy9_1.y;
                this.bulletEnemy9_1_2.x=this.Enemy9_1.x;
                this.bulletEnemy9_1_2.y=this.Enemy9_1.y;
                this.hpEnemy9_1.setScale(this.HpEnemy9_1,1);
                this.bulletEnemy9_1_1.active=true;
                this.bulletEnemy9_1_2.active=true;
                this.Enemy9_1.active=true;
              }
              else if(skillX==10){
                this.HpEnemy10_1=110;
                this.Enemy10_1.y=this.EnemyX.y-100;
                this.bulletEnemy10_1_1.x=this.Enemy10_1.x;
                this.bulletEnemy10_1_1.y=this.Enemy10_1.y;
                this.bulletEnemy10_1_2.x=this.Enemy10_1.x;
                this.bulletEnemy10_1_2.y=this.Enemy10_1.y;
                this.bulletEnemy10_1_3.x=this.Enemy10_1.x;
                this.bulletEnemy10_1_3.y=this.Enemy10_1.y;
                this.hpEnemy10_1.setScale(this.HpEnemy10_1,1);
                this.bulletEnemy10_1_1.active=true;
                this.bulletEnemy10_1_2.active=true;
                this.bulletEnemy10_1_3.active=true;
                this.Enemy10_1.active=true;
              }
              this.EnemyXSkill=false; 
             }
             //this.anim.node.scaleX = 1;
             // this.moveState = MoveState.Up;
             this.bulletEnemyX_1.x=this.EnemyX.x;
             this.bulletEnemyX_1.y=this.EnemyX.y;
             this.bulletEnemyX_2.x=this.EnemyX.x;
             this.bulletEnemyX_2.y=this.EnemyX.y;
             this.bulletEnemyX_3.x=this.EnemyX.x;
             this.bulletEnemyX_3.y=this.EnemyX.y;
             this.bulletEnemyX_4.x=this.EnemyX.x;
             this.bulletEnemyX_4.y=this.EnemyX.y;
             this.timeEnemyX=0;
          } 
          if(this.timeEnemyX==10){
            this.damageEnemyXText.string="";
            this.damageText.string="";
          }
     },
    
     update (dt) {
        //System
        this.playerSeting();
        this.autolockPlayer();
        this.checkWin();
        this.setGrid();
        this.door();
        //Enemy Map 1
        this.EnemyLv1_1();
        this.EnemyLv1_2();
        //Enemy Map 2
        this.EnemyLv2_1();
        this.EnemyLv2_2();
         //Enemy Map 3
        this.EnemyLv3_1();
        this.EnemyLv3_2();
        //Boss 
        this.EnemyLv4_1();
         //Enemy Map 4
        this.EnemyLv5_1();
        this.EnemyLv5_2();
        this.EnemyLv5_3();
         //Enemy Map 5
        this.EnemyLv6_1();
        this.EnemyLv6_2();
        //Enemy Map 6
        this.EnemyLv7_1();
        this.EnemyLv7_2();
        this.EnemyLv8_1();
        //Enemy Map 7
        this.EnemyLv9_1();
        this.EnemyLv9_2();
        this.EnemyLv9_3();
        //Enemy Map 8
        this.EnemyLv10_1();
        this.EnemyLv10_2();
        this.EnemyLv10_3();
        this.EnemyLv11_1();
        this.EnemyLv11_2();
        this.EnemyLv12_1();
        this.EnemyLv12_2();
        this.EnemyBoss();


        

       
     },
});
