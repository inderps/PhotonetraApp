var NewShootCtrl = can.Control.extend({
    init: function( element, options ) {
        $(".title").html("Create New Shoot");
        $("#back").show();

        var newShootView = can.view("#new-shoot-view");
        this.element.html(newShootView);
//
//        var shootListView = can.view("#shoot-list-view", [{
//            id: "1",
//            shoot_date: "July 27, 2013",
//            shoot_time: "1:00 PM",
//            client_name: "Manjeet Singh",
//            shoot_type: "Wedding Shoots"
//        }]);
//        this.element.find(".shoots").append(shootListView);
//        Footer.create(this.element, "#shoots-footer");
    }
});