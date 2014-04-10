var NavCtrl = can.Control.extend({
    init: function( element, options ) {
      this.snapper = new Snap({
        element: document.getElementById('content'),
        disable: 'left'
      });
    },

    '#open-left click': function(ev){
      if(this.snapper.state().state=="right" ){
        this.snapper.close();
      } else {
        this.snapper.open('right');
      }
    },

    '.snap-drawer-right li click': function(el, ev){
      this.snapper.close('right');
      window.location.hash = $(el).data('href');
    },

    disableSlidr: function(){
      this.snapper.disable();
    },

    enableSlidr: function(){
      this.snapper.enable();
    }
});