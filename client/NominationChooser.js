import Backbone from "backbone";

import PickrView from "./PickrView";
import NominationModel from "./NominationModel";

const NominationChooser = PickrView.extend({
    template: "templates/nominations.html",

    events: {
        "click .pick": "onSelectNomination",
        "click .submit-pick": "onSubmitNomination"
    },

    initialize() {
        this.pickModel = new NominationModel();
    },

    onSelectNomination(event) {
        const pickType = $(event.currentTarget).attr("data-type");
        console.log(pickType);
        this.$(".why")
            .removeClass("hidden");
        this.$(".note")
            .focus();
    },

    onSubmitNomination(event) {
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

module.exports = NominationChooser;
