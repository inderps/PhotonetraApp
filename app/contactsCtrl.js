var ContactsCtrl = can.Control.extend({
    init: function( element, options ) {
        if(options.type == "new"){
            this.new();
        }
        else if(options.type == "choose"){
            this.choose();
        }
        else if(options.type == "all"){
            this.all(options.ref);
        }
        else if(options.type == "show"){
            this.show(options.id);
        }
    },

    show: function(id){
        var _this = this;
        Contact.findOne({id: id}, function(contact){
            $(".title").html(contact.name);
            $("#back").show();

            var contactView = can.view("#contact-view", contact);
            _this.element.html(contactView);
            Footer.create(_this.element, "#contact-footer");
            Loader.stop();
        });
    },

    all: function(ref){
        var _this = this;
        var goToShootsCreate = false;

        if(ref){
            goToShootsCreate = true;
        }

        Contact.findAll({id: window.photographerId}, function(contacts){
            $(".title").html("Contacts");
            $("#back").hide();

            var contactsView = can.view("#contacts-view", {contacts: contacts, goToShootsCreate: goToShootsCreate});
            _this.element.html(contactsView);

            Footer.create(_this.element, "#contacts-footer");
            Loader.stop();
        });
    },

    new: function(){
        $(".title").html("Create New Contact");
        $("#back").show();

        this.contact = new can.Map({
            photographer_id: window.photographerId,
            name: "",
            email: "",
            phone: ""
        });

        var contactForm = can.view("#contact-form-view", this.contact);
        this.element.html(contactForm);
        this.element.find("form").append("<button id='create-contact' class='btn btn-success btn-lg submit'>Create</button>")
        Loader.stop();
    },

    choose: function(){
        $(".title").html("Choose Contact");
        $("#back").show();

        var selectContactView = can.view("#select-contact-view");
        this.element.html(selectContactView);

        this.contact = new can.Map({
            photographer_id: window.photographerId,
            name: "",
            email: "",
            phone: ""
        });

        var contactForm = can.view("#contact-form-view", this.contact);
        this.element.find(".form-area").html(contactForm);
        Loader.stop();
    },

    "#create-contact click": function(el, ev){
        ev.preventDefault();

        Contact.create(this.contact.attr(), function(response){
            MessageModal.show("New contact created successfully", "#contacts/" + response.id + "/show");
        });
    },

    "#choose-existing click": function(el, ev){
        ev.preventDefault();
        window.location.hash = "#select_contacts";
    },

    ".contacts li click": function(el, ev){
        ev.preventDefault();
        window.location.hash = el.data("href");
    }
});