var RoutingControl = can.Control({
        defaults: {
        }
    },
    {
        init: function (el, options) {
        },

        startLoading: function(){

        },

        endLoading: function(){

        },

        "route": function(){
            this.startLoading();
            if(!this.options.shootsControl) {
                this.options.shootsControl = new ShootsControl("#shootsContainer");
            }
            this.options.shootsControl.show();
            this.endLoading();
        },

        "shoots/upcoming route" : function() {
            this.startLoading();
            if(!this.options.shootsControl) {
                this.options.shootsControl = new ShootsControl("#shootsContainer");
            }
            this.options.shootsControl.show();
            this.endLoading();
        },

        "shoots/new route" : function() {
            this.startLoading();
            if(!this.options.shootsControl) {
                this.options.shootsControl = new ShootsControl("#shootsContainer");
            }
            this.options.shootsControl.new();
            this.endLoading();
        }
});

