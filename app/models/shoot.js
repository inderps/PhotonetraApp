Shoot = can.Model.extend({
    create:  "POST " + host.get() + "photographers/{photographer_id}/shoots",
    getOne: function(attrs, callback){
        if(Authentication.check()){
            return $.ajax({
                url: host.get() + "shoots/" + attrs.id + "/",
                type: 'get',
                dataType: 'json'
            }).done(function(data){
                    callback(data);
                });
        }
    },
    getAll: function(attrs, callback){
        if(Authentication.check()){
            return $.ajax({
                url: host.get() + "photographers/" + attrs.id + "/shoots",
                type: 'get',
                dataType: 'json'
            }).done(function(data){
                    callback(data);
            });
        }
    },
    assign_contact:  function(attrs, callback){
        return $.ajax({
            url: host.get() + "shoots/" + attrs.shoot_id + "/assign_contact?contact_id=" + attrs.contact_id,
            type: 'post',
            dataType: 'json'
        }).done(function(data){
                callback(data);
            });
    }
},{});