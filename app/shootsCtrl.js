var ShootsCtrl = can.Control.extend({
    init: function( element, options ) {
        if(options.type == "new"){
            this.new();
        }
        else if(options.type == "show"){
            this.show(options.id);
        }
        else if(options.type == "all"){
            this.all(options.filter);
        }
    },

    all: function(filter) {
        var _this = this;
        Shoot.getAll({id: window.photographerId}, function(shoots){
            if(filter=="upcoming"){
                var upcomingShoots = [];
                for(var i=0; i<shoots.length;i++){
                    if(new Date(shoots[i].shoot_date) < new Date()){
                    }
                    else{
                        upcomingShoots.push(shoots[i]);
                    }
                }
                shoots = upcomingShoots;
            }

            $(".title").html("<span class='icon-camera'></span> Shoots");
            $("#back").hide();

            var shootsView = can.view("#shoots-view", {shoots: shoots});
            _this.element.html(shootsView);
            Footer.create(_this.element, "#shoots-footer", null);
            $("#filter-modal").modal("hide");
            Loader.stop();
        });
    },

    show: function(id) {
        var _this = this;
        Shoot.getOne({id: id}, function(shoot){
            _this.showShoot(shoot);
            if(_this.showDelivery(shoot)){
                DateTimePicker.dateInit("#delivery-date");
                $("#delivery-date").pickadate('picker').set('select', new Date());
                $("#delivery-modal button.update").click(function(ev){
                    Loader.start();
                    PendingDelivery.create({id: id, delivered_flag_date: $("#delivery-date").val()}, function(shoot){
                        Loader.stop();
                        $("#delivery-modal").modal("hide");
                        _this.showShoot(shoot);
                    });
                });
            }
            Loader.stop();
        });
    },

    showShoot: function(shoot){
        $(".title").html("<span class='icon-glass'></span> " + shoot.shoot_type);
        $("#back").show();

        var show_delivery = false;

        if (this.showDelivery(shoot)){
            show_delivery = true;
        }

        var shootView = can.view("#shoot-view", {shoot: shoot, show_delivery: show_delivery, contact: shoot.contact});
        this.element.html(shootView);
        Footer.create(this.element, "#shoot-footer", null);
    },

    showDelivery: function(shoot){
        return !shoot.delivered && (new Date(shoot.shoot_unformatted_date) < new Date());
    },

    new: function() {
        $(".title").html("<span class='icon-camera'></span> Create New Shoot");
        $("#back").show();

        this.shoot = new can.Map({
            photographer_id: window.photographerId,
            event_name: "",
            shoot_type: "wedding",
            shoot_date: "",
            shoot_time_from: "",
            shoot_time_to: "",
            location: "",
            delivery_date: "",
            charges: "",
            notes: ""
        });

        var shootForm = can.view("#shoot-form-view", this.shoot);
        this.element.html(shootForm);
        this.element.find("form").append("<button id='create-shoot' class='btn btn-success btn-lg submit'><span class='icon-plus'></span> Create</button>")

        Validate.setup("#new-shoot-form", {
            event_name: {
                required: true
            },
            shoot_date: {
                required: true
            },
            shoot_time_from: {
                required: true
            },
            shoot_time_to: {
                required: true
            },
            location: {
                required: true
            }
        });

        DateTimePicker.dateInit("#shoot-date");
        DateTimePicker.dateInit("#delivery-date");
        DateTimePicker.timeInit("#shoot-time-from");
        DateTimePicker.timeInit("#shoot-time-to");

        Loader.stop();
    },

    "#create-shoot click": function(el, ev){
        ev.preventDefault();

        if(this.element.find("form").valid()){
            Loader.start();
            Shoot.create(this.shoot.attr(), function(response){
                Loader.stop();
                MessageModal.show("New shoot created successfully", "#shoots/" + response.id + "/show");
            });
        }
    },

    "#add-contact click": function(el, ev){
        ev.preventDefault();
        window.location.hash = el.data("href");
    },

    ".shoots li click": function(el, ev){
        ev.preventDefault();
        window.location.hash = el.data("href");
    },

    ".delivery-button click": function(el, ev){
        $('#delivery-modal').modal('show');
    },

    ".add-payment click": function(el, ev){
        ev.preventDefault();
        window.location.hash = el.data("href");
    },

    ".filter-shoots click": function(el, ev){
        ev.preventDefault();
        $("#filter-modal").modal("show");

        $("a.filter-action").removeClass("active");
        $("a.filter-action").each(function(index, element){
            if($(element).attr("href")==window.location.hash){
                $(element).addClass("active");
            }
        });
    },

    "a.filter-action click": function(el, ev){
        ev.preventDefault();
        $("#filter-modal").modal("hide");
        window.location.hash = el.attr("href");
    }
});