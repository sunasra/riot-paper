<!-- pass icon using https://design.google.com/icons/ -->
<rp-fab>
  <button style="color:{opts.color||'#ffffff'};background-color:{opts.bgcolor||'#3f51b5'}"><i class="material-icons">{opts.icon}</i></button>
</rp-fab>

<rp-simple-card>
  <div class="simple-card-container">
    <h4>News</h4>
    <div class="main-content"><img src="https://static.pexels.com/photos/24840/pexels-photo-large.jpg"/></div>
    <div class="caption-cotainer">This is caption content</div>
    <div class="hr"></div>
    <div class="action-container">
      <div class="primary-action">Action 1</div>
      <div class="secondary-action">Action 2</div>
    </div>
  <div>
</rp-simple-card>

<rp-loader>
    <svg class="loader-circular" height="50" width="50">
        <circle class="loader-path" cx="25" cy="25.2" r="19.9" fill="none" stroke-width="{opts.strokewidth||3}" stroke-miterlimit="10" />
    </svg>
</rp-loader>