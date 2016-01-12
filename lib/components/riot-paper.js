<!-- pass icon using https://design.google.com/icons/ -->
riot.tag('rp-fab', '<button class="button" riot-style="color:{opts.color||\'#ffffff\'};background-color:{opts.bgcolor||\'#3f51b5\'}" ontap="{sendTap}"><i class="material-icons">{opts.icon}</i><rp-ripple></rp-ripple></button>', function(opts) {
    this.sendTap = function() {
      if(this.root["ontap"]){
        this.root["ontap"]();
      }
      else if(this.root.getAttribute("ontap")){
        window[this.root.getAttribute("ontap")]();
      }
    }.bind(this);
  
});

riot.tag('rp-simple-card', '<div class="card-body"><yield></yield></div>', function(opts) {

});

riot.tag('rp-loader', '<svg class="loader-circular" height="50" width="50"><circle class="loader-path" cx="25" cy="25.2" r="19.9" fill="none" stroke-width="{opts.strokewidth||3}" stroke-miterlimit="10"></circle></svg>', function(opts) {

});
riot.tag('rp-ripple', '<div class="dot {rippleClass}" riot-style="left:{rippleX}px;top:{rippleY}px;"></div>', function(opts) {
    var _self = this;
    var lastEventSent = 0;
    _self.rippleClass = "none";
    this.on("mount", function() {
        var root = this.root;
        
        root.children[0].addEventListener("transitionEnd",resetRipple);
        root.children[0].addEventListener("webkitTransitionEnd",resetRipple);
        root.children[0].addEventListener("mozTransitionEnd",resetRipple);

        this.root.parentElement.addEventListener("mouseup", function(e) {
            sendTap(_self.root.parentElement, e);
        });

        this.root.parentElement.addEventListener("mousedown", function(e) {
            e.preventDefault();
            var parentRect = this.getBoundingClientRect();
            _self.update({
                rippleX: e.pageX - parentRect.left,
                rippleY: e.pageY - parentRect.top,
                rippleClass: "ripple"
            });
        });

        function sendTap(elm, data) {
            if (lastEventSent === 0 || (Date.now() - lastEventSent > 500)) {
                lastEventSent = Date.now();

                if (elm["ontap"]) {


                    setTimeout(function() {
                        data.targetElement = elm;
                        elm["ontap"](data);
                    }, 500)
                }
            }
        }

        function resetRipple() {
            
            if(_self.rippleClass!==""){
                _self.update({rippleClass:""});    
            }
            
        }
    })
    
});
riot.tag('rp-tab', ' <a each="{tab,index in tabs}" data-tabindex="{index}" class="each-tab" onclick="{sendTap}"><span class="tab-text">{tab}</span><rp-ripple></rp-ripple></a>', function(opts) {
      this.tabs=[];
      this.on("mount",function(){
        if(opts.tabs){
          this.update({tabs:opts.tabs.split(",")});
        }
      });
      this.sendTap = function(e) {
        var $target=e.target;
        if($target.classList.contains("tab-text")){
          $target=$target.parentNode;
        }
        if(this.root["ontap"]){
          this.root["ontap"](e.target.getAttribute("data-tabindex")||0);
        }
        else if(this.root.getAttribute("ontap")){
          window[this.root.getAttribute("ontap")](e.target.getAttribute("data-tabindex")||0);
        }
      }.bind(this);
    
});
