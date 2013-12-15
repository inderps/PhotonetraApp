var RoutingCtrl = can.Control.extend({
    init: function( element, options ) {
    },

    "route": function(){
        if(!this.options.shootsControl) {
            $("#page").html("<div id='shoots-page'></div>")
            this.options.shootsControl = new ShootsCtrl("#shoots-page");
        }
    },

    "shoots/upcoming route" : function() {

    },

    "shoots/{{id}}/show route" : function(data) {
        console.log(data.id);
    }
});