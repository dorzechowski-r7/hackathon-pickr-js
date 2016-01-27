import Backbone from "backbone";

const NominationModel = Backbone.Model.extend({
    url: "http://triforce.cam.rapid7.com:8053/api/1/moose"
});

module.exports = NominationModel;
