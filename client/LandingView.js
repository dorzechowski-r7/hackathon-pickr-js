import Backbone from "backbone";

import PickrView from "./PickrView";

//require("bootstrap.min.css");

const LandingView = PickrView.extend({
    template: "templates/landing.html",

    events: {
        "click": "onUserImageClick"
    },

    initialize() {
        _.bindAll(this,
                  "onUserImageClick");
    },

    onUserImageClick(event) {
        console.log("click");
        Backbone.navigate("home", {
            trigger: true
        });
    }
});

module.exports = LandingView;
