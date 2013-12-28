var PaymentsCtrl = can.Control.extend({
    init: function( element, options ) {
        if(options.type == "new"){
            this.new(options.id);
        }
        else if(options.type == "all"){
            this.all(options.ref);
        }
    },

    all: function(ref){
//        var _this = this;
//        $(".title").html("<span class='icon-user'></span> Contacts");
//        $("#back").hide();
//
//        var goToShootsCreate = false;
//
//        if(ref){
//            goToShootsCreate = true;
//            $("#back").show();
//        }
//
//        Contact.findAll({id: window.photographerId}, function(contacts){
//
//            var contactsView = can.view("#contacts-view", {contacts: contacts, goToShootsCreate: goToShootsCreate});
//            _this.element.html(contactsView);
//
//            Footer.create(_this.element, "#contacts-footer", null);
//            Loader.stop();
//        });
    },

    new: function(shoot_id){
        $(".title").html("<span class='icon-dollar'></span> New Transaction");
        $("#back").show();
        var _this=this;

        Shoot.findOne({id: shoot_id}, function(shoot){
            _this.payment = new can.Map({
                shoot_id: shoot_id,
                payment_date: "",
                amount: "",
                comment: ""
            });

            var paymentForm = can.view("#payment-form-view", {shoot: shoot, payment: _this.payment});
            _this.element.html(paymentForm);

            DateTimePicker.dateInit("#payment-date");
            $("#payment-date").pickadate('picker').set('select', new Date());

            Validate.setup("#new-payment-form", {
                payment_date: {
                    required: true
                },
                amount: {
                    required: true,
                    number: true
                }
            });
            Loader.stop();
        });
    },

    "#payment-submit click": function(el, ev){
        ev.preventDefault();

        if(this.element.find("form").valid()){
            Payment.create(this.payment.attr(), function(response){
                MessageModal.show("New transaction added successfully", "#shoots/" + response.shoot_id + "/show");
            });
        }
    },

    ".contacts li click": function(el, ev){
//        ev.preventDefault();
//        window.location.hash = el.data("href");
    }
});