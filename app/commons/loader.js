var Loader = (function() {

    var start = function() {
        $.sidr('close', 'main-menu');
    };

    var stop = function() {
    };

    return {
        start: start,
        stop: stop
    };

})();