var ShootsControl = can.Control({
        defaults: {
        }
    },
    {
        init: function (el, options) {

        },

        show: function(){
            var listTemplate = can.view("#listView");
            this.element.html(listTemplate);

            var upcomingViewtemplate = can.view("#shootsUpcomingView");
            $("#list").html(upcomingViewtemplate);

            var shootsFooterViewTemplate = can.view("#shootsFooterView");
            this.element.append(shootsFooterViewTemplate);
//            Test.findAll(function (data) {
//              console.log(data);
//            });
        },

        new: function(){
            var template = can.view("#shootsNewView");
            this.element.html(template);
            var template = can.view("#shootsFooterView");
            this.element.append(template);
//            Test.findAll(function (data) {
//              console.log(data);
//            });
        },

        "#existingClientButton click": function(el, ev){
            ev.preventDefault();
            var listTemplate = can.view("#listView");
            $("#page1").html(listTemplate);

            var clientSelectViewtemplate = can.view("#clientSelectView");
            $("#page1 .list").html(clientSelectViewtemplate);
        }
});

