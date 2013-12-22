Shoot = can.Model.extend({
    create:  "POST " + host.get() + "contacts/{contact_id}/shoots",
    findOne:  "GET " + host.get() + "shoots/{id}/",
    findAll:  "GET " + host.get() + "photographers/{id}/shoots?filter={filter}"
},{});