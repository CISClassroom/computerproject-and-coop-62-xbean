
cc.Class({
    extends: cc.Component,

    properties: {
   
        Rocker:{
            type:cc.Node,
            default:null,
        },
        Canvas:{
            type:cc.Node,
            default:null,
        },
        st:{
            type:cc.Node,
            default:null,
        },
      
        
        Max_r:0,
    },

    start () {
        this.Rocker.x = 0;
        this.Rocker.y = 0;
        this.dir = cc.v2(0,0);
        var self = this;
        

 
        this.Rocker.on(cc.Node.EventType.TOUCH_START,function(e){
            var w_pos = e.getLocation();
            var pos = this.node.convertToNodeSpaceAR(w_pos);//convert the world coordinates to the relative coordinates of the parent node
 
            var len = pos.mag();
            this.dir.x = pos.x / len;
            this.dir.y = pos.y / len;
            if(len > this.Max_r){
                pos.x = this.Max_r * pos.x / len;
                pos.y = this.Max_r * pos.y / len;
            }

            this.Rocker.setPosition(pos);
        },this);
 
        this.Rocker.on(cc.Node.EventType.TOUCH_MOVE,function(e){
           var w_pos = e.getLocation();
           var pos = this.node.convertToNodeSpaceAR(w_pos);//convert the world coordinates to the relative coordinates of the parent node
 
           
            var len = pos.mag();
            this.dir.x = pos.x / len;
            this.dir.y = pos.y / len;
            if(len > this.Max_r){
                pos.x = this.Max_r * pos.x / len;
                pos.y = this.Max_r * pos.y / len;
            }
            this.Rocker.setPosition(pos);
        },this);
 
        this.Rocker.on(cc.Node.EventType.TOUCH_END,function(e){
           this.Rocker.setPosition(cc.v2(0,0));
 		   this.dir = cc.v2(0,0);
        },this);
 
        this.Rocker.on(cc.Node.EventType.TOUCH_CANCEL,function(e){
            this.Rocker.setPosition(cc.v2(0,0));
             this.dir = cc.v2(0, 0);
             
        },this);


        //=====================================Touch in Canvas==============================================

        this.Canvas.on(cc.Node.EventType.TOUCH_START,function(e){
            var w_pos = e.getLocation();
            //var pos =  .convertToNodeSpaceAR(w_pos);//convert the world coordinates to the relative coordinates of the parent node
        
            self.node.setPosition(cc.v2(w_pos['x'],w_pos['y']));
            self.touchStartTime = Date.now();
            this.dir = cc.v2(w_pos['x'], w_pos['y']);
        
        },
        this.Canvas);

        this.Canvas.on(cc.Node.EventType.TOUCH_MOVE,function(e){
            var w_pos = e.getLocation();
            var pos = this.node.convertToNodeSpaceAR(w_pos);//convert the world coordinates to the relative coordinates of the parent node
  
            
             var len = pos.mag();    
             this.dir.x = pos.x / len;
             this.dir.y = pos.y / len;
             if(len > this.Max_r){
                 pos.x = this.Max_r * pos.x / len;
                 pos.y = this.Max_r * pos.y / len;
             }
             this.Rocker.setPosition(pos);
         },this);

         this.Canvas.on(cc.Node.EventType.TOUCH_END,function(e){
            this.Rocker.setPosition(cc.v2(0,0));
             this.dir = cc.v2(0,0);
         },this);
  
         this.Canvas.on(cc.Node.EventType.TOUCH_CANCEL,function(e){
             this.Rocker.setPosition(cc.v2(0,0));
              this.dir = cc.v2(0, 0);
              
         },this);


        this.Canvas.on(cc.Node.EventType.TOUCH_END,function(e){
            self.node.setPosition(cc.v2(338.954,141.993));
            this.dir = cc.v2(338.954, 141.993);
        },this.Canvas);

        this.Canvas.on(cc.Node.EventType.TOUCH_CANCEL,function(e){   
            self.node.setPosition(cc.v2(338.954,141.993));    
            this.dir = cc.v2(338.954, 141.993);
        },this.Canvas);
        
       
    },


   
});


