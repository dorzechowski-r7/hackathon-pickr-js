import Backbone from "backbone";

const PickModel = Backbone.Model.extend({
    url: "http://triforce.cam.rapid7.com:8053/api/1/guitar"
});

module.exports = PickModel;
