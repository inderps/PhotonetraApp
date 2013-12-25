PendingDelivery = can.Model.extend({
    create:  "POST " + host.get() + "shoots/{id}/mark_delivery",
    findAll:  "GET " + host.get() + "photographers/{id}/pending_deliveries"
},{});