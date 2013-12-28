Payment = can.Model.extend({
    create:  "POST " + host.get() + "shoots/{shoot_id}/payments",
    findAll: "GET " + host.get() + "photographers/{id}/payments"
},{});