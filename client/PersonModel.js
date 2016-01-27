import Backbone from "backbone";

const PersonModel = Backbone.Model.extend({
    url() {
        return "api/1/people/" + this.get("id");
    }
});

module.exports = PersonModel;
