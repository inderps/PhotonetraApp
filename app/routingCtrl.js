var RoutingCtrl = can.Control.extend({
    init: function( element, options ) {
    },

    "route": function(){
        Loader.start();
        $("#page").html("<div id='calendar-page'></div>")
        this.options.calendarCtrl = new CalendarCtrl("#calendar-page");
    },

    "signup route": function(){
        Loader.start();
        $("#page").html("<div id='signup-page'></div>")
        this.options.signupCtrl = new SignupCtrl("#signup-page");
    },

    "shoots/upcoming route" : function() {
        Loader.start();
        $("#page").html("<div id='shoots-page'></div>")
        this.options.shootsCtrl = new ShootsCtrl("#shoots-page", {type: "all", filter: "upcoming"});
    },

    "shoots/all route" : function() {
        Loader.start();
        $("#page").html("<div id='shoots-page'></div>")
        this.options.shootsCtrl = new ShootsCtrl("#shoots-page", {type: "all", filter: "all"});
    },

    "contacts route" : function() {
        Loader.start();
        $("#page").html("<div id='contacts-page'></div>")
        this.options.contactsCtrl = new ContactsCtrl("#contacts-page", {type: "all"});
    },

    "delivery route" : function() {
        Loader.start();
        $("#page").html("<div id='delivery-page'></div>")
        this.options.deliveryCtrl = new DeliveryCtrl("#delivery-page");
    },

    "select_contacts route" : function() {
        Loader.start();
        $("#back").attr("href", "#contacts/choose");
        $("#page").html("<div id='contacts-page'></div>")
        this.options.contactsCtrl = new ContactsCtrl("#contacts-page", {type: "all", ref: "select"});
    },

    "contacts/new route" : function() {
        Loader.start();
        $("#back").attr("href", "#contacts");
        $("#page").html("<div id='new-contact-page'></div>")
        this.options.contactsCtrl = new ContactsCtrl("#new-contact-page", {type: "new"});
    },

    "contacts/:id/show route" : function(data) {
        Loader.start();
        $("#back").attr("href", "#contacts");
        $("#page").html("<div id='contact-show-page'></div>");
        this.options.contactsCtrl = new ContactsCtrl("#contact-show-page", {type: "show", id: data.id});
    },

    "contacts/:id/edit route" : function(data) {
        Loader.start();
        $("#back").attr("href", "#contacts/" + data.id + "/show");
        $("#page").html("<div id='contact-edit-page'></div>");
        this.options.contactsCtrl = new ContactsCtrl("#contact-edit-page", {type: "edit", id: data.id});
    },

    "contacts/choose route" : function() {
        Loader.start();
        $("#back").attr("href", "#shoots/upcoming");
        $("#page").html("<div id='choose-contact-page'></div>");
        this.options.contactsCtrl = new ContactsCtrl("#choose-contact-page", {type: "choose"});
    },

    "contacts/:id/shoots/new route" : function(data) {
        Loader.start();
        $("#back").attr("href", "#contacts/" + data.id + "/show");
        $("#page").html("<div id='new-shoot-page'></div>")
        this.options.shootsCtrl = new ShootsCtrl("#new-shoot-page", {type: "new", contact_id: data.id});
    },

    "shoots/:id/show  route" : function(data) {
        Loader.start();
        $("#back").attr("href", "#shoots/upcoming");
        $("#page").html("<div id='shoot-show-page'></div>")
        this.options.shootsCtrl = new ShootsCtrl("#shoot-show-page", {type: "show", id: data.id});
    },

    "shoots/:id/pending_delivery  route" : function(data) {
        Loader.start();
        $("#back").attr("href", "#delivery");
        $("#page").html("<div id='shoot-show-page'></div>")
        this.options.shootsCtrl = new ShootsCtrl("#shoot-show-page", {type: "show", id: data.id});
    }
});