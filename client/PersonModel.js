import Backbone from "backbone";

const PersonModel = Backbone.Model.extend({
    url() {
        return "http://triforce.cam.rapid7.com:8053/api/1/people/" + this.get("id");
    }
});

module.exports = PersonModel;
