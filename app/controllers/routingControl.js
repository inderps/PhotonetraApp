var RoutingControl = can.Control({
        defaults: {
        }
    },
    {
        init: function (el, options) {
        },

        startLoading: function(){
            $(".page").hide();
//            var currentActiveView = $(".page:visible");
//            $("#backButton").attr("data-back-id", currentActiveView)
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
        },

        "shoots/:id/show route" : function(data) {
            this.startLoading();
            if(!this.options.viewShootControl) {
                this.options.viewShootControl = new ViewShootControl("#viewShootContainer");
            }
            this.options.viewShootControl.show();
            this.endLoading();
        },

        "#backButton click": function (el, ev) {
            ev.preventDefault();
//
//            var currentActiveView = $(".page:visible");
//            if(currentActiveView.attr("data-back-view")){
//                PageView.render(currentActiveView.attr("data-back-view"))
//            }
//            else if(currentActiveView.attr("data-back-href")){
//                window.location.hash = currentActiveView.attr("data-back-href")
//            }
        }
    });

