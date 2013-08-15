var ShootsControl = can.Control({
        defaults: {
        }
    },
    {
        init: function (el, options) {
            var template = can.view("#shootsView");
            el.html(template);
    }
});

