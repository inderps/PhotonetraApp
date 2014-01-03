Photographer = can.Model.extend({
    create:  "POST " + host.get() + "photographers",
    login:  function(attrs, callback){
        return $.ajax({
            url: host.get() + "login",
            type: 'post',
            dataType: 'json',
            data: attrs
        }).done(function(data){
                callback(data);
         });
    }
},{});