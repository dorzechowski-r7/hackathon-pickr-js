import Backbone from "backbone";

import PickrView from "./PickrView";

const PersonView = PickrView.extend({
    template: "templates/person.html",
    className: "person-view",

    events: {
        "click .pick": "onPick",
        "click .nominate": "onNominate"
    },

    initialize() {
    },

    onNominate(event) {
        Backbone.navigate("people/" + this.model.get("id") + "/nomination", {
            trigger: true
        });
    },

    onPick(event) {
        Backbone.navigate("people/" + this.model.get("id") + "/pick", {
            trigger: true
        });
    }
});

module.exports = PersonView;
