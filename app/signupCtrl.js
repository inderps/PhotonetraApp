var SignupCtrl = can.Control.extend({
    init: function( element, options ) {
        $(".title").html("<span class='icon-emo-happy'></span> Sign Up");
        $("#back").hide();
        $("#menu").hide();

        var signupView = can.view("#signup-view");
        this.element.html(signupView);

        Validate.setup("#signup-form", {
            name: {
                required: true
            },
            studio_name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            website: {
                url: true
            },
            password: {
                required: true,
                minlength : 5
            },
            password: {
                required: true,
                minlength : 5
            },

            confirm_password: {
                required: true,
                minlength : 5,
                equalTo : "#password"
            }
        });

        Loader.stop();
    },

    ".submit click": function (el, ev) {
        ev.preventDefault();

        if(this.element.find("form").valid()){
            var formData = this.element.find("form").serializeJSON();
            delete formData["confirm_password"]
            Photographer.create(formData, function(data){
                MessageModal.show("Your account is created successfully", "#signup");
            });
        }
    }
});