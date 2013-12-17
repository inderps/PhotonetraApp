var ContactsCtrl = can.Control.extend({
    init: function( element, options ) {
        if(options.type == "new"){
            this.new();
        }
        Loader.stop();

//        $(".title").html("Contacts");
//        $("#back").hide();
//
//        var contactsView = can.view("#contacts-view");
//        this.element.html(contactsView);
//        Footer.create(this.element, "#contacts-footer");
//        Loader.stop();
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

    "#create-contact click": function(el, ev){
        ev.preventDefault();

        Contact.create(this.contact.attr(), function(response){
            MessageModal.show("New contact created successfully", "#contacts/" + response.id + "/show");
        });
    }
});