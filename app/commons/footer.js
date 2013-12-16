var Footer = (function() {

    var create = function(container, id) {
        var footerView = can.view(id);
        $("body .footer").remove();
        container.append(footerView);
    };

    return {
        create: create
    };

})();