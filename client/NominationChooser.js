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
        this.nominationModel.set("giverId", "e95939a0-f0f7-4a6e-ae14-1c0363123cc3");
        this.nominationModel.set("comment", this.$(".note").val());
        this.nominationModel.set("award", $("input[checked]").attr("data-type"));
        this.nominationModel.save({}, {
            success: () => {
                $(".msg").text("nomination submitted!");
                setTimeout(() => {
                    Backbone.navigate("home", {
                        trigger: true
                    });
                }, 1250);
            },
            error: () => {
                $(".msg").text("oh no!  an error occurred, try again later.");
                setTimeout(() => {
                    $(".msg").text("");
                }, 3000);
            }
        });
    }
});

module.exports = NominationChooser;
