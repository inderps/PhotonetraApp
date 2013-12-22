Contact = can.Model.extend({
    create:  "POST " + host.get() + "photographers/{photographer_id}/contacts",
    findOne:  "GET " + host.get() + "contacts/{id}/"
},{});