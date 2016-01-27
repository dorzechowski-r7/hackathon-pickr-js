import Backbone from "backbone";

import PickrView from "./PickrView";
import PickModel from "./PickModel";

const PickChooser = PickrView.extend({
    template: "templates/picks.html",

    events: {
        "click .pick": "onSelectPick",
        "click .submit-pick": "onSubmitPick"
    },

    initialize() {
        this.pickModel = new PickModel();
    },

    onSelectPick(event) {
        const pickType = $(event.currentTarget).attr("data-type");
        console.log(pickType);
        this.$(".why")
            .removeClass("hidden");
        this.$(".note")
            .focus();
    },

    onSubmitPick(event) {
        this.pickModel.set("receiverId", this.model.get("id"));
        this.pickModel.set("giverId", "1");
        this.pickModel.set("comment", this.$(".note").val());
        this.pickModel.save({
            success: () => {
                Backbone.navigate("home", {
                    trigger: true
                });
            },
            error: () => {
                Backbone.navigate("home", {
                    trigger: true
                });
            }
        });
    }
});

module.exports = PickChooser;
