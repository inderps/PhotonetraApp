var RoutingCtrl = can.Control.extend({
    init: function( element, options ) {
    },

    "route": function(){
        Loader.start();
        $("#page").html("<div id='shoots-page'></div>")
        this.options.shootsCtrl = new ShootsCtrl("#shoots-page");
    },

    "signup route": function(){
        Loader.start();
        $("#page").html("<div id='signup-page'></div>")
        this.options.signupCtrl = new SignupCtrl("#signup-page");
    },

    "shoots route" : function() {
        Loader.start();
        $("#page").html("<div id='shoots-page'></div>")
        this.options.shootsCtrl = new ShootsCtrl("#shoots-page");
    },

    "contacts/new route" : function() {
        Loader.start();
        $("#page").html("<div id='new-contact-page'></div>")
        this.options.contactsCtrl = new ContactsCtrl("#new-contact-page", {type: "new"});
    },

    "contacts/choose route" : function() {
        Loader.start();
        $("#page").html("<div id='choose-contact-page'></div>")
        this.options.chooseContactCtrl = new ChooseContactCtrl("#choose-contact-page");
    },

    "contacts/:id/show route" : function(data) {
        Loader.start();
        $("#page").html("<div id='contact-show-page'></div>")
        this.options.contactsCtrl = new ContactsCtrl("#contact-show-page", {type: "view", id: data.id});
    },

    "contacts/:id/shoots/new route" : function(data) {
        Loader.start();
        $("#page").html("<div id='new-shoot-page'></div>")
        this.options.newShootCtrl = new NewShootCtrl("#new-shoot-page");
    },

    "contacts route" : function() {
        Loader.start();
        $("#page").html("<div id='contacts-page'></div>")
        this.options.contactsCtrl = new ContactsCtrl("#contacts-page");
    },

    "shoots/upcoming route" : function() {

    },

    "shoots/{{id}}/show route" : function(data) {
        console.log(data.id);
    }
});