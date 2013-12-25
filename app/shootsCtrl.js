var ShootsCtrl = can.Control.extend({
    init: function( element, options ) {
        if(options.type == "new"){
            this.new(options.contact_id);
        }
        else if(options.type == "show"){
            this.show(options.id);
        }
        else if(options.type == "all"){
            this.all(options.filter);
        }
//        $(".title").html("Shoots");
//        $("#back").hide();
//
//        var shootsView = can.view("#shoots-view");
//        this.element.html(shootsView);
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
    },

    all: function(filter) {
        var _this = this;
        Shoot.findAll({id: window.photographerId, filter: filter}, function(shoots){
            $(".title").html("<span class='icon-camera'></span> Shoots");
            $("#back").hide();

            var shootsView = can.view("#shoots-view", {shoots: shoots});
            _this.element.html(shootsView);
            Footer.create(_this.element, "#shoots-footer", null);

            Loader.stop();
        });
    },

    show: function(id) {
        var _this = this;
        Shoot.findOne({id: id}, function(shoot){
            $(".title").html("<span class='icon-glass'></span> " + shoot.shoot_type);
            $("#back").show();

            var shootView = can.view("#shoot-view", shoot);
            _this.element.html(shootView);
            Footer.create(_this.element, "#shoot-footer", null);
            Loader.stop();
        });
    },

    new: function(contactId) {
        $(".title").html("Create New Shoot");
        $("#back").show();

        this.shoot = new can.Map({
            contact_id: contactId,
            shoot_type: "wedding",
            shoot_date: "",
            shoot_time: "",
            location: "",
            delivery_date: "",
            charges: "",
            notes: ""
        });

        var shootForm = can.view("#shoot-form-view", this.shoot);
        this.element.html(shootForm);
        this.element.find("form").append("<button id='create-shoot' class='btn btn-success btn-lg submit'><span class='icon-plus'></span> Create</button>")
        Loader.stop();
    },

    "#create-shoot click": function(el, ev){
        ev.preventDefault();

        Shoot.create(this.shoot.attr(), function(response){
            MessageModal.show("New shoot created successfully", "#shoots/" + response.id + "/show");
        });
    },

    ".shoots li click": function(el, ev){
        ev.preventDefault();
        window.location.hash = el.data("href");
    }
});