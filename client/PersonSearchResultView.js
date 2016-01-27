import Backbone from "backbone";

import PickrView from "./PickrView";

const PersonSearchResultView = PickrView.extend({
    template: "templates/search-result.html",
    className: "search-result",

    events: {
        "click": "onSelectPerson"
    },

    initialize() {
        this.onSelectPerson = _.bind(this.onSelectPerson, this);
    },

    onSelectPerson(event) {
        Backbone.navigate("people/" + this.model.get("id"), {
            trigger: true
        });
    }
});

module.exports = PersonSearchResultView;
