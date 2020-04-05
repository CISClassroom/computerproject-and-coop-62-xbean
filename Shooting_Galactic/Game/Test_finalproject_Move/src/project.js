window.__require=function t(e,i,o){function n(c,r){if(!i[c]){if(!e[c]){var a=c.split("/");if(a=a[a.length-1],!e[a]){var h="function"==typeof __require&&__require;if(!r&&h)return h(a,!0);if(s)return s(a,!0);throw new Error("Cannot find module '"+c+"'")}}var d=i[c]={exports:{}};e[c][0].call(d.exports,function(t){return n(e[c][1][t]||t)},d,d.exports,t,e,i,o)}return i[c].exports}for(var s="function"==typeof __require&&__require,c=0;c<o.length;c++)n(o[c]);return n}({Game:[function(t,e,i){"use strict";cc._RF.push(e,"034600RcOpMAoo2mfo/N1mV","Game"),cc.Class({extends:cc.Component,properties:{player:cc.Node,cameraRoot:cc.Animation},onLoad:function(){this.player=this.player.getComponent("Player"),this.player.init(this),this.player.node.active=!1},start:function(){this.player.node.active=!0,this.player.ready()}}),cc._RF.pop()},{}],Move:[function(t,e,i){"use strict";cc._RF.push(e,"816dbcCHXBHXLgb8fwPaadu","Move");var o=cc.Enum({None:-1,Stand:-1,Up:-1,Right:-1,Down:-1,Left:-1});cc.Class({extends:cc.Component,properties:{moveSpeed:0},statics:{MoveState:o},onLoad:function(){this.moveState=o.Stand,this.node.on("stand",this.stand,this),this.node.on("freeze",this.stop,this),this.node.on("update-dir",this.updateDir,this)},stand:function(){this.moveState!==o.Stand&&(this.moveState=o.Stand)},stop:function(){this.moveState=o.None,this.moveDir=null},moveUp:function(){this.moveState!==o.Up&&(this.moveState=o.Up)},moveDown:function(){this.moveState!==o.Down&&(this.moveState=o.Down)},moveRight:function(){this.moveState!==o.Right&&(this.moveState=o.Right)},moveLeft:function(){this.moveState!==o.Left&&(this.moveState=o.Left)},updateDir:function(t){this.moveDir=t.dir},update:function(t){if(this.moveDir){this.node.x+=this.moveSpeed*this.moveDir.x*t,this.node.y+=this.moveSpeed*this.moveDir.y*t;var e=cc.misc.radiansToDegrees(Math.atan2(this.moveDir.y,this.moveDir.x));e>=45&&e<135?this.moveUp():e>=135||e<-135?this.moveLeft():e>=-45&&e<45?this.moveRight():this.moveDown()}else this.moveState!==o.None&&this.stand()}}),cc._RF.pop()},{}],Player_Sub:[function(t,e,i){"use strict";cc._RF.push(e,"ef53e2CdRRDdpbyOk21Bhn1","Player_Sub"),cc.Class({extends:cc.Component,properties:{Rocker:{type:t("Rocker"),default:null},speed:100},onLoad:function(){},start:function(){},update:function(t){if(!(this.Rocker.dir.mag()<.5)){var e=this.Rocker.dir.x*this.speed*t,i=this.Rocker.dir.y*this.speed*t;this.node.x+=e,this.node.y+=i;var o=180*Math.atan2(this.Rocker.dir.y,this.Rocker.dir.x)/Math.PI;o=360-o+90,this.node.rotation=o}}}),cc._RF.pop()},{Rocker:"Rocker"}],Player:[function(t,e,i){"use strict";cc._RF.push(e,"be7d95cM/lPFqOZZit3W0Ko","Player"),cc.Class({extends:cc.Component,properties:{spArrow:cc.Node,sfAtkDirs:[cc.SpriteFrame],attachPoints:[cc.Vec2],sfPostAtks:[cc.SpriteFrame],spPlayer:cc.Sprite,spSlash:cc.Sprite,hurtRadius:0,touchThreshold:0,touchMoveThreshold:0,atkDist:0,atkDuration:0,atkStun:0,invincible:!1},init:function(t){this.game=t,this.anim=this.getComponent("Move").anim,this.inputEnabled=!1,this.isAttacking=!1,this.isAlive=!0,this.nextPoseSF=null,this.registerInput(),this.spArrow.active=!1,this.atkTargetPos=cc.v2(0,0),this.isAtkGoingOut=!1,this.validAtkRect=cc.rect(25,25,this.node.parent.width-50,this.node.parent.height-50),this.oneSlashKills=0},registerInput:function(){var t=this;cc.eventManager.addListener({event:cc.EventListener.TOUCH_ONE_BY_ONE,onTouchBegan:function(e,i){if(!1===t.inputEnabled)return!0;var o=e.getLocation();return t.touchBeganLoc=o,t.moveToPos=t.node.parent.convertToNodeSpaceAR(o),t.touchStartTime=Date.now(),!0},onTouchMoved:function(e,i){if(!1!==t.inputEnabled){var o=e.getLocation();t.spArrow.active=!0,t.moveToPos=t.node.parent.convertToNodeSpaceAR(o),t.touchBeganLoc.sub(o).mag()>t.touchMoveThreshold&&(t.hasMoved=!0)}},onTouchEnded:function(e,i){!1!==t.inputEnabled&&(t.spArrow.active=!1,t.moveToPos=null,t.node.emit("update-dir",{dir:null}),t.hasMoved=!1)}},t.node)},ready:function(){this.node.emit("stand"),this.inputEnabled=!0,this.isAlive=!0},isTouchHold:function(){return Date.now()-this.touchStartTime>=this.touchThreshold},update:function(t){if(!1!==this.isAlive&&(this.isAttacking&&this.isAtkGoingOut&&this.shouldStopAttacking()&&(this.node.stopAllActions(),this.onAtkFinished()),this.inputEnabled&&this.moveToPos&&this.isTouchHold())){var e=this.moveToPos.sub(this.node.position),i=Math.atan2(e.y,e.x),o=cc.misc.radiansToDegrees(i);this.spArrow.rotation=90-o,this.node.emit("update-dir",{dir:e.normalize()})}}}),cc._RF.pop()},{}],Rocker:[function(t,e,i){"use strict";cc._RF.push(e,"c6e0eXOCQhDE6vW1Crllrsu","Rocker"),cc.Class({extends:cc.Component,properties:{Rocker:{type:cc.Node,default:null},Canvas:{type:cc.Node,default:null},Max_r:100},start:function(){this.Rocker.x=0,this.Rocker.y=0,this.dir=cc.v2(0,0);var t=this;this.Rocker.on(cc.Node.EventType.TOUCH_START,function(t){var e=t.getLocation(),i=this.node.convertToNodeSpaceAR(e),o=i.mag();this.dir.x=i.x/o,this.dir.y=i.y/o,o>this.Max_r&&(i.x=this.Max_r*i.x/o,i.y=this.Max_r*i.y/o),this.Rocker.setPosition(i)},this),this.Rocker.on(cc.Node.EventType.TOUCH_MOVE,function(t){var e=t.getLocation(),i=this.node.convertToNodeSpaceAR(e),o=i.mag();this.dir.x=i.x/o,this.dir.y=i.y/o,o>this.Max_r&&(i.x=this.Max_r*i.x/o,i.y=this.Max_r*i.y/o),this.Rocker.setPosition(i)},this),this.Rocker.on(cc.Node.EventType.TOUCH_END,function(t){this.Rocker.setPosition(cc.v2(0,0)),this.dir=cc.v2(0,0)},this),this.Rocker.on(cc.Node.EventType.TOUCH_CANCEL,function(t){this.Rocker.setPosition(cc.v2(0,0)),this.dir=cc.v2(0,0)},this),this.Canvas.on(cc.Node.EventType.TOUCH_START,function(e){var i=e.getLocation();t.node.setPosition(cc.v2(i.x,i.y)),this.dir=cc.v2(i.x,i.y)},this.Canvas),this.Canvas.on(cc.Node.EventType.TOUCH_END,function(e){t.node.setPosition(cc.v2(450.046,122.74)),this.dir=cc.v2(450.046,122.74)},this.Canvas),this.Canvas.on(cc.Node.EventType.TOUCH_CANCEL,function(e){t.node.setPosition(cc.v2(450.046,122.74)),this.dir=cc.v2(450.046,122.74)},this.Canvas)}}),cc._RF.pop()},{}]},{},["Game","Move","Player","Player_Sub","Rocker"]);