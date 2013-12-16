var ContactsCtrl = can.Control.extend({
    init: function( element, options ) {
        $(".title").html("Contacts");
        $("#back").hide();

        var contactsView = can.view("#contacts-view");
        this.element.html(contactsView);
    }
});