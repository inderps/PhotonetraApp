var ViewShootControl = can.Control({
        defaults: {
        }
    },
    {
        init: function (el, options) {

        },

        show: function(){
            var viewShootTemplate = can.view("#viewShootView");
            this.element.html(viewShootTemplate);
            this.element.show();
        }
});

