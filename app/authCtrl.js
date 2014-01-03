var AuthCtrl = can.Control.extend({
    init: function( element, options ) {
        if(options.page == "signup"){
            this.signup();
        }
        else if(options.page == "login"){
            this.login();
        }
    },

    login: function(){
        $("#back").hide();
        $("#menu").hide();
        $("#titlebar").hide();
        var loginView = can.view("#login-view");
        this.element.html(loginView);

        Validate.setup("#login-form", {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true
            }
        });

        Loader.stop();
    },

    signup: function(){
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
    },

    ".login click": function (el, ev) {
        ev.preventDefault();

        if(this.element.find("form").valid()){
            var formData = this.element.find("form").serializeJSON();
            Photographer.login(formData, function(data){
                if(data.id){
                    window.photographerId = data.id;
                    window.token = data.token;
                    window.location.hash = "#";

                }else{
                    alert("Incorrect Email/Password");
                }
            });
        }
    }
});