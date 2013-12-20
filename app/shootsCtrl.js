var ShootsCtrl = can.Control.extend({
    init: function( element, options ) {
        $(".title").html("Shoots");
        $("#back").hide();

        var shootsView = can.view("#shoots-view");
        this.element.html(shootsView);

        var shootListView = can.view("#shoot-list-view", [{
            id: "1",
            shoot_date: "July 27, 2013",
            shoot_time: "1:00 PM",
            client_name: "Manjeet Singh",
            shoot_type: "Wedding Shoots"
        }]);
        this.element.find(".shoots").append(shootListView);
        Footer.create(this.element, "#shoots-footer");
        Loader.stop();
    }
});