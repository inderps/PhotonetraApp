Shoot = can.Model.extend({
    create:  "POST " + host.get() + "photographers/{photographer_id}/shoots",
    findOne:  "GET " + host.get() + "shoots/{id}/",
    findAll:  "GET " + host.get() + "photographers/{id}/shoots?filter={filter}",
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