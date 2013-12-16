var SignupCtrl = can.Control.extend({
    init: function( element, options ) {
        $(".title").html("Sign Up");
        $("#back").hide();
        $("#menu").hide();

        var signupView = can.view("#signup-view");
        this.element.html(signupView);
    },

    ".submit click": function (el, ev) {
        ev.preventDefault();
        var formData = this.element.find("form").serializeJSON();
        delete formData["confirm_password"]
        Photographer.create(formData, function(data){
            MessageModal.show("Your account is created successfully", "#signup");
        });
    }
});