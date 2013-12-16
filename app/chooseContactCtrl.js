var ChooseContactCtrl = can.Control.extend({
    init: function( element, options ) {
        $(".title").html("Choose Contact");
        $("#back").show();

        var selectContactView = can.view("#select-contact-view");
        this.element.html(selectContactView);
    }
});