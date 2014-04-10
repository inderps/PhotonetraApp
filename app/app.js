var Photonetra = can.Construct.extend({
    init: function() {
        MessageModal.init();
//        $('#titlebar').scrollNav({"bootstrap_mobile": true})
        new RoutingCtrl("body");
        $("#back").click(function(ev){
            ev.preventDefault();
            window.history.back();
        });
    }
});