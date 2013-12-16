var NewShootCtrl = can.Control.extend({
    init: function( element, options ) {
        $(".title").html("Sign Up");
        $("#back").hide();
        $("#menu").hide();

        var signupView = can.view("#signup-view");
        this.element.html(signupView);
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