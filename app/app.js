$(function(){
    new Photonetra();
    can.route.ready();

});

can.Construct("Photonetra", {
    init: function() {
        new RoutingControl("body");
    }
});
