$(function(){
    new Photonetra();
    can.route.ready();

});

var Photonetra = can.Construct.extend({
    init: function() {
        window.photographerId = 1;
        MessageModal.init();
        $('#menu').sidr({name: 'main-menu', source: '#menu-list', side: 'right'});
        new RoutingCtrl("body");
    }
});