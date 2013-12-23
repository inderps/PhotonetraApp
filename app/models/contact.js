Contact = can.Model.extend({
    create:  "POST " + host.get() + "photographers/{photographer_id}/contacts",
    findOne: "GET " + host.get() + "contacts/{id}/",
    findAll: "GET " + host.get() + "photographers/{id}/contacts",
    update:  function(contact, callback){
        return $.ajax({
            url: host.get() + "contacts/" + contact.id + "/",
            type: 'post',
            data: contact,
            dataType: 'json'
        }).done(function(data){
                callback(data);
        });
    }
},{});