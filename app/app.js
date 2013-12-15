$(function(){
    new Photonetra();
    can.route.ready();

});

var Photonetra = can.Construct.extend({
    init: function() {
        $('#menu').sidr({source: '#menu-list'});
    }
});