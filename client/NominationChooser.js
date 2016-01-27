import Backbone from "backbone";

import PickrView from "./PickrView";
import NominationModel from "./NominationModel";

const NominationChooser = PickrView.extend({
    template: "templates/nominations.html",
    className: "nomination-view",

    events: {
        "click .pick": "onSelectNomination",
        "click .submit-nomination": "onSubmitNomination"
    },

    initialize() {
        this.nominationModel = new NominationModel();
    },

    onSubmitNomination(event) {
        this.nominationModel.set("receiverId", this.model.get("id"));
        this.nominationModel.set("giverId", "1");
        this.nominationModel.set("comment", this.$(".note").val());
        this.nominationModel.set("award", $("input[checked]").attr("data-type"));
        this.nominationModel.save({}, {
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
