var DateTimePicker = (function() {

    var dateInit = function(id) {
        $(id).pickadate({
            format: 'd mmmm, yyyy',
            formatSubmit: 'yyyy-mm-d',
            showMonthsShort: true,
            min: new Date(),
            weekdaysShort: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
        });
    };

    var timeInit = function(id){
        $(id).pickatime({
            format: 'h:i A',
            interval: 30
        });
    };

    return {
        dateInit: dateInit,
        timeInit: timeInit
    };

})();