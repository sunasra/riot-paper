<!-- pass icon using https://design.google.com/icons/ -->
<rp-fab>
  <button class="button" style="color:{opts.color||'#ffffff'};background-color:{opts.bgcolor||'#3f51b5'}">
      <i class="material-icons">{opts.icon}</i>
      <rp-ripple></rp-ripple>
  </button>
</rp-fab>

<rp-simple-card>
    <div class="card-body">
      <yield></yield>
    </div>
</rp-simple-card>

<rp-loader>
    <svg class="loader-circular" height="50" width="50">
        <circle class="loader-path" cx="25" cy="25.2" r="19.9" fill="none" stroke-width="{opts.strokewidth||3}" stroke-miterlimit="10" />
    </svg>
</rp-loader>
<rp-ripple>
    <div class="dot {rippleClass}" style="left:{rippleX}px;top:{rippleY}px;">
    </div>
    <script>
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
                // addEventListener

                //inline element
                if (elm["ontap"]) {
                    //var ev = document.createEvent("CustomEvent");
                    //ev.initEvent("tap");
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
    </script>
</rp-ripple>