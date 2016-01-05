<!-- pass icon using https://design.google.com/icons/ -->
riot.tag('rp-fab', '<button riot-style="color:{opts.color||\'#ffffff\'};background-color:{opts.bgcolor||\'#3f51b5\'}"><i class="material-icons">{opts.icon}</i></button>', function(opts) {

});

riot.tag('rp-simple-text-card', '<div>Hello</div><div>asdkhj</div>', function(opts) {

});

riot.tag('rp-loader', '<svg class="loader-circular" height="50" width="50"><circle class="loader-path" cx="25" cy="25.2" r="19.9" fill="none" stroke-width="{opts.strokewidth||3}" stroke-miterlimit="10"></circle></svg>', function(opts) {

});